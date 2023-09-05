import React, { useEffect, useState, useMemo } from "react";
import Excel from "exceljs";
import { saveAs } from "file-saver";
import { Modal, Checkbox, Input, Divider, Button, Tabs, Tooltip } from "antd";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/icici.jpg";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import AboutCompany from "./AboutCompany";
import KeyExecutives from "./KeyExecutives";
import OrgChart from "./OrgChart";
import { saveExcel, testImage, getToken, getUserInfo } from "../../utils/utils";
import TrialModal from "../../common/TrialModal";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import { useNavigate } from "react-router";

import {
  getEmployeeList,
  resetEmployeeList,
  postRelavantCompany,
  getRelavantCompany,
  resetPostRelavantCompany,
  storeSelectedDepartment,
  submitErrorForm,
  emptyErrorObj,
  downloadCompany,
  getCompanyTag,
  resetCompanyTag,
  downloadExecutiveExl,
  emptyDownload,
} from "../../actionCreator/companyDetailsActionCreator";

import {
  // downloadExecutiveList,
  createGroupExecutiveTag,
} from "../../actionCreator/executiveListingActionCreater";

const SummaryContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [dropDownToggle, setDropdownToggle] = useState(false);
  const [tabActiveKey, setTabActiveKey] = useState("1");
  const [similarList, setSimilarList] = useState();
  const [similarCount, setSimilarCount] = useState(5);
  const [selectedValue, setSelectedValue] = useState("Filter by Department");
  const [departmentAllList, setDepartmentAllList] = useState();
  const [openTagModal, setOpenTagModal] = useState(false);
  const [tagValues, setTagValues] = useState({
    tagname: "",
    description: "",
    tagError: "",
  });
  const [isApiFailed, setIsApiFailed] = useState(false);
  const departmentList = useSelector(
    (state) => state.companyDetailsReducer.departmentList
  );
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const similarCompanyList = useSelector(
    (state) => state.companyDetailsReducer.similarCompanyList
  );

  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );

  const selectedEmployeeList = useSelector(
    (state) => state.companyDetailsReducer.selectedExecutive
  );

  const selectedDepartment = useSelector(
    (state) => state.companyDetailsReducer.selectedDepartment
  );

  const fetchCompanyTag = useSelector(
    (state) => state.companyDetailsReducer.fetchCompanyTag
  );
  const sigleCompanyTag = useSelector(
    (state) => state.companyDetailsReducer.sigleCompanyTag
  );
  const downloadExcelData = useSelector(
    (state) => state.companyDetailsReducer.downloadExecutive
  );

  const errObj = useSelector((state) => state.companyDetailsReducer.errObj);

  const [taggedExecutive, setTaggedExecutive] = useState(false);
  useEffect(() => {
    if (Object.keys(errObj).length) {
      setIsApiFailed(true);
    }
    if (!Object.keys(errObj).length) {
      setIsApiFailed(false);
    }
  }, [Object.keys(errObj).length]);

  useMemo(() => {
    if (Object.keys(getUserInfo()).length && companyDetails?.id) {
      const { id } = getUserInfo();
      dispatch(resetCompanyTag());
      dispatch(getCompanyTag(companyDetails?.id, id));
    }
  }, [companyDetails, userAccountInfo]);

  // useEffect(() => {
  //   console.log(
  //     fetchCompanyTag.length,
  //     Object.keys(sigleCompanyTag).length,
  //     "chk len"
  //   );
  //   if (fetchCompanyTag.length || Object.keys(sigleCompanyTag).length) {
  //     setTaggedExecutive(true);
  //   } else {
  //     setTaggedExecutive(false);
  //   }
  // }, [fetchCompanyTag, sigleCompanyTag]);

  useEffect(() => {
    if (selectedEmployeeList?.length > 0) {
      setTaggedExecutive(false);
    } else {
      setTaggedExecutive(true);
    }
  }, [selectedEmployeeList]);

  useMemo(() => {
    dispatch(resetPostRelavantCompany);
    if (Object.keys(getUserInfo()).length && companyDetails?.id) {
      const { id } = getUserInfo();
      dispatch(getRelavantCompany(id, companyDetails?.id));
    }
  }, [userAccountInfo]);

  useEffect(() => {
    setSimilarCount(
      similarCompanyList.length < 5 ? similarCompanyList.length : 5
    );
  }, [similarCompanyList]);

  useEffect(() => {
    const dpt = [{ id: 0, name: "All" }, ...departmentList];
    setDepartmentAllList(dpt);
  }, [departmentList]);

  const items = [
    {
      key: "1",
      label: (
        <span>
          <i className="text-black fa fa-city pr-2"></i>About Company
        </span>
      ),
      children: <AboutCompany />,
    },
    {
      key: "2",
      label: (
        <span>
          <i className="text-black fa fa-user-friends pr-2"></i>Key Executives
        </span>
      ),
      children: <KeyExecutives />,
    },
    {
      key: "3",
      label: (
        <span>
          <i className="text-black fa fa-sitemap pr-2"></i>Org. Chart
        </span>
      ),
      children: <OrgChart />,
    },
    {
       key: "4",
       label: (
         <span>
           <i className="text-black fa fa-paper-plane fs-18 pr-2"></i>Triggers
         </span>
       ),
       children: <OrgChart />,
     },
  ];

  useEffect(() => {
    if (!similarCompanyList.length) return;
    const list = similarCompanyList?.filter(
      (item) => !item?.id === companyDetails?.id
    );
    setSimilarList(list);
  }, [similarCompanyList]);

  const onChange = (key) => {
    setTabActiveKey(key);
    if (key !== "2" && key !== "3") {
      setSelectedValue("Filter by Department");
      dispatch(getEmployeeList(id));
    }
  };

  const toggleDropdown = () => {
    setDropdownToggle(!dropDownToggle);
  };

  const setValue = (selectedItem) => {
    dispatch(resetEmployeeList());
    dispatch(getEmployeeList(id, selectedItem?.id));
    dispatch(storeSelectedDepartment(selectedItem?.id));
    setSelectedValue(selectedItem?.name);
    setDropdownToggle(!dropDownToggle);
    //console.log(tabActiveKey,'tabActiveKey epartmentAllList')
    if (tabActiveKey === "3") {
      setTabActiveKey("3");
    } else {
      setTabActiveKey("2");
    }
  };

  const renderSimilarCompanyList = () => {
    let similarList = [];
    for (let i = 0; i < similarCount; i++) {
      similarList.push(
        <div className="similarinnerblk">
          <div className="s-company img-responsive">
            <img src={similarCompanyList[i]?.companyLogoUrl || defaultLogo} />
          </div>
          <div className="similar-desc">
            <div>
              <a className="font-weight-bold fs-14 text-dark" title="">
                {similarCompanyList[i]?.name}
              </a>
            </div>
            <div className="fs-12">{similarCompanyList[i]?.industry?.name}</div>
            <div className="fs-12">{similarCompanyList[i]?.address}</div>
          </div>
        </div>
      );
    }
    if (!similarList.length) {
      similarList.push(
        <div className="similarinnerblk">
          <div className="s-company img-responsive">
            <img src={defaultLogo} />
          </div>
          <div className="similar-desc">
            <div className="font-weight-bold fs-14">
              No similar company found.
            </div>
            {/* <div className="fs-12"></div>
            <div className="fs-12"></div> */}
          </div>
        </div>
      );
    }
    return similarList;
  };

  const getMoreSimilarCount = () => {
    if (similarCount === 5) {
      setSimilarCount(10);
    } else {
      setSimilarCount(5);
    }
  };

  const checkRelavantCompany = (flag) => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      const { login, id } = getUserInfo();
      const payload = {
        accountId: login,
        companyId: companyDetails?.id,
        iscompany: true,
        prescribedby: flag ? "True" : "False",
        userId: id,
      };
      dispatch(postRelavantCompany(payload));
    }
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

  const tagExecutive = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      setOpenTagModal(true);
    }
  };

  const getSchema = (data) => {
    var finaldata = [];
    let cnt = 0;
    data.forEach((obj) => {
      cnt++;
      var dataObj = {};
      dataObj.id = obj.id;
      dataObj.serealNo = cnt;
      dataObj.firstName = obj.firstname;
      dataObj.lastName = obj.lastname;
      dataObj.designation = obj.title;
      dataObj.email = obj.emailId;
      dataObj.name = obj?.company?.name;
      dataObj.revenueName = obj?.company?.revenue?.name;
      dataObj.employeeRange = obj?.company?.range?.name;
      dataObj.industryName = obj?.company?.industry?.name;
      dataObj.country = obj?.company?.country;
      dataObj.state = obj?.company?.state;
      dataObj.city = obj?.company?.city;
      dataObj.wedsite = obj?.company?.wedsite;
      dataObj.address = obj?.company?.address;
      dataObj.pincode = obj?.company?.pincode;
      dataObj.phoneNo = obj.phoneNo;
      finaldata.push(dataObj);
    });
    return finaldata;
  };

  useEffect(() => {
    if (downloadExcelData.length) {
      const downloadedUpdatedData = getSchema(downloadExcelData);
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
      const fileName = companyDetails.name + "-executive-data";
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
      const payload = {
        empIds: selectedEmpIds,
        department: selectedDepartment,
        companyId: companyDetails?.id,
      };
      dispatch(downloadExecutiveExl(payload));
    }
  };

  const downloadPDF = (id) => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      dispatch(downloadCompany([id], "pdf"));
    }
  };

  const closeTagModal = () => {
    setOpenTagModal(false);
  };

  const onConfrim = () => {
    //selectedEmployeeList
    if (!tagValues.tagname) {
      setTagValues({
        ...tagValues,
        tagError: "error",
      });
    } else {
      //console.log(companyDetails, "companyDetailscompanyDetails");
      const { id } = getUserInfo();
      let payload = [];
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

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4 mb-4 summarycontainer">
            <div>
              <Tabs
                // defaultActiveKey="1"
                activeKey={tabActiveKey}
                items={items}
                onChange={onChange}
                type="card"
              />
            </div>
            <div className="departmentcontainer ">
              <div className="selectedlabel fa" onClick={toggleDropdown}>
                <i className="text-black fa fa-suitcase pr-2"></i>
                <span>{selectedValue}</span>
              </div>
              <ul
                className={`departmentOptions ${dropDownToggle ? "show" : ""}`}
              >
                {departmentAllList?.map((item) => {
                  return (
                    <li key={item?.id} onClick={() => setValue(item)}>
                      {item?.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <div className="excelcontainer ">
              <li>
                <a
                  className=" btn btn-outline-success fs-18"
                  href="#"
                  id=""
                  role="button"
                  data-toggle=""
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    className="right-icons la la-file-excel"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </div> */}
            <div className="excelcontainer">
              <ul className="d-flex  m-mt">
                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Tooltip title="Tag Executive">
                      <i
                        className="right-icons las  la-tags"
                        aria-hidden="true"
                        onClick={tagExecutive}
                      ></i>
                    </Tooltip>
                  </a>
                </li>

                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="right-icons la la-file-excel"
                      aria-hidden="true"
                      onClick={() => downloadExcel()}
                    ></i>
                  </a>
                </li>

                {/* <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i className="right-icons la la-file-pdf" aria-hidden="true" onClick={() => downloadPDF(companyDetails?.id)}></i>
                    </a>
                </li> */}
              </ul>
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

      {isApiFailed ? (
        <TrialModal
          openModal={isApiFailed}
          closeModal={closeModal}
          redirectToSignup={redirectToSignup}
          buttonText="OK"
          modalBody={
            <div id="small-dialog2">
              Please call System support. You application having some issue.
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
            title="Tag Executive"
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
              <p>Please select executive!</p>
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
