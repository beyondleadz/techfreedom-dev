import React, { useEffect, useState, useMemo } from "react";
import CLogo from "../../assets/images/d-bank1.png";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Space } from 'antd';
import _ from "lodash";
// import "antd/dist/antd.css";
import { Table, Input } from "antd";
import { getCompanyList } from "../../actionCreator/companyListingActionCreater";

const CompanyContent = () => {
  const { Search } = Input;
  const items= [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  const columns = [
    {
      title: <div className="companyname">Company Name</div>,
      dataIndex: "name",
      fixed:"left"
    },
    {
      title: "Industry",
      dataIndex: "industry",
    },
    {
      title: "Location",
      dataIndex: "location",
      className: "location",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Social",
      dataIndex: "social",
    },
  ];

  const dispatch = useDispatch();
  const [companyList, setCompanyList] = useState();
  const companyFilterList = useSelector((state) => state.companyListingReducer);

  useMemo(() => {
    dispatch(getCompanyList());
  }, []);

  useEffect(() => {
    let data = [];
    companyFilterList?.companyList.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          name: record.name,
          industry: record?.industry?.name,
          location: `${record?.address}, ${record?.city}, ${record?.state}, ${record?.country}`,
          phone: record.phoneNo,
          social: `social`,
        },
      ];
    });

    // const data =

    setCompanyList(data);
  }, [companyFilterList]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const onSearch = (val) => {
    let filterList = [];
    if (val) {
      companyList.forEach((record) => {
        if (record?.name.toLowerCase().includes(val.toLowerCase())) {
          filterList = [
            ...filterList,
            record,
          ];
        }
      });
    } else {
      filterList = _.cloneDeep(companyFilterList?.companyList);
    }
    setCompanyList(filterList);
  };

  const onPageChange=(page,pageSize)=>{
     console.log(page,pageSize,"pager")
  }

  return (
    <>

      <div id="content-wrapper" className="d-flex flex-column ">
        <div id="content" className="shadow">
          <nav className="navbar navbar-light bg-white topbar mb-4 static-top">
            <div className="buttons-container m-mt quickselection">
            <h3 className="card-body font-weight-bold">Search Companies</h3>
              <div>              
                <span className="fs-12 mr-2">Quick Selection</span>
                <div className=" fs-12 d-sm-inline-block mr-1">
                  <input type="text" className="quickselectioninput" />
                </div>
                <span className=" fs-12 mr-1">to</span>
                <div className="  fs-12 d-sm-inline-block mr-1">
                  <input type="text" className="quickselectioninput" />
                </div>
                <button className=" fs-12 d-sm-inline-block btn btn-info btn-lg mr-1">
                  <i className="fas fs-12 fa-arrow-right"></i>{" "}
                </button>
                <button className="fs-12  btn btn-info btn-lg  mr-3">
                  Select All
                </button>
              </div>
              <ul className="flex  m-mt">
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
                      className="right-icons la la-file-pdf"
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
                    href="#"
                    id=""
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
                      className="right-icons la la-star"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12 col-lg-10">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 f-rev d-flex align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary mob-t">
                      Showing 1-20 of 100 results
                    </h6>

                    <div className="buttons-container textsearch">
                      <Search
                        placeholder="Product & Services"
                        allowClear
                        onSearch={onSearch}
                        style={{ width: 200 }}
                      />
                      {/* <form className="d-none form-inline mr-4 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control-sm bg-light"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>{" "}
                            </button>
                          </div>
                        </div>
                      </form> */}
                      <button className="d-none d-sm-inline-block ml-2 btn btn-outline-primary">
                        <i className="fas fa-bolt pr-1"></i> CONNECT TO CRM{" "}
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-container text-nowrap">
                      <div className="table-wrapper">
                        <Table
                          rowSelection={{
                            type: "checkbox",
                            ...rowSelection,
                          }}
                          columns={columns}
                          dataSource={companyList}
                          pagination={{
                            responsive: true,
                            total: companyList?.length,
                            // pageSizeOptions: ["5", "10", "15", "15"],
                            pageSize: 10,
                            // showSizeChanger: true,
                            defaultPageSize: 10,
                            position: ["bottomCenter"],
                            onChange:onPageChange
                          }}
                        />
                        {/* <table className="data-table">
                          <thead>
                            <tr>
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>Company Name</th>
                              <th>Industry</th>
                              <th>Location</th>
                              <th>Phone Number</th>
                              <th>Social</th>
                              <th>
                                <button className="d-none d-sm-inline-block btn btn-outline-secondary">
                                  <i className="fas fa-plus pr-1"></i> ADD
                                  COLUMN{" "}
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {companyList &&
                              companyList.map((item) => {
                                let CLogo = item?.companyLogoUrl;
                                return (
                                  <tr key={item.id}>
                                    <td>
                                      <input type="checkbox" />
                                    </td>
                                    <td>
                                      <span className="companyLogo">
                                        <img src={CLogo} />
                                      </span>
                                      {item?.name}
                                    </td>
                                    <td>{item?.industry?.name}</td>
                                    <td>
                                      {item?.address}, {item?.city},
                                      {item?.state}, {item?.country}
                                    </td>
                                    <td>{item?.phoneNo}</td>
                                    <td></td>
                                    <td></td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table> */}
                      </div>
                      {/* <div className="pagination">
                        <a href="#">Previous</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">Next</a>
                        
                      </div> */}
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

export default CompanyContent;
