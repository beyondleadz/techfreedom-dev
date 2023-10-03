import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Dropdown, Space } from "antd";
import Loader from "../loader";
import { DownOutlined } from "@ant-design/icons";
import { updateLeadStatus } from "../../actionCreator/leadListingActionCreater";
import _ from "lodash";
const items = [
  {
    key: "1",
    label: "Quick Create",
  },

  {
    key: "3",
    label: "Import",
  },
];

const LeadKanbanView = ({
  calendarShow,
  checkPageLayout,
  loading,
  rowSelection,
  getDetails,
  executiveEmployeeList,
  paginationValue,
  companyFilterList,
  onPageChange,
}) => {
  const dispatch = useDispatch();
  const [draggableLead, setDraggableLead] = useState({});
  const [localExecutiveEmployeeList, setLocalExecutiveEmployeeList] = useState(
    []
  );
  const stepsArray = ["current", "done", "active", ""];
  
  useMemo(() => {
    //console.log(executiveEmployeeList,'executiveEmployeeList')
    setLocalExecutiveEmployeeList(executiveEmployeeList);
  }, [executiveEmployeeList.length]);

  const dragOverEvent = (e, obj) => {
    e.preventDefault();
    //console.log(e, obj, "dragOverEvent");
  };

  const dropEvent = (e, obj) => {
    e.preventDefault();
    const newPayload = _.cloneDeep(localExecutiveEmployeeList);
    //debugger;
    newPayload.forEach((item) => {
      if (item.executiveData.statusId === obj.statusId) {
        let payload = _.cloneDeep(draggableLead);
        payload.status = obj.statusId;
        item.executiveData.leadsList.push(payload);
        item.executiveData.totalRecords=item.executiveData.leadsList.length;
//    console.log(payload,'payloadAfter Drop');
     payload.customLayout="1";
     dispatch(updateLeadStatus(payload));

        // setLocalExecutiveEmployeeList(newPayload);
      }
      if (item.executiveData.statusId === draggableLead.status) {
        const filterList = item.executiveData.leadsList.filter(
          (it) => it.id !== draggableLead.id
        );
        item.executiveData.totalRecords=filterList.length;
        item.executiveData.leadsList = filterList;
        // setLocalExecutiveEmployeeList(newPayload);
      }
    });
    setLocalExecutiveEmployeeList(newPayload);
    // console.log(
    //   e,
    //   obj,
    //   "dropEvent",
    //   draggableLead,
    //   "-----",
    //   executiveEmployeeList
    // );
    //update status API call
    // let payload = draggableLead;
    //console.log(payload.status,'payload',obj.statusId);
    // payload.status = obj.statusId;
    //console.log(payload,'payloadAfter Drop');


    // dispatch(updateLeadStatus(payload));
  };

  const dragStartEvent = (e, obj, obj1) => {
    //console.log(e, obj, "dragStartEvent", obj1);
    setDraggableLead(obj);
  };

  const copyToClipboard = (text) => {
    if (window.clipboardData && window.clipboardData.setData) {
      // IE: prevent textarea being shown while dialog is visible
      return window.clipboardData.setData("Text", text);
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
    ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      // Prevent scrolling to bottom of page in MS Edge
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        // Security exception may be thrown by some browsers
        return document.execCommand("copy");
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };
  //console.log(executiveEmployeeList,loading, "groupData");
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
      {!loading ? (
        <div id="kanban" className="container-fluid">
          <div className="card-header col-xl-12 col-lg-10 card  shadow col-kanban ">
            <span className="ml-4 fs-23 mr-3">
              <i className=" las la-calendar" onClick={calendarShow}></i>
              <i
                className=" btn  mr-3 ml-3 kanbanlist"
                onClick={() => checkPageLayout(1)}
              ></i>
              <i
                className=" btn  kanbanview"
                onClick={() => checkPageLayout(2)}
              ></i>
            </span>
            <Dropdown
              menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
            >
              <Button>
                <Space>
                  <i className=" fs-14 font-weight-bold fa fa-plus"></i>Add Lead
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <span className="ml-4 fs-23 mr-3">
              {/* <Select
                name="note"
                value="Activity"
                showSearch
                placeholder="Select Name"
                optionFilterProp="children"
                options={[
                  {
                    value: "Item 1",
                    label: "Item 1",
                  },
                  {
                    value: "Item 2",
                    label: "Item 2",
                  },
                ]}
              /> */}
              {/* style={{ marginRight: "15%" }} */}
            </span>
            <span className="kanspan">
              <div className="buttons-container textsearch">
                <ul className="d-flex mt-1  m-mt">
                  <li>
                    <a
                      className=" mr-2"
                      href="#"
                      id=""
                      role="button"
                      data-toggle=""
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="right-icons las la-tags"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className=" mr-2"
                      href="#"
                      id=""
                      role="button"
                      data-toggle=""
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="right-icons la la-file-excel"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className=" mr-2"
                      role="button"
                      data-toggle=""
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="right-icons la la-file-pdf"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className=" mr-2"
                      role="button"
                      data-toggle=""
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i
                        className="right-icons la la-print"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
                <button
                  type="button"
                  className="ant-btn css-1mqg3i0 ant-btn-default d-none d-sm-inline-block ml-2 btn-outline-grey"
                >
                  <i className="fas fa-bolt pr-1"></i>
                  <span> CONNECT TO CRM</span>
                </button>
              </div>
            </span>
          </div>
          <h3 className="font-weight-light text-white">Kanban Board</h3>
          <div className=" main-kanban">
            {/* {console.log(
              localExecutiveEmployeeList,
              "localExecutiveEmployeeListlocalExecutiveEmployeeList"
            )} */}
            {localExecutiveEmployeeList &&
              localExecutiveEmployeeList?.map((rec, index) => {
                const { executiveData: record1 } = rec;
                return record1?.totalRecords ? (
                  // col-xl-3
                  <div
                    className="col-sm-3 col-kanban"
                    key={`leadst_${record1.id}_${index}`}
                  >
                    <div className="">
                      <div className=" arrow-steps">
                        <div className={`step ${stepsArray[index]}`}>
                          <div>
                            <span className="title">{record1?.statusText}</span>
                            <span className="num">{record1?.totalRecords}</span>
                          </div>
                        </div>
                        <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                        <div
                          className="items"
                          style={{ height: "500px" }}
                          onDragOver={(e) => dragOverEvent(e, record1)}
                          onDrop={(e) => dropEvent(e, record1)}
                        >
                          <div className=""> &nbsp; </div>
                          {record1?.totalRecords
                            ? record1?.leadsList.map((record, index) => {
                                return (
                                  <div
                                    className="card draggable shadow-sm"
                                    id="cd3"
                                    draggable="true"
                                    onDragStart={(e) =>
                                      dragStartEvent(e, record, record1)
                                    }
                                    key={`lead_${record.id}_${index}`}
                                  >
                                    <div className="kanbanbody p-2">
                                      <div className="kanbancard">
                                        <div
                                          className="btn-square  btn btn-primary"
                                          style={{
                                            textTransform: "uppercase",
                                            background: colorArray[index],
                                          }}
                                          onClick={() => getDetails(record.id)}
                                        >
                                          {record?.firstname?.[0]}
                                          {record?.lastname?.[0]}
                                        </div>
                                        <div
                                          className="similar-desc"
                                          style={{ width: "75%" }}
                                        >
                                          <div>
                                            <a
                                              onClick={() =>
                                                getDetails(record.id)
                                              }
                                              className="font-weight-bold fs-14 text-dark"
                                              title=""
                                            >
                                              {record?.fullname
                                                ? record.fullname
                                                : record.firstname +
                                                  " " +
                                                  record.lastname}
                                            </a>
                                          </div>
                                          <div
                                            className="fs-12"
                                            style={{
                                              textOverflow: "ellipsis",
                                              overflow: "hidden",
                                            }}
                                          >
                                            {record?.title} at{" "}
                                            {record?.companyName}
                                          </div>
                                          <div
                                            className="fs-12"
                                            onClick={() =>
                                              copyToClipboard(record?.emailId)
                                            }
                                          >
                                            {record?.emailId}
                                            <i className=" fs-14 ml-1  la la-copy text-black"></i>
                                          </div>
                                          <div
                                            className="fs-12"
                                            onClick={() =>
                                              copyToClipboard(record?.phoneNo)
                                            }
                                          >
                                            {record?.phoneNo}
                                            <i className=" fs-14 ml-1  la la-copy text-black"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                );
              })}
          </div>
        </div>
      ) : (
        <div id="kanban" className="container-fluid">
          <Loader />
        </div>
      )}
    </>
  );
};
export default LeadKanbanView;
