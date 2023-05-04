import React, { useEffect, useState, useMemo } from "react";
import Layout from "../layout/Layout";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb } from "antd";
import ExecutiveContent from "../components/executive-details/ExecutiveContent";
import ExecutiveHeader from "../components/executive-details/ExecutiveHeader";
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
const ExecutiveDetails = () => {
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
          <div className="wrapper executivedetails">
            <div className="breadcrumcontainer">
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">Home</Link>,
                },
                {
                  title: <Link to="/executive-search">Search Executive</Link>,
                },
                {
                  title: "Executive Details",
                },
              ]}
            />
            </div>
            <ExecutiveHeader />

            <div id="wrapper">
              <ExecutiveContent />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </Layout>
    </>
  );
};
export default ExecutiveDetails;
