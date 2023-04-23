import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Modal, Checkbox, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  getIndustryList,
  getLocation,
  getCompanyTypeList,
  getEmployeeCountList,
  getRevenuerangeList,
  createCompanySearchPayload,
  getCompanyList,
} from "../../actionCreator/companyListingActionCreater";
import { LEFT_FILETERS_SIZE } from "../../config";
const AdvancedFilter = ({ setOpenAdvancedModel, open }) => {
  const plainOptions = ["Apple", "Pear", "Orange"];
  const defaultCheckedList = ["Apple", "Orange"];
  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  //   const [checkAllStates, setCheckAllStates] = useState(false);

  const [countriesList, setCountriesList] = useState([]);
  const [checkAllCountries, setCheckAllCountries] = useState(false);
  const [countriesIndeterminate, setCountriesIndeterminate] = useState(true);

  const [statesList, setStatesList] = useState([]);
  const [checkAllStates, setCheckAllStates] = useState(false);
  const [statesIndeterminate, setStatesIndeterminate] = useState(true);

  const companyFilterList = useSelector((state) => state.companyListingReducer);
  const CheckboxGroup = Checkbox.Group;

  //   useEffect(() => {
  //     console.log(companyFilterList, "companyFilterList");
  //     setIndustryList(companyFilterList?.industryList);
  //     setCompanyTypeList(companyFilterList?.companyTypeList);
  //     setEmployeeCountList(companyFilterList?.employeeCountList);
  //     setRevenuerangeList(companyFilterList?.revenueRangeList);
  //     setLocation(companyFilterList?.geoLocation);
  //     setCitiesList(companyFilterList?.geoLocation);
  //   }, [companyFilterList]);

  //   const createPayload = (ele, val, key) => {
  //     let data = {};
  //     if (ele.currentTarget.checked) {
  //       data = {
  //         ...companyFilterList?.companySearchPayload,
  //         [key]: [...companyFilterList?.companySearchPayload[key], val.name],
  //       };
  //     } else {
  //       data = {
  //         ...companyFilterList?.companySearchPayload,
  //         [key]: companyFilterList?.companySearchPayload[key].filter(
  //           (item) => item !== val.name
  //         ),
  //       };
  //     }
  //     if (key === "state") {
  //       selectStates(ele, val);
  //     }
  //     dispatch(createCompanySearchPayload(data));
  //     dispatch(getCompanyList(data));
  //   };

  /*Countries Start */

  const showCountriesList = () => {
    if (!companyFilterList?.geoLocation?.countries) return;
    let optionValues = [];
    companyFilterList?.geoLocation?.countries.forEach((item) => {
      optionValues = [...optionValues, { label: item.name, value: item.name }];
    });

    let list = [];
    countriesList.forEach((item) => {
      list = [...list, item.name];
    });

    console.log(
      list,
      "countriesListcountriesList",
      optionValues,
      "countriesList",
      countriesList
    );

    return (
      <>
        <div className="filterheader">
          <h2>Country</h2>
          <Checkbox
            // indeterminate={countriesIndeterminate}
            onChange={onCountriesCheckAllChange}
            checked={checkAllCountries}
          >
            Check all
          </Checkbox>
        </div>

        <CheckboxGroup
          options={optionValues}
          value={list}
          onChange={onCountryChange}
        />
      </>
    );
  };

  const onCountryChange = (list) => {
    let optionValues = [];
    list.forEach((item) => {
      optionValues = [...optionValues, { name: item }];
    });
    setCountriesList(optionValues);
    setIndeterminate(
      !!list.length &&
        list.length < companyFilterList?.geoLocation?.countries.length
    );
    setCheckAllCountries(
      list.length === companyFilterList?.geoLocation?.countries.length
    );
  };

  const onCountriesCheckAllChange = (e) => {
    setCountriesList(
      e.target.checked ? companyFilterList?.geoLocation?.countries : []
    );
    setCountriesIndeterminate(false);
    setCheckAllCountries(e.target.checked);
  };

  /*Countries End */

  /*State Start */

  const showStatesList = () => {
    if (!companyFilterList?.geoLocation?.states) return;
    let optionValues = [];
    companyFilterList?.geoLocation?.states.forEach((item) => {
      optionValues = [...optionValues, { label: item.name, value: item.name }];
    });

    let list = [];
    statesList.forEach((item) => {
      list = [...list, item.name];
    });

    return (
      <>
        <div className="filterheader">
          <h2>States</h2>
          <Checkbox
            // indeterminate={statesIndeterminate}
            onChange={onStatesCheckAllChange}
            checked={checkAllStates}
          >
            Check all
          </Checkbox>
        </div>

        <CheckboxGroup
          options={optionValues}
          value={list}
          onChange={onStatesChange}
        />
      </>
    );
  };

  const onStatesChange = (list) => {
    console.log(list, "sfdkjslkdfj");
    let optionValues = [];
    list.forEach((item, index) => {
      optionValues = [...optionValues, { name: item }];
    });
    setStatesList(optionValues);
    setStatesIndeterminate(
      !!list.length &&
        list.length < companyFilterList?.geoLocation?.states.length
    );
    setCheckAllStates(
      list.length === companyFilterList?.geoLocation?.states.length
    );
  };

  const onStatesCheckAllChange = (e) => {
    setStatesList(
      e.target.checked ? companyFilterList?.geoLocation?.states : []
    );
    setStatesIndeterminate(false);
    setCheckAllStates(e.target.checked);
  };

  /*state End */

  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    // setConfirmLoading(true);
    // setTimeout(() => {
    //   setOpen(false);
    //   setConfirmLoading(false);
    // }, 2000);
    console.log(statesList, countriesList, "skjldflskdj");
  };

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpenAdvancedModel(false);
  };

  console.log(open, "srajlksj");

  return (
    <>
      <Modal
        width={"90%"}
        wrapClassName="advancedfilter"
        title="Advanced Filter"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="filterblk" id="county">
          {showCountriesList()}
        </div>
        <div className="filterblk" id="state">
          {showStatesList()}
        </div>
      </Modal>
    </>
  );
};
export default AdvancedFilter;
