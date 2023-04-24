import React, { useEffect, useState } from "react";
import logo from "../../assets/images/d-bank1.png";
const CompanySummary = () => {
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
      <div className="headercontainer">
        <div className="logobox">
          <img src={logo} />
        </div>

        <div className="descbox">
          <div className="fs-12">INVESTMENT FIRM</div> 
          <div className="font-weight-bold mb-2 "><h3>Deutsche Bank</h3></div>
          <div className="fs-12"><span class=" text-black la la-map-marker mr-2"></span><strong className="mr-2">Address</strong>
          410 Terry Ave N, Seattle, Washington 98109, US</div>
          <div><span class=" la text-black  la-mobile fs-20 mr-2"></span><strong className="mr-2 fs-12">Phone</strong>
          <span className="fs-12">(206) 266-1000 </span> </div> 
          <div className="fs-12"><span className="text-black la  la-globe mr-2" aria-hidden="true"></span><strong className="mr-2">Website</strong>
          <a class=" fs-12 font-weight-normal text-dark" title="" href="https://www.Deutsche.com" target="_blank"> https://www.Deutsche.com</a></div>
                                       
        </div>
        <div className=" d-flex social-icons fs-12 ml-3 pl-2">
                                          <span className="  mr-2"> 
<i class="lab fs-20 facebook lab la-facebook"></i>
<i class="lab fs-20  twitter la la-twitter-square"></i>
<i class="lab fs-20 text-info  lab la-linkedin"></i>
{/* <i class="fab fa-github me-2"></i>
<i class="fab fa-whatsapp me-2"></i>*/}</span> 
          </div>         
        <div className="buttons-container">
                 <ul className="d-flex  m-mt">
                 <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i class="right-icons la la-file-pdf" aria-hidden="true"></i>
                  </a></li>
                         
                  <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i class="right-icons la la-file-excel" aria-hidden="true"></i>
                  </a></li>
                
              <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false">
                    <i className="right-icons la la-star" aria-hidden="true"></i>
                  </a>
                </li>
                <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false">
                    <i className="right-icons las la-flag" aria-hidden="true"></i>
                  </a>
                </li>


              </ul>
            </div>
      </div>
     
    </div>
  );
};
export default CompanySummary;
