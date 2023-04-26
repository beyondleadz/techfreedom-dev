import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { PAGE_LENGTH } from "../../config";
import { useSelector } from "react-redux";
const KeyExecutives = () => {
  const employeeList = useSelector(
    (state) => state.companyDetailsReducer.employeeList
  );

  const [employeeData, setEmployeeData] = useState([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      fixed: "left",
    },
    {
      title: "Executive name",
      dataIndex: "fullname",
      fixed: "left",
    },
    {
      title: "Designation",
      dataIndex: "title",
    },
    {
      title: "Email",
      dataIndex: "emailId",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
    },
    {
      title: "Direct Dial/Mobile    ",
      dataIndex: "exfunction",
    },
  ];

  useEffect(() => {
    let data = [];
    employeeList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          fullname: record.fullname,
          title: record?.title,
          emailId: record?.emailId,
          phoneNo: record.phoneNo,
          exfunction: `social`,
        },
      ];
    });
    setEmployeeData(data);
  }, [employeeList]);

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

  const onPageChange = (page, pageSize) => {
    // const pageValues = {
    //   start: page,
    //   end: pageSize,
    // };
    // dispatch(savePaginationValues(pageValues));
    // dispatch(getCompanyList(pageValues, companySelectedFilterList));
  };

  return (
    <div className="card shadow card-body">
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={employeeData}
        pagination={{
          responsive: true,
          total: employeeList?.length,
          // pageSizeOptions: ["5", "10", "15", "15"],
          pageSize: PAGE_LENGTH,
          // showSizeChanger: true,
          // defaultPageSize: 10,
          position: ["bottomCenter"],
          onChange: onPageChange,
        }}
      />
      {/* <div className="table-container text-nowrap">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ID</th>
                <th>Executive Name</th>
                <th>Designation</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Direct Dial/Mobile</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>

                <td>John Mathew </td>
                <td>Delivery Head</td>
                <td>
                  <h4 className="  fs-23 btn  la  la-envelope-open-text text-black   "></h4>
                </td>
                <td>(206) 266-1000</td>
                <td>
                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                    {" "}
                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                    VIEW
                  </h4>
                </td>
                <td>
                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                    ADD TO LEADS{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>2</td>

                <td>John Mathew </td>
                <td>Delivery Head</td>
                <td>
                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
                </td>
                <td>(206) 266-1000</td>
                <td>
                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                    {" "}
                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                    VIEW
                  </h4>
                </td>
                <td>
                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                    ADD TO LEADS{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>3</td>

                <td>John Mathew </td>
                <td>Delivery Head</td>
                <td>
                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
                </td>
                <td>(206) 266-1000</td>
                <td>
                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                    {" "}
                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                    VIEW
                  </h4>
                </td>
                <td>
                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                    ADD TO LEADS{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>4</td>

                <td>John Mathew </td>
                <td>Delivery Head</td>
                <td>
                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
                </td>
                <td>(206) 266-1000</td>
                <td>
                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                    {" "}
                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                    VIEW
                  </h4>
                </td>
                <td>
                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                    ADD TO LEADS{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>5</td>

                <td>John Mathew </td>
                <td>Delivery Head</td>
                <td>
                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black  "></h4>
                </td>
                <td>(206) 266-1000</td>
                <td>
                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                    {" "}
                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                    VIEW
                  </h4>
                </td>
                <td>
                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                    ADD TO LEADS{" "}
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>6</td>

                <td>John Mathew </td>
                <td>Delivery Head</td>
                <td>
                  <h4 className="fs-23  btn la  la-envelope-open-text text-black  "></h4>
                </td>
                <td>(206) 266-1000</td>
                <td>
                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                    {" "}
                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                    VIEW
                  </h4>
                </td>
                <td>
                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                    ADD TO LEADS{" "}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>7</td>

                <td>John Mathew </td>
                <td>Delivery Head</td>
                <td>
                  <h4 className=" fs-23 btn la  la-envelope-open-text text-black "></h4>
                </td>
                <td>(206) 266-1000</td>
                <td>
                  <h4 class="btn btn-primary pr-1 small text-black align-items-center">
                    {" "}
                    <i class="las la-mobile fs-12 pt-1 pr-1"></i>
                    VIEW
                  </h4>
                </td>
                <td>
                  <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                    ADD TO LEADS{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <a href="#">Previous</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">Next</a>
        </div>
      </div> */}
    </div>
  );
};

export default KeyExecutives;
