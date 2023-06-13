import React, { useEffect, useRef, useState } from "react";
import { useRoutes, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Popover, Button } from "antd";
// import { useRoutes, NavLink, redirect, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../utils/utils";
import Logo from "../assets/images/logo.svg";
import MoreArrowImg from "../assets/images/arrow.png";
import "../assets/css/dropdown1.css";
import "../assets/css/line-awesome.css";
import "../assets/css/line-awesome.min.css";
import { doLogin } from "../actionCreator/signUpActionCreater";
import { topSearch, selectItem } from "../actionCreator/headerActionCreater";
import TrialModal from "../common/TrialModal";

const Header = (props) => {
  console.log(props, "sdfkllsj");
  const searchRef = useRef();
  const location = useLocation()
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState();
  const [dropDownToggle, setDropdownToggle] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("Advanced");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const token = useSelector((state) => state?.SignUpReducer?.signInData);
  const topSearchValue = useSelector(
    (state) => state?.HeaderReducer?.topSearchValue
  );
  const selectedItem = useSelector(
    (state) => state?.HeaderReducer?.selectedItem
  );
  const toggleNav = (ele) => {
    setShowNav(!showNav);
  };
  const handleProvinceChange = (value) => {
    // setCities(cityData[value]);
    // setSecondCity(cityData[value][0]);
  };
  const toggleDropdown = () => {
    setDropdownToggle(!dropDownToggle);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if(location.pathname === "/search-executive"){
      dispatch(selectItem('Executive'));
    }else if(location.pathname === "/search-company"){
      dispatch(selectItem('Company'));
    }else{
      dispatch(selectItem('Advanced'));
    }
    
    console.log(location,'locationlocation')
  },[location.pathname])

  const setValue = (val,btn=false) => { //console.log("986986968",val,selectedItem);
    if (val == "Advanced") {
      setShowModal(true);
      return;
    }
    dispatch(selectItem(val));
    // setSelectedValue(val);
    if(!btn){
    setDropdownToggle(!dropDownToggle);
  }
    dispatch(topSearch(searchRef.current.value));
    if (val === "Company") {
      navigate("/search-company");
    } else {
      navigate("/search-executive");
    }
  };

  const doLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userInfo");
    navigate("/");
  };

  const content = (
    <div className="fontf">
      <p className="fs-12">
        <i class=" text-center fs-16 pop-img las la-cog"></i>Setting
      </p>
      <p className="fs-12">
        <i class=" text-center fs-16 pop-img las la-user-lock"></i>Password
      </p>
      <p className="fs-12" onClick={doLogout}>
        <i class=" text-center fs-16 pop-img las la-sign-out-alt"></i>Sign out
      </p>
    </div>
  );

  console.log(selectedItem, "sdfd");

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke px-0">
          <h1>
            <NavLink to={"/"} className="navbar-brand">
              <img src={Logo} />
            </NavLink>
          </h1>
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
                  ref={searchRef}
                  defaultValue={topSearchValue}
                  // value={topSearchValue}
                  placeholder="Search"
                  name="search"
                  className="search-popup"
                />
                <button
                  type="button"
                  className="btn search-btn"
                  onClick={() => setValue(selectedItem,true)}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>

              <div className="selected-area">
                <div className="selected" onClick={toggleDropdown}>
                  {
                    console.log( window.location.href,' window.location.href',window.location.href.includes("executive"))
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
                    <i class="fa fs-14 pop-img la la-building"></i>Company
                  </li>
                  <li
                    className="selected-field"
                    onClick={() => setValue("Executive")}
                  >
                    <i class="fa fs-16 pop-img la la-user-tie"></i>Executive
                  </li>
                </ul>
              </div>
              {/* </div> */}

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
                        <a href="#">
                          <h3> Leads </h3>
                          <span className="menu-sub">
                            Profile your ideal customers and build your leads
                          </span>
                        </a>

                        {/* <i className="icondrop list-building-icon"></i> */}
                        <i className="icondrop text-success la la-user-plus"></i>
                        <a href="#">
                          <h3> List Building </h3>
                          <span className="menu-sub">
                            Create a list of potential customers{" "}
                          </span>
                        </a>

                        {/* <i className="icondrop enrichment"></i> */}
                        <i className="icondrop la la-cloud-upload-alt"></i>
                        <a href="#">
                          <h3> Data Enrichment </h3>
                          <span className="menu-sub">
                            Match and append data{" "}
                          </span>
                        </a>
                      </div>
                      <div className="column1">
                        {/* <i className="icondrop extension"></i> */}
                        <i className="icondrop las la-link"></i>
                        <a href="#">
                          <h3> Extension </h3>
                          <span className="menu-sub">
                            Build data through Linkedin and Web real time
                          </span>
                        </a>

                        {/* <i className="icondrop integrations"></i> */}
                        <i className="icondrop la la-plug"></i>
                        <a href="#">
                          <h3> Intigrations </h3>
                          <span className="menu-sub">
                            Integrate with your existing crm or app{" "}
                          </span>
                        </a>
                      </div>

                      <div className="column">
                        <h2>Functions</h2>

                        {/* <i className="icondrop sales"></i> */}
                        <i className="icondrop la la-handshake"></i>
                        <a href="#">
                          <h3> Sales </h3>
                          <span className="menu-sub">
                            Find more leads and build your pipeline{" "}
                          </span>
                        </a>

                        {/* <i className="icondrop marketing"></i> */}
                        <i className="icondrop la la-briefcase"></i>
                        <a href="#">
                          <h3> Marketing </h3>
                          <span className="menu-sub">
                            Profile your targeted audience{" "}
                          </span>
                        </a>

                        {/* <i className="icondrop recruiters"></i> */}
                        <i className="icondrop la la-user-tie"></i>
                        <a href="#">
                          <h3> HR & Recruiting </h3>
                          <span className="menu-sub">
                            Reach out to top hiring talent and companies{" "}
                          </span>
                        </a>
                      </div>

                      <div className="column">
                        <h2>Industries</h2>
                        {/* <i className="icondrop hospitality-travel"></i> */}
                        <i className="icondrop las la-hotel"></i>
                        <a href="#">
                          <h3> Hospitality & Travel </h3>
                          <span className="menu-sub">
                            Streamline your Marketing efforts{" "}
                          </span>
                        </a>

                        {/* <i className="icondrop technology"></i> */}
                        <i className="icondrop la la-microchip"></i>
                        <a href="#">
                          <h3> Technology </h3>
                          <span className="menu-sub">
                            Automate and Optimize lead generation{" "}
                          </span>
                        </a>

                        {/* <i className="icondrop finance"></i> */}
                        <i className="icondrop la la-money-bill-wave"></i>
                        <a href="#">
                          <h3> Finance </h3>
                          <span className="menu-sub">
                            Gain insights into potential clients{" "}
                          </span>
                        </a>
                        <span className="menu-sub">…more industries </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <NavLink to="/search-lead" className="hvr-underline-from-center">
                      Leads
                    </NavLink>
                  </li>

                  <li className="nav-item mt-3">
                    <NavLink>
                      <i className="bell ml-1"></i>{" "}
                    </NavLink>
                  </li>

                  <li className="nav-item mt-2 account">
                    {" "}
                    <Popover content={content} trigger="hover">
                      <div></div>
                    </Popover>
                  </li>
                  {/* <li className="nav-item">
                  <div
                    className="nav-item btn btn-login d-flex align-items-center"
                    onClick={doLogout}
                  >
                    <i className="fas fa-desktop orng-clr-bg ml-1"></i>Logout
                  </div>
                </li> */}
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
      <TrialModal
        openModal={showModal}
        closeModal={closeModal}
        buttonText="OK"
        modalBody={
          <div id="small-dialog2">
            <p style={{ color: "#0000FF" }}>Please select company/executive.</p>
          </div>
        }
        modalWidth="400px"
      />
    </header>
  );
};
export default Header;
