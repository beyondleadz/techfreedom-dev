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
import SimilarCompany from "../components/company-summary/similarCompany";
import CompanyPdfFormat from "../components/company-summary/CompanyPdfFormat";
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
  }, [id]);

  useMemo(() => {
    if (Object.keys(companyDetails).length) {
      dispatch(
        getSimilarCompanyList(
          {
            selectedIndustry: companyDetails?.industry?[companyDetails?.industry]:[{id:0}],
            cid:companyDetails?.id
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
    Object.keys(companyDetails).length ? setLoading(false) : setLoading(false);
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
            <div className="row col-md-12">
            <div className="col-md-9">
            <SummaryHeader />

            {/* <div id="wrapper"> */}
              <SummaryContent />
            {/* </div> */}
            </div>
            <div className="col-md-3">
              <SimilarCompany/>
            </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Layout>
      {/* <div style={{position:'absolute',left:'0',top:'-5000px'}} ref={pdfRef}> */}
<CompanyPdfFormat/>
      {/* </div> */}
    </>
  );
};
export default CompanySummary;
