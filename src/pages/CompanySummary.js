import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import SummaryContent from "../components/company-summary/SummaryContent";
import SummaryHeader from "../components/company-summary/SummaryHeader";
import NoDataFound from "../components/NoData";
import "../assets/css/dynemic-page.css";
import Loader from "../components/loader";
const CompanySummary = () => {
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Object.keys(companyDetails).length ? setLoading(false) : setLoading(true);
  },[Object.keys(companyDetails).length]);

  return (
    <>
      <Layout>
        {!loading ? (
          <div className="wrapper companysummary">
            <SummaryHeader />
            <div id="wrapper">
              <SummaryContent />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Layout>
    </>
  );
};
export default CompanySummary;
