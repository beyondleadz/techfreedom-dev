import React, { useEffect, useState, useMemo } from "react";
import Excel from "exceljs";
import { saveAs } from "file-saver";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Input, Button, Modal } from "antd";
import { PAGE_LENGTH } from "../../config";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import TrialModal from "../../common/TrialModal";
import { saveExcel, testImage } from "../../utils/utils";

import {
  getExecutiveEmployeeList,
  getCompanyList,
  savePaginationValues,
  saveAdvancedSelectedFilters,
  selectedRow,
  saveSearchAction,
  saveSearchList,
  downloadExecutiveList,
  createGroupExecutiveTag,
  emptyDownload
} from "../../actionCreator/executiveListingActionCreater";

import {
  submitLead,
  getExecutiveLead,
  getEmployeeViewableStatusUpdate
} from "../../actionCreator/executiveDetailsActionCreator";
import Loader from "../loader";
import { getToken,getUserInfo,getSubscriptionUserInfo } from "../../utils/utils";

const ExecutiveContent = () => {
  const dispatch =useDispatch();
  const { Search, TextArea } = Input;
  const [showEmail, setShowEmail] = useState({});
  const [showPhone, setShowPhone] = useState({});
  const [openModal, setOpenModal] = useState({
    info: null,
    open: false,
  });
    const colorArray = [
      "#43ACFF",
      "#EF5261",
      "#FAC300",
      "#9AD888",
      "#18B0A7",
      "#3C78D8",
      "#43ACFF",
      "#EF5261",
      "#FAC300",
      "#9AD888"
    /* "#b0b0e1",
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
    "#6666FF", */
  ];
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  const getLeadsData = useSelector(
    (state) => state.executiveDetailsReducer?.getExecutiveLead
  );
  // const colorArray= ['aqua', 'blue', 'fuchsia', 'gray', 'green', 
  // 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
  // 'silver', 'teal', 'white', 'yellow'];
  const updateEmailStatus = (showEmail,row) => {
    setShowEmail({ ...showEmail, [row.key]: true });
    //call api to update status
    if(!row?.isdownloadedEmail){
    dispatch(getEmployeeViewableStatusUpdate('Email',row));    
    // const payload = {
    //   ...companySelectedFilterList,
    //   topSearchValue: topSearchValue,
    // };
    // dispatch(getExecutiveEmployeeList(payload, paginationValue, true));
    }    
  };
  const updatePhoneStatus = (showPhone,row) => { console.log("click mob",row)
    setShowPhone({ ...showPhone, [row.key]: true });
    if(!row?.isdownloadedMobile){
    dispatch(getEmployeeViewableStatusUpdate('Mobile',row));
    // const payload = {
    //   ...companySelectedFilterList,
    //   topSearchValue: topSearchValue,
    // };
    // dispatch(getExecutiveEmployeeList(payload, paginationValue, true));
    }
  }

  const openInfoModel = () => {
    if (getToken()) {
      setOpenModal({ info: null, open: false });
    } else {
      setOpenModal({ info: null, open: true });
    }
  };

  

  useMemo(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(getExecutiveLead(id));
    }
  }, [userAccountInfo]);

  const postLeads = (record, isLeadSubmit) => {
    //console.log(record,'selectedrecord');
    const { id, login } = getUserInfo();
    const { id: accountId } = getSubscriptionUserInfo();
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
      userId: id,
      employeeId: record.id,
      address:record?.company?.address,
      companyId:record?.company?.id,
      companyName:record?.company?.name,
      industryId:record?.company?.industry?.id,
      industryText:record?.company?.industry?.name,
      empSizeId:record?.company?.range?.name,
      city:record?.company?.city,
      state:record?.company?.state,
      country:record?.company?.country
    };
    //console.log(isLeadSubmit,leadPayload,'leadpayload');
    if (!isLeadSubmit) {
      dispatch(submitLead(leadPayload));
      //setAddToLeads(record.id);
    }else{
     navigate("/lead-details/"+isLeadSubmit);
    }
  }

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

  const columns = [
    
    {
      title: <div className="companyname">Executive Name</div>,
      dataIndex: "name",
      fixed: "left",
      render: (record, row,index) => {
        let cnt=index;
        return (
          <div className="namecol" onClick={() => getDetails(row.key)}>
            <div className="logo" style={{textTransform: 'uppercase',backgroundColor:colorArray[index]}}>
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
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Email",
      dataIndex: "email",
      className: "email",
      render: (text, row) => {
        return getToken() ? (
          <>
            <h4
             className={row?.isdownloadedEmail?" btn iconemail emails-open":" btn iconemail emails"}
             onClick={()=>updateEmailStatus(showEmail,row)}
            ></h4>
            {showEmail[row.key] && (
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
          <h4
            className="  btn iconemail emails"
            onClick={() => openInfoModel()}
          ></h4>
        );
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      className: "phone",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      render: (record, row) => {
        return getToken() ? (
          <>
            <span
              className={row?.isdownloadedMobile?" btn mobile-open":" btn mobile"}
              onClick={()=>updatePhoneStatus(showPhone,row)}
            >
            </span>
            {showPhone[row.key] && row?.mobile && (
              <>
                <span className="phoneValue fs-12 pl-1">{row?.mobile}</span>
                <span
                  title="copy phone"
                  className="  fs-17 btn  la  la-copy text-black"
                  onClick={() => copyToClipboard(row?.mobile)}
                ></span>
              </>
            )}
          </>
        ) : (
          <span
            className=" btn mobile"
            onClick={() => openInfoModel()}
          >
          </span>
        );
      },
    },
    {
      title: "Social",
      dataIndex: "social",
    },
    {
      title: "",
      dataIndex: "name",
      render: (record, row) => {
        let checkLeadSubmitted =isLeadsSubmitted(record);
        return getToken() ? (
          <>
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            // loading={
            //   !Object.keys(submitLeadRes).length && addToLeads === record.id
            //     ? true
            //     : false
            // }
            onClick={() => postLeads(record, checkLeadSubmitted)}
          >
            <i className="las la-user-plus fs-12 pr-1"></i>{" "}
            {checkLeadSubmitted ? "LEAD ADDED" : "ADD TO LEADS"}
          </Button>           
          </>
        ) : (
          <>
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            onClick={() => openInfoModel()}
          >
            <i className="las la-user-plus  fs-12  pr-1"></i>ADD TO LEADS
          </Button>
          </>          
        );
      },
    },
  ];

  //const dispatch = useDispatch();
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
  const companyFilterList = useSelector((state) => state.executiveListingReducer);
  const companySelectedFilterList = useSelector(
    (state) => state.executiveListingReducer.selectedFilters
  );
  const loading = useSelector((state) => state.CommonReducer.loading);
  const paginationValue = useSelector(
    (state) => state.executiveListingReducer.paginationValue
  );
  const selectedRecords = useSelector(
    (state) => state.executiveListingReducer.selectedRecords
  );
  
  const topSearchValue = useSelector(
    (state) => state.HeaderReducer.topSearchValue
  );

  const downloadExcelData = useSelector(
    (state) => state.executiveListingReducer.download
  );

  
  // useMemo(() => {
  //   dispatch(getExecutiveEmployeeList({}, paginationValue));
  // }, []);

  useMemo(() => {
    if (topSearchValue) {
      const payload = {
        ...companySelectedFilterList,
        topSearchValue: topSearchValue,
      };
      dispatch(getExecutiveEmployeeList(payload, paginationValue, true));
    } else {
      dispatch(getExecutiveEmployeeList({}, paginationValue));
    }
  }, [topSearchValue]);

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
          id: record.id,
          executiveData: record,
          name: record,
          company: record?.company?.name,
          location: `${record?.city ? record?.city + ',' : ""} ${record?.state ? record?.state : ''}`,
          email:record?.emailId,
          phone: record?.company?.phoneNo,
          mobile:record.phoneNo,
          designation:record?.title,
          social: renderSocialLinks(record?.socialLinks),
          isdownloadedEmail:record?.isdownloadedEmail,
          isdownloadedMobile:record?.isdownloadedMobile,
          directDial: record,       
        },
      ];
    });

    // const data =

    setExecutiveEmployeeList(data);
  }, [companyFilterList]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   "selectedRows: ",
      //   selectedRows
      // );
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
    navigate(`/executive-details/${id}`);
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
      //console.log("call tag api");
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

      //console.log(downloadExcelData, "downloadExcelData",downloadedUpdatedData);
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
      const fileName = "exeutiveData";
      saveExcel(downloadedUpdatedData, columns, fileName, Excel, saveAs);
      dispatch(emptyDownload());
    }
  }, [downloadExcelData]);


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

export default ExecutiveContent;
