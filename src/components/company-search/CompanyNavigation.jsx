import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TrialModal from "../../common/TrialModal";
import { getToken } from "../../utils/utils";
import { PAGE_LENGTH } from "../../config";
import {
  downloadCompanyList,
  saveAdvancedSelectedFilters,
  getCompanyListWithStartAndEnd,
  getCompanyList,
} from "../../actionCreator/companyListingActionCreater";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
const CompanyNavigation = () => {
  const [quickSelection, setQuickSelection] = useState({
    start: 0,
    end: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const companySelectedFilterList = useSelector(
    (state) => state.companyListingReducer.selectedFilters
  );
  const selectedRecords = useSelector(
    (state) => state.companyListingReducer.selectedRecords
  );
  const navigate = useNavigate();

  const printPage = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      window.print();
    }
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
      //console.log("call tag api");
    }
  };

  const onChangeQuickSelection = (e) => {
    //console.log(e.target.name,e.target.value);
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
    const startValue =
      parseInt(quickSelection?.start) === 1
        ? 0
        : parseInt(quickSelection?.start);

    const pageValues = {
      start: startValue,
      end:
        (parseInt(quickSelection.end) - startValue) * parseInt(PAGE_LENGTH) ||
        PAGE_LENGTH,
    };
    //console.log(pageValues,'pageValuespageValues');
    if ((pageValues?.start || pageValues?.start === 0) && pageValues?.end) {
      emptyFilters();
      dispatch(getCompanyListWithStartAndEnd(pageValues));
    }
  };

  const onClickSelectAll = () => {
    emptyFilters();
    dispatch(getCompanyList());
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const redirectToSignup = () => {
    setShowModal(false);
    navigate("/signup");
  };

  return (
    <nav className="navbar navbar-light bg-white topbar mr-2 mb-4 static-top">
      <div className="buttons-container-top m-mt quickselection">
        <div>
          <span className="fs-12 mr-2">Quick Selection</span>
          <div className=" fs-12 d-sm-inline-block mr-1">
            <Input
              name="start"
              className="quickselectioninput btn-outline-grey"
              maxLength={2}
              onChange={onChangeQuickSelection}
            />
          </div>
          <span className=" fs-12 mr-1">to</span>
          <div className="  fs-12 d-sm-inline-block mr-1">
            <Input
              name="end"
              maxLength={2}
              className="quickselectioninput btn-outline-grey"
              onChange={onChangeQuickSelection}
            />
          </div>
          <Button
            type="primary"
            className=" fs-12 d-sm-inline-block mr-1 quick-btn"
            onClick={onClickQuickSelection}
          >
            <i className="fas fs-12 fa-arrow-right"></i>
          </Button>
          {/* <Button
          type="primary"
            className="fs-12  mr-1"
            onClick={onClickSelectAll}
          >
            Select All
          </Button> */}
        </div>
        <ul className="flex  m-mt">
          {/* <li>
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
          </li> */}
          {/* <li>
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
          </li> */}
          {/* <li>
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
          </li> */}
          {/* <li>
            <a
              className=" mr-2"
              id=""
              role="button"
              data-toggle=""
              aria-haspopup="true"
              aria-expanded="false"
              onClick={tagPage}
            >
              <i className="right-icons las la-tag" aria-hidden="true"></i>
            </a>
          </li> */}
        </ul>

        {showModal ? (
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
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
export default CompanyNavigation;
