import React, { useState } from "react";
import { Tabs, TabsProps } from "antd";
import SaveSearchReport from "./SaveSearchReport";
import TagsReport from "./TagsReport";
import RecommendedReport from "./RecommendedReport";

const MyViewReport = () => {
  const onChange = (key: string) => {
    //console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Saved Searches",
      children: <SaveSearchReport/>,
    },
    {
      key: "2",
      label: "My Tags",
      children: <TagsReport/>,
    },
    {
      key: "3",
      label: "Recommendation",
      children: <RecommendedReport/>,
    },
    // {
    //   key: "4",
    //   label: "Reports",
    //   children: "Content of Tab Pane 4",
    // },
    // {
    //   key: "5",
    //   label: "Usage",
    //   children: "Content of Tab Pane 5",
    // },
  ];

  return (
    <>
      <section id="dashboard">
        <div className="container-fluid">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />          
        </div>
      </section>
    </>
  );
};
export default MyViewReport;
