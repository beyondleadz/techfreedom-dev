import React, { useEffect, useState, useMemo } from "react";
import { INode, ReactHiererchyChart } from "react-hierarchy-chart";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
const OrgChart = () => {
  const employeeList = useSelector(
    (state) => state.companyDetailsReducer.employeeList
  );
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );

  // Sample employee data array
  const employeeData = [];
  employeeList.forEach((employee) => {
    let obj={};
    obj.id=employee.id;
    obj.exfunction=employee?.exfunction?.name;
    obj.exfunctionId=employee?.exfunction?.id;
    obj.exlevel=employee?.exlevel?.name;
    obj.exlevelId=employee?.exlevel?.id;
    obj.title=employee?.title;
    obj.firstname=employee.firstname;
    if(obj.exfunctionId || obj.exlevelId){
    employeeData.push(obj);
    }
  });
// Function to group employee data by multiple levels
let chartData=[];
const groupEmployees = (data, groupBy) => {
  return data.reduce((result, item) => {
    let currentGroup = result;
    groupBy.forEach((key, index) => {
      const value = item[key];
      
      if (!currentGroup.has(value)) {
        if (index === groupBy.length - 1) {
          currentGroup.set(value, []);
        } else {
          currentGroup.set(value, new Map());
        }
      }
      currentGroup = currentGroup.get(value);
    });
    currentGroup.push(item);
    return result;
  }, new Map());
};

// Specify the properties to group by in the desired order
const groupByProperties = ['exfunction', 'exlevel'];
// Call the function to group the data
if(employeeData.length){
const groupedEmployeesMap = groupEmployees(employeeData, groupByProperties);
// Function to convert the groupedEmployeesMap to an array recursively
const convertMapToArray = map => {
  return Array.from(map, ([key, value]) => ({
    [groupByProperties[groupByProperties.length - 1]]: key,
    ...(value instanceof Map ? { [groupByProperties[0]]: convertMapToArray(value) } : { data: value })
  }));
};
// Convert the groupedEmployeesMap to an array
const groupedEmployeesArray = convertMapToArray(groupedEmployeesMap);
//console.log(groupedEmployeesMap,'groupedEmployeesArray');
groupedEmployeesArray.forEach((data) => {
  let obj={};
  obj.name=data.exlevel;
  obj.cssClass='level2';
  let firstchild=[];
  if(data.exfunction){
    data.exfunction.forEach((data)=>{
      let obj={};
      obj.name=data.exlevel;
      obj.cssClass='level3';
          if(data.data.length > 0){
              let thirdchild=[];
              data.data.forEach((data)=>{
                let obj={};
                obj.id=data.id;
                obj.name=data.firstname;
                obj.cssClass='level4';
                obj.position=data.title;
                thirdchild.push(obj);
              });
              obj.childs=thirdchild;              
          }
        firstchild.push(obj);         
    })
    obj.childs=firstchild;
  }
  chartData.push(obj)
});
}

let chartData1=[
  {
    name: companyDetails?.name,
    cssClass: "level1",
    position: "",
    childs: chartData
  }
]
//let chartData1=chartData;
return (
    <div className="card shadow card-body">
      <div className="row">
        <div className="orgchart">
          <div className="hierarchy-viewer">
            {chartData.length?
            <ReactHiererchyChart
              nodes={chartData1}
              direction="horizontal"
              randerNode={(node) => {
                if (node.cssClass != "level1j") {
                  return (
                    <div className="node-template">
                      {node.position?
                      <>
                      <span className="position">{node.position} </span>
                      <span><Link to={`/executive-details/${node?.id}`}>{node.name}</Link> </span>
                      </>
                      :<span>{node.name} </span>
                      }
                    </div>
                  );
                }
              }}
            />:"Record not found."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
