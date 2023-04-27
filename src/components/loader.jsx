import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
const Loader = () => {
  return <div className="loader"><Spin size="large" /></div>;
};

export default Loader;
