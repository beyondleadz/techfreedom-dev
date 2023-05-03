import React, { useEffect, useState, useMemo } from "react";
import Layout from "../layout/Layout";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb } from "antd";
import SummaryContent from "../components/company-summary/SummaryContent";
import SummaryHeader from "../components/company-summary/SummaryHeader";
import {
  getCompanyDetails,
  getEmployeeList,
  getDepartmentList,
  getSimilarCompanyList,
} from "../actionCreator/companyDetailsActionCreator";
import { useParams } from "react-router-dom";
import NoDataFound from "../components/NoData";
import "../assets/css/dynemic-page.css";
import Loader from "../components/loader";
const CompanySummary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    dispatch(getDepartmentList());
    dispatch(getCompanyDetails(id));
    dispatch(getEmployeeList(id));
  }, []);

  useMemo(() => {
    console.log(companyDetails, "companyDetailscompanyDetails");
    if (Object.keys(companyDetails).length) {
      dispatch(
        getSimilarCompanyList(
          {
            selectedIndustry: [companyDetails?.industry],
          },
          {
            start: 0,
            end: 10,
          }
        )
      );
    }
  }, [companyDetails]);

  useEffect(() => {
    Object.keys(companyDetails).length ? setLoading(false) : setLoading(true);
  }, [Object.keys(companyDetails).length]);

  return (
    <>
      <Layout>
        {!loading ? (
          <div className="wrapper companysummary">
            <div className="breadcrumcontainer">
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">Home</Link>,
                },
                {
                  title: <Link to="/search-company">Search Company</Link>,
                },
                {
                  title: "Company Summary",
                },
              ]}
            />
            </div>
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
