import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Space, menuProps, Table, Input, Button, Modal ,Select} from "antd";
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
const LeadTableView = ({
  checkPageLayout,
  tagPage,
  downloadExcel,
  downloadPDF,
  printPage,
  loading,
  rowSelection,
  columns,
  executiveEmployeeList,
  paginationValue,
  companyFilterList,
  onPageChange,
}) => {
  return (
    <>
      <div className="contentbody shadow">
        <div id="content-wrapper" className="d-flex flex-column ">
          <div id="content" className="shadow">
            <div className="container-fluid pl-0 pr-0">
              <div className="row">
                <div className="col-xl-12 col-lg-10 pl-0">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3 f-rev d-flex align-items-center justify-content-between">
                      <h6 className="m-0 ml-2 font-weight-bold text-primary mob-t">
                        Showing 1-
                        {parseInt(PAGE_LENGTH) >
                        parseInt(companyFilterList?.totalExecutiveCount)
                          ? companyFilterList?.totalExecutiveCount
                          : paginationValue.end
                          ? paginationValue.end
                          : PAGE_LENGTH}
                        <span className="m-1">of</span>{" "}
                        {companyFilterList?.totalExecutiveCount}
                        <span className="m-1">results</span>
                      </h6>
                      <span class="ml-4 fs-23 mr-3"><i class=" las la-calendar"></i><i className=" btn  mr-3 ml-3 kanbanlist" onClick={()=>checkPageLayout(1)}></i><i className=" btn  kanbanview" onClick={()=>checkPageLayout(2)}></i></span>
                      <Dropdown
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
                      {/* <span className="ml-4 fs-23">
                        <i className="text-info las la-calendar"></i>
                      </span> */}
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
                                onClick={tagPage}
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
                                onClick={downloadExcel}
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
                              onClick={downloadPDF}
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
                              onClick={printPage}
                            >
                              <i
                                className="right-icons la la-print"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                         </ul>
                        <Button className="d-none d-sm-inline-block ml-2 btn-outline-grey">
                          <i className="fas fa-bolt pr-1"></i> CONNECT TO CRM
                        </Button>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-container text-nowrap">
                        <div className="table-wrapper">
                          {!loading ? (
                            <Table
                              rowSelection={{
                                type: "checkbox",
                                ...rowSelection,
                              }}
                              columns={columns}
                              dataSource={executiveEmployeeList}
                              pagination={{
                                responsive: true,
                                defaultCurrent: paginationValue?.start + 1,
                                total: companyFilterList?.totalExecutiveCount,
                                pageSize:
                                  parseInt(PAGE_LENGTH) >
                                  parseInt(
                                    companyFilterList?.totalExecutiveCount
                                  )
                                    ? companyFilterList?.totalExecutiveCount
                                    : paginationValue.end
                                    ? paginationValue.end
                                    : PAGE_LENGTH,
                                position: ["bottomCenter"],
                                onChange: onPageChange,
                              }}
                            />
                          ) : (
                            <Loader />
                          )}
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
    </>
  );
};
export default LeadTableView;
