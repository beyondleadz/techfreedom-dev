import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.jpg";
const CompanySummary = () => {
  useEffect(() => {
    const content = document.getElementById("onScroll");
    window.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      var position = window.scrollY;
      if (position > 150) {
        content.classList.add("onscroll");
      }else{
        content.classList.remove("onscroll");
      }

      console.log(e, "slkjdflsk", position);
    });
  });

  return (
    <div className="shadow navbar-light" id="onScroll">
      {/* <h3 className="card-body font-weight-bold">Company Summary</h3> */}
      <div className="headercontainer">
        <div className="logobox">
          <img src={logo} />
        </div>

        <div className="descbox">
          <div className="fs-12">INVESTMENT FIRM</div>
          <div font-weight-bold><h3>Deutsche Bank</h3></div>
        </div>
        <div className="buttons-container">
                 <ul className="d-flex  m-mt">
                <li>
                  <a
                    className="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {/* <i className="pdf-img" aria-hidden="true"></i> */}
                    <i className="right-icons la la-file-pdf" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-file-excel" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-print" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons las la-share-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-star" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons las la-flag" aria-hidden="true"></i>
                  </a>
                </li>






              </ul>
            </div>
      </div>
      <div className="navigation ">
        <ul className="nav nav-tabs" id="myTabjustified" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i className="fa fa-city pr-2" style={{"color":"#5D44FF"}}></i>Company Summary
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <i className="fa fa-user-friends pr-2" style={{"color":"#5D44FF"}}></i>Employees
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i className="fa fa-sitemap pr-2" style={{"color":"#5D44FF"}}></i>Org Chart
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i className="tab-img las la-code-branch"></i>filter By Dept.
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CompanySummary;
