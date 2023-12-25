import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pie, Column } from "@ant-design/plots";
import {
  getGroupedByActivityData,
  getGroupedByCallActivityData,
  getGroupedByMeetingActivityData,
  getGroupedByEmailActivityData,
} from "../../actionCreator/dashboardActionCreator";
import { getUserInfo } from "../../utils/utils";
const ActivitiesReport = () => {
  const dispatch = useDispatch();
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  const groupedActivityData = useSelector(
    (state) => state.DashboardReducer.groupedActivityData
  );
  const groupedActivityCallData = useSelector(
    (state) => state.DashboardReducer.groupedActivityCallData
  );
  const groupedActivityMeetingData = useSelector(
    (state) => state.DashboardReducer.groupedActivityMeetingData
  );
  const groupedActivityEmailData = useSelector(
    (state) => state.DashboardReducer.groupedActivityEmailData
  );
  //const groupedActivityData= {dashboardDTOS:[{countSum:"1",opportunitSum:"5",rateSum:"5",statusId:3,typeValue:"call",},{countSum:"10",opportunitSum:"15",rateSum:"5",statusId:5,typeValue:"email",},{countSum:"17",opportunitSum:"35",rateSum:"5",statusId:8,typeValue:"demo",},{countSum:"6",opportunitSum:"65",rateSum:"5",statusId:4,typeValue:"meeting",},{countSum:"3",opportunitSum:"7",rateSum:"5",statusId:"3",typeValue:"chat",},{countSum:"9",opportunitSum:"9",rateSum:"5",statusId:"2",typeValue:"contact",},{countSum:"9",opportunitSum:"9",rateSum:"5",statusId:"2",typeValue:"followup",},],leadGenareatedCount:0,leadOpenOpportunity:0,leadOpenRate:0,leadclosedOpportunity:0,leadclosedRate:0,totalOpportunity:0,totalValueRate:0,type:"string"};
  useEffect(() => {
    if (Object.keys(getUserInfo()).length) {
      dispatch(getGroupedByActivityData());
      dispatch(getGroupedByCallActivityData());
      dispatch(getGroupedByMeetingActivityData());
      dispatch(getGroupedByEmailActivityData());
    }
  }, [userAccountInfo]);
  let leadByStatusdata = [];
  let totalLeadByStatusCnt = 0;
  if (groupedActivityData?.dashboardDTOS?.length > 0) {
    groupedActivityData?.dashboardDTOS?.forEach((record) => {
      record.statusId = record?.statusId ? parseInt(record.statusId) : 0;
      totalLeadByStatusCnt += record.statusId;
      leadByStatusdata.push(record);
    });
  }
  let groupedActivityCallDataArr = [];
  if (groupedActivityCallData?.dashboardDTOS?.length > 0) {
    groupedActivityCallDataArr = groupedActivityCallData.dashboardDTOS;
  }
  let groupedActivityMeetingDataArr = [];
  if (groupedActivityMeetingData?.dashboardDTOS?.length > 0) {
    groupedActivityMeetingDataArr = groupedActivityMeetingData.dashboardDTOS;
  }
  let groupedActivityEmailDataArr = [];
  if (groupedActivityEmailData?.dashboardDTOS?.length > 0) {
    groupedActivityEmailDataArr = groupedActivityEmailData.dashboardDTOS;
  }
  const colorActivityObj = {
    call: ["las la-phone-volume", "green"],
    email: ["las la-envelope", "green"],
    meeting: ["las la-handshake", "red"],
    demo: ["las la-laptop", "gray"],
    chat: ["las la-comment", "gray"],
  };
  //typeValue=meeting,call,email,followup,chat,whatsapp,demo
  const typeValueBlock = [
    "meeting",
    "call",
    "email",
    "chat",
    "whatsapp",
    "demo",
  ];
  //const leadByStatusdata_dummy1 =[{typeValue:"First",statusId:400,},{typeValue:"Second",statusId:600,}];
  const activityByStatusChart = {
    appendPadding: 10,
    data: leadByStatusdata,
    angleField: "statusId",
    colorField: "typeValue",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      //content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      // formatter: (v) => parseInt(v),
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "Total\n" + totalLeadByStatusCnt,
      },
    },
  };

  // const leadByStatusdata_dummy = [
  //   { country: "Asia", year: "1850", value: 809 },
  //   { country: "Asia", year: "1900", value: 947 },
  //   { country: "Africa", year: "1900", value: 133 },
  //   { country: "Africa", year: "2050", value: 1766 },
  //   { country: "Europe", year: "1750", value: 163 },
  //   { country: "Europe", year: "1800", value: 203 },
  // ];
  const leadByStatus = {
    data: leadByStatusdata,
    xField: "typeValue",
    yField: "opportunitSum",
    seriesField: "typeValue",
    isPercent: false,
    isStack: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  // const groupedActivityCallDataArr = [
  //   { typeValue: "Test1", countSum: "38" },
  //   { typeValue: "Test2", countSum: "52" },
  //   { typeValue: "Test3", countSum: "61" },
  // ];
  const chartForCall = {
    data: groupedActivityCallDataArr,
    xField: "countSum",
    yField: "statusId",
    meta: {
      statusId: {
        alias: "Name",
      },
      countSum: {
        alias: "Count",
      },
    },
    minBarWidth: 20,
    maxBarWidth: 20,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  const chartForMeeting = {
    data: groupedActivityMeetingDataArr,
    xField: "countSum",
    yField: "statusId",
    meta: {
      statusId: {
        alias: "Name",
      },
      countSum: {
        alias: "Count",
      },
    },
    minBarWidth: 20,
    maxBarWidth: 20,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  const chartForEmail = {
    data: groupedActivityEmailDataArr,
    xField: "countSum",
    yField: "statusId",
    meta: {
      statusId: {
        alias: "Name",
      },
      countSum: {
        alias: "Count",
      },
    },
    minBarWidth: 20,
    maxBarWidth: 20,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  let otherValues = 0;
  return (
    <>
      <div className=" row mt-4 pt-4">
        {groupedActivityData?.dashboardDTOS?.map((record) => {
          const { typeValue, countSum } = record || {};
          if (!typeValueBlock.includes(typeValue?.toLowerCase())) {
            otherValues += record.countSum && parseInt(record.countSum);
          }
          return (
            typeValueBlock.includes(typeValue?.toLowerCase()) && (
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      {typeValue}
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {countSum}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i
                          className={`${colorActivityObj[typeValue?.toLowerCase()][0]} fa-2x text-gray-300`}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                Others
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {otherValues}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="las la-hand-pointer fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Activity By Type
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="card-body">
                      <div className="chart-area">
                        <Column {...leadByStatus} style={{ height: 220 }}/>
                      </div>
                    </div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-uppercase text-gray-800">
                Activity By Status
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      {<Pie {...activityByStatusChart} />}
                    </div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-uppercase text-gray-800">
                Most Meeting Held (Top 5)
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      <Column {...chartForMeeting} />
                    </div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Most Email Sent (Top 5)
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      <Column {...chartForEmail} />
                    </div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Most Call Made (Top 5)
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      <Column {...chartForCall} />
                    </div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActivitiesReport;

// <div className="col-xl-3 col-md-6 mb-4">
//   <div className="card border-left-success shadow h-100 py-2">
//     <div className="card-body">
//       <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
//         Emails
//       </div>
//       <div className="row no-gutters align-items-center">
//         <div className="col mr-2">
//           <div className="h5 mb-0 font-weight-bold text-gray-800">
//             81
//           </div>
//         </div>
//         <div className="col-auto">
//           <i className="las la-envelope fa-2x text-gray-300"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="col-xl-3 col-md-6 mb-4">
//   <div className="card border-left-info shadow h-100 py-2">
//     <div className="card-body">
//       <div className="text-xs font-weight-bold text-leftinfo text-uppercase mb-1">
//         Demo
//       </div>
//       <div className="row no-gutters align-items-center">
//         <div className="col mr-2">
//           <div className="row no-gutters align-items-center">
//             <div className="col-auto">
//               <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
//                 07
//               </div>
//             </div>
//             <div className="col">
//               <div className="progress progress-sm mr-2">
//                 <div
//                   className="progress-bar bg-info"
//                   role="progressbar"
//                   aria-valuenow="50"
//                   aria-valuemin="0"
//                   aria-valuemax="100"
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-auto">
//           <i className="las la-laptop fa-2x text-gray-300"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="col-xl-3 col-md-6 mb-4">
//   <div className="card border-left-warning shadow h-100 py-2">
//     <div className="card-body">
//       <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
//         Meeting
//       </div>
//       <div className="row no-gutters align-items-center">
//         <div className="col mr-2">
//           <div className="h5 mb-0 font-weight-bold text-gray-800">
//             01
//           </div>
//         </div>
//         <div className="col-auto">
//           <i className="las la-handshake fa-2x text-gray-300"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="col-xl-3 col-md-6 mb-4">
//   <div className="card border-left-danger shadow h-100 py-2">
//     <div className="card-body">
//       <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
//         Chat
//       </div>
//       <div className="row no-gutters align-items-center">
//         <div className="col mr-2">
//           <div className="h5 mb-0 font-weight-bold text-gray-800">
//             0
//           </div>
//         </div>
//         <div className="col-auto">
//           <i className="las la-comments fa-2x text-gray-300"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="col-xl-3 col-md-6 mb-4">
//   <div className="card border-left-dark shadow h-100 py-2">
//     <div className="card-body">
//       <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
//         Others
//       </div>
//       <div className="row no-gutters align-items-center">
//         <div className="col mr-2">
//           <div className="h5 mb-0 font-weight-bold text-gray-800">
//             2
//           </div>
//         </div>
//         <div className="col-auto">
//           <i className="las la-hand-pointer fa-2x text-gray-300"></i>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
