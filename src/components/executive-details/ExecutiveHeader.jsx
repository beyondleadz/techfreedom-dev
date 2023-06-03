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
    <div className="row pl-3 pr-3">
     <div className="headername">
        <div className="font-weight-bold mb-1 ">
          <h3>{executiveDetails?.fullname}</h3>
        </div>
      </div>
      <div>
      
        <div className=" card shadow card-body">
          <div className="executiveheader">
            <div className="executivelogobox"  style={{'text-transform': 'uppercase'}}>{executiveDetails?.firstname?.[0]}{executiveDetails?.lastname?.[0]}</div>

            <div className="executivedescbox ">
              <div className="row mb-2">
                <div className="col pl-4">
                <div className="fs-12 font-weight-bold">Designation  <div className="font-weight-normal">{executiveDetails?.title}</div></div>
                </div>
                <div className="col"></div>
                <div className="col">
                <div className="fs-12 font-weight-bold">Company <div className="font-weight-normal">{executiveDetails?.company?.name}</div></div>
                  
                </div>
              </div>
              <div className="row pt-2 mb-2">
                <div className="col">
                <div className="fs-12 font-weight-bold">Email</div>{" "}
                  <i className=" align-top btn iconemail emails"></i>
                  <span>View Email</span>
                </div>
                <div className="col">
                <div className="fs-12 font-weight-bold">Phone</div>{executiveDetails?.phoneNo}
                </div>
                <div className="col">
                <div className="fs-12 font-weight-bold">Social</div>
                  {/* <i class="lab fs-20 facebook lab la-facebook"></i>
                  <i class="lab fs-20  twitter la la-twitter-square"></i>
                  <i class="lab fs-20 linkedin lab la-linkedin"></i> */}
                  {renderSocialLinks(executiveDetails?.socialLinks)}
                </div>
              </div>
              <div className="row pt-2">
                <div className="col">
                <div className="fs-12 font-weight-bold">Overview</div>
                  <div 
            className={`companyintro1 ${
              isCompanyBoxHeightFixed ? "setauto" : ""
            }`}>
               {executiveDetails?.bio}               
            </div>
                
      
              <span className="readmoreoverview" onClick={toggleCompanyHeight}>
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
