import React, { useEffect, useState } from "react";
import { Modal, Checkbox, Input, Divider,Button } from "antd";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  submitErrorForm,
  createCompanyTag,
  emptyErrorObj,
  downloadCompany,
  getCompanyTag,
  resetCompanyTag
} from "../../actionCreator/companyDetailsActionCreator";
import { emailRegex } from "../../config";
import { getToken } from "../../utils/utils";
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
  const navigate = useNavigate()
  const errObj = useSelector((state) => state.companyDetailsReducer.errObj);
  const fetchCompanyTag = useSelector((state) => state.companyDetailsReducer.fetchCompanyTag);
  const sigleCompanyTag = useSelector((state) => state.companyDetailsReducer.sigleCompanyTag);
  const [taggedCompany,setTaggedCompany]=useState(false);
  useEffect(() => {
    if (Object.keys(errObj).length) {
      setIsApiFailed(true);
    }
    if (!Object.keys(errObj).length) {
      setIsApiFailed(false);
    }
  }, [Object.keys(errObj).length]);

  useEffect(()=>{
    dispatch(resetCompanyTag());
    dispatch(getCompanyTag(companyDetails?.id));    
  },[companyDetails])

  useEffect(()=>{
    console.log(fetchCompanyTag.length,Object.keys(sigleCompanyTag).length,'chk len')
    if(fetchCompanyTag.length || Object.keys(sigleCompanyTag).length){
      setTaggedCompany(true);
    }else{
      setTaggedCompany(false);
    }
  },[fetchCompanyTag,sigleCompanyTag])
  
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

    const payload = {
      accountId: "string",
      companyId: 0,
      description: newPayload,
      emplaoyeeId: 0,
      id: 0,
      iscompany: true,
      iscorrected: true,
      reportedDate: "2023-05-02T18:09:08.156Z",
      userId: "string",
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

  const downloadExcel = (id) => {
    //alert("g"+id)
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // dispatch(downloadCompany(companySelectedFilterList, "exl"));
      dispatch(downloadCompany([id], "exl"));
    }
  };
  const downloadPDF = (id) => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // dispatch(downloadCompany(companySelectedFilterList, "pdf"));
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
      const userInfo= JSON.parse(window.sessionStorage.getItem('userInfo'));
      const payload = {
        company: companyDetails,
        text: tagValues.tagname,
        userId: userInfo.id,
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
    <div className=" navbar-light" id="onScroll">
      <div
        className={`headercontainer ${
          isCompanyBoxHeightFixed ? "setauto" : ""
        }`}
      >
        <div className="logobox">
          <img src={companyDetails?.companyLogoUrl} />
        </div>

        <div className="descbox">
          {/* <div className="fs-12">{companyDetails?.industry?.name}</div> */}
          <div className="font-weight-bold mb-2 companyname">
            <h3>{companyDetails?.name}</h3>
            <div className="">
              <span className="">
                {renderSocialLinks(companyDetails?.socialLinks)}
              </span>
            </div>
          </div>
          <div className="headerblk2">
            <div className="fs-12">
              <span className=" text-black la la-map-marker mr-2"></span>
              <strong className="mr-2">Address</strong>
              {companyDetails?.address}
            </div>
          </div>
          <div className="headerblk2">
            <div>
              <span className=" la text-black  la-mobile fs-20 mr-2"></span>
              <strong className="mr-2 fs-12">Phone</strong>
              <span className="fs-12"> {companyDetails?.phoneNo} </span>
            </div>
            <div className="fs-12">
              <span
                className="text-black la  la-globe mr-2"
                aria-hidden="true"
              ></span>
              <strong className="mr-2">Website</strong>
              <Link
                className=" fs-12 font-weight-normal text-dark"
                title=""
                to={`http://${companyDetails?.wedsite}`}
                target="_blank"
              >
                {companyDetails?.wedsite}
              </Link>
            </div>
          </div>

          <div
            className={`companyintro ${
              isCompanyBoxHeightFixed ? "setauto" : ""
            }`}
          >
            {/* <h3>Overview</h3> */}
            <div>
              <strong className="mr-2">Description of business</strong>{" "}
              {companyDetails?.introduction}
            </div>
          </div>
          {companyDetails?.introduction && (
            <span className="readmoreoverview" onClick={toggleCompanyHeight}>
              {isCompanyBoxHeightFixed ? "Hide..." : "Read more..."}
            </span>
          )}
        </div>

        {/* <div className=" d-flex social-icons fs-12 ml-3 pl-2">
          <span className="  mr-2">
            {renderSocialLinks(companyDetails?.socialLinks)}
          </span>
        </div> */}
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
                onClick={() => downloadExcel(companyDetails?.id)}
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
        !taggedCompany?
        <Modal
          title="Save Search"
          width={"400px"}
          closable={true}
          open={openTagModal}
          onCancel={closeTagModal}
          onOk={onConfrim}
        >
          <div class="pop-up errorformcontainer ">
            <div className="form">
              <div className="formcol1">
                <label>Search Name</label>
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
            {/* <div className="form">
              <div className="formcol1">
                <label>Description</label>
              </div>
              <div className="formcol2">
                <TextArea
                  name="description"
                  placeholder="Description"
                  value={tagValues.description}
                  rows={2}
                  maxLength={100}
                  onChange={onTagInputChange}
                />
              </div>
            </div> */}
          </div>
        </Modal>:
        <Modal
        title=""
        width={"400px"}
        closable={true}
        open={openTagModal}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={closeTagModal}
          >
            OK
          </Button>,
        ]}
      >
        <div class="pop-up errorformcontainer ">
          <p>Already Tagged!</p>
        </div>
      </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
export default SummaryHeader;
