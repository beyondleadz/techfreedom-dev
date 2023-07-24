import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Tooltip, Button,Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TrialModal from "../../common/TrialModal";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import { useNavigate } from "react-router";
import Excel from "exceljs";
import { saveAs } from "file-saver";
import KeyExecutives from "./KeyExecutives";
import {
  getEmployeeList,
  resetEmployeeList,
  getExecutiveTag,
  resetExecutiveTag,
  emptyErrorObj,
  downloadExecutiveExl,
  emptyDownload
} from "../../actionCreator/executiveDetailsActionCreator";

import {
  // downloadExecutiveList,
  createGroupExecutiveTag,
} from "../../actionCreator/executiveListingActionCreater";

import { saveExcel, getToken, getUserInfo } from "../../utils/utils";


const SummaryContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [dropDownToggle, setDropdownToggle] = useState(false);
  const [tabActiveKey, setTabActiveKey] = useState("1");
  const [openTagModal, setOpenTagModal] = useState(false);
  const [tagValues, setTagValues] = useState({
    tagname: "",
    description: "",
    tagError: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [taggedExecutive, setTaggedExecutive] = useState(false);

  const executiveCompanyDetails = useSelector(
    (state) => state.executiveDetailsReducer.executiveCompanyDetails
  );

  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );

  const selectedEmployeeList = useSelector(
    (state) => state.executiveDetailsReducer.selectedColleague
  );

  const executiveDetails = useSelector(
    (state) => state.executiveDetailsReducer.executiveDetails
  );

  const downloadExcelData = useSelector(
    (state) => state.executiveDetailsReducer.downloadExecutive
  );

  useMemo(() => {
    if (Object.keys(getUserInfo()).length && executiveCompanyDetails.length) {
      const { id } = getUserInfo();
      dispatch(resetExecutiveTag());
      const [executiveCompanyDetails1]=executiveCompanyDetails;
      dispatch(getExecutiveTag(executiveCompanyDetails1?.id, id));
    }
  }, [executiveCompanyDetails, userAccountInfo]);
  

  const items = [
    {
      key: "1",
      label: <span><i className=" pr-1 fs-18 la la-user-friends"></i>Colleagues</span>,
      children: <KeyExecutives />,
    },
  ];

  const onChange = (key) => {
    setTabActiveKey(key);
    if (key !== "2") {
      dispatch(getEmployeeList(id));
    }
  };

  const toggleDropdown = () => {
    setDropdownToggle(!dropDownToggle);
  };

  const setValue = (selectedItem) => {
    dispatch(resetEmployeeList());
    dispatch(getEmployeeList(id, selectedItem?.id));
    setDropdownToggle(!dropDownToggle);
    setTabActiveKey("2");
  };

  const tagExecutive = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      setOpenTagModal(true);
    }
  };

  const closeTagModal = () => {
    setOpenTagModal(false);
  };

  const checkLoginStatus = () => {
    let isLoggedIn = false;
    if (getToken()) {
      setShowModal(false);
      isLoggedIn = true;
    } else {
      setShowModal(true);
      isLoggedIn = false;
    }
    return isLoggedIn;
  };

  const closeModal = () => {
    setShowModal(false);
    dispatch(emptyErrorObj());
  };

  const redirectToSignup = () => {
    setShowModal(false);
    navigate("/signup");
  };

  const onConfrim = () => { //selectedEmployeeList
    if (!tagValues.tagname) {
      setTagValues({
        ...tagValues,
        tagError: "error",
      });
    } else {
      //console.log(companyDetails, "companyDetailscompanyDetails");
      const { id } = getUserInfo();
      let payload = [];
      if(selectedEmployeeList.length){
      for (let i = 0; i < selectedEmployeeList.length; i++) {
        payload = [
          ...payload,
          {
            employee: selectedEmployeeList[i],
            text: tagValues.tagname,
            userId: id,
          },
        ];
      }
      }else{
        payload = [
          {
            employee: executiveDetails,
            text: tagValues.tagname,
            userId: id,
          },
        ];
      }  
      dispatch(createGroupExecutiveTag(payload));
      setOpenTagModal(false);
    }
  };

  const onTagInputChange = (e) => {
    setTagValues({
      ...tagValues,
      [e.target.name]: e.target.value,
    });
  };
  const getSchema = (data) => {
    var finaldata=[];
    let cnt=0;
    data.forEach((obj) => {
      cnt++;
      var dataObj={};
      dataObj.id=obj.id;
      dataObj.serealNo=cnt;
      dataObj.firstName=obj.firstname;
      dataObj.lastName=obj.lastname;
      dataObj.designation=obj.title;
      dataObj.email=obj.emailId;
      dataObj.name=obj?.company?.name;
      dataObj.revenueName=obj?.company?.revenue?.name;
      dataObj.employeeRange=obj?.company?.range?.name;
      dataObj.industryName=obj?.company?.industry?.name;
      dataObj.country=obj?.company?.country;
      dataObj.state=obj?.company?.state;
      dataObj.city=obj?.company?.city;
      dataObj.wedsite=obj?.company?.wedsite;
      dataObj.address=obj?.company?.address;
      dataObj.pincode=obj?.company?.pincode;
      dataObj.phoneNo=obj.phoneNo;
      finaldata.push(dataObj)
    })
    return finaldata;
  }

  useEffect(() => {  
    if (downloadExcelData.length) {
      const downloadedUpdatedData = getSchema(downloadExcelData)
      const columns = [
        { header: "Serial No.", key: "serealNo" },
        { header: "FirstName", key: "firstName" },
        { header: "LastName", key: "lastName" },
        { header: "Designation", key: "designation" },
        { header: "Email Available", key: "email" },
        { header: "Company Name", key: "name" },
        { header: "Phone", key: "phoneNo" },
        { header: "Address", key: "address" },
        { header: "City", key: "city" },
        { header: "State", key: "state" },
        { header: "Country", key: "country" },
        { header: "Pin", key: "pincode" },
        { header: "Website", key: "wedsite" },
        { header: "Company Revenue", key: "revenueName" },
        { header: "Employee Range", key: "rangeName" },
        { header: "Industry", key: "industryName" },
      ];
      const [executiveCompanyDetails1]=executiveCompanyDetails;
      const fileName = executiveCompanyDetails1.name+"-executive-data";
      saveExcel(downloadedUpdatedData, columns, fileName, Excel, saveAs);
      dispatch(emptyDownload());
    }
  }, [downloadExcelData]);


  const downloadExcel = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      let selectedEmpIds = "";
      selectedEmployeeList?.forEach((exe) => {
        selectedEmpIds += `${exe?.id},`;
      });
      selectedEmpIds = selectedEmpIds.substring(
        selectedEmpIds.lastIndexOf(","),
        0
      );
      const [executiveCompanyDetails1]=executiveCompanyDetails;
      const payload={
        empIds:selectedEmpIds,
        companyId:executiveCompanyDetails1?.id,
        id: executiveDetails?.id,
      }
      dispatch(downloadExecutiveExl(payload));
    }
  };


  <Tabs
    // defaultActiveKey="1"
    activeKey={tabActiveKey}
    items={items}
    onChange={onChange}
    type="card"
  />;

  return (
    <>
    <div className="row">
      <div className="col-md-12">
        <div className="mt-4 mb-4">
          <div className="">
            <Tabs
              // defaultActiveKey="1"
              activeKey={tabActiveKey}
              items={items}
              onChange={onChange}
              type="card"
            />

            <div className="buttons-c mr-3">
              <ul className="d-flex  m-mt">
                <li>
                  <div className="btn btn-outline-secondary pr-1 mr-2">
                    <i className="fs-16 mr-1  la la-plus"></i>Create List
                  </div>
                </li>

                <li>
                  <div className="btn btn-outline-secondary pr-1 mr-4">
                    <i className="fs-14 mr-1 fas fa-paper-plane"></i>Send
                    Campaign
                  </div>
                </li>

                <li onClick={tagExecutive}>
                  <a className=" mr-2" aria-haspopup="true" aria-expanded="false">
                  <Tooltip title="Tag Executive">
                    <i
                      className="right-icons las  la-tags"
                      aria-hidden="true"
                    ></i></Tooltip>
                  </a>
                </li>

                <li>
                  <a className=" mr-2" aria-haspopup="true" aria-expanded="false">
                    <i
                      className="right-icons la la-file-excel"
                      aria-hidden="true"
                      onClick={() => downloadExcel()}
                    ></i>
                  </a>
                </li>

                <li>
                  <a className=" mr-2" aria-haspopup="true" aria-expanded="false">
                    <i
                      className="right-icons la la-file-pdf"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {showModal ? (
        <TrialModal
          openModal={showModal}
          closeModal={closeModal}
          redirectToSignup={redirectToSignup}
          redirect={true}
          buttonText="Start Free Trial"
          modalBody={
            <div id="small-dialog2">
              <div align="center">
                <img src={popupImg} />
              </div>
              <p style={{ color: "#0000FF" }}>
                Get 10 free verified contacts with a BeyondLeadz Pro trial
              </p>
              <p>
                BeyondLeadz Pro customers close deals faster thanks to relevant
              </p>
            </div>
          }
          modalWidth="400px"
        />
      ) : (
        ""
      )}

    {openTagModal ? (
      !taggedExecutive ? (
        <Modal
          title="Tag Colleague"
          width={"400px"}
          closable={true}
          open={openTagModal}
          onCancel={closeTagModal}
          onOk={onConfrim}
        >
          <div className="pop-up errorformcontainer ">
            <div className="form">
              <div className="formcol1">
                <label>Tag Name</label>
              </div>
              <div className="formcol2">
                <Input
                  name="tagname"
                  status={tagValues?.tagError}
                  value={tagValues.tagname}
                  placeholder="Tag Name"
                  onChange={onTagInputChange}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        <Modal
          title=""
          width={"400px"}
          closable={true}
          open={openTagModal}
          footer={[
            <Button key="submit" type="primary" onClick={closeTagModal}>
              OK
            </Button>,
          ]}
        >
          <div className="pop-up errorformcontainer ">
            <p>Please select colleagues!</p>
          </div>
        </Modal>
      )
    ) : (
      ""
    )}
</>
  );
};

export default SummaryContent;
