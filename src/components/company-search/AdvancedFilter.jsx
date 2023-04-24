import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Modal, Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const AdvancedFilter = ({ setOpenAdvancedModel, openAdvancedModel }) => {
  const dispatch = useDispatch();
  const companyFilterList = useSelector((state) => state.companyListingReducer);

  const [countriesList, setCountriesList] = useState([]);
  const [checkAllCountries, setCheckAllCountries] = useState(false);

  const [statesList, setStatesList] = useState([]);
  const [selectedStateList, setSelectedStateList] = useState([]);
  const [checkAllStates, setCheckAllStates] = useState(false);

  const [selectedCitiesList, setSelectedCitiesList] = useState([]);
  const [citiesOnSelectedStateList, setCitiesOnSelectedStateList] = useState();
  const [citiesList, setCitiesList] = useState([]);
  const [checkAllCities, setCheckAllCities] = useState(false);

  const [selectedIndustryList, setSelectedIndustryList] = useState([]);
  const [industryList, setIndustryList] = useState([]);
  const [checkAllIndustry, setCheckAllIndustry] = useState(false);

  const [companyTypeList, setCompanyTypeList] = useState([]);
  const [checkAllCompanyType, setCheckAllCompanyType] = useState(false);

  const [employeeCountList, setEmployeeCountList] = useState([]);
  const [checkAllEmployeeCount, setCheckAllEmployeeCount] = useState(false);

  const [revenueRangeList, setRevenueRangeList] = useState([]);
  const [checkAllRevenueRange, setCheckAllRevenueRange] = useState(false);

  const CheckboxGroup = Checkbox.Group;

  useEffect(() => {
    if (!selectedStateList.length) {
      setCitiesOnSelectedStateList(companyFilterList?.geoLocation?.cities);
      setCitiesList(companyFilterList?.geoLocation?.cities);
    }
  }, [selectedStateList]);

  useEffect(() => {
    setIndustryList(companyFilterList?.industryList);
    setCitiesList(companyFilterList?.geoLocation?.cities);
    setStatesList(companyFilterList?.geoLocation?.states);
  }, [companyFilterList]);

  /*Countries Start */
  const showCountriesList = () => {
    return (
      <>
        <div className="filterheader">
          <h2>Countries</h2>
          <Checkbox
            onChange={onCountriesCheckAllChange}
            checked={checkAllCountries}
          >
            Check all
          </Checkbox>
        </div>

        <CheckboxGroup onChange={onCountryChange} value={countriesList}>
          <>
            <ul>
              {companyFilterList?.geoLocation?.countries.map((item) => (
                <li>
                  <Checkbox
                    key={item.id}
                    value={item}
                    onChange={($event) => updateCountries($event)}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        </CheckboxGroup>
      </>
    );
  };

  const updateCountries = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...countriesList, el.target.value];
    } else {
      newList = countriesList.filter(
        (listItem) => listItem.country_id !== el.target.value.country_id
      );
    }
    setCountriesList(newList);
  };

  const onCountryChange = (list) => {
    setCheckAllCountries(
      list.length === companyFilterList?.geoLocation?.countries.length
    );
  };

  const onCountriesCheckAllChange = (e) => {
    setCountriesList(
      e.target.checked ? companyFilterList?.geoLocation?.countries : []
    );
    setCheckAllCountries(e.target.checked);
  };

  /*Countries End */

  /*State Start */
  const showStatesList = () => {
    return (
      <>
        <div className="filterheader">
          <h2>States</h2>
          <Checkbox onChange={onStatesCheckAllChange} checked={checkAllStates}>
            Check all
          </Checkbox>
        </div>

        <div className="searchbox">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={filterState}
          />
        </div>

        <CheckboxGroup onChange={onStatesChange} value={selectedStateList}>
          <>
            <ul>
              {statesList.map((item) => (
                <li>
                  <Checkbox
                    key={item.id}
                    value={item}
                    onChange={($event) => updateStates($event)}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        </CheckboxGroup>
      </>
    );
  };

  const filterState = (ele) => {
    const filterdData = companyFilterList?.geoLocation?.states?.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setStatesList(filterdData);
    setCheckAllStates(selectedStateList.length === statesList.length);
    setSelectedStateList([]);
    setCheckAllStates(false)
  };

  const updateStates = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedStateList, el.target.value];
    } else {
      newList = selectedStateList.filter(
        (listItem) => listItem.state_id !== el.target.value.state_id
      );
    }
    setSelectedStateList(newList);
  };

  const onStatesChange = (list) => {
    setCheckAllStates(
      list.length === companyFilterList?.geoLocation?.states.length
    );
    updateCityBasedOnState(list);
  };

  const updateCityBasedOnState = (list) => {
    const cityList = companyFilterList?.geoLocation?.cities.filter((city) => {
      return list.some((ct) => {
        return city?.state_id === ct.state_id;
      });
    });
    setCitiesOnSelectedStateList(cityList);
    setCitiesList(cityList);
  };

  const onStatesCheckAllChange = (e) => {
    setSelectedStateList(e.target.checked ? statesList : []);
    setCheckAllStates(e.target.checked);
    updateCityBasedOnState(statesList);
  };

  /*state End */

  /* City Start */
  const showCitiesList = () => {
    return (
      <>
        <div className="filterheader">
          <h2>Cities - {citiesList?.length}</h2>
          <Checkbox onChange={onCityCheckAllChange} checked={checkAllCities}>
            Check all
          </Checkbox>
        </div>

        <div className="searchbox">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={filterCity}
          />
        </div>

        <CheckboxGroup onChange={onCityChange} value={selectedCitiesList}>
          <>
            <ul>
              {citiesList?.map((item) => (
                <li>
                  <Checkbox
                    key={item.id}
                    value={item}
                    onChange={($event) => updateCities($event)}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        </CheckboxGroup>
      </>
    );
  };

  const filterCity = (ele) => {
    const filterdData = citiesOnSelectedStateList?.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setCitiesList(filterdData);
    setCheckAllCities(selectedCitiesList.length === citiesList.length);
    setSelectedCitiesList([]);
    setCheckAllCities(false)
  };

  const updateCities = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedCitiesList, el.target.value];
    } else {
      newList = selectedCitiesList.filter(
        (listItem) => listItem.city_id !== el.target.value.city_id
      );
    }
    setSelectedCitiesList(newList);
  };

  const onCityChange = (list) => {
    setCheckAllCities(list.length === citiesList.length);
  };

  const onCityCheckAllChange = (e) => {
    setSelectedCitiesList(e.target.checked ? citiesList : []);
    setCheckAllCities(e.target.checked);
  };
  /*City End */

  /*Industry Start */
  const showIndustryList = () => {
    return (
      <>
        <div className="filterheader">
          <h2>Industry</h2>
          <Checkbox
            onChange={onIndustryCheckAllChange}
            checked={checkAllIndustry}
          >
            Check all
          </Checkbox>
        </div>

        <div className="searchbox">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            onChange={filterList}
          />
        </div>

        <CheckboxGroup onChange={onIndustryChange} value={selectedIndustryList}>
          <>
            <ul>
              {industryList?.map((item) => (
                <li>
                  <Checkbox
                    key={item.id}
                    value={item}
                    onChange={($event) => updateIndustries($event)}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        </CheckboxGroup>
      </>
    );
  };

  const filterList = (ele) => {
    const filterdData = companyFilterList?.industryList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setIndustryList(filterdData);
    setCheckAllIndustry(selectedIndustryList.length === industryList.length);
    setSelectedIndustryList([]);
    setCheckAllIndustry(false);
  };

  const updateIndustries = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedIndustryList, el.target.value];
    } else {
      newList = selectedIndustryList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedIndustryList(newList);
  };

  const onIndustryChange = (list) => {
    setCheckAllIndustry(list.length === industryList.length);
  };

  const onIndustryCheckAllChange = (e) => {
    setSelectedIndustryList(e.target.checked ? industryList : []);
    setCheckAllIndustry(e.target.checked);
  };
  /*Industry End */

  /*start companytype */
  const showCompanyTypeList = () => {
    return (
      <>
        <div className="filterheader">
          <h2>Company Type</h2>
          <Checkbox
            onChange={onCompanyTypeCheckAllChange}
            checked={checkAllCompanyType}
          >
            Check all
          </Checkbox>
        </div>

        <CheckboxGroup onChange={onCompanyTypeChange} value={companyTypeList}>
          <>
            <ul>
              {companyFilterList?.companyTypeList?.map((item) => (
                <li>
                  <Checkbox
                    key={item.id}
                    value={item}
                    onChange={($event) => updateCompanyType($event)}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        </CheckboxGroup>
      </>
    );
  };

  const updateCompanyType = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...companyTypeList, el.target.value];
    } else {
      newList = companyTypeList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setCompanyTypeList(newList);
  };

  const onCompanyTypeChange = (list) => {
    setCheckAllCompanyType(
      list.length === companyFilterList?.industryList.length
    );
  };

  const onCompanyTypeCheckAllChange = (e) => {
    setCompanyTypeList(e.target.checked ? companyFilterList?.industryList : []);
    setCheckAllCompanyType(e.target.checked);
  };
  /*End companytype */

  /*start employee count */
  const showEmployeeCountList = () => {
    return (
      <>
        <div className="filterheader">
          <h2>Employee Count</h2>
          <Checkbox
            onChange={onEmployeeCountCheckAllChange}
            checked={checkAllEmployeeCount}
          >
            Check all
          </Checkbox>
        </div>

        <CheckboxGroup
          onChange={onEmployeeCountChange}
          value={employeeCountList}
        >
          <>
            <ul>
              {companyFilterList?.employeeCountList?.map((item) => (
                <li>
                  <Checkbox
                    key={item.id}
                    value={item}
                    onChange={($event) => updateEmployeeCount($event)}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        </CheckboxGroup>
      </>
    );
  };

  const updateEmployeeCount = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...employeeCountList, el.target.value];
    } else {
      newList = employeeCountList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setEmployeeCountList(newList);
  };

  const onEmployeeCountChange = (list) => {
    setCheckAllEmployeeCount(
      list.length === companyFilterList?.employeeCountList.length
    );
  };

  const onEmployeeCountCheckAllChange = (e) => {
    setEmployeeCountList(
      e.target.checked ? companyFilterList?.employeeCountList : []
    );
    setCheckAllEmployeeCount(e.target.checked);
  };
  /*End employee count */

  /*Start revenue range */
  const showRevenueRangeList = () => {
    return (
      <>
        <div className="filterheader">
          <h2>Revenue Range</h2>
          <Checkbox
            onChange={onRevenueRangeCheckAllChange}
            checked={checkAllRevenueRange}
          >
            Check all
          </Checkbox>
        </div>

        <CheckboxGroup onChange={onRevenueRangeChange} value={revenueRangeList}>
          <>
            <ul>
              {companyFilterList?.revenueRangeList?.map((item) => (
                <li>
                  <Checkbox
                    key={item.id}
                    value={item}
                    onChange={($event) => updateRevenueRange($event)}
                  >
                    {item.name}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </>
        </CheckboxGroup>
      </>
    );
  };

  const updateRevenueRange = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...revenueRangeList, el.target.value];
    } else {
      newList = revenueRangeList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setRevenueRangeList(newList);
  };

  const onRevenueRangeChange = (list) => {
    setCheckAllRevenueRange(
      list.length === companyFilterList?.revenueRangeList.length
    );
  };

  const onRevenueRangeCheckAllChange = (e) => {
    setRevenueRangeList(
      e.target.checked ? companyFilterList?.revenueRangeList : []
    );
    setCheckAllRevenueRange(e.target.checked);
  };
  /*End revenue range */

  const handleOk = () => {
    console.log(
        countriesList,
        selectedStateList,
      selectedCitiesList,
      "skjldflskdj",
      selectedIndustryList,
      revenueRangeList,
      employeeCountList,
      companyTypeList
    );
  };

  const handleCancel = () => {
    setOpenAdvancedModel({ open: false, key: 0 });
  };

  const renderJsx = () => {
    if (openAdvancedModel.key === 1) {
      return (
        <div className="filterblk" id="county">
          {showCountriesList()}
        </div>
      );
    } else if (openAdvancedModel.key === 2) {
      return (
        <div className="filterblk" id="state">
          {showStatesList()}
        </div>
      );
    } else if (openAdvancedModel.key === 3) {
      return (
        <div className="filterblk" id="city">
          {showCitiesList()}
        </div>
      );
    } else if (openAdvancedModel.key === 4) {
      return (
        <div className="filterblk" id="industry">
          {showIndustryList()}
        </div>
      );
    } else if (openAdvancedModel.key === 5) {
      return (
        <div className="filterblk" id="companyType">
          {showCompanyTypeList()}
        </div>
      );
    } else if (openAdvancedModel.key === 6) {
      return (
        <div className="filterblk" id="companyType">
          {showEmployeeCountList()}
        </div>
      );
    } else if (openAdvancedModel.key === 7) {
      return (
        <div className="filterblk" id="companyType">
          {showRevenueRangeList()}
        </div>
      );
    } else {
      return (
        <>
          <div className="filterblk" id="county">
            {showCountriesList()}
          </div>
          <div className="filterblk" id="state">
            {showStatesList()}
          </div>
          <div className="filterblk" id="city">
            {showCitiesList()}
          </div>
          <div className="filterblk" id="industry">
            {showIndustryList()}
          </div>
          <div className="filterblk" id="companyType">
            {showCompanyTypeList()}
          </div>
          <div className="filterblk" id="companyType">
            {showEmployeeCountList()}
          </div>
          <div className="filterblk" id="companyType">
            {showRevenueRangeList()}
          </div>
        </>
      );
    }
  };
  return (
    <>
      <Modal
        width={"90%"}
        wrapClassName="advancedfilter"
        title="Advanced Filter"
        open={openAdvancedModel?.open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {renderJsx()}
      </Modal>
    </>
  );
};
export default AdvancedFilter;
