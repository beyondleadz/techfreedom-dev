import React, { useEffect, useState, useMemo } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/icici.jpg";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import AboutCompany from "./AboutCompany";
import KeyExecutives from "./KeyExecutives";
import OrgChart from "./OrgChart";
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
} from "../../actionCreator/companyDetailsActionCreator";

const SummaryContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [dropDownToggle, setDropdownToggle] = useState(false);
  const [tabActiveKey, setTabActiveKey] = useState("1");
  const [similarList, setSimilarList] = useState();
  const [similarCount, setSimilarCount] = useState(5);
  const [selectedValue, setSelectedValue] = useState("Filter by Department");
  const [departmentAllList, setDepartmentAllList] = useState();
  const departmentList = useSelector(
    (state) => state.companyDetailsReducer.departmentList
  );
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const similarCompanyList = useSelector(
    (state) => state.companyDetailsReducer.similarCompanyList
  );

  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
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
      similarCompanyList.length < 5 ? similarCompanyList.length : 5
    );
  }, [similarCompanyList]);

  useEffect(()=>{
    const dpt=[{id:0,name:'All'},...departmentList];
    setDepartmentAllList(dpt);
  })

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

  const renderSimilarCompanyList = () => {
    let similarList = [];
    for (let i = 0; i < similarCount; i++) {
      similarList.push(
        <div className="similarinnerblk">
          <div className="s-company img-responsive">
            <img src={similarCompanyList[i]?.companyLogoUrl || defaultLogo} />
          </div>
          <div className="similar-desc">
            <div>
              <a className="font-weight-bold fs-14 text-dark" title="">
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
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4 mb-4 summarycontainer">
            <div>
              <Tabs
                // defaultActiveKey="1"
                activeKey={tabActiveKey}
                items={items}
                onChange={onChange}
                type="card"
              />
            </div>
            <div className="departmentcontainer ">
              <div className="selectedlabel fa" onClick={toggleDropdown}>
                <i className="text-black fa fa-suitcase pr-2"></i>
                <span>{selectedValue}</span>
              </div>
              <ul
                className={`departmentOptions ${dropDownToggle ? "show" : ""}`}
              >
                {departmentAllList?.map((item) => {
                  return (
                    <li key={item?.id} onClick={() => setValue(item)}>
                      {item?.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <div className="excelcontainer ">
              <li>
                <a
                  class=" btn btn-outline-success fs-18"
                  href="#"
                  id=""
                  role="button"
                  data-toggle=""
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    class="right-icons la la-file-excel"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </div> */}
            <div className="excelcontainer">
                 <ul className="d-flex  m-mt">
                 <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i class="right-icons la la-file-pdf" aria-hidden="true"></i>
                  </a></li>
                         
                  <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i class="right-icons la la-file-excel" aria-hidden="true"></i>
                  </a></li>
                
              <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false">
                    <i className="right-icons la la-tag" aria-hidden="true"></i>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default SummaryContent;
