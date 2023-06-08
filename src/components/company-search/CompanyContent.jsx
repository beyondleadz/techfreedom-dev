import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Input, Button, Modal } from "antd";
import { PAGE_LENGTH } from "../../config";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import TrialModal from "../../common/TrialModal";
import { testImage } from "../../utils/utils";
import {
  getCompanyList,
  savePaginationValues,
  saveAdvancedSelectedFilters,
  selectedRow,
  saveSearchAction,
  saveSearchList,
  downloadCompanyList,
  createGroupCompanyTag,
} from "../../actionCreator/companyListingActionCreater";
import Loader from "../loader";
import { getToken, getUserInfo } from "../../utils/utils";

const CompanyContent = () => {
  const { Search, TextArea } = Input;
  const columns = [
    {
      title: <div className="companyname">Company Name</div>,
      dataIndex: "name",
      render: (record, row) => {
        return (
          <div className="namecol" onClick={() => getDetails(row.key)}>
            <div className="logo">
              <img
                src={record?.companyLogoUrl || defaultLogo}
                onError={(e) => {
                  e.currentTarget.src = defaultLogo;
                }}
              />
            </div>
            <span className="cname">{record?.name}</span>
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
      title: "No. of Employees",
      dataIndex: "totalEmployees",
      className: "totalEmployees",
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
  const [showTagModal, setShowTagModal] = useState(false);

  const [tagValues, setTagValues] = useState({
    tagname: "",
    description: "",
    tagError: "",
  });
  const [searchValues, setSearchValues] = useState({
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
  const selectedRecords = useSelector(
    (state) => state.companyListingReducer.selectedRecords
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
          location: `${record?.city ? record?.city + "," : ""} ${
            record?.state ? record?.state : ""
          }`,
          totalEmployees: record?.totalEmployees,
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
      dispatch(selectedRow(selectedRows));
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
    } else {
      //setShowModal(false);
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
    if (!searchValues.tagname) {
      setSearchValues({
        ...searchValues,
        tagError: "error",
      });
    } else {
      const { id, email, login } = getUserInfo();
      const payload = {
        accountId: login,
        dataDump: JSON.stringify(companySelectedFilterList),
        fullName: searchValues.tagname,
        emailId: email,
        source: "Company",
        userId: id,
      };
      dispatch(saveSearchAction(payload));
      setShowModal(false);
    }
  };

  const onInputChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };

  const redirectToSignup = () => {
    setShowModal(false);
    navigate("/signup");
  };

  const downloadExcel = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // dispatch(downloadCompanyList(companySelectedFilterList, "exl"));
      dispatch(downloadCompanyList(selectedRecords, "exl"));
    }
  };

  const downloadPDF = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // dispatch(downloadCompanyList(companySelectedFilterList, "pdf"));
      dispatch(downloadCompanyList(selectedRecords, "pdf"));
    }
  };

  const tagPage = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      console.log("call tag api");
      if (selectedRecords.length) {
        setShowTagModal(true);
      } else {
        alert("please select record.");
      }
    }
  };

  const closeTagModal = () => {
    setShowTagModal(false);
  };

  const onTagConfrim = () => {
    if (!tagValues.tagname) {
      setTagValues({
        ...tagValues,
        tagError: "error",
      });
    } else {
      const { id } = getUserInfo();
      //selectedRecords
      let payload = [];
      for (let i = 0; i < selectedRecords.length; i++) {
        payload = [
          ...payload,
          {
            company: selectedRecords[i].name,
            text: tagValues.tagname,
            userId: id,
          },
        ];
      }
      dispatch(createGroupCompanyTag(payload));

      setShowTagModal(false);
    }
  };

  const onTagInputChange = (e) => {
    setTagValues({
      ...tagValues,
      [e.target.name]: e.target.value,
    });
  };

  const printPage = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      window.print();
    }
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
                      <ul className="d-flex mt-1  m-mt">
                        <li>
                          <a
                            class=" mr-2"
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
                            class=" mr-2"
                            href="#"
                            id=""
                            role="button"
                            data-toggle=""
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i
                              class="right-icons la la-file-excel"
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
                      <Search
                        placeholder="Product & Services"
                        allowClear
                        onSearch={onSearch}
                        style={{ width: 200 }}
                      />

                      <Button
                        className="d-none d-sm-inline-block ml-2 btn-outline-grey"
                        onClick={onHandleSaveSearch}
                        disabled={checkFilters()}
                        title={checkFilters() ? "Filters are not selected" : ""}
                      >
                        <i className="fas fa-save pr-1"></i> SAVE SEARCH
                      </Button>
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
      {showTagModal && getToken() ? (
        <Modal
          title="Tag Company"
          width={"400px"}
          closable={true}
          open={showTagModal}
          onCancel={closeTagModal}
          onOk={onTagConfrim}
        >
          <div class="pop-up errorformcontainer ">
            <div className="form">
              <div className="formcol1">
                <label>Tag Name</label>
              </div>
              <div className="formcol2">
                <Input
                  name="tagname"
                  status={tagValues?.tagError}
                  value={tagValues.tagname}
                  placeholder="Name"
                  onChange={onTagInputChange}
                />
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}

      {showModal ? (
        getToken() ? (
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
                    status={searchValues?.tagError}
                    value={searchValues.tagname}
                    placeholder="Name"
                    onChange={onInputChange}
                  />
                </div>
              </div>
            </div>
          </Modal>
        ) : (
          <TrialModal
            openModal={showModal}
            closeModal={closeModal}
            redirectToSignup={redirectToSignup}
            buttonText="Start Free Trial"
            redirect={true}
            modalBody={
              <div id="small-dialog2">
                <div align="center">
                  <img src={popupImg} />
                </div>
                <p style={{ color: "#0000FF" }}>
                  Get 10 free verified contacts with a BeyondLeadz Pro trial
                </p>
                <p>
                  BeyondLeadz Pro customers close deals faster thanks to
                  relevant
                </p>
              </div>
            }
            modalWidth="400px"
          />
        )
      ) : (
        ""
      )}
    </>
  );
};

export default CompanyContent;
