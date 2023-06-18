import React, { useState, useEffect,useMemo } from "react";
import { Table, Modal, Button, Tooltip } from "antd";
import { PAGE_LENGTH } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getToken, getUserInfo } from "../../utils/utils";
import {
  submitLead,
  resetLead,
  getExecutiveLead,
  storeSelectedColleagues,
  getEmployeeViewableStatusUpdate
} from "../../actionCreator/executiveDetailsActionCreator";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import TrialModal from "../../common/TrialModal";
const KeyExecutives = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector(
    (state) => state.executiveDetailsReducer.employeeList
  );
  const submitLeadRes = useSelector(
    (state) => state.companyDetailsReducer?.executiveLeads
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
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  useMemo(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(getExecutiveLead(id));
    }
  }, [userAccountInfo]);

  const updateEmailStatus = (showEmail,row) => {
    setShowEmail({ ...showEmail, [row.id]: true });
    //call api to update status
    if(!row?.isdownloadedEmail){
    dispatch(getEmployeeViewableStatusUpdate('Email',row));    
    }
    
  };
  const updatePhoneStatus = (showPhone,row) => {
    setShowPhone({ ...showPhone, [row.id]: true });
    if(!row?.isdownloadedMobile){
    dispatch(getEmployeeViewableStatusUpdate('Mobile',row));
    }
  }


  const columns = [
    {
      title: "Executive Name",
      dataIndex: "fullname",
      fixed: "left",
    },
    {
      title: "Designation",
      dataIndex: "title",
    },
    {
      title: "Email",
      dataIndex: "emailId",
      render: (text, row) => {
        return getToken() ? (
          //  <Tooltip title={text}>
          <>
            <h4
              className={row?.isdownloadedEmail?" btn iconemail emails-open":" btn iconemail emails"}
              onClick={()=>updateEmailStatus(showEmail,row)}
            ></h4>
            {showEmail[row.id] && (
              <>
                <span className="emailvalue pl-1 fs-12">{text}</span>
                <span
                  title="copy email"
                  className="  fs-17 btn  la  la-copy text-black"
                  onClick={() => copyToClipboard(text)}
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
              className={row?.isdownloadedMobile?" btn mobile-open":" btn mobile"}
              onClick={()=>updatePhoneStatus(showPhone,row)}
            >
              {/* <i class="las la-mobile fs-12  pr-1"></i> */}
              {/* VIEW */}
            </span>
            {showPhone[row.id] && record?.phoneNo && (
              <>
                <span className="phoneValue fs-12 pl-1">{record?.phoneNo}</span>
                <span
                  title="copy phone"
                  className="  fs-17 btn  la  la-copy text-black"
                  onClick={() => copyToClipboard(record?.phoneNo)}
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
            {/* <i class="las la-mobile fs-12  pr-1"></i>
            VIEW */}
          </span>
        );

        // return (
        //   <Button
        //     style={{ height: "auto" }}
        //     className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
        //     onClick={() => openInfoModel(text)}
        //   >
        //     <i class="las la-mobile fs-12 pt-1 pr-1"></i>
        //     VIEW
        //   </Button>
        // );
      }
    },
    {
      title: "",
      dataIndex: "leads",
      render: (record) => {
        return getToken() ? (
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            loading={
              !Object.keys(submitLeadRes).length && addToLeads === record.id
                ? true
                : false
            }
            onClick={() => postLeads(record)}
          >
            <i class="las la-user-plus fs-12 pr-1"></i> ADD TO LEADS
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
            <i class="las la-user-plus  fs-12  pr-1"></i>ADD TO LEADS
          </Button>
        );
      },
    },
  ];

  const postLeads = (record) => {
    const { id,login } = getUserInfo();
    let leadPayload = {
      firstname: record.firstname,
      lastname: record.lastname,
      fullname: record.fullname,
      title: record.title,
      client: record.client,
      emailId: record.emailId,
      phoneNo: record.phoneNo,
      bio: record.bio,
      description: record.description,
      userId:id
    };
    dispatch(submitLead(leadPayload));
    setAddToLeads(record.id);
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
          fullname: (record?.fullname)?record.fullname:record.firstname+" "+record.lastname,
          title: record?.title,
          emailId: record?.emailId,
          phoneNo: record?.company?.phoneNo,
          directDial: record,
          leads: record,
          pageFor:2
        },
      ];
    });
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
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      dispatch(storeSelectedColleagues(selectedRows))

    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    })

  };

  const onPageChange = (page, pageSize) => {
    // const pageValues = {
    //   start: page,
    //   end: pageSize,
    // };
    // dispatch(savePaginationValues(pageValues));
    // dispatch(getCompanyList(pageValues, companySelectedFilterList));
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


  return (
    <div className="card shadow card-body">
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
          pageSize: PAGE_LENGTH,
          position: ["bottomCenter"],
          onChange: onPageChange,
        }}
      />
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
              <p style={{ color: "#0000FF" }}>
                PLEASE SUBSCRIBE TO VIEW ALL DETAILS
              </p>
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
          <div class="pop-up">
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
