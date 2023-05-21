import React, { useEffect, useState, useMemo } from "react";
import Layout from "../layout/Layout";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumb } from "antd";
import ExecutiveContent from "../components/executive-details/ExecutiveContent";
import ExecutiveHeader from "../components/executive-details/ExecutiveHeader";
import RightPanel from "../components/executive-details/RightPanel";
import {
  getExecutiveDetails,
  getEmployeeList,
  getDepartmentList,
  getSimilarCompanyList,
} from "../actionCreator/executiveDetailsActionCreator";
import { useParams } from "react-router-dom";
import NoDataFound from "../components/NoData";
import "../assets/css/dynemic-page.css";
import Loader from "../components/loader";
const ExecutiveDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const executiveDetails = useSelector(
    (state) => state.executiveDetailsReducer.executiveDetails
  );
  const [loading, setLoading] = useState(true);

  useMemo(() => {
   // dispatch(getDepartmentList());
    dispatch(getExecutiveDetails(id));
   // dispatch(getEmployeeList(id));
  }, []);

  useMemo(() => {
    console.log(executiveDetails, "executiveDetails");
    if (Object.keys(executiveDetails).length) {
      dispatch(
        getSimilarCompanyList(
          {
            selectedIndustry: [executiveDetails?.industry],
          },
          {
            start: 0,
            end: 10,
          }
        )
      );
    }
  }, [executiveDetails]);

  useEffect(() => {
    Object.keys(executiveDetails).length ? setLoading(false) : setLoading(true);
  }, [Object.keys(executiveDetails).length]);

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
                  title: <Link to="/search-executive">Search Executive</Link>,
                },
                {
                  title: "Executive Summary",
                },
              ]}
            />
            </div>
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-9">
            <ExecutiveHeader />

            {/* <div id="wrapper"> */}
              <ExecutiveContent />
            {/* </div> */}
            </div>
            <div className="col-md-3">
              <RightPanel/>
            </div>
            </div>
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
