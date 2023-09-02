import React, { useState } from "react";
import { Funnel,Gauge,Line,Bar,Pie,Column } from '@ant-design/plots';
import { purple } from '@ant-design/colors';
import { Table } from "antd";

const MarketingReport = () => {
    const data = [
        {
          stage: 'First',
          number: 400,
        },
        {
          stage: 'Second',
          number: 600,
        }
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'number',
        colorField: 'stage',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: 'Total\n1000',
          },
        },
      };

      const leadByStatusdata = [
        {
          country: 'Asia',
          year: '1750',
          value: 502,
        },
        {
          country: 'Asia',
          year: '1800',
          value: 635,
        },
        {
          country: 'Asia',
          year: '1850',
          value: 809,
        },
        {
          country: 'Asia',
          year: '1900',
          value: 947,
        },
        {
          country: 'Asia',
          year: '1950',
          value: 1402,
        },
        {
          country: 'Asia',
          year: '1999',
          value: 3634,
        },
        {
          country: 'Asia',
          year: '2050',
          value: 5268,
        },
        {
          country: 'Africa',
          year: '1750',
          value: 106,
        },
        {
          country: 'Africa',
          year: '1800',
          value: 107,
        },
        {
          country: 'Africa',
          year: '1850',
          value: 111,
        },
        {
          country: 'Africa',
          year: '1900',
          value: 133,
        },
        {
          country: 'Africa',
          year: '1950',
          value: 221,
        },
        {
          country: 'Africa',
          year: '1999',
          value: 767,
        },
        {
          country: 'Africa',
          year: '2050',
          value: 1766,
        },
        {
          country: 'Europe',
          year: '1750',
          value: 163,
        },
        {
          country: 'Europe',
          year: '1800',
          value: 203,
        },
        {
          country: 'Europe',
          year: '1850',
          value: 276,
        },
        {
          country: 'Europe',
          year: '1900',
          value: 408,
        },
        {
          country: 'Europe',
          year: '1950',
          value: 547,
        },
        {
          country: 'Europe',
          year: '1999',
          value: 729,
        },
        {
          country: 'Europe',
          year: '2050',
          value: 628,
        },
      ];
      const leadByStatus = {
        data:leadByStatusdata,
        xField: 'year',
        yField: 'value',
        seriesField: 'country',
        isPercent: true,
        isStack: true,
        label: {
          position: 'middle',
          content: (item) => {
            return item.value.toFixed(2);
          },
          style: {
            fill: '#fff',
          },
        },
      };
      
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
 
      const chartThreedata = [
        {
          year: '1991',
          value: 3,
        },
        {
          year: '1992',
          value: 4,
        },
        {
          year: '1993',
          value: 3.5,
        },
        {
          year: '1994',
          value: 5,
        },
        {
          year: '1995',
          value: 4.9,
        }        
      ];
      const chart3 = {
        data:chartThreedata,
        xField: 'year',
        yField: 'value',
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

      const chartFourData = [
        {
          type: 'Test 1',
          sales: 38,
        },
        {
          type: 'Test 2',
          sales: 52,
        },
        {
          type: 'Test 3',
          sales: 61,
        },
        {
          type: 'Test 4',
          sales: 145,
        },
        {
          type: 'Test 5',
          sales: 48,
        },
        {
          type: 'Test 6',
          sales: 38,
        }
      ];
      const chart4 = {
        data:chartFourData,
        xField: 'sales',
        yField: 'type',
        meta: {
          type: {
            alias: 'Category',
          },
          sales: {
            alias: 'Sales',
          },
        },
        minBarWidth: 20,
        maxBarWidth: 20,
      };

      const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32000,
          address: 'RK, 3 September 2023',
        },
        {
          key: '2',
          name: 'John',
          age: 42000,
          address: 'SG, 1 September 2023',
        },
      ];
      
      const columns = [
        {
          title: 'Opportunity with Account name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Amount',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Owner & Closing Date',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
      
  return (
    <>
      <div class=" row mt-4 pt-4">
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                All New Leads
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="h5 mb-0 font-weight-bold text-gray-800">1892</div>
                </div>
                <div class="col-auto">
                  <i class="las la-filter fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                Campaign Sent
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="h5 mb-0 font-weight-bold text-gray-800">0.0</div>
                </div>
                <div class="col-auto">
                  <i class="las la-funnel-dollar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="text-xs font-weight-bold text-leftinfo text-uppercase mb-1">
              Lead Generated Through Campaigns
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        0.0
                      </div>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="las la-percent fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-gray-800 text-uppercase">
                Lead By Status
              </h6>
            </div>

            <div class="card-body">
              <div class="chart-area">
              <Column {...leadByStatus} />
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-gray-800 text-uppercase">
                Lead By Source
              </h6>
            </div>

            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                  <div class="" style={{height:220}}> { <Pie {...config} />  }</div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-uppercase text-gray-800">
                Lead By Industry
              </h6>
            </div>
            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class="" style={{height:220}}>
                    { <Pie {...config} />  }
                    </div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class="">                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-uppercase text-gray-800">
              Converted Leads
              </h6>
            </div>
            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                  <div class="" style={{height:220}}>
                  <Bar {...chart4} />
                    </div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-uppercase text-gray-800">
                Lead Trend
              </h6>
            </div>
            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                  <div class="" style={{height:220}}>
                    { <Line {...chart3} />  }
                    </div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
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
