import React, { useEffect, useState, useMemo } from "react";
import { Tabs } from "antd";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import _ from "lodash";
import Layout from "../layout/Layout";
import CompanyLeft from "../components/company-search/CompanyLeft";
import CompanyContent from "../components/company-search/CompanyContent";
import CompanyNavigation from "../components/company-search/CompanyNavigation";

import ExecutiveLeft from "../components/executive-search/ExecutiveLeft";
import ExecutiveContent from "../components/executive-search/ExecutiveContent";
import ExecutiveNavigation from "../components/executive-search/ExecutiveNavigation";
import LeadContent from "../components/lead-search/LeadContent";
import LeadNavigation from "../components/lead-search/LeadNavigation";
import LeadLeft from "../components/lead-search/LeadLeft";
import "../assets/css/dynemic-page.css";
import { getToken } from "../utils/utils";

const ExecutiveSearch = ({ tab }) => {
  const [activeTab, setActiveTab] = useState(tab);
  const location = useLocation();
  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  const onChange = (key) => {
    //console.log(key);
    setActiveTab(key);
  };

  const selectedItem = useSelector((state) => state.HeaderReducer.selectedItem);
  const topSearchClick = useSelector(
    (state) => state.HeaderReducer.topSearchClick
  );

  useEffect(() => {
    if (location.pathname === "/search-executive" && selectedItem === "Company") {
      setActiveTab("1");
    } else if (
      location.pathname === "/search-executive" &&
      selectedItem === "Executive"
    ) {
      setActiveTab("2");
    }
  }, [topSearchClick, selectedItem]);
  let items=[];
  if(getToken()){
   items = [
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
          <ExecutiveNavigation />
          <div id="wrapper">
            <div className="leftmenu">
              <ExecutiveLeft />
            </div>
            <div className="contentbody shadow">
              <ExecutiveContent />
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
      children: (
        <div>
          <LeadNavigation />
          <div id="wrapper">
            <div className="leftmenu">
              <LeadLeft />
            </div>
            <LeadContent />
          </div>
        </div>
      ),
    
    },
    
  ];
}else{
  items = [
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
          <ExecutiveNavigation />
          <div id="wrapper">
            <div className="leftmenu">
              <ExecutiveLeft />
            </div>
            <div className="contentbody shadow">
              <ExecutiveContent />
            </div>
          </div>
        </div>
      ),
    }
    
  ];
}

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
      </Layout>
    </>
  );
};
export default ExecutiveSearch;
