import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/icici.jpg";
import defaultLogo from "../../assets/images/default_company_logo.jpg";
import AboutCompany from "./AboutCompany";
import KeyExecutives from "./KeyExecutives";
import OrgChart from "./OrgChart";
import {
  getEmployeeList,
  resetEmployeeList,
} from "../../actionCreator/companyDetailsActionCreator";

const SummaryContent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [dropDownToggle, setDropdownToggle] = useState(false);
  const [tabActiveKey, setTabActiveKey] = useState("1");
  const [similarList, setSimilarList] = useState();
  const [similarCount, setSimilarCount] = useState(5);
  const [selectedValue, setSelectedValue] = useState("Filter by Department");
  const departmentList = useSelector(
    (state) => state.companyDetailsReducer.departmentList
  );
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  const similarCompanyList = useSelector(
    (state) => state.companyDetailsReducer.similarCompanyList
  );

  useEffect(() => {
    setSimilarCount(similarCompanyList.length < 5 ? similarCompanyList.length : 5);
  }, [similarCompanyList]);

  const items = [
    {
      key: "1",
      label: (
        <span>
          <i className="text-black fa fa-city pr-2"></i>About Company
        </span>
      ),
      children: <AboutCompany />,
    },
    {
      key: "2",
      label: (
        <span>
          <i className="text-black fa fa-user-friends pr-2"></i>Key Executives
        </span>
      ),
      children: <KeyExecutives />,
    },
    {
      key: "3",
      label: (
        <span>
          <i className="text-black fa fa-sitemap pr-2"></i>Org. Chart
        </span>
      ),
      children: <OrgChart />,
    },
  ];

  useEffect(() => {
    const list = similarCompanyList?.filter(
      (item) => !item?.id === companyDetails?.id
    );
    setSimilarList(list);
  }, [similarCompanyList]);

  const onChange = (key) => {
    setTabActiveKey(key);
    if (key !== "2") {
      setSelectedValue("Filter by Department");
      dispatch(getEmployeeList(id));
    }
  };

  const toggleDropdown = () => {
    setDropdownToggle(!dropDownToggle);
  };

  const setValue = (selectedItem) => {
    dispatch(resetEmployeeList());
    dispatch(getEmployeeList(id, selectedItem?.id));
    setSelectedValue(selectedItem?.name);
    setDropdownToggle(!dropDownToggle);
    setTabActiveKey("2");
  };

  const renderSimilarCompanyList = () => {
    let dd = [];
    for (let i = 0; i < similarCount; i++) {
      dd.push(
        <div className="similarinnerblk">
          <div className="s-company img-responsive">
            <img src={similarCompanyList[i]?.companyLogoUrl || defaultLogo} />
          </div>
          <div className="similar-desc">
            <div>
              <a className="font-weight-bold fs-14 text-dark" title="">
                {similarCompanyList[i]?.name}
              </a>
            </div>
            <div className="fs-12">{similarCompanyList[i]?.industry?.name}</div>
            <div className="fs-12">{similarCompanyList[i]?.address}</div>
          </div>
        </div>
      );
    }
    return dd;
    // {
    //   similarCompanyList?.map((item, index) => {
    //     return (
    //       <div className="similarinnerblk">
    //         <div className="s-company img-responsive">
    //           <img src={item?.companyLogoUrl || defaultLogo} />
    //         </div>
    //         <div className="similar-desc">
    //           <div>
    //             <a className="font-weight-bold fs-14 text-dark" title="">
    //               {item?.name}
    //             </a>
    //           </div>
    //           <div className="fs-12">{item.industry?.name}</div>
    //           <div className="fs-12">{item?.address}</div>
    //         </div>
    //       </div>
    //     );
    //   });
    // }
  };

  const getMoreSimilarCount = () => {
    if (similarCount === 5) {
      setSimilarCount(10);
    } else {
      setSimilarCount(5);
    }
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 col-custom">
              <div className="row">
                <div className="col-md-12">
                  <div className="mt-4 mb-4 summarycontainer">
                    <div>
                      <Tabs
                        // defaultActiveKey="1"
                        activeKey={tabActiveKey}
                        items={items}
                        onChange={onChange}
                        type="card"
                      />
                    </div>
                    <div className="departmentcontainer ">
                      <div
                        className="selectedlabel fa"
                        onClick={toggleDropdown}
                      >
                        <i className="text-black fa fa-suitcase pr-2"></i>
                        <span>{selectedValue}</span>
                      </div>
                      <ul
                        className={`departmentOptions ${
                          dropDownToggle ? "show" : ""
                        }`}
                      >
                        {departmentList?.map((item) => {
                          return (
                            <li key={item?.id} onClick={() => setValue(item)}>
                              {item?.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-custom-2">
              <div className="card shadow mt-5 mb-4">
                <div className="card-header font-weight-bold">
                  Similar Companies
                </div>
                <div className="card-body similarblk">
                  {renderSimilarCompanyList()}

                  {/* <div className="row mt-3 brdr-b pb-3">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="row brdr-b pt-3 pb-3">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="row brdr-b pt-3 pb-3">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div>
                  <div className="row  pt-3 ">
                    <div className=" s-company img-responsive">
                      <img src={logo} />
                    </div>
                    <div className="col">
                      <div>
                        <a
                          className="font-weight-bold fs-14 text-dark"
                          title=""
                          href="#"
                          target=""
                        >
                          ICICI Corporate Banking
                        </a>
                      </div>
                      <div className="fs-12">Banking, Finance</div>
                      <div className="fs-12">Noida India</div>
                    </div>
                  </div> */}
                </div>
                <div>
                  {similarCompanyList?.length > 5 ? (
                    <div className="fs-12 text-right">
                      <button
                        className="btn btn-light mr-2 small"
                        onClick={getMoreSimilarCount}
                      >
                        {similarCount === 10 ? "Show Less" : "5 More..."}
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="card shadow descbox1">
                <div>
                  Is this company data relevant to you?{" "}
                  <a
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      class="right-icons small fa fa-thumbs-up"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      class="right-icons small fa fa-thumbs-down"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                {/* <div font-weight-bold>
                  <button class="btn btn-outline-dark font-weight-bold mr-2 p-1">
                    Really Not
                  </button>
                  <button class="btn btn-outline-dark font-weight-bold mr-2 p-1">
                    Yes!
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryContent;
