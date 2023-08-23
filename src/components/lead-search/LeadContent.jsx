import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Input, Button, Modal } from "antd";
import { Dropdown, Space, menuProps, MenuProps1 } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { PAGE_LENGTH } from "../../config";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import TrialModal from "../../common/TrialModal";

import {
  getExecutiveEmployeeList,
  getCompanyList,
  savePaginationValues,
  saveAdvancedSelectedFilters,
  selectedRow,
  saveSearchAction,
  saveSearchList,
  downloadExecutiveList,
  createGroupLeadTag, //api/client-leads
  setPageLayout,
} from "../../actionCreator/leadListingActionCreater";
import Loader from "../loader";
import { getToken, getUserInfo } from "../../utils/utils";
import LeadTableView from "./LeadTableView";
import LeadKanbanView from "./LeadKanbanView";
import CalenderModal from "./CalenderModal";
const LeadContent = () => {
  const { Search, TextArea } = Input;
  const [showCal,setShowCal] = useState(false)
  const [showEmail, setShowEmail] = useState({});
  const [showPhone, setShowPhone] = useState({});
  const [openModal, setOpenModal] = useState({
    info: null,
    open: false,
  });
  const leadStatusListing = useSelector(
    (state) => state.leadListingReducer.leadStatusList
  );

  const colorArray = [
    "#b0b0e1",
    "#f3ca7f",
    "#e5e589",
    "#f3a1a1",
    "#98e398",
    "#e5d8d8",
    "#5dfb5d",
    "#999966",
    "#f39af3",
    "#b2b2f1",
    "#89e5e5",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  // const colorArray= ['aqua', 'blue', 'fuchsia', 'gray', 'green',
  // 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
  // 'silver', 'teal', 'white', 'yellow'];
  const updateEmailStatus = (showEmail, row) => {
    setShowEmail({ ...showEmail, [row.key]: true });
    //call api to update status
    if (!row?.isdownloadedEmail) {
      //dispatch(getEmployeeViewableStatusUpdate('Email',row));
    }
  };
  const updatePhoneStatus = (showPhone, row) => {
    console.log("click mob", row);
    setShowPhone({ ...showPhone, [row.key]: true });
    if (!row?.isdownloadedMobile) {
      //dispatch(getEmployeeViewableStatusUpdate('Mobile',row,selectedDepartment));
    }
  };

  const showStatusName = (status) => {
    let st = "";
    for (let i = 0; i < leadStatusListing.length; i++) {
      if (status == leadStatusListing[i].id) {
        st = leadStatusListing[i].text;
        break;
      }
    }
    return st;
  };
  const openInfoModel = () => {
    if (getToken()) {
      setOpenModal({ info: null, open: false });
    } else {
      setOpenModal({ info: null, open: true });
    }
  };

  const getCompanyDetails = (id) => {
    navigate(`/company-summary/${id}`);
  };

  const columns = [
    {
      title: <div className="companyname">Lead Name</div>,
      dataIndex: "name",
      fixed: "left",
      render: (record, row, index) => {
        let cnt = index;
        return (
          <div className="namecol" onClick={() => getDetails(row.key)}>
            <div
              className="logo"
              style={{
                textTransform: "uppercase",
                backgroundColor: colorArray[index],
              }}
            >
              {record?.firstname?.[0]}
              {record?.lastname?.[0]}
            </div>
            <span className="cname">
              {/* {record?.fullname} */}
              {record?.fullname
                ? record.fullname
                : record.firstname + " " + record.lastname}
            </span>
          </div>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      className: "phone",
    },
    {
      title: "Company",
      dataIndex: "companyName",
      render: (record, row) => {
        return (
          <div
            className="namecol"
            onClick={() => getCompanyDetails(row?.companyId)}
          >
            <span className="cname">{row?.companyName}</span>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (record, row) => {
        return (
          <div className="namecol">
            {row?.status ? showStatusName(row?.status) : ""}
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      className: "email",
    },
    {
      title: "Created Dated",
      dataIndex: "notes",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [companyList, setCompanyList] = useState();
  const [executiveEmployeeList, setExecutiveEmployeeList] = useState();
  const [
    executiveEmployeeListByStatus,
    setExecutiveEmployeeListByStatus,
  ] = useState();

  const [showModal, setShowModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);

  const [tagValues, setTagValues] = useState({
    tagname: "",
    description: "",
    tagError: "",
  });
  const [searchValues, setSearchValues] = useState({
    tagname: "",
    description: "",
    tagError: "",
  });
  const companyFilterList = useSelector((state) => state.leadListingReducer);
  const companySelectedFilterList = useSelector(
    (state) => state.leadListingReducer.selectedFilters
  );
  const loading = useSelector((state) => state.CommonReducer.loading);
  const paginationValue = useSelector(
    (state) => state.leadListingReducer.paginationValue
  );
  const selectedRecords = useSelector(
    (state) => state.leadListingReducer.selectedRecords
  );

  const selectedPageLayout = useSelector(
    (state) => state.leadListingReducer.leadPageLayout
  );
  useMemo(() => {
    dispatch(getExecutiveEmployeeList({selectedPageLayout:selectedPageLayout.activePage}, paginationValue));
  }, []);

  const renderSocialLinks = (socialLinks) => {
    return socialLinks?.map((link, index) => {
      if (link?.name === "facebook") {
        return (
          <Link key={index} to={link?.proifileUrl} target="_blank">
            <i className="lab fs-20 facebook lab la-facebook"></i>
          </Link>
        );
      } else if (link?.name === "Linkedin") {
        return (
          <Link to={link?.proifileUrl} target="_blank">
            <i className="lab fs-20 linkedin  lab la-linkedin"></i>
          </Link>
        );
      } else if (link?.name === "twitter") {
        return (
          <Link to={link?.proifileUrl} target="_blank">
            <i className="lab fs-20  twitter la la-twitter-square"></i>
          </Link>
        );
      }
    });
  };

  useEffect(() => {
    // const groupDataByStatus = _.groupBy(
    //   companyFilterList?.executiveEmployeeList,
    //   function (b) {
    //     return b.title;
    //   }
    // );
    // setExecutiveEmployeeListByStatus(groupDataByStatus);
    let data = [];
    companyFilterList?.executiveEmployeeList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          executiveData: record,
          name: record,
          companyName: record?.companyName,
          companyId: record?.companyId,
          location: `${record?.city ? record?.city + "," : ""} ${
            record?.state ? record?.state : ""
          }`,
          email: record?.emailId,
          phone: record?.phoneNo,
          mobile: record.phoneNo,
          status: record?.status,
          social: renderSocialLinks(record?.socialLinks),
          notes: "",
        },
      ];
    });
    setExecutiveEmployeeList(data);
  }, [companyFilterList]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      dispatch(selectedRow(selectedRows));
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
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

  const onSearch = (val) => {
    const payload = {
      ...companySelectedFilterList,
      searchKeyword: val,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, paginationValue));
  };

  const onPageChange = (page, pageSize) => {
    const pageValues = {
      start: page - 1,
      end: pageSize,
    };
    dispatch(savePaginationValues(pageValues));
    dispatch(getExecutiveEmployeeList(companySelectedFilterList, pageValues));
  };

  const getDetails = (id) => {
    navigate(`/lead-details/${id}`);
  };

  const onHandleSaveSearch = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      setShowModal(true);
    } else {
      //setShowModal(false);
    }
  };

  const checkFilters = () => {
    let hasFilters = true;

    Object.keys(companySelectedFilterList).forEach((item) => {
      if (companySelectedFilterList[item]?.length) {
        hasFilters = false;
      }
    });
    return hasFilters;
  };

  const closeModal = () => {
    setShowModal(false);
    setOpenModal(false);
  };

  const onConfrim = () => {
    if (!searchValues.tagname) {
      setSearchValues({
        ...searchValues,
        tagError: "error",
      });
    } else {
      const { id, email, login } = getUserInfo();
      const payload = {
        accountId: login,
        dataDump: JSON.stringify(companySelectedFilterList),
        fullName: searchValues.tagname,
        emailId: email,
        source: "Executive",
        userId: id,
      };
      dispatch(saveSearchAction(payload));
      setShowModal(false);
    }
  };

  const onInputChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };

  const redirectToSignup = () => {
    setShowModal(false);
    setOpenModal(false);
    navigate("/signup");
  };

  const tagPage = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      console.log("call tag api");
      if (selectedRecords.length) {
        setShowTagModal(true);
      } else {
        alert("please select record.");
      }
    }
  };

  const downloadExcel = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // dispatch(downloadExecutiveList(companySelectedFilterList, "exl"));
      dispatch(downloadExecutiveList(selectedRecords, "exl"));
    }
  };
  const downloadPDF = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // dispatch(downloadExecutiveList(companySelectedFilterList, "pdf"));
      dispatch(downloadExecutiveList(selectedRecords, "pdf"));
    }
  };

  const printPage = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      window.print();
    }
  };

  const closeTagModal = () => {
    setShowTagModal(false);
  };

  const onTagConfrim = () => {
    if (!tagValues.tagname) {
      setTagValues({
        ...tagValues,
        tagError: "error",
      });
    } else {
      const { id } = getUserInfo();
      let payload = [];
      for (let i = 0; i < selectedRecords.length; i++) {
        payload = [
          ...payload,
          {
            employee: selectedRecords[i]?.name,
            text: tagValues.tagname,
            userId: id,
          },
        ];
      }
      //console.log(payload,'payloadpayload');
      dispatch(createGroupLeadTag(payload));
      setShowTagModal(false);
    }
  };

  const onTagInputChange = (e) => {
    setTagValues({
      ...tagValues,
      [e.target.name]: e.target.value,
    });
  };

  const copyToClipboard = (text) => {
    if (window.clipboardData && window.clipboardData.setData) {
      // IE: prevent textarea being shown while dialog is visible
      return window.clipboardData.setData("Text", text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      // Prevent scrolling to bottom of page in MS Edge
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        // Security exception may be thrown by some browsers
        return document.execCommand("copy");
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  const checkPageLayout = (page) => {
    dispatch(setPageLayout({ activePage: page }));
    const pageValues = {
      start: 0,
      end: PAGE_LENGTH,
    };
    const payload = {
      ...companySelectedFilterList,
      selectedPageLayout: page,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, pageValues));
  };

  const calendarShow = () => {
    setShowCal(!showCal)
    //console.log("sdkfjl");
  };

  const closeCalenderModal = () => {
    setShowCal(false)
  }

  return (
    <>
      {selectedPageLayout?.activePage == 2 ? (
        <LeadKanbanView
          calendarShow={calendarShow}
          checkPageLayout={checkPageLayout}
          loading={loading}
          rowSelection={rowSelection}
          getDetails={getDetails}
          executiveEmployeeList={executiveEmployeeList}
          paginationValue={paginationValue}
          companyFilterList={companyFilterList}
          onPageChange={onPageChange}
        />
      ) : (
        <LeadTableView
          calendarShow={calendarShow}
          checkPageLayout={checkPageLayout}
          tagPage={tagPage}
          downloadExcel={downloadExcel}
          downloadPDF={downloadPDF}
          printPage={printPage}
          loading={loading}
          rowSelection={rowSelection}
          columns={columns}
          executiveEmployeeList={executiveEmployeeList}
          paginationValue={paginationValue}
          companyFilterList={companyFilterList}
          onPageChange={onPageChange}
        />
      )}

      {showTagModal && getToken() ? (
        <Modal
          title="Tag Lead"
          width={"400px"}
          closable={true}
          open={showTagModal}
          onCancel={closeTagModal}
          onOk={onTagConfrim}
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
                  placeholder="Name"
                  onChange={onTagInputChange}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}

      {showModal ? (
        getToken() ? (
          <Modal
            title="Save Search"
            width={"400px"}
            closable={true}
            open={showModal}
            onCancel={closeModal}
            onOk={onConfrim}
          >
            <div className="pop-up errorformcontainer ">
              <div className="form">
                <div className="formcol1">
                  <label>Search Name</label>
                </div>
                <div className="formcol2">
                  <Input
                    name="tagname"
                    status={searchValues?.tagError}
                    value={searchValues.tagname}
                    placeholder="Name"
                    onChange={onInputChange}
                  />
                </div>
              </div>
            </div>
          </Modal>
        ) : (
          <TrialModal
            openModal={showModal}
            closeModal={closeModal}
            redirectToSignup={redirectToSignup}
            buttonText="Start Free Trial"
            redirect={true}
            modalBody={
              <div id="small-dialog2">
                <div align="center">
                  <img src={popupImg} />
                </div>
                <p style={{ color: "#0000FF" }}>
                  Get 10 free verified contacts with a BeyondLeadz Pro trial
                </p>
                <p>
                  BeyondLeadz Pro customers close deals faster thanks to
                  relevant
                </p>
              </div>
            }
            modalWidth="400px"
          />
        )
      ) : (
        ""
      )}

      {openModal?.open && (
        <TrialModal
          openModal={openModal}
          closeModal={closeModal}
          redirectToSignup={redirectToSignup}
          redirect={true}
          // buttonText="Start Free Trial"
          buttonText="SUBSCRIBE NOW!"
          modalBody={
            <div id="small-dialog2">
              <div align="center">
                <img src={popupImg} />
              </div>
              <p style={{ color: "#0000FF" }}>
                PLEASE SUBSCRIBE TO VIEW ALL DETAILS
              </p>
            </div>
          }
          modalWidth="400px"
        />
      )}

      {

        showCal && <Modal
          title="Calendar"
          width={"800px"}
          closable={true}
          open={showCal}
          onCancel={closeCalenderModal}
          // onOk={onConfrimCalenderModal}
          footer={[]}
        >
          <CalenderModal />
        </Modal>
      }
    </>
  );
};

export default LeadContent;
