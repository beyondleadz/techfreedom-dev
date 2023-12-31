import React, { useEffect, useState } from "react";
import { Modal, Checkbox, Input, Texta, Divider,Tooltip } from "antd";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEmployeeViewableStatusUpdate } from "../../actionCreator/executiveDetailsActionCreator";
import { emailRegex,subscriptionContentInfo } from "../../config";
import { getToken } from "../../utils/utils";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import subscribepopupImg from "../../assets/images/subscribe-now-prompt-img.jpg";
import TrialModal from "../../common/TrialModal";

const ExecutiveHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCompanyBoxHeightFixed, setIsCompanyBoxHeightFixed] = useState(false);

  const executiveDetails = useSelector(
    (state) => state.executiveDetailsReducer.executiveDetails
  );
  const getEmployeeViewableData = useSelector(
    (state) => state.executiveDetailsReducer?.executiveEmployeeViewableStatus
  );
  const [showEmail, setShowEmail] = useState(false);
  const [openModal, setOpenModal] = useState({
    info: null,
    open: false,
  });

  const renderSocialLinks = (socialLinks) => {
    return socialLinks?.map((link) => {
      if (link?.name === "facebook") {
        return (
          <Link to={link?.proifileUrl} key={link?.proifileUrl} target="_blank">
            <i className="lab fs-20 facebook lab la-facebook"></i>
          </Link>
        );
      } else if (link?.name === "Linkedin") {
        return (
          <Link to={link?.proifileUrl} key={link?.proifileUrl} target="_blank">
            <i className="lab fs-20 linkedin  lab la-linkedin"></i>
          </Link>
        );
      } else if (link?.name === "twitter") {
        return (
          <Link to={link?.proifileUrl} key={link?.proifileUrl} target="_blank">
            <i className="lab fs-20  twitter la la-twitter-square"></i>
          </Link>
        );
      }
    });
  };

  const toggleCompanyHeight = () => {
    if (!getToken()) {
      setOpenModal({ info: null, open: true });
    }else{
    setIsCompanyBoxHeightFixed(!isCompanyBoxHeightFixed);
    }
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

  const updateEmailStatus = (row) => {
    setShowEmail(true);
    //call api to update status
    //if(!row?.isdownloadedEmail){
     const payload= {
        id: row.id,
        pageFor:1
      }  
    dispatch(getEmployeeViewableStatusUpdate('Email',payload));    
    //}    
  };

  return (
    <>
      <div className="row pl-3 pr-3">
        <div className="headername">
          <div className="font-weight-bold mb-1 ">
            <h3>{(executiveDetails?.fullname)?executiveDetails.fullname:executiveDetails.firstname+" "+executiveDetails.lastname}</h3>
          </div>
        </div>
        <div>
          <div className=" card shadow card-body">
            <div className="executiveheader">
              <div
                className="executivelogobox"
                style={{ textTransform: "uppercase" }}
              >
                {executiveDetails?.firstname?.[0]}
                {executiveDetails?.lastname?.[0]}
              </div>

              <div className="executivedescbox ">
                <div className="row mb-2">
                  <div className="col pl-4">
                    <div className="fs-12 font-weight-bold">
                      Designation{" "}
                      <div className="font-weight-normal">
                      {executiveDetails?.title}
                      </div>
                    </div>
                  </div>
                  <div className="col"></div>
                  <div className="col">
                    <div className="fs-12 font-weight-bold">
                      Company{" "}
                      <div className="font-weight-normal">
                        {executiveDetails?.company?.name}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-2 mb-2">
                  <div className="col">
                    <div className="fs-12 font-weight-bold">Email</div>
                    {/* {
getToken() ? 
                }
                
              
            }: <i className="align-top btn iconemail emails-open" onClick={() => openInfoModel()}></i>
            <span onClick={() => openInfoModel()}>View Email</span> */}

                    {getToken() ? (
                      showEmail && executiveDetails?.id===getEmployeeViewableData?.id ? (
                        <>
                        <i className={executiveDetails?.isdownloadedEmail?" btn iconemail emails-open":" btn iconemail emails"}></i>
                          <span className="emailvalue pl-1 fs-12">
                            {getEmployeeViewableData?.emailId}
                          </span>
                          <span
                            title="copy email"
                            className="  fs-17 btn  la  la-copy text-black"
                            onClick={() =>
                              copyToClipboard(getEmployeeViewableData?.emailId)
                            }
                          ></span>
                          
                        </>
                      ) : (
                        <>
                         <Tooltip title="View Email">
                          <i
                            className={executiveDetails?.isdownloadedEmail?" btn iconemail emails-open":" btn iconemail emails"}
                            onClick={() => updateEmailStatus(executiveDetails)}
                          ></i>
                          </Tooltip>
                          {/* <span onClick={() => setShowEmail(true)}>
                            View Email
                          </span> */}
                        </>
                      )
                    ) : (
                      <>
                        <i
                          className="align-top btn iconemail emails"
                          onClick={() => openInfoModel()}
                        ></i>
                        <span onClick={() => openInfoModel()}>View Email</span>
                      </>
                    )}
                  </div>
                  <div className="col">
                    <div className="fs-12 font-weight-bold">Phone</div>
                    {executiveDetails?.company?.phoneNo}
                  </div>
                  <div className="col">
                    <div className="fs-12 font-weight-bold">Social</div>
                    {/* <i className="lab fs-20 facebook lab la-facebook"></i>
                  <i className="lab fs-20  twitter la la-twitter-square"></i>
                  <i className="lab fs-20 linkedin lab la-linkedin"></i> */}
                    {renderSocialLinks(executiveDetails?.socialLinks)}
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col">
                    <div className="fs-12 font-weight-bold">Overview</div>
                    <div
                      className={`companyintro1 ${
                        isCompanyBoxHeightFixed ? "setauto" : ""
                      }`}
                    >
                      {executiveDetails?.bio}
                    </div>

                    <span
                      className="readmoreoverview"
                      onClick={toggleCompanyHeight}
                    >
                      {isCompanyBoxHeightFixed ? "Hide..." : "Read more..."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal?.open && (
        <TrialModal
          openModal={openModal}
          closeModal={closeInfoBeforeLogin}
          redirectToSignup={redirectToSignup}
          redirect={true}
          buttonText={subscriptionContentInfo.btntext}
          modalBody={
            <div id="small-dialog2">
              <div align="center">
                <img src={subscribepopupImg} />
              </div>
              <p style={{ color: "#0000FF" }}>
              {subscriptionContentInfo.content}
              </p>
            </div>
          }
          modalWidth="400px"
        />
      )}
    </>
  );
};
export default ExecutiveHeader;
