import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button } from "antd";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import AboutCompany from "./AboutCompany";
import KeyExecutives from "./KeyExecutives";
import OrgChart from "./OrgChart";
import { getBaseUrl } from "../../config";

import {
  getSubscriptionUserInfo,
  getToken,
  getUserInfo,
} from "../../utils/utils";
import TrialModal from "../../common/TrialModal";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import {
  submitErrorForm,
  getEmployeeList,
  resetEmployeeList,
  postRelavantCompany,
  getRelavantCompany,
  resetPostRelavantCompany,
  storeSelectedDepartment,
  updateRelavantCompany,
} from "../../actionCreator/companyDetailsActionCreator";
import { emailRegex } from "../../config";

const SimilarCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [dropDownToggle, setDropdownToggle] = useState(false);
  const [tabActiveKey, setTabActiveKey] = useState("1");
  const [similarList, setSimilarList] = useState();
  const [similarCount, setSimilarCount] = useState(5);
  const [selectedValue, setSelectedValue] = useState("Filter by Department");
  const [openErrorForm, setOpenErrorForm] = useState(false);
  const [isApiFailed, setIsApiFailed] = useState(false);
  const [checkCompanyStatus, setCheckCompanyStatus] = useState(0);
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
  const departmentList = useSelector(
    (state) => state.companyDetailsReducer.departmentList
  );
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const similarCompanyList = useSelector(
    (state) => state.companyDetailsReducer.similarCompanyList
  );
  const getRelavantCompanyDetails = useSelector(
    (state) => state.companyDetailsReducer.getRelavantCompany
  );

  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );

  useEffect(() => {
    console.log(getRelavantCompanyDetails,'getRelavantCompanyDetails')
    const [data] = getRelavantCompanyDetails || [];
    if(data){
    setCheckCompanyStatus(data?.prescribedby==="True"?1:2);
    }
  }, [getRelavantCompanyDetails]);

  useMemo(() => {
    dispatch(resetPostRelavantCompany);
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(getRelavantCompany(id, companyDetails?.id));
    }
  }, [userAccountInfo]);

  useEffect(() => {
    setSimilarCount(
      similarCompanyList.length < 5 ? similarCompanyList.length : 5
    );
  }, [similarCompanyList]);

  const items = [
    {
      key: "1",
      label: (
        <span>
          <i className="text-black fa fa-city pr-2"></i>About Company
        </span>
      ),
      children: <AboutCompany />,
    },
    {
      key: "2",
      label: (
        <span>
          <i className="text-black fa fa-user-friends pr-2"></i>Key Executives
        </span>
      ),
      children: <KeyExecutives />,
    },
    {
      key: "3",
      label: (
        <span>
          <i className="text-black fa fa-sitemap pr-2"></i>Org. Chart
        </span>
      ),
      children: <OrgChart />,
    },
  ];

  useEffect(() => {
    if (!similarCompanyList.length) return;
    const list = similarCompanyList?.filter(
      (item) => !item?.id === companyDetails?.id
    );
    setSimilarList(list);
  }, [similarCompanyList]);

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

  const getDetails = (id) => { 
    navigate(`/company-summary/${id}`);
  };

  const renderSimilarCompanyList = () => {
    let similarList = [];
    for (let i = 0; i < similarCount; i++) {
      similarList.push(
        <div className="similarinnerblk">
          <div className="s-company img-responsive">
            <img src={similarCompanyList[i]?.companyLogoUrl || defaultLogo} onError={(e) => {
                  e.currentTarget.src = defaultLogo;
                }} />
          </div>
          <div className="similar-desc">
            <div>
            <a onClick={() => getDetails(`/company-summary/${similarCompanyList[i]?.id}`)} className="font-weight-bold fs-14 text-dark" title="">
                {similarCompanyList[i]?.name}
              </a>
            </div>
            <div className="fs-12">{similarCompanyList[i]?.industry?.name}</div>
            <div className="fs-12">{similarCompanyList[i]?.address}</div>
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
              No similar company found.
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

  const checkRelavantCompany = (flag,thumbStatus) => { //checkCompanyStatus
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      console.log(getRelavantCompanyDetails,'getRelavantCompanyDetails vfhgfhf');
      const [data] = getRelavantCompanyDetails || [];
      
      const { id } = getUserInfo();
      const { id: accountId } = getSubscriptionUserInfo();
      if(data?.id){
        //update case
        let payload = {
          id:data?.id,
          accountId: accountId,
          companyId: companyDetails?.id,
          iscompany: true,
          prescribedby: flag ? "True" : "False",
          userId: id,
        };
        dispatch(updateRelavantCompany(payload));
      }else{
        let payload = {
          accountId: accountId,
          companyId: companyDetails?.id,
          iscompany: true,
          prescribedby: flag ? "True" : "False",
          userId: id,
        };
        dispatch(postRelavantCompany(payload));
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

  const handleErrorForm = () => {
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
      companyId: companyDetails?.id,
      description: JSON.stringify(newPayload),
      //emplaoyeeId: 0,
      iscompany: true,
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
      {renderSimilarCompanyList()?.length ? (
        <div className="card shadow mt-4 mb-4">
          <div className="card-header font-weight-bold">Similar Companies</div>
          <div className="card-body similarblk">
            {renderSimilarCompanyList()}
          </div>
          <div>
            {similarCompanyList?.length > 5 ? (
              <div className="fs-12 text-right">
                <button
                  className="btn btn-light mr-2 small"
                  onClick={getMoreSimilarCount}
                >
                  {similarCount === 10 ? "Show Less" : "5 More..."}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="card shadow descbox1">
        <div>
          Is this company data relevant to you?{" "}
          
            {checkCompanyStatus===1?<a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
            
          ><i class="right-icons fa fa-thumbs-up" aria-hidden="true"></i></a>:<a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => checkRelavantCompany(1,checkCompanyStatus)}
          ><i class="right-icons small fa fa-thumbs-up" aria-hidden="true"></i></a>}
            
            {checkCompanyStatus===2?
          <a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i
              class="right-icons fa fa-thumbs-down"
              aria-hidden="true"
            ></i>
          </a>:<a
            id=""
            role="button"
            data-toggle=""
            aria-haspopup="true"
            aria-expanded="false"
            onClick={() => checkRelavantCompany(0,checkCompanyStatus)}
          >
            <i
              class="right-icons small fa fa-thumbs-down"
              aria-hidden="true"
            ></i>
          </a>}
        </div>
        {/* <div font-weight-bold>
                  <button class="btn btn-outline-dark font-weight-bold mr-2 p-1">
                    Really Not
                  </button>
                  <button class="btn btn-outline-dark font-weight-bold mr-2 p-1">
                    Yes!
                  </button>
                </div> */}
      </div>
      <div className="buttons-container">
        <div
          className="btn btn-outline-secondary fs-10 w-99 mt-3 pr-2 "
          onClick={handleErrorForm}
        >
          <i className="right-icons fs-10 las la-flag" aria-hidden="true"></i>
          Report An Error
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

      {showModal ? (
        <TrialModal
          openModal={showModal}
          closeModal={closeModal}
          redirectToSignup={redirectToSignup}
          redirect={true}
          buttonText="Start Free Trial"
          modalBody={
            <div id="small-dialog2">
              <div align="center">
                <img src={popupImg} />
              </div>
              <p style={{ color: "#0000FF" }}>
                Get 10 free verified contacts with a BeyondLeadz Pro trial
              </p>
              <p>
                BeyondLeadz Pro customers close deals faster thanks to relevant
              </p>
            </div>
          }
          modalWidth="400px"
        />
      ) : (
        ""
      )}

      {isApiFailed ? (
        <TrialModal
          openModal={isApiFailed}
          closeModal={closeModal}
          redirectToSignup={redirectToSignup}
          buttonText="OK"
          modalBody={
            <div id="small-dialog2">
              Please call System support. You application having some issue.
            </div>
          }
          modalWidth="400px"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default SimilarCompany;
