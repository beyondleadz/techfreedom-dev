import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  downloadCompanyList,
  saveAdvancedSelectedFilters,
  getCompanyListWithStartAndEnd,
  getCompanyList
} from "../../actionCreator/companyListingActionCreater";
const CompanyNavigation = () => {
  const [quickSelection, setQuickSelection] = useState({
    start: 0,
    end: 0,
  });
  const dispatch = useDispatch();
  const companySelectedFilterList = useSelector(
    (state) => state.companyListingReducer.selectedFilters
  );

  const printPage = () => {
    window.print();
  };
  const downloadExcel = () => {
    dispatch(downloadCompanyList(companySelectedFilterList, "exl"));
  };
  const downloadPDF = () => {
    dispatch(downloadCompanyList(companySelectedFilterList, "pdf"));
  };

  const onChangeQuickSelection = (e) => {
    setQuickSelection({
      ...quickSelection,
      [e.target.name]: e.target.value,
    });
  };

  const emptyFilters = () => {
    const emptyPayload = {
      selectedCountry: [],
      selectedState: [],
      selectedCity: [],
      selectedIndustry: [],
      selectedCompanytype: [],
      selectedEmployeecount: [],
      selectedRevenuerange: [],
    };

    dispatch(saveAdvancedSelectedFilters(emptyPayload));
  };

  const onClickQuickSelection = () => {
    emptyFilters();
    dispatch(getCompanyListWithStartAndEnd(quickSelection));
  };

  const onClickSelectAll = () => {
    emptyFilters();
    dispatch(getCompanyList());
  };

  return (
    <nav className="navbar navbar-light bg-white topbar mb-4 static-top">
      <div className="buttons-container-top m-mt quickselection">
        <div>
          <span className="fs-12 mr-2">Quick Selection</span>
          <div className=" fs-12 d-sm-inline-block mr-1">
            <Input
              name="start"
              className="quickselectioninput"
              maxLength={2}
              onChange={onChangeQuickSelection}
            />
          </div>
          <span className=" fs-12 mr-1">to</span>
          <div className="  fs-12 d-sm-inline-block mr-1">
            <Input
              name="end"
              maxLength={2}
              className="quickselectioninput"
              onChange={onChangeQuickSelection}
            />
          </div>
          <Button
          type="primary"
            className=" fs-12 d-sm-inline-block mr-1"
            onClick={onClickQuickSelection}
          >
            <i className="fas fs-12 fa-arrow-right"></i>
          </Button>
          <Button
          type="primary"
            className="fs-12  mr-1"
            onClick={onClickSelectAll}
          >
            Select All
          </Button>
        </div>
        <ul className="flex  m-mt">
          <li>
            <a
              className=" mr-2"
              role="button"
              data-toggle=""
              aria-haspopup="true"
              aria-expanded="false"
              onClick={downloadPDF}
            >
              <i className="right-icons la la-file-pdf" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className=" mr-2"
              role="button"
              data-toggle=""
              aria-haspopup="true"
              aria-expanded="false"
              onClick={downloadExcel}
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
              onClick={printPage}
            >
              <i className="right-icons la la-print" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              className=" mr-2"
              id=""
              role="button"
              data-toggle=""
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="right-icons las la-tag" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default CompanyNavigation;
