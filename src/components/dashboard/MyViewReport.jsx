import React, { useState } from "react";
import { Tabs, TabsProps } from "antd";

const MyViewReport = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Save Searches",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Top 5 Tags",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Recommendation",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Reports",
      children: "Content of Tab Pane 4",
    },
    {
      key: "5",
      label: "Usage",
      children: "Content of Tab Pane 5",
    },
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
