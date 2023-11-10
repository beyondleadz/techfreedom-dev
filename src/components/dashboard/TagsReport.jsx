import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Space, Tag } from "antd";
import { getExecutiveTagList } from "../../actionCreator/executiveListingActionCreater";
import { getCompanyTagList } from "../../actionCreator/companyListingActionCreater";

import { getUserInfo } from "../../utils/utils";

const TagsReport = () => {
  const dispatch = useDispatch();
  const userAccountInfo = useSelector(
    (state) => state.CommonReducer.accountInfo
  );
  const executiveCompanyTagList = useSelector(
    (state) => state.executiveListingReducer.companyTagList
  );
  const companyTagList = useSelector(
    (state) => state.companyListingReducer.companyTagList
  );

  useEffect(() => {
    if (Object.keys(getUserInfo()).length) {
      const { id } = getUserInfo();
      dispatch(getExecutiveTagList(id));
      dispatch(getCompanyTagList(id));
    }
  }, [userAccountInfo]);

  //console.log(closedOpprtunityData,'closedOpprtunityData');
  const dataSource = companyTagList;
  const executiveDataSource = executiveCompanyTagList;
  const colorArray = [
    "#43ACFF",
    "#EF5261",
    "#FAC300",
    "#9AD888",
    "#18B0A7",
    "#3C78D8",
    "#43ACFF",
    "#EF5261",
    "#FAC300",
    "#9AD888",
  ];
  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Company Tags
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
              <Space size={[0, companyTagList?.length]} wrap>
              {companyTagList?.map((item, index) => {
                return <Tag color={colorArray[index]}>{item}</Tag>
})} 
</Space>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-gray-800 text-uppercase">
                Executive Tags
              </h6>
            </div>

            <div className="card-body">
              <div className="chart-area">
              <Space size={[0, executiveCompanyTagList?.length]} wrap>
              {executiveCompanyTagList?.map((item, index) => {
                let cnt=index;
                if(index >colorArray.length){
                  cnt=0;
                  cnt++;
                }
                return <Tag color={colorArray[cnt]}>{item}</Tag>
})}</Space>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TagsReport;
