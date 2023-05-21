import React, { useEffect, useState } from "react";
import { Modal, Checkbox, Input, Texta, Divider } from "antd";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { submitErrorForm } from "../../actionCreator/executiveDetailsActionCreator";
import { emailRegex } from "../../config";
const ExecutiveHeader = () => {
  const [isCompanyBoxHeightFixed, setIsCompanyBoxHeightFixed] = useState(false);

  const executiveDetails = useSelector(
    (state) => state.executiveDetailsReducer.executiveDetails
  );

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
    setIsCompanyBoxHeightFixed(!isCompanyBoxHeightFixed);
  };

  return (
    <div className="row">
      <div className="headername">
        <div className="font-weight-bold mb-2 ">
          <h3>{executiveDetails?.fullname}</h3>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card shadow card-body">
          <div className="executiveheader">
            <div className="executivelogobox">{executiveDetails?.firstname[0].toUpperCase()+executiveDetails?.lastname[0].toUpperCase()}</div>

            <div className="executivedescbox ">
              <div className="row mb-3">
                <div className="col pl-4">
                  <h5>Designation</h5>{executiveDetails?.title}
                </div>
                <div className="col"></div>
                <div className="col">
                  <h5>Company</h5>
                  <span>{executiveDetails?.company?.name}</span>
                </div>
              </div>
              <div className="row pt-3 mb-3">
                <div className="col">
                  <h5>Email</h5>{" "}
                  <i className=" align-top btn iconemail emails"></i>
                  <span>View Email</span>
                </div>
                <div className="col">
                  <h5>Phone</h5>{executiveDetails?.phoneNo}
                </div>
                <div className="col">
                  <h5>Social</h5>
                  {/* <i class="lab fs-20 facebook lab la-facebook"></i>
                  <i class="lab fs-20  twitter la la-twitter-square"></i>
                  <i class="lab fs-20 linkedin lab la-linkedin"></i> */}
                  {renderSocialLinks(executiveDetails?.socialLinks)}
                </div>
              </div>
              <div className="row pt-3">
                <div className="col">
                  <h5>Overview</h5>
                  <div 
            className={`companyintro ${
              isCompanyBoxHeightFixed ? "setauto" : ""
            }`}>
               {executiveDetails?.bio}               
            </div>
                
      
              <span className="btn text-info font-weight-bold readmoreoverview" onClick={toggleCompanyHeight}>
              {isCompanyBoxHeightFixed ? "Hide..." : "Read more..."}
            </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExecutiveHeader;
