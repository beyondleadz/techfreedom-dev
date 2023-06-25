import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button,Tabs } from "antd";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import defaultLogo from "../../assets/images/no-similar-executive.jpg";
import defaultCompanyLogo from "../../assets/images/default_company_logo.jpg";
import KeyExecutives from "./KeyExecutives";
import { getSubscriptionUserInfo, getToken, getUserInfo } from "../../utils/utils";
import TrialModal from "../../common/TrialModal";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import { useNavigate } from "react-router";
import { emailRegex } from "../../config";

import {
  submitErrorForm,
  getEmployeeList,
  resetEmployeeList,
  postRelavantExecutive,
  getRelavantExecutive,
  resetPostRelavantExecutive,
  storeSelectedDepartment,
  updateRelavantExecutive
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
    const [checkExecutiveStatus, setCheckExecutiveStatus] = useState(0);
    const [openErrorForm, setOpenErrorForm] = useState(false);
    const formIntialValue = {
      telephone: { disabled: true, value: "", status: null },
      address: { disabled: true, value: "", status: null },
      city: { disabled: true, value: "", status: null },
      zip: { disabled: true, value: "", status: null },
      employee: { disabled: true, value: "", status: null },
      website: { disabled: true, value: "", status: null },
      name: { disabled: true, value: "", status: null },
      email: { disabled: true, value: "", status: null },
      comment: { disabled: true, value: "", status: null },
    };
    const { TextArea } = Input;
    const [errorForm, setErrorForm] = useState(formIntialValue);
    const [companyDetails,setCompanyDetails]=useState({});
    // const departmentList = useSelector(
    //   (state) => state.companyDetailsReducer.departmentList
    // );
    const executiveCompanyDetails = useSelector(
      (state) => state.executiveDetailsReducer.executiveCompanyDetails
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
  
    const getRelavantExecutiveDetails = useSelector(
      (state) => state.executiveDetailsReducer.getRelavantExecutive 
    );

    useEffect(()=>{
      if(!executiveCompanyDetails.length) return;
      const [data]=executiveCompanyDetails;
    setCompanyDetails(data);
    },[executiveCompanyDetails]);

    useMemo(() => {
      dispatch(resetPostRelavantExecutive);
      if (Object.keys(getUserInfo()).length) {
        const { id } = getUserInfo();
        dispatch(getRelavantExecutive(id, executiveDetails?.id));
      }
    }, [userAccountInfo]);

    useEffect(() => {
      console.log(getRelavantExecutiveDetails,'getRelavantExecutiveDetails')
      const [data] = getRelavantExecutiveDetails || [];
      if(data){
      setCheckExecutiveStatus(data?.prescribedby==="True"?1:2);
      }
    }, [getRelavantExecutiveDetails]);
  
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
          <div className={i > 0?"row mt-3 pl-2 brdr-b pb-3":"row brdr-b pl-2 pb-3"}>
              <div className=" btn-circle btn-info"  style={{'text-transform': 'uppercase'}}>
              {similarExecutiveList[i]?.firstname?.[0]}{similarExecutiveList[i]?.lastname?.[0]}
              </div>
              <div className="col">
                <div>
                  <a
                    className="font-weight-bold fs-14 text-dark"
                    title=""
                    href="#"
                    target=""
                  >
                    {(similarExecutiveList[i]?.fullname)?similarExecutiveList[i].fullname:similarExecutiveList[i]?.firstname+" "+similarExecutiveList[i]?.lastname}
                  {/* {similarExecutiveList[i]?.fullname} */}
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

    const checkRelavantExecutive = (flag,thumbStatus) => { //checkRelavantExecutive
      const isLoggedIn = checkLoginStatus();
      if (isLoggedIn) {
        console.log(getRelavantExecutiveDetails,'getRelavantExecutiveDetails vfhgfhf');
        const [data] = getRelavantExecutiveDetails || [];
        
        const { id } = getUserInfo();
        const { id: accountId } = getSubscriptionUserInfo();
        if(data?.id){
          //update case
          let payload = {
            id:data?.id,
            accountId: accountId,
            emplaoyeeId: executiveDetails?.id,
            iscompany: false,
            prescribedby: flag ? "True" : "False",
            userId: id,
          };
          dispatch(updateRelavantExecutive(payload));
        }else{
          let payload = {
            accountId: accountId,
            emplaoyeeId: executiveDetails?.id,
            iscompany: false,
            prescribedby: flag ? "True" : "False",
            userId: id,
          };
          dispatch(postRelavantExecutive(payload));
        }    
        
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

    const handleErrorForm = () => { //console.log("click report an error")
      setOpenErrorForm(true);
    };
  
    const closeErrorForm = () => {
      setOpenErrorForm(false);
      setErrorForm(formIntialValue);
    };

    const enableField = (ele) => {
      setErrorForm({
        ...errorForm,
        [ele.target.name]: ele.target.checked
          ? { ...errorForm[ele.target.name], disabled: !ele.target.checked }
          : { value: "", disabled: !ele.target.checked },
      });
    };
  
    const onSubmitForm = () => {
      const regEx = new RegExp(emailRegex);
      const clone = _.cloneDeep(errorForm);
      if (!errorForm?.name?.value) {
        clone.name.status = "error";
        setErrorForm(clone);
        return false;
      }
  
      if (!errorForm?.email?.value || !regEx.test(errorForm?.email?.value)) {
        clone.email.status = "error";
        setErrorForm(clone);
        return false;
      }
  
      console.log(errorForm, "errorFormerrorForm");
      let newPayload = {};
      Object.keys(errorForm).forEach((key) => {
        newPayload = {
          ...newPayload,
          [key]: errorForm[key].value,
        };
      });
      const { id, login } = getUserInfo();
      const { id: accountId } = getSubscriptionUserInfo();
      const payload = {
        accountId: accountId,
        emplaoyeeId: executiveDetails?.id,
        description: JSON.stringify(newPayload),
        //emplaoyeeId: 0,
        iscompany: false,
        iscorrected: true,
        userId: id,
      };
      // errorForm
      dispatch(submitErrorForm(payload));
      setOpenErrorForm(false);
      setErrorForm(formIntialValue);
    };

    const onInputChange = (ele) => {
      console.log(ele.target.value, "skljfslkd");
      setErrorForm({
        ...errorForm,
        [ele.target.name]: {
          ...errorForm[ele.target.name],
          value: ele.target.value,
          status: null,
        },
      });
    };
    return (
      <>
      <div className="col-custom-2 executive">
      {/* <div className="buttons-container">
      <div className="btn btn-outline-secondary mt-3 pr-2 "><i className="right-icons las la-flag" aria-hidden="true"></i>Report An Error</div>
      </div> */}
      <div className="card shadow  mb-4">
          <div className="card-header font-weight-bold">
            Company Info
          </div>
          <div className="card-body c-info ">
            <div className="c-info-detail">
          <div className=" executive-company mr-2 img-responsive">
                <img src={companyDetails?.companyLogoUrl || defaultCompanyLogo} onError={(e) => {
                  e.currentTarget.src = defaultCompanyLogo;
                }}/>
              </div>
              <div className="c-info-desc">
                <div><a className="font-weight-bold fs-16 text-dark"  title="" href="#" target="" >{executiveDetails?.company?.name}</a>
                </div>
                
              </div>                 
            </div>
           <div className="d-flex">
           <div className="row pb-3">
              <div className=" pl-3">
              
                <div className="fs-12"><h6><i className=" fs-16 mr-2  la la-phone text-black"></i>Phone</h6><div className="pl-4 ">{companyDetails?.phoneNo}</div></div>
                <div className="fs-12"><h6><i className=" fs-16 mr-2  la la-map-marker text-black"></i>Location</h6><div className="pl-4 ml-1">{companyDetails?.address}</div></div>
                <div className="fs-12"><h6><i className=" fs-16 mr-2  la la-users text-black"></i>Employees Ranges</h6><div className="pl-4 ml-1">{companyDetails?.range?.name}</div></div>
                <div className="fs-12"><h6><i className=" fs-16 mr-2  las la-industry text-black"></i>Industry</h6><div className="pl-4 ml-1">{companyDetails?.industry?.name}</div></div>
                <div className="fs-12"><h6><i className=" fs-16 mr-2  la la-globe text-black"></i>Website</h6><div className="pl-4 ml-1">{companyDetails?.wedsite}</div></div>
                <div className="fs-12"><h6><i className=" fs-16 mr-2  la la-city text-black"></i>Company Type</h6><div className="pl-4 ml-1">{companyDetails?.category?.name}</div></div>
                <div className="fs-12"><h6><i className=" fs-16 mr-2  la la-money-check text-black"></i>Revenue Range</h6><div className="pl-4 ml-1"> {companyDetails?.ravenue?.name}</div></div>
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
          {/* <div className="card-body">
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
          </div> */}
        </div>
        <div className="card shadow descbox1 mb-3">
        
          <div>Is this executive data relevant to you?
          {checkExecutiveStatus===1?<a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
            
          ><i className="right-icons fa fa-thumbs-up" aria-hidden="true"></i></a>:<a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => checkRelavantExecutive(1,checkExecutiveStatus)}
          ><i className="right-icons small fa fa-thumbs-up" aria-hidden="true"></i></a>}
            
            {checkExecutiveStatus===2?
          <a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i
              className="right-icons fa fa-thumbs-down"
              aria-hidden="true"
            ></i>
          </a>:<a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => checkRelavantExecutive(0,checkExecutiveStatus)}
          >
            <i
              className="right-icons small fa fa-thumbs-down"
              aria-hidden="true"
            ></i>
          </a>}
          </div>
         
        </div>
        <div className="buttons-container">
            <div className="btn btn-outline-secondary  w-99 pr-2 " onClick={handleErrorForm}><i className="right-icons las la-flag" aria-hidden="true"></i>Report An Error</div>
            </div>
      </div>
      {openErrorForm && (
      <Modal
        title={
          <div className="errorformcontainertitle">
            <h4>Report an Error</h4>
            <h2>Report Incorrect Information</h2>
          </div>
        }
        okText="Submit"
        cancelText="Cancel"
        width="450px"
        open={openErrorForm}
        onOk={onSubmitForm}
        onCancel={closeErrorForm}
      >
        <div className="errorformcontainer">
          <p>
            Please select the appropriate checkbox that you have found
            Incorrect and if you know the correct data please provide us in
            appropriate text box.
          </p>
          <div className="form">
            {console.log(errorForm, "skljfsljfklsd")}
            <div className="formcol1">
              <Checkbox name="telephone" onChange={enableField}>
                Telephone
              </Checkbox>
            </div>
            <div className="formcol2">
              <Input
                name="telephone"
                value={errorForm?.telephone?.value}
                placeholder="Telephone"
                disabled={errorForm?.telephone?.disabled}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="form">
            <div className="formcol1">
              <Checkbox name="address" onChange={enableField}>
                Address
              </Checkbox>
            </div>
            <div className="formcol2">
              <TextArea
                name="address"
                value={errorForm?.address?.value}
                rows={2}
                maxLength={100}
                disabled={errorForm?.address?.disabled}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="form">
            <div className="formcol1">
              <Checkbox name="city" onChange={enableField}>
                City
              </Checkbox>
            </div>
            <div className="formcol2">
              <Input
                name="city"
                value={errorForm?.city?.value}
                placeholder="City"
                disabled={errorForm?.city?.disabled}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="form">
            <div className="formcol1">
              <Checkbox name="zip" onChange={enableField}>
                Zip/Pin code
              </Checkbox>
            </div>
            <div className="formcol2">
              <Input
                name="zip"
                value={errorForm?.zip?.value}
                placeholder="Zip/Pin code"
                disabled={errorForm?.zip?.disabled}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="form">
            <div className="formcol1">
              <Checkbox name="employee" onChange={enableField}>
                No. of Employees
              </Checkbox>
            </div>
            <div className="formcol2">
              <Input
                name="employee"
                value={errorForm?.employee?.value}
                placeholder="No. of Employees"
                disabled={errorForm?.employee?.disabled}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div className="form">
            <div className="formcol1">
              <Checkbox name="website" onChange={enableField}>
                Website
              </Checkbox>
            </div>
            <div className="formcol2">
              <Input
                name="website"
                value={errorForm?.website?.value}
                placeholder="Website"
                disabled={errorForm?.website?.disabled}
                onChange={onInputChange}
              />
            </div>
          </div>

          <Divider dashed={true} />

          <div className="formfull">
            <Input
              name="name"
              status={errorForm?.name?.status}
              value={errorForm?.name?.value}
              placeholder="Your Name*"
              onChange={onInputChange}
            />
          </div>

          <div className="formfull">
            <Input
              name="email"
              status={errorForm?.email?.status}
              value={errorForm?.email?.value}
              placeholder="Your Email ID*"
              onChange={onInputChange}
            />
          </div>

          <div className="formfull">
            <TextArea
              name="comment"
              value={errorForm?.comment?.value}
              rows={3}
              maxLength={100}
              placeholder="Comment if any"
              onChange={onInputChange}
            />
          </div>
        </div>
      </Modal>
    )}

      </>
    )
    
}

export default RightPanel