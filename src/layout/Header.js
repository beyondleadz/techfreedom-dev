import React, { useEffect, useRef, useState } from "react";
import { useRoutes, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Popover, Button, Input, Modal } from "antd";
// import { useRoutes, NavLink, redirect, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToken, getUserInfo } from "../utils/utils";
import Logo from "../assets/images/logo.svg";
import Logo1 from "../assets/images/logo-gecko.svg";
import "../assets/css/dropdown1.css";
import "../assets/css/line-awesome.css";
import "../assets/css/line-awesome.min.css";
import { doLogin } from "../actionCreator/signUpActionCreater";
import { topSearch, selectItem,topSearchClick} from "../actionCreator/headerActionCreater";
import TrialModal from "../common/TrialModal";
import {
  getAccountInfo,
  updateAccountInfo,
} from "../actionCreator/commonActionCreator";

const Header = (props) => {
  const topSearchValue = useSelector(
    (state) => state?.HeaderReducer?.topSearchValue
  );
  const searchRef = useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState();
  const [dropDownToggle, setDropdownToggle] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("Advanced");
  const [showModal, setShowModal] = useState(false);
  const [searchValue,setSearchValue] = useState(topSearchValue);
  const [searchValues, setSearchValues] = useState({
    fname: "",
    lname: "",
    email: "",
    fnameError: "",
    lnameError: "",
    emailError: "",
  });
  const navigate = useNavigate();
  const token = useSelector((state) => state?.SignUpReducer?.signInData);
  
  
  const selectedItem = useSelector(
    (state) => state?.HeaderReducer?.selectedItem
  );
  const userAccountInfo = useSelector(
    (state) => state?.CommonReducer?.accountInfo
  );
  const toggleNav = (ele) => {
    setShowNav(!showNav);
  };
  const toggleDropdown = () => {
    setDropdownToggle(!dropDownToggle);
  };

  useEffect(() => {
    console.log(location.pathname,'header location.pathname')
    if (location.pathname === "/search-executive") {
      dispatch(selectItem("Executive"));
    } else if (location.pathname === "/search-company") {
      dispatch(selectItem("Company"));
    } else {
      dispatch(selectItem("Company"));
      dispatch(topSearch(""));
      setSearchValue("")      
    }
  }, [location.pathname]);

  const setValue = (val, btn = false) => { 
    //if (val == "Advanced") {
    //setShowModal(true);
    //return;
    //}
     dispatch(selectItem(val));
    dispatch(topSearchClick(Math.random()));
    // setSelectedValue(val);
    if (!btn) {
      setDropdownToggle(!dropDownToggle);
    }
    dispatch(topSearch(searchValue));
    
    if (val === "Company") { 
      navigate("/search-company");
    } else {
      navigate("/search-executive");
    }
  };

  const doLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("subscriptionuserInfo");
    navigate("/");
  };

  const showSetting = () => {
    const { id, email, firstName, lastName } = getUserInfo();
    setSearchValues({ fname: firstName, lname: lastName, email: email });
    // console.log(Object.keys(userAccountInfo).length,'bjhghgf')
    if (Object.keys(userAccountInfo).length) {
    } else {
      dispatch(getAccountInfo(getToken()));
    }
    setShowModal(true);
  };

  const updatePassword = () => {};

  const onInputChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const updateSetting = () => {
    if (!searchValues.fname) {
      setSearchValues({
        ...searchValues,
        fnameError: "error",
      });
    } else if (!searchValues.lname) {
      setSearchValues({
        ...searchValues,
        lnameError: "error",
      });
    } else if (!searchValues.email) {
      setSearchValues({
        ...searchValues,
        emailError: "error",
      });
    } else {
      userAccountInfo.firstName = searchValues.fname;
      userAccountInfo.lastName = searchValues.lname;
      userAccountInfo.email = searchValues.email;
      dispatch(updateAccountInfo(getToken(), userAccountInfo));
      setShowModal(false);
    }
  };

  const content = (
    <div className="fontf">
      <p className="fs-12" onClick={showSetting}>
        <i className=" text-center fs-16 pop-img las la-cog"></i>Setting
      </p>
      <p className="fs-12" onClick={updatePassword}>
        <i className=" text-center fs-16 pop-img las la-user-lock"></i>Password
      </p>
      <p className="fs-12" onClick={doLogout}>
        <i className=" text-center fs-16 pop-img las la-sign-out-alt"></i>Sign
        out
      </p>
    </div>
  );

  const handleSetValue = (event) => {
    console.log(event,'slkjdfskd')
    setSearchValue(event.target.value)
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
    //console.log('enter press here! ',selectedItem,searchRef.current.value)
    setValue(selectedItem, true);
    }
    }
  //console.log(selectedItem, "sdfd");

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke px-0">
          <div className="brand">
          <h1>
            <NavLink to={"/"} className="navbar-brand">
               <img className="logo-H" src={Logo1} /><img src={Logo} />
            </NavLink>
          </h1>
          </div>
          <button
            className={
              (showNav ? "navbar-toggler" : "navbar-toggler collapsed") +
              "  bg-gradient"
            }
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded={showNav ? true : false}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>
          <div
            className={(showNav ? "show" : "") + " collapse navbar-collapse"}
            id="navbarTogglerDemo02"
          >
            <div className="search-advance">
              <div className="search-box position-relative">
                <input
                  type="search"
                  // ref={searchRef}
                  // defaultValue={topSearchValue}
                  value={searchValue}
                  placeholder="Search"
                  name="search"
                  className="search-popup"
                  onChange={handleSetValue}
                  onKeyPress={handleKeyPress}
                />
                <button
                  type="button"
                  className="btn search-btn"
                  onClick={() => setValue(selectedItem, true)}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>

              <div className="selected-area">
                <div className="selected" onClick={toggleDropdown}>
                  {
                    //  console.log( window.location.href,' window.location.href',window.location.href.includes("executive"))
                  }
                  {selectedItem}
                  <span className="fa"></span>
                </div>
                <ul className={dropDownToggle ? "show" : ""}>
                  {/* <li
                    className="selected-field"
                    onClick={() => setValue("Advanced")}
                  >
                    Advanced
                  </li> */}
                  <li
                    className="selected-field"
                    onClick={() => setValue("Company")}
                  >
                    <i className="fa fs-14 pop-img la la-building"></i>Company
                  </li>
                  <li
                    className="selected-field"
                    onClick={() => setValue("Executive")}
                  >
                    <i className="fa fs-16 pop-img la la-user-tie"></i>Executive
                  </li>
                </ul>
              </div>
              {/* </div> */}
              {!getToken() ? (
                <>
                  <div className="navbar-drop">
                    <div className="dropdown-menu1">
                      <button className="dropbtn">
                        More
                        <i className="fa fa-caret-down ml-1"></i>
                      </button>
                      <div className="dropdown-menu-content">
                        <div className="row">
                          <div className="column-left">
                            <h2>Capabilities</h2>
                            {/* <i className="icondrop leads"></i>                       */}
                            <i className="icondrop las la-user-friends"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Leads </h3>
                              <span className="menu-sub">
                                Profile your ideal customers and build your
                                leads
                              </span>
                              </NavLink>

                            {/* <i className="icondrop list-building-icon"></i> */}
                            <i className="icondrop text-success la la-user-plus"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> List Building </h3>
                              <span className="menu-sub">
                                Create a list of potential customers{" "}
                              </span>
                              </NavLink>

                            {/* <i className="icondrop enrichment"></i> */}
                            <i className="icondrop la la-cloud-upload-alt"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Data Enrichment </h3>
                              <span className="menu-sub">
                                Match and append data{" "}
                              </span>
                              </NavLink>
                          </div>
                          <div className="column1">
                            {/* <i className="icondrop extension"></i> */}
                            <i className="icondrop las la-link"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Extension </h3>
                              <span className="menu-sub">
                                Build data through Linkedin and Web real time
                              </span>
                              </NavLink>

                            {/* <i className="icondrop integrations"></i> */}
                            <i className="icondrop la la-plug"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Intigrations </h3>
                              <span className="menu-sub">
                                Integrate with your existing crm or app{" "}
                              </span>
                              </NavLink>
                          </div>

                          <div className="column">
                            <h2>Functions</h2>

                            {/* <i className="icondrop sales"></i> */}
                            <i className="icondrop la la-handshake"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Sales </h3>
                              <span className="menu-sub">
                                Find more leads and build your pipeline{" "}
                              </span>
                              </NavLink>

                            {/* <i className="icondrop marketing"></i> */}
                            <i className="icondrop la la-briefcase"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Marketing </h3>
                              <span className="menu-sub">
                                Profile your targeted audience{" "}
                              </span>
                              </NavLink>

                            {/* <i className="icondrop recruiters"></i> */}
                            <i className="icondrop la la-user-tie"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> HR & Recruiting </h3>
                              <span className="menu-sub">
                                Reach out to top hiring talent and companies{" "}
                              </span>
                              </NavLink>
                          </div>

                          <div className="column">
                            <h2>Industries</h2>
                            {/* <i className="icondrop hospitality-travel"></i> */}
                            <i className="icondrop las la-hotel"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Hospitality & Travel </h3>
                              <span className="menu-sub">
                                Streamline your Marketing efforts{" "}
                              </span>
                              </NavLink>

                            {/* <i className="icondrop technology"></i> */}
                            <i className="icondrop la la-microchip"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Technology </h3>
                              <span className="menu-sub">
                                Automate and Optimize lead generation{" "}
                              </span>
                              </NavLink>

                            {/* <i className="icondrop finance"></i> */}
                            <i className="icondrop la la-money-bill-wave"></i>
                            <NavLink to={"/more-menu-content"}>
                              <h3> Finance </h3>
                              <span className="menu-sub">
                                Gain insights into potential clients{" "}
                              </span>
                              </NavLink>
                            <span className="menu-sub">…more industries </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item ">
                <NavLink
                  to="/search-company"
                  className="hvr-underline-from-center"
                >
                  Company Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/search-executive"
                  className="hvr-underline-from-center"
                >
                  Executive Search
                </NavLink>
              </li>

              {getToken() ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/search-lead"
                      className="hvr-underline-from-center"
                    >
                      Leads
                    </NavLink>
                  </li>

                  <li className="nav-item">
                  <NavLink
                      to="/dashboard-view"
                      className="hvr-underline-from-center"
                    >
                      Dashboard
                    </NavLink>                    
                  </li>

                  <li className="nav-item mt-2 account">
                    {" "}
                    <Popover content={content} trigger="hover">
                      <div></div>
                    </Popover>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/features"
                      className="hvr-underline-from-center"
                    >
                      Features
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/pricing"
                      className="hvr-underline-from-center"
                    >
                      Pricing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div className="nav-item btn btn-login d-flex align-items-center">
                      <NavLink to={"/signin"}>
                        <i className="fas fa-desktop orng-clr-bg ml-1"></i>Login
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-item btn btn-login d-flex align-items-center">
                      <NavLink to={"/signup"}>
                        <i className="fas fa-bolt orng-clr-bg ml-1"></i>start
                        free trial
                      </NavLink>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
      <Modal
        title="Settings"
        open={showModal}
        closable={true}
        buttonText="Save"
        onCancel={closeModal}
        onOk={updateSetting}
        width={"400px"}
      >
        <div className="pop-up errorformcontainer ">
          <div className="form">
            <div className="formcol1">
              <label>First name</label>
            </div>
            <div className="formcol2">
              <Input
                name="fname"
                status={searchValues?.fnameError}
                value={searchValues.fname}
                placeholder="First Name"
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="form">
            <div className="formcol1">
              <label>Last name</label>
            </div>
            <div className="formcol2">
              <Input
                name="lname"
                status={searchValues?.lnameError}
                value={searchValues.lname}
                placeholder="Last Name"
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="form">
            <div className="formcol1">
              <label>Email</label>
            </div>
            <div className="formcol2">
              <Input
                name="email"
                status={searchValues?.emailError}
                value={searchValues.email}
                placeholder="Email"
                onChange={onInputChange}
              />
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
};
export default Header;
