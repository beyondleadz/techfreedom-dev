import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button } from "antd";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteAuthMethod } from "../../services/HttpServices";

import {
  submitErrorForm,
  createCompanyTag,
  emptyErrorObj,
  downloadCompany,
  getCompanyTag,
  resetCompanyTag,
  downloadExecutiveExl,
} from "../../actionCreator/companyDetailsActionCreator";
import { emailRegex } from "../../config";
import { getToken, getUserInfo } from "../../utils/utils";
import TrialModal from "../../common/TrialModal";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import { useNavigate } from "react-router";
const SummaryHeader = () => {
  const [showModal, setShowModal] = useState(false);

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

  const dispatch = useDispatch();
  const { TextArea } = Input;
  const [openErrorForm, setOpenErrorForm] = useState(false);
  const [isApiFailed, setIsApiFailed] = useState(false);
  const [openTagModal, setOpenTagModal] = useState(false);
  const [tagValues, setTagValues] = useState({
    tagname: "",
    description: "",
    tagError: "",
  });
  const [errorForm, setErrorForm] = useState(formIntialValue);
  const [isCompanyBoxHeightFixed, setIsCompanyBoxHeightFixed] = useState(false);
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const navigate = useNavigate();
  const errObj = useSelector((state) => state.companyDetailsReducer.errObj);
  const fetchCompanyTag = useSelector(
    (state) => state.companyDetailsReducer.fetchCompanyTag
  );
  const sigleCompanyTag = useSelector(
    (state) => state.companyDetailsReducer.sigleCompanyTag
  );

  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );

  const selectedEmployeeList = useSelector(
    (state) => state.companyDetailsReducer.selectedExecutive
  );

  const selectedDepartment = useSelector(
    (state) => state.companyDetailsReducer.selectedDepartment
  );

  const [taggedCompany, setTaggedCompany] = useState(false);
  useEffect(() => {
    if (Object.keys(errObj).length) {
      setIsApiFailed(true);
    }
    if (!Object.keys(errObj).length) {
      setIsApiFailed(false);
    }
  }, [Object.keys(errObj).length]);

  useMemo(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(resetCompanyTag());
      dispatch(getCompanyTag(companyDetails?.id, id));
    }
  }, [companyDetails, userAccountInfo]);

  useEffect(() => {
    // console.log(
    //   fetchCompanyTag.length,
    //   Object.keys(sigleCompanyTag).length,
    //   "chk len"
    // );
    if (fetchCompanyTag.length || Object.keys(sigleCompanyTag).length) {
      setTaggedCompany(true);
    } else {
      setTaggedCompany(false);
    }
  }, [fetchCompanyTag, sigleCompanyTag]);

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
    const payload = {
      accountId: login,
      companyId: companyDetails?.id,
      description: newPayload,
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

  const downloadExcel = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      let selectedEmpIds = "";
      selectedEmployeeList?.forEach((exe) => {
        selectedEmpIds += `${exe?.id},`;
      });
      selectedEmpIds = selectedEmpIds.substring(
        selectedEmpIds.lastIndexOf(","),
        0
      );
      const payload = {
        empIds: selectedEmpIds,
        department: selectedDepartment,
        companyId: companyDetails?.id,
      };
      dispatch(downloadExecutiveExl(payload));
    }
  };
  const downloadPDF = (id) => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      dispatch(downloadCompany([id], "pdf"));
    }
  };

  const onConfrim = () => {
    if (!tagValues.tagname) {
      setTagValues({
        ...tagValues,
        tagError: "error",
      });
    } else {
      //console.log(companyDetails, "companyDetailscompanyDetails");
      const { id } = getUserInfo();
      const payload = {
        company: companyDetails,
        text: tagValues.tagname,
        userId: id,
      };
      dispatch(createCompanyTag(payload));
      setOpenTagModal(false);
    }
  };

  const onTagInputChange = (e) => {
    setTagValues({
      ...tagValues,
      [e.target.name]: e.target.value,
    });
  };

  const tagCompany = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      setOpenTagModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    dispatch(emptyErrorObj());
  };

  const redirectToSignup = () => {
    setShowModal(false);
    navigate("/signup");
  };

  const closeTagModal = () => {
    setOpenTagModal(false);
  };
  //console.log(taggedCompany,"setTaggedCompanysetTaggedCompanysetTaggedCompany")
  return (

        <div className="row">
          <div className="headername col-md-12">
            <div className="font-weight-bold mb-2 ">
              <h3>{companyDetails?.name}</h3>
            </div>


            <div
        className={`headercontainer ${
          isCompanyBoxHeightFixed ? "setauto" : ""
        }`}
      >
      

        <div className="buttons-container">
          <ul className="d-flex  m-mt">
            <li>
              <a
                className=" mr-2"
                role="button"
                data-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => downloadPDF(companyDetails?.id)}
              >
                <i
                  className="right-icons la la-file-pdf"
                  aria-hidden="true"
                ></i>
              </a>
            </li>

            <li>
              <a
                className=" mr-2"
                role="button"
                data-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => downloadExcel()}
              >
                <i
                  className="right-icons la la-file-excel"
                  aria-hidden="true"
                ></i>
              </a>
            </li>

            <li>
              <a
                className=" mr-2"
                id=""
                role="button"
                data-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
                onClick={tagCompany}
              >
                <i className="right-icons las la-tag" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className=" mr-2" onClick={handleErrorForm}>
                <i className="right-icons las la-flag" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>



          </div>
          <div className="col-md-12">
            <div className="card shadow card-body">
              <div className="executiveheader">
                <div className="executivelogobox">
                  <img src={companyDetails?.companyLogoUrl} />
                </div>

                <div className="executivedescbox ">
                  <div className="row mb-3">
                    <div className="col pl-4">
                      <h5>Address</h5>
                      {companyDetails?.address}
                    </div>
                    {/* <div className="col"></div>
                    <div className="col">
                      <h5>Company</h5>
                      <span>Dun & Bradstreet</span>
                    </div> */}
                  </div>
                  <div className="row pt-3 mb-3">
                    <div className="col">
                      <h5>Website</h5>
                      <i className=" fs-20 mr-2 align-bottom la  la-globe text-black"></i>
                      <span>
                        <Link
                          className=" fs-12 font-weight-normal text-dark"
                          title=""
                          to={`http://${companyDetails?.wedsite}`}
                          target="_blank"
                        >
                          {companyDetails?.wedsite}
                        </Link>
                      </span>
                    </div>
                    <div className="col">
                      <h5>Phone</h5>
                      {companyDetails?.phoneNo}
                    </div>
                    <div className="col">
                      <h5>Social</h5>
                      {/* <i className="lab fs-20 facebook lab la-facebook"></i>
                      <i className="lab fs-20  twitter la la-twitter-square"></i>
                      <i className="lab fs-20 linkedin lab la-linkedin"></i> */}
                      {renderSocialLinks(companyDetails?.socialLinks)}
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col">
                      <h5>Description of business</h5>
                      <div
                        className={`companyintro ${
                          isCompanyBoxHeightFixed ? "setauto" : ""
                        }`}
                      >
                        <span>
                          {companyDetails?.introduction}
                          Amdocs Development Centre India Private Limited acts
                          as a subsidiary of Amdocs Inc., USA. The company is
                          engaged into the business of IT Industry. Some of its
                          products which include Customer Management, Revenue
                          Management, Digital Services, Network Control,
                          Operations Support Systems (OSS), etc. It has offices
                          across the globe. Amdocs Development Centre India
                          Private Limited acts as a subsidiary of Amdocs Inc.,
                          USA. The company is engaged into the business of IT
                          Industry. Some of its products which include Customer
                          Management, Revenue Management, Digital Services,
                          Network Control, Operations Support Systems (OSS),
                          etc. It has offices across the globe. Amdocs
                          Development Centre India Private Limited acts as a
                          subsidiary of Amdocs Inc., USA. The company is engaged
                          into the business of IT Industry. Some of its products
                          which include Customer Management, Revenue Management,
                          Digital Services, Network Control, Operations Support
                          Systems (OSS), etc. It has offices across the globe.
                          Amdocs Development Centre India Private Limited acts
                          as a subsidiary of Amdocs Inc., USA. The company is
                          engaged into the business of IT Industry. Some of its
                          products which include Customer Management, Revenue
                          Management, Digital Services, Network Control,
                          Operations Support Systems (OSS), etc. It has offices
                          across the globe.
                        </span>
                      </div>
                      {companyDetails?.introduction && (
                        <span
                          className="btn text-info font-weight-bold"
                          onClick={toggleCompanyHeight}
                        >
                          {isCompanyBoxHeightFixed ? "Hide..." : "Read more..."}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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

      {openTagModal ? (
        !taggedCompany ? (
          <Modal
            title="Tag Company"
            width={"400px"}
            closable={true}
            open={openTagModal}
            onCancel={closeTagModal}
            onOk={onConfrim}
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
                    placeholder="Tag Name"
                    onChange={onTagInputChange}
                  />
                </div>
              </div>
            </div>
          </Modal>
        ) : (
          <Modal
            title=""
            width={"400px"}
            closable={true}
            open={openTagModal}
            footer={[
              <Button key="submit" type="primary" onClick={closeTagModal}>
                OK
              </Button>,
            ]}
          >
            <div className="pop-up errorformcontainer ">
              <p>Already Tagged!</p>
            </div>
          </Modal>
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default SummaryHeader;
