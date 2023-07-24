import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Input,
  Button,
  Modal,
  Select,
  Dropdown,
  menuProps,
  Space
} from "antd";
import { PAGE_LENGTH } from "../../config";
import Loader from "../loader";
import { DownOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Quick Create',
    },
    
    {
      key: '3',
      label: 'Import',
    },
  ];

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
  //console.log(executiveEmployeeList, "groupData");

  return (
    <>
      {!loading ? (
        <div id="kanban" className="container-fluid" style={{'width':'80%'}}>
          <div className="card-header col-xl-12 col-lg-10 card  shadow col-kanban "> 
<span class="ml-4 fs-23 mr-3"><i class=" las la-calendar"></i><i className=" btn  mr-3 ml-3 kanbanlist"></i><i className=" btn  kanbanview"></i></span>   <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Button>
      <Space>
      <i class=" fs-14 font-weight-bold fa fa-plus"></i>Add Lead
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
  <span class="ml-4 fs-23 mr-3">
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
            /></span>
   <span className="kanspan"><div class="buttons-container textsearch"><ul class="d-flex mt-1  m-mt"><li><a class=" mr-2" href="#" id="" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons las la-tags" aria-hidden="true"></i></a></li><li><a class=" mr-2" href="#" id="" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons la la-file-excel" aria-hidden="true"></i></a></li><li><a class=" mr-2" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons la la-file-pdf" aria-hidden="true"></i></a></li><li><a class=" mr-2" role="button" data-toggle="" aria-haspopup="true" aria-expanded="false"><i class="right-icons la la-print" aria-hidden="true"></i></a></li></ul><button type="button" class="ant-btn css-dev-only-do-not-override-1mqg3i0 ant-btn-default d-none d-sm-inline-block ml-2 btn-outline-grey"><i class="fas fa-bolt pr-1"></i><span> CONNECT TO CRM</span></button></div></span>
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
