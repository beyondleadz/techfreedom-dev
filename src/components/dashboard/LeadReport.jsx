import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Funnel,Gauge,Line,Bar } from '@ant-design/plots';
import { purple } from '@ant-design/colors';
import { Table } from "antd";
import {getTopClosedOpportunity,getTopOpenOpportunity,getGroupedCountData,getSalesTrendData} from "../../actionCreator/dashboardActionCreator"
import { getUserInfo } from "../../utils/utils";

const LeadReport = () => {
  const dispatch = useDispatch();
  const [salesReport, setSalesReport] = useState([]);
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  const closedOpprtunityData = useSelector(
    (state) => state.DashboardReducer.closedOpp
  );
  const openOpprtunityData = useSelector(
    (state) => state.DashboardReducer.openOpp
  );
  const groupedCountData=useSelector((state)=>state.DashboardReducer.groupedCountData);
  const salesTrendData=useSelector((state)=>state.DashboardReducer.salesTrendData);
  useEffect(() => {
    if (Object.keys(getUserInfo()).length) {
      dispatch(getTopClosedOpportunity());
      dispatch(getTopOpenOpportunity());
      dispatch(getGroupedCountData());
      dispatch(getSalesTrendData());
    }
  }, [userAccountInfo]);
    //console.log(closedOpprtunityData,'closedOpprtunityData');
    const dataSource =closedOpprtunityData;
    let leadConversionValue=0;
    let opportunityWonValue=0;
    let leadConversionRate=0;
    let opportunityWonRatio=0;
    let lostOpportunity=0; 
    let salesOrderByStatus=[];
    let salesTrendWonData=[];
    if(salesTrendData?.dashboardDTOS?.length > 0){
      salesTrendData?.dashboardDTOS?.forEach((record) => {
          if(record?.typeValue =="WON"){
            salesTrendWonData.push(record);
          }          
      });
    }
    if(groupedCountData?.dashboardDTOS?.length > 0){
      groupedCountData?.dashboardDTOS?.forEach((record) => {
          if(record?.typeValue =="qulified"){
            leadConversionValue+=Math.number(record.countSum);
          }
          if(record?.typeValue =="WON"){
            opportunityWonValue+=Math.number(record.leadclosedOpportunity);
          }
          if(record?.typeValue =="un-qulified" || record?.typeValue =="lost"){
            lostOpportunity+=Math.number(record.opportunitSum);
          }
      });
      let rawData=groupedCountData?.dashboardDTOS;
      salesOrderByStatus=_.orderBy(rawData, 'statusId', 'asc');
      //setSalesReport(salesOrderByStatus);
      //console.log(salesOrderByStatus,'salesReportsalesReport')
    }
    if(groupedCountData?.leadGenareatedCount > 0){
      leadConversionRate=leadConversionValue/groupedCountData?.leadGenareatedCount * 100;
      opportunityWonRatio=opportunityWonValue/groupedCountData?.leadGenareatedCount * 100;
    }
      const columns = [
        {
          title: 'Opportunity with Account name',
          dataIndex: 'fullname',
          key: 'fullname',
        },
        {
          title: 'Amount',
          dataIndex: 'oppurtunityAmount',
          key: 'oppurtunityAmount',
        },
        {
          title: 'Owner & Closing Date',
          dataIndex: 'createdBy',
          key: 'createdBy',
        },
      ];

      const salesOrderByStatus_dummy = [
        {
          typeValue: 'First',
          countSum: 400,
        },
        {
          typeValue: 'Second',
          countSum: 151,
        }
      ];  
    const config = {
        data: salesOrderByStatus_dummy,
        xField: 'typeValue',
        yField: 'countSum',
        legend: false,
        meta: {
            value: {
            min: 0,
            max: 10000,
           },
         },
         //color:['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766'],
      }; 
      let totalOpportunityDummy=50;
      let totalValueRateDummy=100;
      const chart2 = {
        percent: 0.75,
        range: {
          color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
          title: {
            offsetY: -36,
            style: {
              fontSize: '36px',
              color: '#4B535E',
            },
            formatter: () => '70%',
          },
          content: {
            style: {
              fontSize: '24px',
              lineHeight: '44px',
              color: '#4B535E',
            },
            formatter: () => '',
          },
        },
      };
 
      const salesTrendWonDataDummy = [
        {
          typeValue: '1991',
          opportunitSum: 3,
        },
        {
          typeValue: '1992',
          opportunitSum: 4,
        },
        {
          typeValue: '1993',
          opportunitSum: 3.5,
        },
        {
          typeValue: '1994',
          opportunitSum: 5,
        },
        {
          typeValue: '1995',
          opportunitSum: 4.9,
        }        
      ];      
      const chart3 = {
        data:salesTrendWonDataDummy,//salesTrendWonData
        xField: 'typeValue',
        yField: 'opportunitSum',
        label: {},
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#5B8FF9',
            lineWidth: 2,
          },
        },
        tooltip: {
          showMarkers: false,
        },
        state: {
          active: {
            style: {
              shadowBlur: 4,
              stroke: '#000',
              fill: 'red',
            },
          },
        },
        interactions: [
          {
            type: 'marker-active',
          },
        ],
      };

      
      const chart4 = {
        data:openOpprtunityData,
        xField: 'oppurtunityAmount',
        yField: 'fullname',
        meta: {
          fullname: {
            alias: 'Category',
          },
          oppurtunityAmount: {
            alias: 'Amount',
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
                Lead Generated
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{groupedCountData?.leadGenareatedCount}</div>
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
                Lead Conversion Rate
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{leadConversionRate}%</div>
                </div>
                <div className="col-auto">
                  <i className="las la-funnel-dollar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-leftinfo text-uppercase mb-1">
                Opportunity Won Ratio
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {opportunityWonRatio}%
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
                  <i className="las la-percent fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                Open Opportunities
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{groupedCountData?.leadOpenOpportunity}</div>
                </div>
                <div className="col-auto">
                  <i className="las la-comments fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-danger shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                Pipeline Contribution
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{groupedCountData?.totalOpportunity}</div>
                </div>
                <div className="col-auto">
                  <i className="las la-hand-holding-usd fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-dark shadow h-100 py-2">
            <div className="card-body">
              <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
                Lost Opportunities
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{lostOpportunity}</div>
                </div>
                <div className="col-auto">
                  <i className="lab la-creative-commons-nc fa-2x text-gray-300"></i>
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
              <h6 className="m-0 font-weight-bold text-uppercase text-gray-800">
                Sales Pipeline Report
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className="" style={{height:220}}>
                    { <Funnel {...config} />  }
                    </div>
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className="">                        
                    </div>
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
                Closed Sales (Actual VS Target)
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                  <div className="" style={{height:220}}>
                       {<Gauge {...chart2} />} 
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
                Sales Trend
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                  <div className="" style={{height:220}}>
                    { <Line {...chart3} />  }
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
                Top 5 Closed Opportunities
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
              <Table pagination={{ position: ['none'] }} dataSource={dataSource} columns={columns} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Top 5 Open Opportunities
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                  <div className="" style={{height:220}}><Bar {...chart4} /></div>
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
export default LeadReport;
