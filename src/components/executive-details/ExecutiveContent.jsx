import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import {Tooltip } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import KeyExecutives from "./KeyExecutives";
import {
  getEmployeeList,
  resetEmployeeList,
} from "../../actionCreator/executiveDetailsActionCreator";


const SummaryContent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [dropDownToggle, setDropdownToggle] = useState(false);
  const [tabActiveKey, setTabActiveKey] = useState("1");

  const items = [
    {
      key: "1",
      label: <span><i class=" pr-1 fs-18 la la-user-friends"></i>Colleagues</span>,
      children: <KeyExecutives />,
    },
  ];

  const onChange = (key) => {
    setTabActiveKey(key);
    if (key !== "2") {
      dispatch(getEmployeeList(id));
    }
  };

  const toggleDropdown = () => {
    setDropdownToggle(!dropDownToggle);
  };

  const setValue = (selectedItem) => {
    dispatch(resetEmployeeList());
    dispatch(getEmployeeList(id, selectedItem?.id));
    setDropdownToggle(!dropDownToggle);
    setTabActiveKey("2");
  };

  <Tabs
    // defaultActiveKey="1"
    activeKey={tabActiveKey}
    items={items}
    onChange={onChange}
    type="card"
  />;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="mt-4 mb-4">
          <div className="">
            <Tabs
              // defaultActiveKey="1"
              activeKey={tabActiveKey}
              items={items}
              onChange={onChange}
              type="card"
            />

            <div className="buttons-c mr-3">
              <ul className="d-flex  m-mt">
                <li>
                  <div className="btn btn-outline-secondary pr-1 mr-2">
                    <i className="fs-16 mr-1  la la-plus"></i>Create List
                  </div>
                </li>

                <li>
                  <div className="btn btn-outline-secondary pr-1 mr-4">
                    <i className="fs-14 mr-1 fas fa-paper-plane"></i>Send
                    Campaign
                  </div>
                </li>
                <li>
                  <a class=" mr-2" aria-haspopup="true" aria-expanded="false">
                    <i
                      class="right-icons la la-file-pdf"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>

                <li>
                  <a class=" mr-2" aria-haspopup="true" aria-expanded="false">
                    <i
                      class="right-icons la la-file-excel"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>

                <li>
               
                  <a class=" mr-2" aria-haspopup="true" aria-expanded="false">
                  <Tooltip title="Tag Executive">
                    <i
                      className="right-icons las  la-user-tag"
                      aria-hidden="true"
                    ></i></Tooltip>
                  </a>
                </li>
                <li>
               
                  <a class=" mr-2" aria-haspopup="true" aria-expanded="false">
                  <i class="right-icons la la-print" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryContent;
