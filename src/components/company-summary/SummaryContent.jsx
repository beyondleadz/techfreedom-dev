import React, { useState } from "react";
import { Tabs } from "antd";
import logo from "../../assets/images/icici.jpg";
import AboutCompany from "./AboutCompany";
import KeyExecutives from './KeyExecutives'
import OrgChart from './OrgChart'

const SummaryContent = () => {
  const items = [
    {
      key: "1",
      label: (
        <span>
          <i className="text-black fa fa-city pr-2"></i>About Company
        </span>
      ),
      children: <AboutCompany />,
    },
    {
      key: "2",
      label: (
        <span>
          <i className="text-black fa fa-user-friends pr-2"></i>Key Executives
        </span>
      ),
      children: <KeyExecutives/>,
    },
    {
      key: "3",
      label: (
        <span>
          <i className="text-black fa fa-suitcase pr-2"></i>Filter by Department
        </span>
      ),
      children: <div>department</div>,
    },
    {
      key: "4",
      label: (
        <span>
          <i className="text-black fa fa-sitemap pr-2"></i>Org. Chart
        </span>
      ),
      children: <OrgChart/>,
    },
  ];

  const onChange = () => {};

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-custom">
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-4 mb-4">
                    <Tabs
                      defaultActiveKey="1"
                      items={items}
                      onChange={onChange}
                      type="card"
                    />

                    {/* <div className="">
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
                    </div> */}
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
