import React, { useState } from "react";
import logo from "../../assets/images/Dun&Bradstreet.png";
import OrgChartImg from "../../assets/images/org-chart-employee-icon.png";

const ExecutiveContent1 = () => {
  const [showMore,setShowMore] = useState(false)
  const onClickShowMore = () => {
    setShowMore(!showMore)
  }

  

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-custom">
            <div className="row">
            <div className="headername">
                <div className="font-weight-bold mb-2 "><h3>Steve Pike</h3></div>
          </div>
                <div className="col-md-12">
                <div className="card shadow card-body">
                  
                <div className="executiveheader">
      
      <div className="executivelogobox">
       SP
      </div>

      <div className="executivedescbox ">
        <div className="row mb-3">
          <div className="col1 pl-4"><h5>Designation</h5>Global Head of Real Estate, Facilities & Security</div>
                    <div className="col"><h5>Company</h5><span className="text-info font-weight-bold">Dun & Bradstreet</span></div>
        </div>
        <div className="row pt-3 mb-3">
        <div className="col"><h5>Email</h5> <i className=" fs-23 mr-2 align-bottom la la-envelope text-black"></i><span>View Email</span></div>
        <div className="col"><h5>Phone</h5>(206) 266-1000</div>
        <div className="col"><h5>Social</h5>
          <i class="lab fs-20 facebook lab la-facebook"></i>
<i class="lab fs-20  twitter la la-twitter-square"></i>
<i class="lab fs-20 linkedin lab la-linkedin"></i></div>
        </div>
        <div className="row pt-3">
          <div className="col"><h5>Overview</h5> <span>Executive with strong experience in Large Account Management, P&L responsibility and leading high-caliber sales teams. Strong customer advocacy, communication and cross-group collaboration skills. 
          </span> <span className="btn text-info font-weight-bold">Read More..</span></div>
       
          </div>
        
      </div>
      </div>
                </div>
                  </div></div> 
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-4 mb-4">
                    <div className="">
                      <div className="navigation ">
                        <ul className="nav" id="myTabjustified" role="tablist">
                          <li className="nav-item mr-2" role="presentation">
                            <button
                              className="top-tabs1  active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              <i
                                className="text-black fa fa-user-friends pr-2" ></i>
                             Colleagues
                            </button>
                          </li>
                          <li className="executive">
                          <div className="buttons-c">
                          <ul className="d-flex  m-mt">
                            <li><div className="btn btn-outline-secondary pr-1 mr-2"><i className="fs-16 mr-1  la la-plus"></i>Create List</div></li>
                        
                            <li><div className="btn btn-outline-secondary pr-1 mr-4"><i className="fs-14 mr-1 fas fa-paper-plane"></i>Send Campaign</div></li>
                 <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i class="right-icons la la-file-pdf" aria-hidden="true"></i>
                  </a></li>
                         
                  <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false"><i class="right-icons la la-file-excel" aria-hidden="true"></i>
                  </a></li>
                
              <li><a class=" mr-2"href="#" id="" role="button" data-toggle=""aria-haspopup="true"
                    aria-expanded="false">
                    <i className="right-icons las la-tag" aria-hidden="true"></i>
                  </a>
                </li>
                 </ul>
                          </div>
                          </li>                                                  
                        </ul>
                        
                      </div>
                    </div>
                    <div className="card shadow card-body executive">
                      {/* <div className="buttons-container">
                        <div className="btn btn-outline-secondary pr-1 mr-2"><i className="fs-16 mr-1 text-light la la-envelope"></i>Create List</div>
                        <div className="btn btn-outline-secondary pr-1 mr-2"><i className="fs-16 mr-1 la la-envelope"></i>Send Campaign</div>
                      </div> */}
                    <div className="table-container text-nowrap">
                        <div className="table-wrapper">
                          <table className="data-table">
                            <thead>
                              <tr>
                                <th>
                                  <input type="checkbox" />
                                </th>
                                
                                <th>Executive Name</th>
                                <th>Designation</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Direct Dial/Mobile</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                               

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  fs-23 btn  la la-envelope text-black   "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                               <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                 <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                 <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                 <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="fs-23  btn la la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la la-envelope text-black "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="pagination">
                          <a href="#">Previous</a>
                          <a href="#">1</a>
                          <a href="#">2</a>
                          <a href="#">3</a>
                          <a href="#">4</a>
                          <a href="#">5</a>
                          <a href="#">Next</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </div>
            
            <div className="col-md-3 col-custom-2 executive">
            <div className="buttons-container">
            <div className="btn btn-outline-secondary mt-3 pr-2 "><i className="right-icons las la-flag" aria-hidden="true"></i>Report An Error</div>
            </div>
            <div className="card shadow  mb-4">
                <div className="card-header font-weight-bold">
                  Company Info
                </div>
                <div className="card-body c-info ">
                  <div className="c-info-detail">
                <div className=" executive-company mr-2 img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="c-info-desc">
                      <div><a className="font-weight-bold fs-16 text-dark"  title="" href="#" target="" > Dun & Bradstreet    </a>
                      </div>
                      
                    </div>                 
                  </div>
                 <div className="d-flex">
                 <div className="row pb-3">
                    <div className=" pl-3">
                    
                      <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-phone text-black"></i>Phone</h6><div className="pl-4 ">(206) 266-1000</div></div>
                      <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-map-marker text-black"></i>Location</h6><div className="pl-4 ml-1"> Okhla Industrial Estate Phase 3 Rd, New Delhi, Delhi 110020</div></div>
                      <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-users text-black"></i>Employees Ranges</h6><div className="pl-4 ml-1">1.0K to 5.0K</div></div>
                      <div className="fs-12"><h6><i class=" fs-16 mr-2  las la-industry text-black"></i>Industry</h6><div className="pl-4 ml-1">Commercial & professional services</div></div>
                      <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-globe text-black"></i>Website</h6><div className="pl-4 ml-1">https://www.dnb.co.in/</div></div>
                      <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-city text-black"></i>Company Type</h6><div className="pl-4 ml-1">Business information Credit & risk Sales & marketing Data analytics Supply & compliance</div></div>
                      <div className="fs-12"><h6><i class=" fs-16 mr-2  la la-money-check text-black"></i>Revenue Range</h6><div className="pl-4 ml-1"> $2,270 million to $2,315 million</div></div>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
              <div className="card shadow mt-2 mb-4">
                <div className="card-header font-weight-bold">
                  Similar Executive
                </div>
                <div className="card-body">
                  <div className="row brdr-b pl-2 pb-3">
                    <div className=" btn-circle btn-info">
                    JM
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          John Mathew
                        </a>
                      </div>
                      <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
                      
                    </div>
                  </div>
                  <div className="row mt-3 pl-2 brdr-b pb-3">
                  <div className=" btn-circle  btn-info">
                    JM
                    </div>
                    <div className="col ">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                         John Mathew
                        </a>
                      </div>
                      <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
                      
                    </div>
                  </div>
                  <div className="row pl-2 brdr-b pt-3 pb-3">
                  <div className=" btn-circle  btn-info">
                    BW
                    </div>
                    <div className="col executive">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          Bob Whelen
                        </a>
                      </div>
                      <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
                    </div>
                  </div>
                  <div className="row pl-2 brdr-b pt-3 pb-3">
                  <div className=" btn-circle btn-info">
                    BW
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          Bob Whelen
                        </a>
                      </div>
                      <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
                    </div>
                  </div>
                  <div className="row pl-2 pt-3 ">
                  <div className=" btn-circle btn-info">
                    BW
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          Bob Whelen
                        </a>
                      </div>
                      <div className="fs-12">Global Head of Real Estate, Facilities & Security</div>
                    </div>
                  </div>
                  <div className="fs-12 text-right">
                    <button className="btn btn-light mr-2 small">
                      5 More..
                    </button>
                  </div>
                </div>
              </div>
              <div className="card shadow descbox1 mb-3">
              <div class="card shadow descbox1">
                <div>Is this company data relevant to you? <a href="#" id="" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons small fa fa-thumbs-up" aria-hidden="true"></i></a><a href="#" id="" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons small fa fa-thumbs-down" aria-hidden="true"></i></a></div></div> 
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveContent1;
