import React, { useState } from "react";
import { useRoutes, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import "../assets/css/dropdown1.css";
const Header = () => {
  const [showNav, setShowNav] = useState();
  const toggleNav = (ele) => {
    setShowNav(!showNav);
  };
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
            <div className=" navbar">
              <div className="search">
                <div className="search-box position-relative">
                  <input
                    type="search"
                    placeholder="Search"
                    name="search"
                    required="required"
                    autofocus=""
                    className="search-popup"
                  />
                  <button type="submit" className="btn search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>

                  <div className="section_room">
                    <select id="country" onChange="change_country(this.value)"
                      className=" required" >
                      <option className="frm-field" value="null">Advanced</option>
                      <option className="frm-field" value="AX">Company</option>
                      <option className="frm-field" value="AX">Executive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-drop">
              <div className="dropdown-menu1">
                <button className="dropbtn">
                  More
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-menu-content">
                  <div className="row">
                    <div className="column-left">
                      <h2>Capabilities</h2>
                      <i className="icondrop leads"></i>
                      <a href="#">
                        <h3> Leads </h3>
                        <span className="menu-sub">
                        Profile your ideal customers and build your leads
                        </span>
                      </a>

                      <i className="icondrop list-building-icon"></i>
                      <a href="#">
                        <h3> List Building </h3>
                        <span className="menu-sub">
                        Create a list of potential customers{" "}
                        </span>
                      </a>

                      <i className="icondrop enrichment"></i>
                      <a href="#">
                        <h3> Data Enrichment </h3>
                        <span className="menu-sub">
                        Match and append data{" "}
                        </span>
                      </a>

                      
                    </div>
                    <div className="column1">
                      <i className="icondrop extension"></i>
                      <a href="#">
                        <h3> Extension </h3>
                        <span className="menu-sub">
                        Build data through Linkedin and Web real time
                        </span>
                      </a>

                      <i className="icondrop integrations"></i>
                      <a href="#">
                        <h3> Intigrations </h3>
                        <span className="menu-sub">
                        Integrate with your existing crm or app{" "}
                        </span>
                      </a>
                    </div>

                    <div className="column">
                      <h2>Functions</h2>

                      <i className="icondrop sales"></i>
                      <a href="#">
                        <h3> Sales </h3>
                        <span className="menu-sub">
                        Find more leads and build your pipeline{" "}
                        </span>
                      </a>

                      <i className="icondrop marketing"></i>
                      <a href="#">
                        <h3> Marketing </h3>
                        <span className="menu-sub">
                        Profile your targeted audience{" "}
                        </span>
                      </a>

                      <i className="icondrop recruiters"></i>
                      <a href="#">
                        <h3> HR & Recruiting </h3>
                        <span className="menu-sub">
                        Reach out to top hiring talent and companies{" "}
                        </span>
                      </a>
                    </div>

                    <div className="column">
                      <h2>Industries</h2>
                      <i className="icondrop hospitality-travel"></i>
                      <a href="#">
                        <h3> Hospitality & Travel </h3>
                        <span className="menu-sub">
                        Streamline your Marketing efforts{" "}
                        </span>
                      </a>

                      <i className="icondrop marketing"></i>
                      <a href="#">
                        <h3> Technology </h3>
                        <span className="menu-sub">
                        Automate and Optimize lead generation{" "}
                        </span>
                      </a>

                      <i className="icondrop finance"></i>
                      <a href="#">
                        <h3> Finance </h3>
                        <span className="menu-sub">
                        Gain insights into potential clients{" "}
                        </span>
                      </a>
                      <span className="menu-sub">
                      …more industries{" "}
                        </span>
                       
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
                  to="/executive-search"
                  className="hvr-underline-from-center"
                >
                  Executive Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/features" className="hvr-underline-from-center">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className="hvr-underline-from-center">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="nav-item btn btn-login d-flex align-items-center">
                  <NavLink to={"/signin"}>
                    <i className="fas fa-desktop orng-clr-bg"></i>Login
                  </NavLink>
                </div>
              </li>

              <li className="nav-item">
                <div className="nav-item btn btn-login d-flex align-items-center">
                  <NavLink to={"/signup"}>
                    <i className="fas fa-bolt orng-clr-bg"></i>start free trial
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
