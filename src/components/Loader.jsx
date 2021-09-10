import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: "#4d375d" }} spin />
);

export const Loader = () => (
  <div className="loader">
    <Spin indicator={antIcon} />
  </div>
);
