import React, { useState, useEffect, useMemo } from "react";
import { Table, Modal, Button, Tooltip } from "antd";
import { PAGE_LENGTH } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  getToken,
  getUserInfo,
  getSubscriptionUserInfo,
  getPartialPhoneNumber,
} from "../../utils/utils";
import {
  submitLead,
  resetLead,
  storeSelectedExecutive,
  getExecutiveLead,
  getEmployeeList,
  getEmployeeViewableStatusUpdate,
} from "../../actionCreator/companyDetailsActionCreator";

import popupImg from "../../assets/images/subscribe-now-prompt-img.jpg";
import Loader from "../loader";
import TrialModal from "../../common/TrialModal";
const KeyExecutives = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector(
    (state) => state.companyDetailsReducer.employeeList
  );
  const submitLeadRes = useSelector(
    (state) => state.companyDetailsReducer?.executiveLeads
  );
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );

  const selectedDepartment = useSelector(
    (state) => state.companyDetailsReducer.selectedDepartment
  );

  const getLeadsData = useSelector(
    (state) => state.companyDetailsReducer.getExecutiveLead
  );

  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const getEmployeeViewableData = useSelector(
    (state) => state.companyDetailsReducer?.executiveEmployeeViewableStatus
  );

  const [employeeData, setEmployeeData] = useState([]);
  const [openModal, setOpenModal] = useState({
    info: null,
    open: false,
  });
  const [addToLeads, setAddToLeads] = useState(0);
  const [showEmail, setShowEmail] = useState({});
  const [showPhone, setShowPhone] = useState({});
  const navigate = useNavigate();

  useMemo(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(getExecutiveLead(id));
    }
  }, [userAccountInfo]);

  const updateEmailStatus = (showEmail, row) => {
    setShowEmail({ ...showEmail, [row.id]: true });
    setShowPhone({ ...showPhone, [row.id]: false });
    //console.log("getEmployeeViewableData",getEmployeeViewableData)
    //call api to update status
    //if (!row?.isdownloadedEmail) {
      dispatch(
        getEmployeeViewableStatusUpdate("Email", row, selectedDepartment)
      );
    //}
  };
  const updatePhoneStatus = (showPhone, row) => {
    setShowPhone({ ...showPhone, [row.id]: true });
    setShowEmail({ ...showEmail, [row.id]: false });
    //if (!row?.isdownloadedMobile) {
      dispatch(
        getEmployeeViewableStatusUpdate("Mobile", row, selectedDepartment)
      );
    //}
  };

  const isLeadsSubmitted = (selEmployeeId) => {
    //console.log("selEmployeeId",selEmployeeId)
    const filteredData = getLeadsData.filter(
      (item) => item.employeeId == selEmployeeId.id
    );
    if (filteredData?.length > 0) {
      return filteredData[0].id;
    } else {
      return 0;
    }
  };

  const viewExecutiveDetails = (row, name) => {
    let cname = name.replaceAll(" ", "-", name);
    navigate(`/executive-details/${row.id}/${cname}`);
  };
  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   fixed: "left",
    // },
    {
      title: "Executive Name",
      dataIndex: "fullname",
      fixed: "left",
      render: (text, row) => {
        return (
          <span
            className="namecol"
            onClick={() => viewExecutiveDetails(row, row.fullname)}
          >
            {row.fullname}
          </span>
        );
      },
    },
    {
      title: "Designation",
      dataIndex: "title",
    },
    {
      title: "Email hgh",
      dataIndex: "emailId",
      render: (text, row) => {
        return getToken() ? (
          //  <Tooltip title={text}>
          <>
            <h4
              className={
                row?.directDial?.isdownloadedEmail
                  ? " btn iconemail emails-open"
                  : " btn iconemail emails"
              }
              onClick={() => updateEmailStatus(showEmail, row)}
            ></h4>
            {showEmail[row.id] && row.id===getEmployeeViewableData?.id &&  (
              <>
                <span className="emailvalue pl-1 fs-12">{getEmployeeViewableData?.emailId}</span>
                <span
                  title="copy email"
                  className="  fs-17 btn  la  la-copy text-black"
                  onClick={() => copyToClipboard(getEmployeeViewableData?.emailId)}
                ></span>
              </>
            )}
          </>
        ) : (
          //  </Tooltip>
          //
          <h4
            className="  btn iconemail emails"
            onClick={() => openInfoModel()}
          ></h4>
        );
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
      render: (text, row) => {
        return getPartialPhoneNumber(text);
      },
    },
    {
      title: "Direct Dial/Mobile    ",
      dataIndex: "directDial",
      render: (record, row) => {
        return getToken() ? (
          <>
            <span
              // style={{ height: "auto" }}
              // className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
              className={
                row?.directDial?.isdownloadedMobile ? " btn mobile-open" : " btn mobile"
              }
              onClick={() => updatePhoneStatus(showPhone, row)}
            >
              {/* <i className="las la-mobile fs-12  pr-1"></i> */}
              {/* VIEW */}
            </span>
            {showPhone[row.id] && row.key===getEmployeeViewableData?.id && (
              <>
                <span className="phoneValue fs-12 pl-1">{getEmployeeViewableData?.phoneNo}</span>
                <span
                  title="copy phone"
                  className="  fs-17 btn  la  la-copy text-black"
                  onClick={() => copyToClipboard(getEmployeeViewableData?.phoneNo)}
                ></span>
              </>
            )}
          </>
        ) : (
          <span
            // style={{ height: "auto" }}
            className=" btn mobile"
            // className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            onClick={() => openInfoModel()}
          >
            {/* <i className="las la-mobile fs-12  pr-1"></i>
            VIEW */}
          </span>
        );

        // return (
        //   <Button
        //     style={{ height: "auto" }}
        //     className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
        //     onClick={() => openInfoModel(text)}
        //   >
        //     <i className="las la-mobile fs-12 pt-1 pr-1"></i>
        //     VIEW
        //   </Button>
        // );
      },
    },
    {
      title: "",
      dataIndex: "leads",
      render: (record) => {
        let checkLeadSubmitted = isLeadsSubmitted(record);
        return getToken() ? (
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            loading={
              !Object.keys(submitLeadRes).length && addToLeads === record.id
                ? true
                : false
            }
            onClick={() => postLeads(record, checkLeadSubmitted)}
          >
            {checkLeadSubmitted ? (
              <span>
                <i className="las la-check fs-12 pr-1"></i>LEAD ADDED
              </span>
            ) : (
              <span>
                <i className="las la-user-plus fs-12 pr-1"></i>ADD TO LEADS
              </span>
            )}
          </Button>
        ) : (
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            loading={
              !Object.keys(submitLeadRes).length && addToLeads === record.id
                ? true
                : false
            }
            onClick={() => openInfoModel()}
          >
            <i className="las la-user-plus  fs-12  pr-1"></i>ADD TO LEADS
          </Button>
        );
      },
    },
  ];

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

  const postLeads = (record, isLeadSubmit) => {
    const { id, login } = getUserInfo();
    const { id: accountId } = getSubscriptionUserInfo();
    let leadPayload = {
      // account: {
      //   id: accountId
      // },
      firstname: record.firstname,
      lastname: record.lastname,
      fullname: record.fullname,
      title: record.title,
      client: record.client,
      emailId: record.emailId,
      phoneNo: record.phoneNo,
      bio: record.bio,
      description: record.description,
      userId: id,
      employeeId: record.id,
      address: companyDetails?.address,
      companyId: companyDetails?.id,
      companyName: companyDetails?.name,
      industryId: companyDetails?.industry?.id,
      industryText: companyDetails?.industry?.name,
      empSizeId: companyDetails?.range?.name,
      city: companyDetails?.city,
      state: companyDetails?.state,
      country: companyDetails?.country,
    };
    //console.log(leadPayload,'leadpayload');
    if (!isLeadSubmit) {
      dispatch(submitLead(leadPayload));
      setAddToLeads(record.id);
    } else {
      navigate("/lead-details/" + isLeadSubmit);
    }
  };

  const resetLeadsData = () => {
    dispatch(resetLead({}));
    setAddToLeads(0);
  };

  useEffect(() => {
    let data = [];

    employeeList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          id: record.id,
          fullname: record?.fullname
            ? record.fullname
            : record.firstname + " " + record.lastname,
          title: record?.title,
          emailId: record?.emailId,
          phoneNo: record?.company?.phoneNo,
          directDial: record,
          leads: record,
        },
      ];
    });
    //console.log(data,'data')
    setEmployeeData(data);
  }, [employeeList]);

  const openInfoModel = () => {
    if (getToken()) {
      setOpenModal({ info: null, open: false });
    } else {
      setOpenModal({ info: null, open: true });
    }
  };

  const redirectToSignup = () => {
    setOpenModal(false);
    navigate("/signup");
  };

  const closeInfoBeforeLogin = () => {
    setOpenModal(false);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   "selectedRows: ",
      //   selectedRows
      // );

      dispatch(storeSelectedExecutive(selectedRows));
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const onPageChange = (page, pageSize) => {
    // const pageValues = {
    //   start: page,
    //   end: pageSize,
    // };
    // dispatch(savePaginationValues(pageValues));
    // dispatch(getCompanyList(pageValues, companySelectedFilterList));
  };

  return (
    <div className="card shadow card-body">
        <div className="table-container text-nowrap">
                      <div className="table-wrapper">
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={employeeData}
        pagination={{
          responsive: true,
          total: employeeList?.length,
          // pageSizeOptions: ["5", "10", "15", "15"],
          pageSize: PAGE_LENGTH,
          // showSizeChanger: true,
          // defaultPageSize: 10,
          position: ["bottomCenter"],
          onChange: onPageChange,
        }}
      />
      </div>
      </div>
      {openModal?.open && (
        <TrialModal
          openModal={openModal}
          closeModal={closeInfoBeforeLogin}
          redirectToSignup={redirectToSignup}
          redirect={true}
          // buttonText="Start Free Trial"
          buttonText="SUBSCRIBE NOW!"
          modalBody={
            <div id="small-dialog2">
              <div align="center">
                <img src={popupImg} />
              </div>
              {/*<p style={{ color: "#0000FF" }}>
                 PLEASE SUBSCRIBE TO VIEW ALL DETAILS 
              </p>*/}
              {/* <p style={{ color: "#0000FF" }}>
                Get 10 free verified contacts with a BeyondLeadz Pro trial
              </p>
              <p>
                BeyondLeadz Pro customers close deals faster thanks to relevant
              </p> */}
            </div>
          }
          modalWidth="400px"
        />
      )}
      {Object.keys(submitLeadRes).length ? (
        <Modal
          width="400px"
          closable={false}
          open={Object.keys(submitLeadRes).length ? true : false}
          footer={[
            <Button key="submit" type="primary" onClick={resetLeadsData}>
              OK
            </Button>,
          ]}
        >
          <div className="pop-up">
            <div id="small-dialog2">
              <p style={{ color: "#0000FF" }}>
                New Client Leads is creted with new identifier :{" "}
                {submitLeadRes.id}
              </p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default KeyExecutives;
