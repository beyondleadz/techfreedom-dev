import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Input, Button, Modal } from "antd";
import { PAGE_LENGTH } from "../../config";
import defaultLogo from "../../assets/images/default_company_logo.jpg";

import {
  getCompanyList,
  savePaginationValues,
  saveAdvancedSelectedFilters,
  selectedRow,
  saveSearchAction,
} from "../../actionCreator/companyListingActionCreater";
import Loader from "../loader";
import { getToken } from "../../utils/utils";

const CompanyContent = () => {
  const { Search, TextArea } = Input;
  const columns = [
    {
      title: <div className="companyname">Company Name</div>,
      dataIndex: "name",
      render: (record, row) => {
        return (
          <div className="namecol">
            <div className="logo">
              <img src={record?.companyLogoUrl || defaultLogo} />
            </div>
            <span className="cname" onClick={() => getDetails(row.key)}>
              {record?.name}
            </span>
          </div>
        );
      },
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
  const navigate = useNavigate();
  const [companyList, setCompanyList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [tagValues, setTagValues] = useState({
    tagname: "",
    description: "",
    tagError: "",
  });
  const companyFilterList = useSelector((state) => state.companyListingReducer);
  const companySelectedFilterList = useSelector(
    (state) => state.companyListingReducer.selectedFilters
  );
  const loading = useSelector((state) => state.CommonReducer.loading);
  const paginationValue = useSelector(
    (state) => state.companyListingReducer.paginationValue
  );

  useMemo(() => {
    dispatch(getCompanyList({}, paginationValue));
  }, []);

  const renderSocialLinks = (socialLinks) => {
    return socialLinks?.map((link) => {
      if (link?.name === "facebook") {
        return (
          <Link to={link?.proifileUrl} target="_blank">
            <i class="lab fs-20 facebook lab la-facebook"></i>
          </Link>
        );
      } else if (link?.name === "Linkedin") {
        return (
          <Link to={link?.proifileUrl} target="_blank">
            <i class="lab fs-20 linkedin  lab la-linkedin"></i>
          </Link>
        );
      } else if (link?.name === "twitter") {
        return (
          <Link to={link?.proifileUrl} target="_blank">
            <i class="lab fs-20  twitter la la-twitter-square"></i>
          </Link>
        );
      }
    });
  };

  useEffect(() => {
    let data = [];
    companyFilterList?.companyList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          name: record,
          industry: record?.industry?.name,
          location: `${record?.address}, ${record?.city}, ${record?.state}, ${record?.country}`,
          phone: record.phoneNo,
          social: renderSocialLinks(record?.socialLinks),
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
      dispatch(selectedRow(selectedRowKeys));
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const checkLoginStatus = () => {
    let isLoggedIn = false;
    if (getToken()) {
      setShowModal(false);
      isLoggedIn = true;
    } else {
      setShowModal(true);
      isLoggedIn = false;
    }
    return isLoggedIn;
  };

  const onSearch = (val) => {
    const payload = {
      ...companySelectedFilterList,
      searchKeyword: val,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getCompanyList(payload, paginationValue));
  };

  const onPageChange = (page, pageSize) => {
    const pageValues = {
      start: page - 1,
      end: pageSize,
    };
    dispatch(savePaginationValues(pageValues));
    dispatch(getCompanyList(companySelectedFilterList, pageValues));
  };

  const getDetails = (id) => {
    navigate(`/company-summary/${id}`);
  };

  const onHandleSaveSearch = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      setShowModal(true);
    }
  };

  const checkFilters = () => {
    let hasFilters = true;

    Object.keys(companySelectedFilterList).forEach((item) => {
      if (companySelectedFilterList[item]?.length) {
        hasFilters = false;
      }
    });
    return hasFilters;
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onConfrim = () => {
    if (!tagValues.tagname) {
      setTagValues({
        ...tagValues,
        tagError: "error",
      });
    } else {
      const payload = {
        accountId: "string",
        dataDump: JSON.stringify(companySelectedFilterList),
        emailId: "string",
        fullName: tagValues.tagname,
        id: 0,
        phoneNo: "string",
        source: tagValues.description,
        userId: "string",
      };
      dispatch(saveSearchAction(payload));
      setShowModal(false);
    }
  };

  const onInputChange = (e) => {
    setTagValues({
      ...tagValues,
      [e.target.name]: e.target.value,
    });
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
                      Showing 1-
                      {parseInt(PAGE_LENGTH) >
                      parseInt(companyFilterList?.totalCount)
                        ? companyFilterList?.totalCount
                        : PAGE_LENGTH}
                      <span className="m-1">of</span>{" "}
                      {companyFilterList?.totalCount}
                      <span className="m-1">results</span>
                    </h6>

                    <div className="buttons-container textsearch">
                      <Search
                        placeholder="Product & Services"
                        allowClear
                        onSearch={onSearch}
                        style={{ width: 200 }}
                      />

                      <Button
                        className="d-none d-sm-inline-block ml-2"
                        onClick={onHandleSaveSearch}
                        disabled={checkFilters()}
                        title={checkFilters() ? "Filters are not selected" : ""}
                      >
                        <i className="fas fa-save pr-1"></i> SAVE SEARCH
                      </Button>
                      <Button className="d-none d-sm-inline-block ml-2">
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
                            dataSource={companyList}
                            pagination={{
                              responsive: true,
                              total: companyFilterList?.totalCount,
                              pageSize: PAGE_LENGTH,
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

      {showModal ? (
        <Modal
          title="Save Search"
          width={"400px"}
          closable={true}
          open={showModal}
          onCancel={closeModal}
          onOk={onConfrim}
        >
          <div class="pop-up errorformcontainer ">
            <div className="form">
              <div className="formcol1">
                <label>Search Name</label>
              </div>
              <div className="formcol2">
                <Input
                  name="tagname"
                  status={tagValues?.tagError}
                  value={tagValues.tagname}
                  placeholder="Tag Name"
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className="form">
              <div className="formcol1">
                <label>Description</label>
              </div>
              <div className="formcol2">
                <TextArea
                  name="description"
                  placeholder="Description"
                  value={tagValues.description}
                  rows={2}
                  maxLength={100}
                  onChange={onInputChange}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default CompanyContent;
