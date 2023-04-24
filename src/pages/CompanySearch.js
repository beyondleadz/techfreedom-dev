import React, { useState } from "react";
import { Tabs } from "antd";
import Layout from "../layout/Layout";
import CompanyLeft from "../components/company-search/CompanyLeft";
import CompanyContent from "../components/company-search/CompanyContent";
import CompanyHeader from "../components/company-search/CompanyHeader";
import "../assets/css/dynemic-page.css";
const CompanySearch = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: <span > <i className="fa tab-img la la-building"></i>Companies</span>,
      children: (
        <div>
              <nav className="navbar navbar-light bg-white topbar mb-4 static-top">
            <div className="buttons-container m-mt quickselection">
           
              <div>              
                <span className="fs-12 mr-2">Quick Selection</span>
                <div className=" fs-12 d-sm-inline-block mr-1">
                  <input type="text" className="quickselectioninput" />
                </div>
                <span className=" fs-12 mr-1">to</span>
                <div className="  fs-12 d-sm-inline-block mr-1">
                  <input type="text" className="quickselectioninput" />
                </div>
                <button className=" fs-12 d-sm-inline-block btn btn-info btn-lg mr-1">
                  <i className="fas fs-12 fa-arrow-right"></i>{" "}
                </button>
                <button className="fs-12  btn btn-info btn-lg  mr-3">
                  Select All
                </button>
              </div>
              <ul className="flex  m-mt">
                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="right-icons la la-file-pdf"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="right-icons la la-file-excel"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="right-icons la la-print"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="right-icons la la-star"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div id="wrapper">
          <div className="leftmenu">
          <CompanyLeft />
          </div>
          <div className="contentbody">
          <CompanyContent />
          </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: <span><i className="fa tab-img la la-user-tie"></i>Executive</span>,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: <span ><i className="fa tab-img las la-user-friends"></i>Leads</span>,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <>
      <Layout>
        <div className="searchtab-container">
        <h3 className="card-body font-weight-bold">Search Companies</h3>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} type="card" />
        </div>
{/*         
        <div className="wrapper">
            <CompanyHeader/>
            <div id="wrapper">
                <CompanyLeft/>
                <CompanyContent/>
            </div>
        </div> */}
        
      </Layout>
    </>
  );
};
export default CompanySearch;
