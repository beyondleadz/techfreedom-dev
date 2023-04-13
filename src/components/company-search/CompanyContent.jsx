import React, { useState } from "react";

const CompanyContent = () => {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light bg-white topbar mb-4 static-top">
            <div className="buttons-container m-mt quickselection">
                <div>
              <span className="fs-12 mr-2">Quick Selection</span>
              <button className=" fs-12 d-sm-inline-block btn btn-light btn-lg mr-1">
                <input type="text" className="quickselectioninput"/>
              </button>
              <span className=" fs-12 mr-1">to</span>
              <button className="  fs-12 d-sm-inline-block btn btn-light btn-lg mr-1">
                <input type="text" className="quickselectioninput"/>
              </button>
              <button className=" fs-12 d-sm-inline-block btn btn-info btn-lg mr-1">
                <i className="fas fs-12 fa-arrow-right"></i>{" "}
              </button>
              <button className="fs-12  btn btn-info btn-lg  mr-3">Select All</button>
              </div>
              <ul className="flex  m-mt">
                <li>
                  <a
                    class="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="right-icons la la-file-pdf" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="right-icons la la-file-excel" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="right-icons la la-print" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="btn-lit mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="right-icons la la-star" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-10">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary mob-t">
                      Showing 1-20 of 100 results
                    </h6>

                    <div className="buttons-container textsearch">
                      <form className="d-none form-inline mr-4 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control-sm bg-light"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                      <button className="d-none d-sm-inline-block btn btn-outline-primary">
                        <i className="fas fa-bolt pr-1"></i> CONNECT TO CRM{" "}
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-container">
                      <div className="table-wrapper">
                        <table className="data-table">
                          <thead>
                            <tr>
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>ID</th>
                              <th>Organization Name</th>
                              <th>Industries</th>
                              <th>Location</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Address</th>
                              <th>
                                <button className="d-none d-sm-inline-block btn btn-outline-secondary">
                                  <i className="fas fa-plus pr-1"></i> ADD
                                  COLUMN{" "}
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>1</td>
                              <td>John Doe</td>
                              <td>25</td>
                              <td>Male</td>
                              <td>johndoe@email.com</td>
                              <td>123-456-7890</td>
                              <td>123 Main St</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>2</td>
                              <td>John Doe</td>
                              <td>25</td>
                              <td>Male</td>
                              <td>johndoe@email.com</td>
                              <td>123-456-7890</td>
                              <td>123 Main St</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>3</td>
                              <td>John Doe</td>
                              <td>25</td>
                              <td>Male</td>
                              <td>johndoe@email.com</td>
                              <td>123-456-7890</td>
                              <td>123 Main St</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>4</td>
                              <td>John Doe</td>
                              <td>25</td>
                              <td>Male</td>
                              <td>johndoe@email.com</td>
                              <td>123-456-7890</td>
                              <td>123 Main St</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>5</td>
                              <td>John Doe</td>
                              <td>25</td>
                              <td>Male</td>
                              <td>johndoe@email.com</td>
                              <td>123-456-7890</td>
                              <td>123 Main St</td>
                              <td></td>
                            </tr>

                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>18</td>
                              <td>John Doe</td>
                              <td>25</td>
                              <td>Male</td>
                              <td>johndoe@email.com</td>
                              <td>123-456-7890</td>
                              <td>123 Main St</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>19</td>
                              <td>John Doe</td>
                              <td>25</td>
                              <td>Male</td>
                              <td>johndoe@email.com</td>
                              <td>123-456-7890</td>
                              <td>123 Main St</td>
                              <td></td>
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
        </div>
      </div>
    </>
  );
};

export default CompanyContent;
