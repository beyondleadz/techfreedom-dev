import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { downloadCompanyList } from "../../actionCreator/companyListingActionCreater";
const CompanyNavigation = () => {
  const dispatch = useDispatch();
  const companySelectedFilterList = useSelector(
    (state) => state.companyListingReducer.selectedFilters
  );

  const printPage = () => {
    window.print();
  };
  const downloadExcel = () => {
    dispatch(downloadCompanyList(companySelectedFilterList,'exl'));
  };
  const downloadPDF = () => {
    dispatch(downloadCompanyList(companySelectedFilterList,'pdf'));
  };
  return (
    <nav className="navbar navbar-light bg-white topbar mb-4 static-top">
      <div className="buttons-container m-mt quickselection">
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
