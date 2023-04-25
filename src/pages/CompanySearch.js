import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import Layout from "../layout/Layout";
import CompanyLeft from "../components/company-search/CompanyLeft";
import CompanyContent from "../components/company-search/CompanyContent";
import CompanyHeader from "../components/company-search/CompanyHeader";
import CompanyNavigation from "../components/company-search/CompanyNavigation";
import "../assets/css/dynemic-page.css";
const CompanySearch = ({tab}) => {
  console.log(tab,"tab={2}tab={2}")
  const [activeTab, setActiveTab] = useState(tab);
  const onChange = (key) => {
    //console.log(key);
    setActiveTab(key);
  };
  useEffect(() => {
    setActiveTab(tab)
  },[tab])

  const items = [
    {
      key: "1",
      label: (
        <span>
          {" "}
          <i className="fa tab-img la la-building"></i>Companies
        </span>
      ),
      children: (
        <div>
          <CompanyNavigation />
          <div id="wrapper">
            <div className="leftmenu">
              <CompanyLeft />
            </div>
            <div className="contentbody shadow">
              <CompanyContent />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <i className="fa tab-img la la-user-tie"></i>Executive
        </span>
      ),
      children: (
        <div>
          <CompanyNavigation />
          <div id="wrapper">
            <div className="leftmenu">
              <CompanyLeft />
            </div>
            <div className="contentbody shadow">
              <CompanyContent />
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <i className="fa tab-img las la-user-friends"></i>Leads
        </span>
      ),
      children:(
        <div>
          <CompanyNavigation />
          <div id="wrapper">
            <div className="leftmenu">
              <CompanyLeft />
            </div>
            <div className="contentbody shadow">
              <CompanyContent />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <div>
          <h3 className="pagetitle">
            {activeTab == 1
              ? "Search Companies"
              : activeTab == 2
              ? "Search Executive"
              : "Search Leads"}
          </h3>
          <Tabs
            activeKey={activeTab}
            items={items}
            onChange={onChange}
            type="card"
          />
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
