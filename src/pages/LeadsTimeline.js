import React, { useEffect, useState, useMemo } from "react";
import { Tabs,Button } from "antd";
import _ from "lodash";
import { useNavigate } from "react-router";

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
import CalenderModal from "../components/lead-search/CalenderModal";
const LeadsTimeline = ({ tab }) => {
  const [activeTab, setActiveTab] = useState(tab);
  const navigate = useNavigate();
  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  const onChange = (key) => {
   // console.log(key);
    setActiveTab(key);
  };

  const goToLeadsPage=()=>{
    navigate("/search-lead")
  }

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
        <>
        <div>
           <nav className="navbar navbar-light bg-white topbar mb-4 mr-2 static-top">
      <div className="buttons-container-top m-mt quickselection">
        <div>
          <Button
            type="primary"
            className=" fs-12 d-sm-inline-block quick-btn mr-1"
            onClick={goToLeadsPage}
          >
            <i className="fas fs-12 fa-arrow-right"></i>
          </Button>
        </div>
        </div>
        </nav>
        

          <div id="wrapper">
            <div className="leftmenu">
              {/* <LeadLeft /> */}
            </div>
            <CalenderModal />            
          </div>
        </div>
        </>
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
export default LeadsTimeline;
