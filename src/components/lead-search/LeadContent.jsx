import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Input, Button, Modal } from "antd";
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
  createGroupExecutiveTag, //api/client-leads
} from "../../actionCreator/leadListingActionCreater";
import Loader from "../loader";
import { getToken,getUserInfo } from "../../utils/utils";

const LeadContent = () => {
  const { Search, TextArea } = Input;
  const [showEmail, setShowEmail] = useState({});
  const [showPhone, setShowPhone] = useState({});
  const [openModal, setOpenModal] = useState({
    info: null,
    open: false,
  });
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
      "#6666FF"
  ];
  // const colorArray= ['aqua', 'blue', 'fuchsia', 'gray', 'green', 
  // 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
  // 'silver', 'teal', 'white', 'yellow'];
  const updateEmailStatus = (showEmail,row) => {
    setShowEmail({ ...showEmail, [row.key]: true });
    //call api to update status
    if(!row?.isdownloadedEmail){
    //dispatch(getEmployeeViewableStatusUpdate('Email',row));    
    }    
  };
  const updatePhoneStatus = (showPhone,row) => { console.log("click mob",row)
    setShowPhone({ ...showPhone, [row.key]: true });
    if(!row?.isdownloadedMobile){
    //dispatch(getEmployeeViewableStatusUpdate('Mobile',row,selectedDepartment));
    }
  }

  const openInfoModel = () => {
    if (getToken()) {
      setOpenModal({ info: null, open: false });
    } else {
      setOpenModal({ info: null, open: true });
    }
  };

  const columns = [
    
    {
      title: <div className="companyname">Lead Name</div>,
      dataIndex: "name",
      fixed: "left",
      render: (record, row,index) => {
        let cnt=index;
        return (
          <div className="namecol" onClick={() => getDetails(row.key)}>
            <div className="logo" style={{'textTransform': 'uppercase','backgroundColor':colorArray[index]}}>
            {record?.firstname?.[0]}{record?.lastname?.[0]}
            </div>
            <span className="cname">
              {/* {record?.fullname} */}
              {(record?.fullname)?record.fullname:record.firstname+" "+record.lastname}
            </span>
          </div>
        );
        
      }
    },
    {
      title: "Phone",
      dataIndex: "phone",
      className: "phone",
      // render: (record, row) => {
      //   return getToken() ? (
      //     <>
      //       <span
      //         className={row?.isdownloadedMobile?" btn mobile-open":" btn mobile"}
      //         onClick={()=>updatePhoneStatus(showPhone,row)}
      //       >
      //       </span>
      //       {showPhone[row.key] && row?.mobile && (
      //         <>
      //           <span className="phoneValue fs-12 pl-1">{row?.mobile}</span>
      //           <span
      //             title="copy phone"
      //             className="  fs-17 btn  la  la-copy text-black"
      //             onClick={() => copyToClipboard(row?.mobile)}
      //           ></span>
      //         </>
      //       )}
      //     </>
      //   ) : (
      //     <span
      //       className=" btn mobile"
      //       onClick={() => openInfoModel()}
      //     >
      //     </span>
      //   );
      // },
    },    
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Email",
      dataIndex: "email",
      className: "email",
      // render: (text, row) => {
      //   return getToken() ? (
      //     <>
      //       <h4
      //        className={row?.isdownloadedEmail?" btn iconemail emails-open":" btn iconemail emails"}
      //        onClick={()=>updateEmailStatus(showEmail,row)}
      //       ></h4>
      //       {showEmail[row.key] && (
      //         <>
      //           <span className="emailvalue pl-1 fs-12">{text}</span>
      //           <span
      //             title="copy email"
      //             className="  fs-17 btn  la  la-copy text-black"
      //             onClick={() => copyToClipboard(text)}
      //           ></span>
      //         </>
      //       )}
      //     </>
      //   ) : (
      //     <h4
      //       className="  btn iconemail emails"
      //       onClick={() => openInfoModel()}
      //     ></h4>
      //   );
      // },
    },
    // {
    //   title: "Activity Notes",
    //   dataIndex: "notes",      
    // },
    {
      title: "Created Dated",
      dataIndex: "notes",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [companyList, setCompanyList] = useState();
  const [executiveEmployeeList, setExecutiveEmployeeList] = useState();

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
  

  useMemo(() => {
    dispatch(getExecutiveEmployeeList({}, paginationValue));
  }, []);

  const renderSocialLinks = (socialLinks) => {
    return socialLinks?.map((link) => {
      if (link?.name === "facebook") {
        return (
          <Link to={link?.proifileUrl} target="_blank">
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
    let data = [];
    companyFilterList?.executiveEmployeeList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          executiveData: record,
          name: record,
          company: record?.company?.name,
          location: `${record?.city ? record?.city + ',' : ""} ${record?.state ? record?.state : ''}`,
          email:record?.emailId,
          phone: record?.phoneNo,
          mobile:record.phoneNo,
          status:record?.status,
          social: renderSocialLinks(record?.socialLinks),
          notes:"",  
        },
      ];
    });

    // const data =

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
    }else{
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
      const {id,email,login}= getUserInfo();
      const payload = {
        accountId: login,
        dataDump: JSON.stringify(companySelectedFilterList),
        fullName: searchValues.tagname,
        emailId: email,
        source: 'Executive',
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
      if(selectedRecords.length){
      setShowTagModal(true);
      }else{
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
      const {id}= getUserInfo();
    let payload = []
      for (let i = 0; i < selectedRecords.length; i++) {
        payload = [
           ...payload,
          {
            employee: selectedRecords[i]?.name,
            text: tagValues.tagname,
            userId: id,
          }
        ]
        
      }
      //console.log(payload,'payloadpayload');
      dispatch(createGroupExecutiveTag(payload));      
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

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column ">
        <div id="content" className="shadow">
          <div className="container-fluid pl-0 pr-0">
            <div className="row">
              <div className="col-xl-12 col-lg-10 pl-0">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 f-rev d-flex align-items-center justify-content-between">
                    <h6 className="m-0 ml-2 font-weight-bold text-primary mob-t">
                    Showing 1-
                      {parseInt(PAGE_LENGTH) >
                      parseInt(companyFilterList?.totalExecutiveCount)
                        ? companyFilterList?.totalExecutiveCount
                        : (paginationValue.end)?paginationValue.end:PAGE_LENGTH}
                      <span className="m-1">of</span>{" "}
                      {companyFilterList?.totalExecutiveCount}
                      <span className="m-1">results</span>
                    </h6>
                    <span className="ml-4 fs-23"><i class="text-info las la-calendar"></i></span>
                    <div className="buttons-container textsearch">
                    <ul className="d-flex mt-1  m-mt">

                    <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false">
                    <i className="right-icons las la-tags" aria-hidden="true" onClick={tagPage}></i>
                  </a>
                </li>
                                         
                  <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i className="right-icons la la-file-excel" aria-hidden="true" onClick={downloadExcel}></i>
                  </a></li>
                  <li>
            <a
              className=" mr-2"
              role="button"
              data-toggle=""
              aria-haspopup="true"
              aria-expanded="false"
              onClick={downloadPDF}
            >
              <i className="right-icons la la-file-pdf" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className=" mr-2"
              role="button"
              data-toggle=""
              aria-haspopup="true"
              aria-expanded="false"
              onClick={printPage}
            >
              <i className="right-icons la la-print" aria-hidden="true"></i>
            </a>
          </li>
                             
                


              </ul>
                      <Search
                        placeholder="Search By Designation"
                        allowClear
                        onSearch={onSearch}
                        style={{ width: 200 }}
                      />

                      <Button
                        className="d-none d-sm-inline-block ml-2 btn-outline-grey"
                        onClick={onHandleSaveSearch}
                        disabled={checkFilters()}
                        title={checkFilters() ? "Filters are not selected" : ""}
                      >
                        <i className="fas fa-save pr-1"></i> SAVE SEARCH
                      </Button>
                      <Button className="d-none d-sm-inline-block ml-2 btn-outline-grey">
                        <i className="fas fa-bolt pr-1"></i> CONNECT TO CRM
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-container text-nowrap">
                      <div className="table-wrapper">
                        {!loading ? (
                          <Table
                            rowSelection={{
                              type: "checkbox",
                              ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={executiveEmployeeList}
                            pagination={{
                              responsive: true,
                              defaultCurrent:paginationValue?.start + 1,
                              total: companyFilterList?.totalExecutiveCount,
                              pageSize: parseInt(PAGE_LENGTH) > parseInt(companyFilterList?.totalExecutiveCount)
                                  ? companyFilterList?.totalExecutiveCount
                                  : (paginationValue.end)?paginationValue.end:PAGE_LENGTH,
                              position: ["bottomCenter"],
                              onChange: onPageChange,
                            }}
                          />
                        ) : (
                          <Loader />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
      showTagModal && getToken()?
      <Modal
        title="Tag Executive"
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
      :""}

      {showModal ? (
        getToken()?
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
        :
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

    </>
  );
};

export default LeadContent;
