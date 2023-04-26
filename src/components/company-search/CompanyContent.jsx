import React, { useEffect, useState, useMemo } from "react";
import CLogo from "../../assets/images/d-bank1.png";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Space } from "antd";
import _ from "lodash";
// import "antd/dist/antd.css";
import { Table, Input } from "antd";
import { PAGE_LENGTH } from "../../config";
import {
  getCompanyList,
  savePaginationValues,
  saveAdvancedSelectedFilters,
} from "../../actionCreator/companyListingActionCreater";



const CompanyContent = () => {
  const { Search } = Input;
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  const columns = [
    {
      title: <div className="companyname">Company Name</div>,
      dataIndex: "name",
      fixed: "left",
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
  const companySelectedFilterList = useSelector(
    (state) => state.companyListingReducer.selectedFilters
  );
  const paginationValue = useSelector(
    (state) => state.companyListingReducer.paginationValue
  );

  useMemo(() => {
    dispatch(getCompanyList());
  }, []);

  useEffect(() => {
    let data = [];
    companyFilterList?.companyList?.forEach((record) => {
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
    const payload = {
      ...companySelectedFilterList,
      searchKeyword: val,
    }
    dispatch(
      saveAdvancedSelectedFilters(payload)
    )
    dispatch(getCompanyList(payload,paginationValue));
    
    /*console.log(companyList,'companyList',getCompanyList);
    let filterList = [];
    if (val) {
      companyList.forEach((record) => {
        if (record?.name.toLowerCase().includes(val.toLowerCase())) {
          filterList = [...filterList, record];
        }
      });
    } else {
      filterList = _.cloneDeep(companyFilterList?.companyList);
    }
    setCompanyList(filterList);*/
  };

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize, "pager", companySelectedFilterList);
    const pageValues = {
      start: page,
      end: pageSize,
    };
    dispatch(savePaginationValues(pageValues));
    dispatch(getCompanyList(pageValues, companySelectedFilterList));
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column ">
        <div id="content" className="shadow">
          <div className="container-fluid pl-0 pr-0">
            <div className="row">
              <div className="col-xl-12 col-lg-10 pl-0">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 f-rev d-flex align-items-center justify-content-between">
                    <h6 className="m-0 ml-2 font-weight-bold text-primary mob-t">
                      Showing 1-20 of 100 results
                    </h6>

                    <div className="buttons-container textsearch">
                      <Search
                        placeholder="Product & Services"
                        allowClear
                        onSearch={onSearch}
                        style={{ width: 200 }}
                      />

                      <button className="d-none d-sm-inline-block ml-2 btn btn-outline-info">
                        <i className="fas fa-save pr-1"></i> SAVE SEARCH{" "}
                      </button>
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
                            pageSize: PAGE_LENGTH,
                            // showSizeChanger: true,
                            // defaultPageSize: 10,
                            position: ["bottomCenter"],
                            onChange: onPageChange,
                          }}
                        />
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

export default CompanyContent;
