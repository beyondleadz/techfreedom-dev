import React, { useEffect, useState } from "react";
import logo from "../../assets/images/d-bank1.png";
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
          <div><span className=" fa  fa-map-marker mr-2"></span><strong>Address</strong>
          410 Terry Ave N, Seattle, Washington 98109, US</div>
          <div><span className=" fa  fa-globe mr-2" aria-hidden="true"></span><strong>Website</strong><a data-ceid="company_website" title="Amazon website" target="_blank" rel="nofollow noreferrer" href="https://www.amazon.com">
                                        https://www.Deutsche.com</a></div>
        </div>
        <div className="descbox1">
          <div>Is this company data relevant to you? <a href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i className="right-icons fa fa-thumbs-up" aria-hidden="true"></i></a></div>
          <div font-weight-bold><button className="btn btn-outline-dark font-weight-bold mr-2 p-1">Realy Not</button>
          <button className="btn btn-outline-dark font-weight-bold mr-2 p-1">Yes!</button></div>
        </div>
        <div className="buttons-container">
                 <ul className="d-flex  m-mt">
                 <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i className="right-icons la la-file-pdf" aria-hidden="true"></i>
                  </a></li>
                         
              
                
              <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false">
                    <i className="right-icons la la-star" aria-hidden="true"></i>
                  </a>
                </li>
                <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false">
                    <i className="right-icons las la-flag" aria-hidden="true"></i>
                  </a>
                </li>


              </ul>
            </div>
      </div>
      <div className="navigation ">
        <ul className="nav" id="myTabjustified" role="tablist">
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
              <i className="fa fa-city pr-2" style={{"color":"#5D44FF"}}></i>Summary
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
              <i className="fa fa-suitcase pr-2" style={{"color":"#5D44FF"}}></i>filter By Dept.</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CompanySummary;
