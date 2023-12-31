import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Line, Bar, Pie, Column } from "@ant-design/plots";
import {getGroupedCountData,getSalesTrendData,getGroupedBySourceData,getGroupedByIndustryData,getConvertedLeadsData} from "../../actionCreator/dashboardActionCreator"
import { getUserInfo } from "../../utils/utils";
import {
  getLeadStatusList  
} from "../../actionCreator/leadListingActionCreater";

const MarketingReport = () => {
  const dispatch = useDispatch();
  const [salesReport, setSalesReport] = useState([]);
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  const groupedCountData=useSelector((state)=>state.DashboardReducer.groupedCountData);
  const salesTrendData=useSelector((state)=>state.DashboardReducer.salesTrendData);
  const groupedSourceData=useSelector((state)=>state.DashboardReducer.groupedSourceData);
  const groupedIndustryData=useSelector((state)=>state.DashboardReducer.groupedIndustryData);
  const convertedLeadsAllData=useSelector((state)=>state.DashboardReducer.convertedLeadsData);
  const leadStatusListing = useSelector(
    (state) => state.leadListingReducer.leadStatusList
  );

  const wonStatus="Closed Won";
  useEffect(() => {
    if (Object.keys(getUserInfo()).length) {
      dispatch(getGroupedCountData());
      dispatch(getSalesTrendData());
      dispatch(getGroupedBySourceData());
      dispatch(getGroupedByIndustryData());
      dispatch(getLeadStatusList());
      dispatch(getConvertedLeadsData());
    }
  }, [userAccountInfo]);

  let salesOrderByStatus=[];
  let convertedLeadsData=convertedLeadsAllData?.length > 0?convertedLeadsAllData:[];
  //console.log(convertedLeadsData,convertedLeadsAllData,'convertedLeadsData');

  
  if(salesTrendData?.dashboardDTOS){
  let rawData=groupedCountData?.dashboardDTOS;
  salesOrderByStatus=_.orderBy(rawData, 'statusId', 'asc');
  }
  let groupedIndustryData1=[];let groupedIndustryTotal=0;
  let groupedSourceData1=[];let groupedSourceTotal=0;
  if(groupedIndustryData?.dashboardDTOS?.length > 0){
    //groupedIndustryData1=groupedIndustryData.dashboardDTOS;
    groupedIndustryData?.dashboardDTOS?.forEach((record) => {
      if(record?.typeValue){
      record.typeValue=(record?.typeValue=="null")?"Other":record.typeValue;
      record.countSum=Number(record.countSum);
      groupedIndustryData1.push(record);
      }
  });
    groupedIndustryTotal=groupedIndustryData.leadGenareatedCount;
  }
  if(groupedSourceData?.dashboardDTOS?.length > 0){
    groupedSourceData?.dashboardDTOS?.forEach((record) => {
      if(record?.typeValue){
        record.typeValue=(record?.typeValue=="null")?"Other":record.typeValue;
        record.countSum=Number(record.countSum);
        groupedSourceData1.push(record);
      }
    });
    //groupedSourceData1=groupedSourceData.dashboardDTOS;
    groupedSourceTotal=groupedSourceData.leadGenareatedCount;
  }
  //console.log(groupedIndustryData1,'groupedIndustryData1')
  const statusMap = new Map();
  leadStatusListing.forEach((item) => {
    statusMap.set(item.id+"", item.text);
  });
  const monthNames = ["","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  let salesTrendWonData=[];
    if(salesTrendData && salesTrendData?.dashboardDTOS){
      salesTrendData?.dashboardDTOS?.forEach((record) => {
          record.month=record?.typeValue?monthNames[record.typeValue]:"";   
          record.status=statusMap.get(record.statusId);
          salesTrendWonData.push(record);          
      });
    }
    //console.log(salesTrendWonData,'salesTrendWonData')
 // const data = [{typeValue:"First",countSum:400,},{typeValue:"Second",countSum:600,}];
  const config = {
    appendPadding: 10,
    data:groupedSourceData1,
    angleField: "countSum",
    colorField: "typeValue",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
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
        content: "Total\n"+groupedSourceTotal,
      },
    },
  };
  //groupedIndustryData1 +groupedIndustryData?.leadGenareatedCount
  const leadByIndustry = {
    appendPadding: 10,
    data:groupedIndustryData1,
    angleField: "countSum",
    colorField: "typeValue",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
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
        content: "Total\n"+groupedIndustryTotal,
      },
    },
  };
  
  const leadByStatusdata = [
    {
      country: "Asia",
      year: "1750",
      value: 502,
    },
    {
      country: "Asia",
      year: "1800",
      value: 635,
    },
    {
      country: "Asia",
      year: "1850",
      value: 809,
    },
    {
      country: "Asia",
      year: "1900",
      value: 947,
    },
    {
      country: "Asia",
      year: "1950",
      value: 1402,
    },
    {
      country: "Asia",
      year: "1999",
      value: 3634,
    },
    {
      country: "Asia",
      year: "2050",
      value: 5268,
    },
    {
      country: "Africa",
      year: "1750",
      value: 106,
    },
    {
      country: "Africa",
      year: "1800",
      value: 107,
    },
    {
      country: "Africa",
      year: "1850",
      value: 111,
    },
    {
      country: "Africa",
      year: "1900",
      value: 133,
    },
    {
      country: "Africa",
      year: "1950",
      value: 221,
    },
    {
      country: "Africa",
      year: "1999",
      value: 767,
    },
    {
      country: "Africa",
      year: "2050",
      value: 1766,
    },
    {
      country: "Europe",
      year: "1750",
      value: 163,
    },
    {
      country: "Europe",
      year: "1800",
      value: 203,
    },
    {
      country: "Europe",
      year: "1850",
      value: 276,
    },
    {
      country: "Europe",
      year: "1900",
      value: 408,
    },
    {
      country: "Europe",
      year: "1950",
      value: 547,
    },
    {
      country: "Europe",
      year: "1999",
      value: 729,
    },
    {
      country: "Europe",
      year: "2050",
      value: 628,
    },
  ];
 
  const leadByStatus = {
    data: salesTrendWonData,
    xField: "month",
    yField: "opportunitSum",
    seriesField: "status",
    isPercent: false,
    isStack: true,
    label: {
      position: "middle",
      content: (item) => {
        return item.opportunitSum;//.toFixed(2)
      },
      style: {
        fill: "#fff",
      },
    },
  };

  const chart2 = {
    percent: 0.75,
    range: {
      color: "l(0) 0:#B8E1FF 1:#3D76DD",
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: "36px",
          color: "#4B535E",
        },
        formatter: () => "70%",
      },
      content: {
        style: {
          fontSize: "24px",
          lineHeight: "44px",
          color: "#4B535E",
        },
        formatter: () => "",
      },
    },
  };

  //const leadTrendchartDummy = [{typeValue:'1991',opportunitSum:3,},{typeValue:'1992',opportunitSum:4,},{typeValue:'1993',opportunitSum:3.5,},{typeValue:'1994',opportunitSum:5,},{typeValue:'1995',opportunitSum:4.9,}];      
  const leadTrendchart = {
    data:salesTrendWonData,//salesTrendWonData
    xField: 'opportunitSum',
    yField: 'month',    
    label: {
      position: "middle",
      content: (item) => {
        return "";//item.opportunitSum.toFixed(2)
      }
    },
     tooltip: {
      formatter: (datum) => {
        return {
          name: "Opportunity",
          value: `${datum.opportunitSum}`,
        };
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },    
    interactions: [
      {
        type: 'marker-active',
      },
    ],    
  };

  const chartFourData = [
    {
      type: "Test 1",
      sales: 38,
    },
    {
      type: "Test 2",
      sales: 52,
    },
    {
      type: "Test 3",
      sales: 61,
    },
    {
      type: "Test 4",
      sales: 145,
    },
    {
      type: "Test 5",
      sales: 48,
    },
    {
      type: "Test 6",
      sales: 38,
    },
  ];
  const chart4 = {
    data: convertedLeadsData,
    xField: "oppurtunityAmount",
    yField: "fullname",
    meta: {
      fullname: {
        alias: "Category",
      },
      oppurtunityAmount: {
        alias: "Opportunity Amount",
      },
    },
    minBarWidth: 20,
    maxBarWidth: 20,
  };

  return (
    <>
      <div className=" row mt-4 pt-4">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                All New Leads
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {groupedCountData?.leadGenareatedCount}
                  </div>
                </div>
                <div className="col-auto">
                  <i className="las la-filter fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                Campaign Sent
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    0.0
                  </div>
                </div>
                <div className="col-auto">
                  <i className="lab la-telegram fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-leftinfo text-uppercase mb-1">
                Lead Generated Through Campaigns
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        0.0
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="las la-funnel-dollar fa-2x text-gray-300"></i>
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
                Lead By Source
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      {" "}
                      {<Pie {...config} />}
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
                Lead By Industry
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      {<Pie {...leadByIndustry} />}
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
                Converted Leads
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      <Bar {...chart4} />
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
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Lead By Status
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
                <Column {...leadByStatus} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-uppercase text-gray-800">
                Lead Trend
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{ height: 220 }}>
                      {<Line {...leadTrendchart} />}
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
export default MarketingReport;
