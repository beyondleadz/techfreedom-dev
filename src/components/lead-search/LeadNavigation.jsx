import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import TrialModal from "../../common/TrialModal";
import { getToken } from "../../utils/utils";
import { PAGE_LENGTH } from "../../config";
import {
  downloadExecutiveList,
  saveAdvancedSelectedFilters,
  getCompanyListWithStartAndEnd,
  getCompanyList,
  setPageLayout,
  getExecutiveEmployeeList
} from "../../actionCreator/leadListingActionCreater";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
const LeadNavigation = () => {
  const [quickSelection, setQuickSelection] = useState({
    start: 0,
    end: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const companySelectedFilterList = useSelector(
    (state) => state.leadListingReducer.selectedFilters
  );
  const selectedRecords = useSelector(
    (state) => state.leadListingReducer.selectedRecords
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
      // dispatch(downloadExecutiveList(companySelectedFilterList, "exl"));
      dispatch(downloadExecutiveList(selectedRecords, "exl"));
    }
  };
  const downloadPDF = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // dispatch(downloadExecutiveList(companySelectedFilterList, "pdf"));
      dispatch(downloadExecutiveList(selectedRecords, "pdf"));
    }
  };

  const tagPage = () => {
    const isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
      // console.log("call tag api");
    }
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

  // const checkPageLayout=(page)=>{
  //   dispatch(setPageLayout({activePage:page}));
  //   const pageValues={
  //     start: 0,
  //     end: PAGE_LENGTH,
  //   }
  //   const payload = {
  //     ...companySelectedFilterList,
  //     selectedPageLayout: page,
  //   };
  //   dispatch(saveAdvancedSelectedFilters(payload));
  //   dispatch(getExecutiveEmployeeList(payload, pageValues));      
  // }

  return (
    <nav className="navbar navbar-light bg-white topbar mb-4 mr-2 static-top">
      <div className="buttons-container-top m-mt quickselection">
        <div>
          {/* <span className="mr-4  fs-25 align-bottom "><i className=" text-info las la-calendar"></i></span> */}
          <span className="fs-12 mr-2">Quick Selection</span>
          <div className=" fs-12 d-sm-inline-block  mr-2">
            <Input
              name="start"
              className="quickselectioninput btn-outline-grey"
              maxLength={2}
              onChange={onChangeQuickSelection}
            />
          </div>
          <span className=" fs-12 mr-1">to</span>
          <div className="  fs-12 d-sm-inline-block  mr-1">
            <Input
              name="end"
              maxLength={2}
              className="quickselectioninput btn-outline-grey"
              onChange={onChangeQuickSelection}
            />
          </div>
          <Button
            type="primary"
            className=" fs-12 d-sm-inline-block quick-btn mr-1"
            onClick={onClickQuickSelection}
          >
            <i className="fas fs-12 fa-arrow-right"></i>
          </Button>
        </div>
        <ul className="flex  m-mt">
          {/* <li>
            <i className=" btn mr-2  kanbanlist" onClick={()=>checkPageLayout(1)}></i>
          </li>
          <li>
            <i className=" btn mr-2  kanbanview" onClick={()=>checkPageLayout(2)}></i>
          </li> */}
          {/*<li>
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
export default LeadNavigation;
