import React, { useState } from "react";
import { Tabs } from "antd";

import Layout from "../layout/Layout";
import DashboardLead from "../components/dashboard/DashboardLead";

import CompanyLeft from "../components/company-search/CompanyLeft";
import CompanyContent from "../components/company-search/CompanyContent";
import CompanyNavigation from "../components/company-search/CompanyNavigation";
import LeadReport from "../components/dashboard/LeadReport";
import MarketingReport from "../components/dashboard/MarketingReport";
import ActivitiesReport from "../components/dashboard/ActivitiesReport";
import MyViewReport from "../components/dashboard/MyViewReport";
const MyDashboard = () => {
  const [activeTab, setActiveTab] = useState("1");
  const onChange = (key) => {
    setActiveTab(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <span>
          <i className="fa tab-img las la-users"></i>Leads
        </span>
      ),
      children: (
        <div>
          <LeadReport />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span>
          <i className="fa tab-img las la-bullhorn text-info"></i>Marketing
        </span>
      ),
      children: (
        <div>
          <MarketingReport />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <i className="fa tab-img las la-clock"></i>Activities
        </span>
      ),
      children: (
        <div>
          <ActivitiesReport />
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <span>
          <i className="fa tab-img las la-eye"></i>My View
        </span>
      ),
      children: (
        <div>
          <MyViewReport />
        </div>
      ),
    },
  ];
  return (
    <>
      <Layout>
            <div id="tabscompany">
              <h3 className="pagetitle">Dashboard</h3>
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

export default MyDashboard;
