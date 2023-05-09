import React, { useState } from "react";
import logo from "../../assets/images/icici.jpg";
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
                             Colleagues
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
                         
                        </ul>
                      </div>
                    </div>
                    <div className="card shadow card-body">
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
                                  <h4 className="  fs-23 btn  la  la-envelope-open-text text-black   "></h4>
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
                                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
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
                                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
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
                                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
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
                                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
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
                                  <h4 className="fs-23  btn la  la-envelope-open-text text-black  "></h4>
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
                                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black "></h4>
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
            <div className="col-md-3 col-custom-2">
            <div className="card shadow mt-5 mb-4">
                <div className="card-header font-weight-bold">
                  Company Info
                </div>
                <div className="card-body">
                  <div className="row pb-3">
                  <div className=" btn-circle btn-lg btn-info">
                    &
                    </div>
                    <div className="col">
                      <div><a className="font-weight-bold fs-16 text-dark"  title="" href="#" target="" > Dun & Bradstreet    </a>
                      </div>
                      <div className="fs-12"><h6>Phone</h6>(206) 266-1000</div>
                      <div className="fs-12"><h6>Location</h6> Okhla Industrial Estate Phase 3 Rd, New Delhi, Delhi 110020</div>
                      <div className="fs-12"><h6>Employees Ranges</h6>1.0K to 5.0K</div>
                      <div className="fs-12"><h6>Industry</h6>Commercial & professional services</div>
                      <div className="fs-12"><h6>Website</h6>https://www.dnb.co.in/</div>
                      <div className="fs-12"><h6>Company Type</h6>Business information Credit & risk Sales & marketing Data analytics Supply & compliance</div>
                      <div className="fs-12"><h6>Revenue Range</h6> $2,270 million to $2,315 million</div>
                    </div>
                  </div>
                 
                 
                  
                 
                 
                </div>
              </div>
              <div className="card shadow mt-2 mb-4">
                <div className="card-header font-weight-bold">
                  Similar Executive
                </div>
                <div className="card-body">
                  <div className="row brdr-b pb-3">
                    <div className=" btn-circle btn-lg btn-info">
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
                  <div className="row mt-3 brdr-b pb-3">
                  <div className=" btn-circle btn-lg btn-info">
                    BW
                    </div>
                    <div className="col ">
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
                  <div className="row brdr-b pt-3 pb-3">
                  <div className=" btn-circle btn-lg btn-info">
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
                  <div className="row brdr-b pt-3 pb-3">
                  <div className=" btn-circle btn-lg btn-info">
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
                  <div className="row  pt-3 ">
                  <div className=" btn-circle btn-lg btn-info">
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
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveContent1;
