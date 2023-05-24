import React, { useEffect, useState, useMemo } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Layout from "../layout/Layout";
import CompanyLeft from "../components/company-search/CompanyLeft";
import CompanyContent from "../components/company-search/CompanyContent";
import CompanyNavigation from "../components/company-search/CompanyNavigation";
import TrialModal from "../common/TrialModal";
import {emptyErrorObj} from '../actionCreator/companyListingActionCreater'
import "../assets/css/dynemic-page.css";
import ExecutiveNavigation from "../components/executive-search/ExecutiveNavigation";
import ExecutiveLeft from "../components/executive-search/ExecutiveLeft";
import ExecutiveContent from "../components/executive-search/ExecutiveContent";
const CompanySearch = ({ tab }) => {
  const [activeTab, setActiveTab] = useState(tab);
  const [isApiFailed, setIsApiFailed] = useState(false);
  const errObj = useSelector((state) => state.companyListingReducer.errObj);
  const dispatch = useDispatch()

  useEffect(() => {
    setActiveTab(tab);
  }, [tab]);

  useEffect(() => {
    console.log("errObj", errObj);
    if (Object.keys(errObj).length) {
      setIsApiFailed(true);
    }
    if (!Object.keys(errObj).length) {
      setIsApiFailed(false);
    }
  }, [Object.keys(errObj).length]);

  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: "1",
      label: (
        <span>
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

  
  const closeModal = () => {
    dispatch(emptyErrorObj());
  };

  return (
    <>
      <Layout>
        <div id="tabscompany">
          <h3 className="pagetitle">
            {parseInt(activeTab) == 1
              ? "Search Companies"
              : parseInt(activeTab) == 2
              ? "Search Executive"
              : "Search Leads"}
          </h3>
          <Tabs
            activeKey={activeTab}
            items={items}
            onChange={onChange}
            type="card"
          />

          {isApiFailed ? (
            <TrialModal
              openModal={isApiFailed}
              closeModal={closeModal}
              buttonText="OK"
              modalBody={
                <div id="small-dialog2">
                  Please call System support. You application having some issue.
                </div>
              }
              modalWidth="400px"
            />
          ) : (
            ""
          )}
        </div>
      </Layout>
    </>
  );
};
export default CompanySearch;
