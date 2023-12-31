import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Funnel, Gauge, Line, Bar } from "@ant-design/plots";
import { purple } from "@ant-design/colors";
import { Table } from "antd";
import defaultLogo from "../../assets/images/default_company_logo.jpg";

import {
  getRecomendationCompanyData,
  getRecomendationEmployeeData
} from "../../actionCreator/dashboardActionCreator";

import { getUserInfo,getPartialPhoneNumber } from "../../utils/utils";

const RecommendedReport = () => {
  const dispatch = useDispatch();
  const [companyList, setCompanyList] = useState();
  const [employeeList, setEmployeeList] = useState();
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  const recommendedEmployeeList = useSelector(
    (state) => state.DashboardReducer.recommendedEmployeeData
  );
  const recommendedCompanyList = useSelector(
    (state) => state.DashboardReducer.recommendedCompanyData
  );

  useEffect(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(getRecomendationCompanyData());
      dispatch(getRecomendationEmployeeData());
    }
  }, [userAccountInfo]);

  useEffect(() => {
    let data = [];
    if (!recommendedCompanyList) return;
    recommendedCompanyList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          name: record,
          industry: record?.industry?.name,
          phone: record.phoneNo          
        },
      ];
    });
    setCompanyList(data);
  }, [recommendedCompanyList]);

  useEffect(() => {
    let data = [];
    if (!recommendedEmployeeList) return;
    recommendedEmployeeList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          id: record.id,
          name: record,
          company: record?.company?.name,
          email: record?.emailId,
          phone: record?.company?.phoneNo,
          mobile: record.phoneNo,
          designation: record?.title,          
        },
      ];
    });
    setEmployeeList(data);
  }, [recommendedEmployeeList]);
  const getDetails=(row,name)=>{
console.log("click",row)
  }
  const columns = [
    {
      title: <div className="companyname">Company Name</div>,
      dataIndex: "name",
      render: (record, row) => {
        return (
          <div className="namecol" onClick={() => getDetails(row.key,record?.name)}>
            <div className="logo">
              <img
                src={record?.companyLogoUrl || defaultLogo}
                onError={(e) => {
                  e.currentTarget.src = defaultLogo;
                }}
              />
            </div>
            <span className="cname">{record?.name}</span>
          </div>
        );
      },
      fixed: "left",
    },
    {
      title: "Industry",
      dataIndex: "industry",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      render: (text, row) => {
        return getPartialPhoneNumber(text);
      }
    }
  ];

  const executiveColumns = [
    {
      title: <div className="companyname">Executive Name</div>,
      dataIndex: "name",
      fixed: "left",
      render: (record, row, index) => {
        let cnt = index;
        return (
          <div
            className="namecol"
            onClick={() => getDetails(row.key, record?.fullname)}
          >
           <span className="cname">
              {/* {record?.fullname} */}
              {record?.fullname
                ? record.fullname
                : record.firstname + " " + record.lastname}
            </span>
          </div>
        );
      },
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },    
    {
      title: "Phone",
      dataIndex: "phone",
      className: "phone",
      render: (text, row) => {
        return getPartialPhoneNumber(text);
      },
    }
  ];

  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Company Recommendation
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
                <Table
                    pagination={{
                      responsive: true,
                      total: companyList?.length,
                      pageSize: 10,
                      position:
                      companyList?.length > 10
                          ? ["bottomCenter"]
                          : ["none"],
                    }}
                  dataSource={companyList}
                  columns={columns}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Executive Recommendation
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
                <Table
                  pagination={{
                    responsive: true,
                    total: employeeList?.length,
                    pageSize: 10,
                    position:
                    employeeList?.length > 10
                        ? ["bottomCenter"]
                        : ["none"],
                  }}
                  dataSource={employeeList}
                  columns={executiveColumns}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecommendedReport;
