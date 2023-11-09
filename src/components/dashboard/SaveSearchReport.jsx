import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Funnel, Gauge, Line, Bar } from "@ant-design/plots";
import { purple } from "@ant-design/colors";
import { Table } from "antd";
import { saveExecutiveSearchList } from "../../actionCreator/executiveListingActionCreater";
import { saveSearchList } from "../../actionCreator/companyListingActionCreater";

import { getUserInfo } from "../../utils/utils";

const SaveSearchReport = () => {
  const dispatch = useDispatch();
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  const executiveSaveSearchList = useSelector(
    (state) => state.executiveListingReducer.saveSearchList
  );
  const companySaveSearchList = useSelector(
    (state) => state.companyListingReducer.saveSearchList
  );

  useEffect(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(saveExecutiveSearchList(id));
      dispatch(saveSearchList(id));
    }
  }, [userAccountInfo]);

  //console.log(closedOpprtunityData,'closedOpprtunityData');
  const dataSource = companySaveSearchList;
  const executiveDataSource = executiveSaveSearchList;

  const columns = [
    {
      title: "Search",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Company Saved Search
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
                <Table
                    pagination={{
                      responsive: true,
                      total: dataSource?.length,
                      pageSize: 10,
                      position:
                      dataSource?.length > 10
                          ? ["bottomCenter"]
                          : ["none"],
                    }}
                  dataSource={dataSource}
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
                Executive Saved Search
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
                <Table
                  pagination={{
                    responsive: true,
                    total: executiveDataSource?.length,
                    pageSize: 10,
                    position:
                      executiveDataSource?.length > 10
                        ? ["bottomCenter"]
                        : ["none"],
                  }}
                  dataSource={executiveDataSource}
                  columns={columns}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SaveSearchReport;
