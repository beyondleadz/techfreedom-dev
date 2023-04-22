import React, { useState } from "react";
import logo from "../../assets/images/icici.jpg";
import OrgChartImg from "../../assets/images/org-chart-employee-icon.png";

const SummaryContent = () => {
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
                                className="fa fa-city pr-2"
                                style={{ color: "#5D44FF" }}
                              ></i>
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
                                className="fa fa-user-friends pr-2"
                                style={{ color: "#5D44FF" }}
                              ></i>{" "}
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
                                className="fa fa-suitcase pr-2"
                                style={{ color: "#5D44FF" }}
                              ></i>{" "}
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
                                className="fa fa-sitemap pr-2"
                                style={{ color: "#5D44FF" }}
                              ></i>
                              Org.Chart
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card shadow card-body">
                      <div class="container">
                        <div className="row mt-3 mb-2 w-100- fs-14">
                        <div className="col"> 
                          <strong>Deutsche Bank</strong>, a Frankfurt-based
                          global investment bank, offers financial products and
                          services to corporate and institutional clients.</div>
                          <div className="row mt-3 w-100- ">
                            <div className="col w-col-3">
                              <div>
                                <i className=" las  la-users mr-2"></i>
                                <strong>Employees Range</strong>
                              </div>
                              <div className="gap-l">
                                809,221{" "}
                                <span> (687,052 on Deutsche Bank) </span>
                              </div>
                            </div>
                            <div className="col w-col-3">
                              <div>
                                <i className="  text-info las  la-money-check mr-2"></i>
                                <strong>Revenue Range</strong>
                              </div>
                              <div className="gap-l">$280.52 billion</div>
                            </div>
                            <div className="col w-col-3">
                              <div>
                                <i
                                  className=" la la-city mr-2"
                                  aria-hidden="true"
                                ></i>
                                <strong>Company Type</strong>
                              </div>
                              <div className="gap-l">$48.00 Million</div>
                            </div>
                          </div>
                        
                          <div className="row mt-3 w-100-">
                            <div className="col w-col-3">
                              <div>
                                <i className="  las la-industry mr-2"></i>
                                <strong>Industry</strong>
                              </div>
                              <div className="gap-l">Banking, Finance</div>
                            </div>
                            <div className="col w-col-3">
                              <div>
                                <i className=" mr-2 text-info las la-cog"></i>
                                <span className="font-weight-bold">
                                  Technographics
                                </span>
                              </div>
                              <div className="gap-l">
                                {" "}
                                JavaScript, HTML, PHP{" "}
                                <div>
                                  <strong>+1282 more (view full list) </strong>
                                </div>{" "}
                              </div>
                            </div>
                            <div className="col w-col-3">
                              <div>
                                <i className=" text-info fs-16 las la-suitcase mr-2"></i>
                                <strong>Product and Services</strong>
                              </div>
                              <div className="gap-l">
                                <span>Retail, </span>
                                <span>Internet, </span>
                                <span>e-Commerce, </span> 
                                
                               
                                <div className={showMore ? "" : "softexpand"}>
                                                                  
                                <span>Software, </span> 
                                <span>Business Development, </span>
                                  <span>Crowdsourcing, </span>
                                  <span>Retail Software, </span>
                                  <span>Delivery, </span>
                                  <span>Operations, </span>{" "}
                                  <span>Administrative Services, </span>
                                  <span>Records, Videos &amp; Books, </span>
                                  <span>Delivery Service, </span>
                                  <span>Television Stations, </span>
                                  <span>Transportation, </span>
                                  <span>Broadcasting, </span>
                                  <span>E-Commerce, </span>
                                  <span>Cable &amp; Satellite, </span>
                                  <span>Commerce and Shopping, </span>
                                  <span>Media &amp; Internet, </span>
                                  <span>Telecommunications, </span>
                                  <span>Internet Services, </span>
                                  <span>SaaS, </span>
                                  <span>Shipping, </span>
                                  <span>Software Development, </span>
                                  <span>Consumer Electronics &amp; Computers</span>
                                </div>
                                <button class="btn btn-light mr-2 " onClick={onClickShowMore}>
                                  {showMore ? "Hide.." : "More.."}
                                </button>
                              </div>
                            </div>
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
                                  <h4 className="   btn fs-25 la  la-envelope-open-text text-info   "></h4>
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
                                <td>2</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  la  la-envelope-open-text text-info  "></h4>
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
                                <td>3</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  la  la-envelope-open-text text-info  "></h4>
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
                                <td>4</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  la  la-envelope-open-text text-info  "></h4>
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
                                <td>5</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  la  la-envelope-open-text text-info  "></h4>
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
                                <td>6</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  la  la-envelope-open-text text-info  "></h4>
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
                                <td>7</td>

                                <td>John Mathew </td>
                                <td>Delivery Head</td>
                                <td>
                                  <h4 className="  la  la-envelope-open-text text-info  "></h4>
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
              <div className="card shadow mt-4 mb-4">
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
