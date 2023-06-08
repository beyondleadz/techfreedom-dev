import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Tooltip, Button,Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import KeyExecutives from "./KeyExecutives";
import {
  getEmployeeList,
  resetEmployeeList,
  getExecutiveTag,
  resetExecutiveTag,
  
} from "../../actionCreator/executiveDetailsActionCreator";

import {
  // downloadExecutiveList,
  createGroupExecutiveTag,
} from "../../actionCreator/executiveListingActionCreater";

import { getToken, getUserInfo } from "../../utils/utils";


const SummaryContent = () => {
  const dispatch = useDispatch();
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

  useMemo(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(resetExecutiveTag());
      dispatch(getExecutiveTag(executiveCompanyDetails?.id, id));
    }
  }, [executiveCompanyDetails, userAccountInfo]);

  const items = [
    {
      key: "1",
      label: <span><i class=" pr-1 fs-18 la la-user-friends"></i>Colleagues</span>,
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
                  <a class=" mr-2" aria-haspopup="true" aria-expanded="false">
                  <Tooltip title="Tag Executive">
                    <i
                      className="right-icons las  la-tag"
                      aria-hidden="true"
                    ></i></Tooltip>
                  </a>
                </li>

                <li>
                  <a class=" mr-2" aria-haspopup="true" aria-expanded="false">
                    <i
                      class="right-icons la la-file-excel"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>

                <li>
                  <a class=" mr-2" aria-haspopup="true" aria-expanded="false">
                    <i
                      class="right-icons la la-file-pdf"
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
          <div class="pop-up errorformcontainer ">
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
          <div class="pop-up errorformcontainer ">
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
