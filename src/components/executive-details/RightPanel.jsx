import React, { useEffect, useState, useMemo } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/icici.jpg";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import KeyExecutives from "./KeyExecutives";
import { getToken, getUserInfo } from "../../utils/utils";
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
} from "../../actionCreator/executiveDetailsActionCreator";

const RightPanel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [dropDownToggle, setDropdownToggle] = useState(false);
    const [tabActiveKey, setTabActiveKey] = useState("1");
    const [similarList, setSimilarList] = useState();
    const [similarCount, setSimilarCount] = useState(5);
    const [selectedValue, setSelectedValue] = useState("Filter by Department");
    const departmentList = useSelector(
      (state) => state.companyDetailsReducer.departmentList
    );
    const companyDetails = useSelector(
      (state) => state.companyDetailsReducer.companyDetails
    );
    const similarExecutiveList = useSelector(
      (state) => state.executiveDetailsReducer.similarExecutiveList
    );
  
    const userAccountInfo = useSelector(
      (state) => state.CommonReducer.accountInfo
    );

    const executiveDetails = useSelector(
      (state) => state.executiveDetailsReducer.executiveDetails
    );
  
    useMemo(() => {
      dispatch(resetPostRelavantCompany);
      if (Object.keys(getUserInfo()).length) {
        const { id } = getUserInfo();
        dispatch(getRelavantCompany(id, companyDetails?.id));
      }
    }, [userAccountInfo]);
  
    useEffect(() => {
      setSimilarCount(
        similarExecutiveList.length < 5 ? similarExecutiveList.length : 5
      );
    }, [similarExecutiveList]);
  
    useEffect(() => {
      if (!similarExecutiveList.length) return;
      const list = similarExecutiveList?.filter(
        (item) => !item?.id === companyDetails?.id
      );
      setSimilarList(list);
    }, [similarExecutiveList]);
  
    const onChange = (key) => {
      setTabActiveKey(key);
      if (key !== "2") {
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
      setTabActiveKey("2");
    };
  
    const renderSimilarExecutiveList = () => {
      let similarList = [];
      for (let i = 0; i < similarCount; i++) {
        similarList.push(
          <div className="row brdr-b pl-2 pb-3">
              <div className=" btn-circle btn-info">
              {similarExecutiveList[i]?.firstname[0].toUpperCase()+similarExecutiveList[i]?.lastname[0].toUpperCase()}
              </div>
              <div className="col">
                <div>
                  <a
                    className="font-weight-bold fs-14 text-dark"
                    title=""
                    href="#"
                    target=""
                  >
                  {similarExecutiveList[i]?.fullname}
                  </a>
                </div>
                <div className="fs-12">{similarExecutiveList[i]?.title}</div>                
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
                No similar executive found.
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
    };
  
    const redirectToSignup = () => {
      setShowModal(false);
      navigate("/signup");
    };
  
    return (
      <div className="col-custom-2 executive">
      <div className="buttons-container">
      <div className="btn btn-outline-secondary mt-3 pr-2 "><i className="right-icons las la-flag" aria-hidden="true"></i>Report An Error</div>
      </div>
      <div className="card shadow  mb-4">
          <div className="card-header font-weight-bold">
            Company Info
          </div>
          <div className="card-body c-info ">
            <div className="c-info-detail">
          <div className=" executive-company mr-2 img-responsive">
                <img src={logo} />
              </div>
              <div className="c-info-desc">
                <div><a className="font-weight-bold fs-16 text-dark"  title="" href="#" target="" >{executiveDetails?.company?.name}</a>
                </div>
                
              </div>                 
            </div>
           <div className="d-flex">
           <div className="row pb-3">
              <div className=" pl-3">
              
                <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-phone text-black"></i>Phone</h6><div className="pl-4 ">{executiveDetails?.company?.phoneNo}</div></div>
                <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-map-marker text-black"></i>Location</h6><div className="pl-4 ml-1">{executiveDetails?.company?.address}</div></div>
                <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-users text-black"></i>Employees Ranges</h6><div className="pl-4 ml-1">{executiveDetails?.company?.range?.name}</div></div>
                <div className="fs-12"><h6><i class=" fs-16 mr-2  las la-industry text-black"></i>Industry</h6><div className="pl-4 ml-1">{executiveDetails?.company?.industry?.name}</div></div>
                <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-globe text-black"></i>Website</h6><div className="pl-4 ml-1">{executiveDetails?.company?.wedsite}</div></div>
                <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-city text-black"></i>Company Type</h6><div className="pl-4 ml-1">{executiveDetails?.company?.category?.name}</div></div>
                <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-money-check text-black"></i>Revenue Range</h6><div className="pl-4 ml-1"> {executiveDetails?.company?.ravenue?.name}</div></div>
              </div>
            </div>
           </div>
          </div>
        </div>
        <div className="card shadow mt-2 mb-4">
          <div className="card-header font-weight-bold">
            Similar Executive
          </div>
          <div className="card-body similarblk">
              {renderSimilarExecutiveList()}
            </div>
          <div className="card-body">
            <div className="row brdr-b pl-2 pb-3">
              <div className=" btn-circle btn-info">
              JM
              </div>
              <div className="col">
                <div>
                  <a
                    className="font-weight-bold fs-14 text-dark"
                    title=""
                    href="#"
                    target=""
                  >
                    John Mathew
                  </a>
                </div>
                <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
                
              </div>
            </div>
            <div className="row mt-3 pl-2 brdr-b pb-3">
            <div className=" btn-circle  btn-info">
              JM
              </div>
              <div className="col ">
                <div>
                  <a
                    className="font-weight-bold fs-14 text-dark"
                    title=""
                    href="#"
                    target=""
                  >
                   John Mathew
                  </a>
                </div>
                <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
                
              </div>
            </div>
            <div className="row pl-2 brdr-b pt-3 pb-3">
            <div className=" btn-circle  btn-info">
              BW
              </div>
              <div className="col executive">
                <div>
                  <a
                    className="font-weight-bold fs-14 text-dark"
                    title=""
                    href="#"
                    target=""
                  >
                    Bob Whelen
                  </a>
                </div>
                <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
              </div>
            </div>
            <div className="row pl-2 brdr-b pt-3 pb-3">
            <div className=" btn-circle btn-info">
              BW
              </div>
              <div className="col">
                <div>
                  <a
                    className="font-weight-bold fs-14 text-dark"
                    title=""
                    href="#"
                    target=""
                  >
                    Bob Whelen
                  </a>
                </div>
                <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
              </div>
            </div>
            <div className="row pl-2 pt-3 ">
            <div className=" btn-circle btn-info">
              BW
              </div>
              <div className="col">
                <div>
                  <a
                    className="font-weight-bold fs-14 text-dark"
                    title=""
                    href="#"
                    target=""
                  >
                    Bob Whelen
                  </a>
                </div>
                <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
              </div>
            </div>
            <div className="fs-12 text-right">
              <button className="btn btn-light mr-2 small">
                5 More..
              </button>
            </div>
          </div>
        </div>
        <div className="card shadow descbox1 mb-3">
        
          <div>Is this company data relevant to you? <a href="#" id="" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons small fa fa-thumbs-up" aria-hidden="true"></i></a><a href="#" id="" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons small fa fa-thumbs-down" aria-hidden="true"></i></a></div>
         
        </div>
      </div>
    )
}

export default RightPanel