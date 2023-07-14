import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Input,
  Button,
  Modal,
  Select,
} from "antd";
import { PAGE_LENGTH } from "../../config";
import Loader from "../loader";

const LeadKanbanView = ({
  loading,
  rowSelection,
  columns,
  executiveEmployeeList,
  paginationValue,
  companyFilterList,
  onPageChange,
}) => {
    const stepsArray = [
        "current",
        "done",
        "active",
        ""
    ];    
  console.log(executiveEmployeeList, "groupData");

  return (
    <>
      {!loading ? (
        <div id="kanban" className="container-fluid pt-3">
          <div class="col-sm-6 col-kanban col-xl-3">
            <Select
              name="note"
              value="Select Name"
              showSearch
              placeholder="Select Name"
              optionFilterProp="children"
              //onChange={onSelectChange}
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
            />{" "}
            <Select
              name="note"
              value="Activity"
              showSearch
              placeholder="Select Name"
              optionFilterProp="children"
              //onChange={onSelectChange}
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
            />
          </div>
          <h3 class="font-weight-light text-white">Kanban Board</h3>
          <div className=" main-kanban">
            {/* {executiveEmployeeList &&
              Object.entries(executiveEmployeeList)?.map((record, index) => {
                const [key, value] = record;
                return (
                  <div className="col-sm-6 col-kanban col-xl-3">
                    <div className="">
                      <div className=" arrow-steps">
                        <div className={`step ${stepsArray[index]}`}>
                          <div>
                            <span className="title">{key} </span>{" "}
                            <span className="num">{value?.length}</span>
                          </div>
                        </div>
                        <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                        <div className="items">
                          <div className=""> &nbsp; </div>
                          {value.map((record, index) => {
                            return (
                              <div
                                className="card draggable shadow-sm"
                                id="cd3"
                                draggable="true"
                              >
                                <div className="kanbanbody p-2">
                                  <div className="kanbancard">
                                    <div
                                      className="btn-square  btn btn-primary"
                                      style={{
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      {record?.firstname?.[0]}
                                      {record?.lastname?.[0]}
                                    </div>
                                    <div className="similar-desc">
                                      <div>
                                        <a
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
                                      <div className="fs-12">
                                        {record?.title} at {record?.companyName}
                                      </div>
                                      <div className="fs-12">
                                        {record?.emailId}
                                        <i className=" fs-14 ml-1  la la-copy text-black"></i>
                                      </div>
                                      <div className="fs-12">
                                        {record?.phoneNo}
                                        <i className=" fs-14 ml-1  la la-copy text-black"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })} */}
            <div className="col-sm-6 col-kanban col-xl-3">
              <div className="">
                <div className=" arrow-steps">
                  <div className="step current">
                    <div>
                      <span className="title">Subscribed </span>{" "}
                      <span className="num">4</span>
                    </div>
                  </div>
                  <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                  <div className="items">
                    <div className=""> &nbsp; </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            {/* <div className="fs-12">131 Maker Towers, 'F' Cuffe Parade, Colaba</div> */}
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd3"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-kanban col-xl-3">
              <div className="">
                <div className=" arrow-steps">
                  <div className="step done">
                    <div>
                      <span className="title">Lead</span>{" "}
                      <span className="num">8</span>
                    </div>
                  </div>
                  <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                  <div className="items">
                    <div className=""> &nbsp; </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd3"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-kanban col-xl-3">
              <div className="">
                <div className=" arrow-steps">
                  <div className="step active">
                    <div>
                      <span className="title">Martting qualified lead </span>{" "}
                      <span className="num">2</span>
                    </div>{" "}
                  </div>
                  <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                  <div className="items">
                    <div className=""> &nbsp; </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd3"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-kanban col-xl-3">
              <div className="">
                <div className=" arrow-steps">
                  <div className="step ">
                    <div>
                      <span className="title">Sales qualified lead</span>{" "}
                      <span className="num">4</span>
                    </div>{" "}
                  </div>
                  <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                  <div className="items">
                    <div className=""> &nbsp; </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd3"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-kanban col-xl-3">
              <div className="">
                <div className=" arrow-steps">
                  <div className="step">
                    <div>
                      <span className="title">Opportunity</span>{" "}
                      <span className="num">3</span>
                    </div>
                  </div>
                  <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                  <div className="items ">
                    <div className="dropzone rounded"> &nbsp; </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd3"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-kanban col-xl-3">
              <div className="">
                <div className=" arrow-steps">
                  <div className="step ">
                    <div>
                      <span className="title">Customer</span>{" "}
                      <span className="num">5</span>
                    </div>{" "}
                  </div>
                  <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                  <div className="items">
                    <div className=""> &nbsp; </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd3"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-kanban col-xl-3">
              <div className="">
                <div className=" arrow-steps">
                  <div className="step">
                    <div>
                      <span className="title"> Other</span>{" "}
                      <span className="num">3</span>
                    </div>
                  </div>
                  <h6 className="card-title text-uppercase text-truncate py-2"></h6>
                  <div className="items ">
                    <div className=""> &nbsp; </div>
                    <div
                      className="card draggable shadow-sm"
                      id="cd1"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd2"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="card draggable shadow-sm"
                      id="cd3"
                      draggable="true"
                    >
                      <div className="kanbanbody p-2">
                        <div className="kanbancard">
                          <div className="btn-square  btn btn-primary">AS</div>
                          <div className="similar-desc">
                            <div>
                              <a
                                className="font-weight-bold fs-14 text-dark"
                                title=""
                              >
                                Ajay Singh
                              </a>
                            </div>
                            <div className="fs-12">
                              CEO at companyname pvt. ltd.
                            </div>
                            <div className="fs-12">
                              {" "}
                              ajay@companyname.com
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                            <div className="fs-12">
                              9236587345
                              <i className=" fs-14 ml-1  la la-copy text-black"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default LeadKanbanView;
