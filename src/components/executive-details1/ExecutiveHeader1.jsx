import React, { useEffect, useState } from "react";
import logo from "../../assets/images/d-bank1.png";
const ExecutiveDetails1 = () => {
  // useEffect(() => {
  //   const content = document.getElementById("onScroll");
  //   window.addEventListener("scroll", (e) => {
  //     var scrolled = document.scrollingElement.scrollTop;
  //     var position = window.scrollY;
  //     if (position > 150) {
  //       content.classList.add("onscroll");
  //     }else{
  //       content.classList.remove("onscroll");
  //     }

  //     console.log(e, "slkjdflsk", position);
  //   });
  // });

  return (
    <div className=" navbar-light" id="onScroll">
      {/* <h3 className="card-body font-weight-bold">Company Summary</h3> */}
      <div className="breadcrum ml-4 mt-3 fs-14">Home / Search Executive / Executive Details</div>
      {/* <div className="headername">
                <div className="font-weight-bold mb-2 "><h3>Bob Whelen</h3></div>
          </div>
          <div className="row">
            <div className="card shadow ml-5 mr-5">
      <div className="executiveheader">
      
        <div className="executivelogobox">
          BW
        </div>

        <div className="executivedescbox ">
          <div className="row mb-3">
            <div className="col"><h5>Designation</h5>Global Head of Real Estate, Facilities & Security</div>
            <div className="col"><h5>Company</h5><span className="text-info font-weight-bold">Dun & Bradstreet</span></div>
          </div>
          <div className="row pt-3 mb-3">
          <div className="col"><h5>Email</h5> <i className=" fs-23 mr-2 align-middle la la-envelope text-black"></i><span>View Email</span></div>
          <div className="col"><h5>Phone</h5>(206) 266-1000</div>
          <div className="col"><h5>Social</h5>
            <i className="lab fs-20 facebook lab la-facebook"></i>
<i className="lab fs-20  twitter la la-twitter-square"></i>
<i className="lab fs-20 linkedin lab la-linkedin"></i></div>
          </div>
          <div className="row pt-3 pb-3">
            <div className="col"><h5>Overview</h5> <span>Executive with strong experience in Large Account Management, P&L responsibility and leading high-caliber sales teams. Strong customer advocacy, communication and cross-group collaboration skills. 
            </span> <span className="btn text-info font-weight-bold">Read More..</span></div>
         
            </div>
          
        </div>
        
        {/* <div className="buttons-container">
                 <ul className="d-flex  m-mt">
                 <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i className="right-icons la la-file-pdf" aria-hidden="true"></i>
                  </a></li>
                         
                  <li><a className=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i className="right-icons la la-file-excel" aria-hidden="true"></i>
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
            </div> */}
      {/* </div>
      </div>
          </div> */} 
    </div>
  );
};
export default ExecutiveDetails1;
