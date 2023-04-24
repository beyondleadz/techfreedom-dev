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
        <div id="wrapper">
          <div className="leftmenu">
          <CompanyLeft />
          </div>
          <div className="contentbody">
          <CompanyContent />
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
