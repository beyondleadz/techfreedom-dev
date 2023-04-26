import React, { useState } from "react";
import logo from "../../assets/images/icici.jpg";
import OrgChartImg from "../../assets/images/org-chart-employee-icon.png";

const SummaryContent = () => {
  const [showMore,setShowMore] = useState(false)
  const onClickShowMore = () => {
    setShowMore(!showMore)
  };

 
  

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-custom">
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
                                className="text-black fa fa-city pr-2" ></i>
                              About Company
                            </button>
                          </li>
                          <li className="nav-item mr-2" role="presentation">
                            <button
                              className="top-tabs1 "
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              <i
                                className="text-black fa fa-user-friends pr-2"></i>{" "}
                              Key Executives
                            </button>
                          </li>
                          <li className="nav-item mr-2" role="presentation">
                            <button
                              className="top-tabs1 "
                              id="contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#contact"
                              type="button"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              <i
                                className="text-black fa fa-suitcase pr-2"></i>{" "}
                              Filter by Department
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="top-tabs1"
                              id="contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#contact"
                              type="button"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              <i
                                className="text-black fa fa-sitemap pr-2"></i>
                              Org.Chart
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card shadow card-body">
                      <div class="container">
                        <div className="row  mb-2 w-100- fs-14">
                        
                          <div className="row c-details w-100- ">
                            <div className="col mt-3 w-col-3">
                              <div>
                                <i className="text-black la  la-users mr-2"></i>
                                <strong>Employees Range</strong>
                              </div>
                              <div className="gap-l">
                              687,052-809,221
                               
                              </div>
                            </div>
                            <div className="col mt-3 w-col-3">
                              <div>
                                <i className="  text-black las fs-16 la-money-check mr-2"></i>
                                <strong>Revenue Range</strong>
                              </div>
                              <div className="gap-l">$280.52 billion</div>
                            </div>
                            <div className="col mt-3 w-col-3">
                              <div>
                                <i
                                  className=" text-black la la-city mr-2"
                                  aria-hidden="true"
                                ></i>
                                <strong>Company Type</strong>
                              </div>
                              <div className="gap-l">Banking, Finance</div>
                            </div>
                          </div>
                        
                          <div className="row c-details w-100-">
                            <div className="col mt-3 w-col-3">
                              <div>
                                <i className=" text-black las la-industry mr-2"></i>
                                <strong>Industry</strong>
                              </div>
                              <div className="gap-l">Banking, Finance</div>
                            </div>
                            <div className="col mt-3 w-col-3">
                              <div>
                                <i className=" mr-2 text-black fs-18 las la-cog"></i>
                                <span className="font-weight-bold">
                                  Technographics
                                </span>
                              </div>
                              <div className="gap-l">
                                JavaScript, HTML, PHP
                                       </div>
                            </div>
                            <div className="col mt-3 w-col-3">
                              <div>
                                <i className=" mr-2 text-black fs-18 las la-calendar"></i>
                                <span className="font-weight-bold">
                                  Updated on <div className="gap-l font-weight-normal">Wednesday, April 26, 2023</div>
                                </span>
                              </div>
                             
                            </div>
                          </div>

                          <div className="row c-details w-100-">
                            
                          <div className="col mt-3 w-col-3">
                              <div>
                                <i className=" text-black fs-18 las la-suitcase mr-2"></i>
                                <strong>Discription of business</strong>
                              </div>
                              <div className="gap-l">
                                <span>Deutsche Bank, a Frankfurt </span> 
                                
                               
                                <div className={showMore ? "" : "softexpand"}>
                                                                 
                                <div>-based global investment bank, </div><div>offers financial products and services to </div><div>corporate and institutional clients.</div>
                                </div>
                                <button class="btn btn-light mr-2 " onClick={onClickShowMore}>
                                  {showMore ? "Hide.." : "More.."}
                                </button>
                              </div>
                            </div>
                            <div className="col mt-3 w-col-3">
                              <div>
                                <i className=" text-black fs-18 las la-suitcase mr-2"></i>
                                <strong>Product and Services</strong>
                              </div>
                              <div className="gap-l">
                                <span>Retail, </span>
                                <span>Internet, </span>
                                <span>e-Commerce, </span> 
                                
                               
                                <div className={showMore ? "" : "softexpand"}>
                                                                  
                                <div>Software, Business Development, </div><div>Crowdsourcing, Retail Software,Delivery,</div><div> Operations,
                                  Administrative Services,</div><div> Records, Videos &amp; Books, Delivery Service,</div> <div>Television Stations, Transportation,</div><div> Broadcasting, E-Commerce,
                                  Cable &amp; </div><div>Satellite, Commerce and Shopping, Media &amp;</div><div> Internet, Telecommunications,
                                  Internet </div><div>Services, SaaS, Shipping, Software </div><div>Development, Consumer Electronics &amp; </div><div>Computers
                                </div></div>
                                <button class="btn btn-light mr-2 " onClick={onClickShowMore}>
                                  {showMore ? "Hide.." : "More.."}
                                </button>
                              </div>
                            </div>
                            <div className="col mt-3 w-col-3"></div>
                            
                          </div>

                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card shadow mt-4 mb-4">
                    <div className="card-header font-weight-bold">Contacts</div>
                    <div className="card-body">
                      <div className="table-container text-nowrap">
                        <div className="table-wrapper">
                          <table className="data-table">
                            <thead>
                              <tr>
                                <th>
                                  <input type="checkbox" />
                                </th>
                                <th>ID</th>
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
                                <td>1</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  fs-23 btn  la  la-envelope text-black   "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12  pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block pl-1 small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>2</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la  la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block pl-1 small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>3</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la  la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block pl-1 small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>4</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la  la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block pl-1 small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>5</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la  la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block pl-1 small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>6</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="fs-23  btn la  la-envelope text-black  "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block pl-1 small btn btn-primary text-black">
                                    ADD TO LEADS{" "}
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td>7</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className=" fs-23 btn la  la-envelope text-black "></h4>
                                </td>
                                <td>(206) 266-1000</td>
                                <td>
                                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                                    {" "}
                                    <i class="las la-mobile fs-12 pr-1"></i>
                                    VIEW
                                  </h4>
                                </td>
                                <td>
                                  <button className="d-none d-sm-inline-block pl-1 small btn btn-primary text-black">
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

              <div className="row">
                <div className="col-md-12">
                  <div className="card shadow mt-4 mb-4">
                    <div className="card-header font-weight-bold">
                      Org Chart
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div class="orgchart">
                          <nav class="org">
                            <ul>
                              <li>
                                <a href="#">
                                  <span>
                                    <img src={OrgChartImg} />
                                    <br />
                                    General Manager
                                  </span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="#">Manager1</a>
                                    <ul>
                                      <li>
                                        <a href="#">Code</a>
                                        <ul>
                                          <li>
                                            <a href="#">Html</a>
                                            <ul>
                                              <li>
                                                <a href="#">Css</a>
                                                <ul>
                                                  <li>
                                                    <a href="#">Jquery</a>
                                                  </li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a href="#">Graph</a>
                                        <ul>
                                          <li>
                                            <a href="#">Image</a>
                                            <ul>
                                              <li>
                                                <a href="#">Design</a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Manager2</a>
                                    <ul>
                                      <li>
                                        <a href="#">Category</a>
                                        <ul>
                                          <li>
                                            <a href="#">Code</a>
                                          </li>
                                          <li>
                                            <a href="#">Graph</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">Manager3</a>
                                    <ul>
                                      <li>
                                        <a href="#">Vcard</a>
                                      </li>
                                      <li>
                                        <a href="#">Map</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-custom-2">
              <div className="card shadow mt-5 mb-4">
                <div className="card-header font-weight-bold">
                  Similar Companies
                </div>
                <div className="card-body">
                  <div className="row brdr-b pb-3">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="row mt-3 brdr-b pb-3">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="row brdr-b pt-3 pb-3">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="row brdr-b pt-3 pb-3">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="row  pt-3 ">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="fs-12 text-right">
                    <button className="btn btn-light mr-2 small">
                      5 More..
                    </button>
                  </div>
                </div>
              </div>
              <div className="card shadow descbox1">
                <div>
                  Is this company data relevant to you?{" "}
                  <a
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      class="right-icons small fa fa-thumbs-up"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div font-weight-bold>
                  <button class="btn btn-outline-dark font-weight-bold mr-2 p-1">
                    Really Not
                  </button>
                  <button class="btn btn-outline-dark font-weight-bold mr-2 p-1">
                    Yes!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryContent;
