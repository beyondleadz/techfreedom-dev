import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Modal, Checkbox, Input } from "antd";
import {
  saveAdvancedSelectedFilters,
  getCompanyList,
  getExecutiveEmployeeList,
} from "../../actionCreator/executiveListingActionCreater";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { LEFT_FILETERS_SIZE, MORE_FILETERS_SIZE } from "../../config";

const AdvancedFilter = ({
  openAdvancedModel,
  showCheckAll = true,
  setOpenAdvancedModel,
  showNumberofRecords = null,
}) => {
  const dispatch = useDispatch();
  const companyFilterList = useSelector(
    (state) => state.executiveListingReducer
  );

  const companyPaginationValue = useSelector(
    (state) => state.executiveListingReducer.paginationValue
  );

  const companySelectedFilterList = useSelector(
    (state) => state.executiveListingReducer.selectedFilters
  );

  const companyFilterListIndustry = useSelector(
    (state) => state.executiveListingReducer.industryList
  );

  const companyFilterListCompanyType = useSelector(
    (state) => state.executiveListingReducer.companyTypeList
  );

  const companyFilterListEmployeeCountList = useSelector(
    (state) => state.executiveListingReducer.employeeCountList
  );

  const companyFilterListRevenueRangeList = useSelector(
    (state) => state.executiveListingReducer.revenueRangeList
  );

  const companyFilterListCities = useSelector(
    (state) => state.executiveListingReducer.geoLocation?.cities
  );
  const companyFilterListCountries = useSelector(
    (state) => state.executiveListingReducer.geoLocation?.countries
  );
  const companyFilterListStates = useSelector(
    (state) => state.executiveListingReducer.geoLocation?.states
  );

  const companyFilterListSavedSearch = useSelector(
    (state) => state.executiveListingReducer.saveSearchList
  );

  const companyFilterListTags = useSelector(
    (state) => state.executiveListingReducer.companyTagList
  );

  const executiveFilterFunctionList = useSelector(
    (state) => state.executiveListingReducer.executiveFunctionList
  );

  const executiveFilterLevelList = useSelector(
    (state) => state.executiveListingReducer.executiveLevelList
  );

  const [visibleFilter, setVisibleFilter] = useState({
    country: false,
    state: false,
    city: false,
    industry: false,
    companyType: false,
    employeeCount: false,
    revenue: false,
    savedSearch: false,
    companyTag: false,
    executiveFunction: false,
    executiveLevel: false,
  });

  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountryList, setSelectedCountryList] = useState([]);
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

  const [selectedCompanyTypeList, setSelectedCompanyTypeList] = useState([]);
  const [companyTypeList, setCompanyTypeList] = useState([]);
  const [checkAllCompanyType, setCheckAllCompanyType] = useState(false);

  const [selectedemployeeCountList, setSelectedEmployeeCountList] = useState(
    []
  );
  const [employeeCountList, setEmployeeCountList] = useState([]);
  const [checkAllEmployeeCount, setCheckAllEmployeeCount] = useState(false);

  const [selectedrevenueRangeList, setSelectedRevenueRangeList] = useState([]);
  const [revenueRangeList, setRevenueRangeList] = useState([]);
  const [checkAllRevenueRange, setCheckAllRevenueRange] = useState(false);

  const [selectedSavedSearchList, setSelectedSavedSearchList] = useState([]);
  const [savedSearchList, setSavedSearchList] = useState([]);
  const [checkAllSavedSearch, setCheckAllSavedSearch] = useState(false);

  const [selectedCompanyTagList, setSelectedCompanyTagList] = useState([]);
  const [companyTagList, setCompanyTagList] = useState([]);
  const [checkAllCompanyTag, setCheckAllCompanyTag] = useState(false);

  const [
    selectedExecutiveFunctionList,
    setSelectedExecutiveFunctionList,
  ] = useState([]);
  const [executiveFunctionList, setExecutiveFunctionList] = useState([]);
  const [checkAllExecutiveFunction, setCheckAllExecutiveFunction] = useState(
    false
  );

  const [selectedExecutiveLevelList, setSelectedExecutiveLevelList] = useState(
    []
  );
  const [executiveLevelList, setExecutiveLevelList] = useState([]);
  const [checkAllExecutiveLevel, setCheckAllExecutiveLevel] = useState(false);

  const [viewMore, setViewMore] = useState(true);
  const CheckboxGroup = Checkbox.Group;

  useEffect(() => {
    if (!selectedStateList.length) {
      setCitiesOnSelectedStateList(companyFilterList?.geoLocation?.cities);
      setCitiesList(companyFilterList?.geoLocation?.cities);
    } else {
      const cityList = companyFilterList?.geoLocation?.cities.filter((city) => {
        return selectedStateList.some((ct) => {
          return ct.state_id === city?.state_id;
        });
      });
      setCitiesOnSelectedStateList(cityList);
      setCitiesList(cityList);
    }
  }, [selectedStateList]);

  useEffect(() => {
    setCountriesList(companyFilterListCountries);
    setIndustryList(companyFilterListIndustry);
    setCitiesList(companyFilterListCities);
    setStatesList(companyFilterListStates);
    setCompanyTypeList(companyFilterListCompanyType);
    setEmployeeCountList(companyFilterListEmployeeCountList);
    setRevenueRangeList(companyFilterListRevenueRangeList);
    setSavedSearchList(companyFilterListSavedSearch);
    setCompanyTagList(companyFilterListTags);
    setExecutiveFunctionList(executiveFilterFunctionList);
    setExecutiveLevelList(executiveFilterLevelList);
  }, [
    companyFilterListCountries,
    companyFilterListIndustry,
    companyFilterListCities,
    companyFilterListStates,
    companyFilterListCompanyType,
    companyFilterListEmployeeCountList,
    companyFilterListRevenueRangeList,
    companyFilterListSavedSearch,
    companyFilterListTags,
    executiveFilterFunctionList,
    executiveFilterLevelList,
  ]);

  useEffect(() => {
    setSelectedCountryList(companySelectedFilterList.selectedCountry);
    setCheckAllCountries(
      companySelectedFilterList?.selectedCountry?.length ===
        companyFilterListCountries?.length
    );
    setSelectedStateList(companySelectedFilterList?.selectedState);
    setCheckAllStates(
      companySelectedFilterList?.selectedState?.length ===
        companyFilterListStates?.length
    );
    setSelectedCitiesList(companySelectedFilterList.selectedCity);
    setCheckAllCities(
      companySelectedFilterList.selectedCity.length ===
        companyFilterListCities.length
    );
    setSelectedCompanyTypeList(companySelectedFilterList.selectedCompanytype);
    setCheckAllCompanyType(
      companySelectedFilterList.selectedCompanytype.length ===
        companyFilterListCompanyType.length
    );
    setSelectedIndustryList(companySelectedFilterList.selectedIndustry);
    setCheckAllIndustry(
      companySelectedFilterList.selectedIndustry.length ===
        companyFilterListIndustry.length
    );
    setSelectedRevenueRangeList(companySelectedFilterList.selectedRevenuerange);
    setCheckAllRevenueRange(
      companySelectedFilterList.selectedRevenuerange.length ===
        companyFilterListRevenueRangeList.length
    );
    setSelectedEmployeeCountList(
      companySelectedFilterList.selectedEmployeecount
    );
    setCheckAllEmployeeCount(
      companySelectedFilterList.selectedEmployeecount.length ===
        companyFilterListEmployeeCountList.length
    );

    //console.log(companySelectedFilterList.selectedSavedSearch,'companySelectedFilterList.selectedSavedSearch',companySelectedFilterList)

    setSelectedSavedSearchList(companySelectedFilterList.selectedSavedSearch);
    setCheckAllSavedSearch(
      companySelectedFilterList.selectedSavedSearch?.length ===
        companyFilterListSavedSearch?.length
    );

    setSelectedCompanyTagList(companySelectedFilterList.selectedCompanyTag);
    setCheckAllCompanyTag(
      companySelectedFilterList.selectedCompanyTag?.length ===
        companyFilterListTags?.length
    );

    setSelectedExecutiveFunctionList(
      companySelectedFilterList.selectedExecutiveFunction
    );
    setCheckAllExecutiveFunction(
      companySelectedFilterList?.selectedExecutiveFunction?.length ===
        executiveFilterFunctionList.length
    );

    setSelectedExecutiveLevelList(
      companySelectedFilterList.selectedExecutiveLevel
    );
    setCheckAllExecutiveLevel(
      companySelectedFilterList.selectedExecutiveLevel.length ===
        executiveFilterLevelList.length
    );
  }, [companySelectedFilterList]);
  const setShowHideData = () => {
    setViewMore(!viewMore);
  };
  const openVisibleFilter = (menu) => {
    setVisibleFilter({
      ...{
        country: false,
        state: false,
        city: false,
        industry: false,
        companyType: false,
        employeeCount: false,
        revenue: false,
        utility: false,
        pages: false,
        savedSearch: false,
        companyTag: false,
        executiveFunction: false,
        executiveLevel: false,
      },
      [menu]: !visibleFilter[menu],
    });
  };

  /*Countries Start */
  const showCountriesList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.country && "show"}`}
          onClick={() => openVisibleFilter("country")}
        >
          <h2>
            <i className="left-company-menu-icons la la-globe"></i>
            <span>Countries</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onCountriesCheckAllChange}
              checked={checkAllCountries}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterCountry}
            />
          </div>
          <CheckboxGroup onChange={onCountryChange} value={selectedCountryList}>
            <>
              <ul>
                {countriesList.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateCountries($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateCountries($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>
          {!showCheckAll && countriesList.length > LEFT_FILETERS_SIZE.length && (
            <div className="viewmore">
              <span
                onClick={() => setOpenAdvancedModel({ open: true, key: 1 })}
              >
                View More
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const filterCountry = (ele) => {
    const filterdData = companyFilterList?.geoLocation?.countries?.filter(
      (item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setCountriesList(filterdData);
    setSelectedCountryList([]);
    setCheckAllStates(false);
  };

  const updateCountries = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedCountryList, el.target.value];
    } else {
      newList = selectedCountryList.filter(
        (listItem) => listItem.country_id !== el.target.value.country_id
      );
    }
    setSelectedCountryList(newList);
    //console.log(companySelectedFilterList,"companySelectedFilterListcompanySelectedFilterList")
    const payload = {
      ...companySelectedFilterList,
      selectedCountry: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onCountryChange = (list) => {
    setCheckAllCountries(list.length === countriesList.length);
  };

  const onCountriesCheckAllChange = (e) => {
    console.log(e.target.checked, "e.target.checkede.target.checked");
    setSelectedCountryList(e.target.checked ? countriesList : []);
    setCheckAllCountries(e.target.checked);
    const payload = {
      ...companySelectedFilterList,
      selectedCountry: e.target.checked ? countriesList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  /*Countries End */

  /*State Start */
  const showStatesList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.state && "show"}`}
          onClick={() => openVisibleFilter("state")}
        >
          <h2>
            <i className="left-company-menu-icons las la-map-marked-alt"></i>
            <span>States</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onStatesCheckAllChange}
              checked={checkAllStates}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
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
                {statesList.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateStates($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateStates($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll && statesList.length > LEFT_FILETERS_SIZE.length && (
            <div className="viewmore">
              <span
                onClick={() => setOpenAdvancedModel({ open: true, key: 2 })}
              >
                View More
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const filterState = (ele) => {
    const filterdData = companyFilterList?.geoLocation?.states?.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setStatesList(filterdData);
    setSelectedStateList([]);
    setCheckAllStates(false);
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
    const payload = {
      ...companySelectedFilterList,
      selectedState: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
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
    const payload = {
      ...companySelectedFilterList,
      selectedState: e.target.checked ? statesList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  /*state End */

  /* City Start */
  const showCitiesList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.city && "show"}`}
          onClick={() => openVisibleFilter("city")}
        >
          <h2>
            <i className="left-company-menu-icons la la-map-marker"></i>
            <span>Cities</span>
          </h2>
          {showCheckAll && (
            <Checkbox onChange={onCityCheckAllChange} checked={checkAllCities}>
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
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
                {citiesList?.map((item, index) => {
                  if (viewMore && showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateCities($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateCities($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll && citiesList.length > LEFT_FILETERS_SIZE.length && (
            <div className="viewmore">
              <span
                onClick={() => setOpenAdvancedModel({ open: true, key: 3 })}
              >
                View More
              </span>
            </div>
          )}

          {showCheckAll && citiesList.length > MORE_FILETERS_SIZE.length && (
            <div className="advancemodel viewmore">
              <span onClick={setShowHideData}>
                {viewMore ? "View More" : "Hide"}
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const filterCity = (ele) => {
    const filterdData = citiesOnSelectedStateList?.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setCitiesList(filterdData);
    setSelectedCitiesList([]);
    setCheckAllCities(false);
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
    const payload = {
      ...companySelectedFilterList,
      selectedCity: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onCityChange = (list) => {
    setCheckAllCities(list.length === citiesList.length);
  };

  const onCityCheckAllChange = (e) => {
    setSelectedCitiesList(e.target.checked ? citiesList : []);
    setCheckAllCities(e.target.checked);

    const payload = {
      ...companySelectedFilterList,
      selectedCity: e.target.checked ? citiesList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*City End */

  /*Industry Start */
  const showIndustryList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.industry && "show"}`}
          onClick={() => openVisibleFilter("industry")}
        >
          <h2>
            <i className="left-company-menu-icons las la-industry"></i>
            <span>Industry</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onIndustryCheckAllChange}
              checked={checkAllIndustry}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterList}
            />
          </div>

          <CheckboxGroup
            onChange={onIndustryChange}
            value={selectedIndustryList}
          >
            <>
              <ul>
                {industryList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateIndustries($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateIndustries($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll && industryList.length > LEFT_FILETERS_SIZE.length && (
            <div className="viewmore">
              <span
                onClick={() => setOpenAdvancedModel({ open: true, key: 4 })}
              >
                View More
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const filterList = (ele) => {
    const filterdData = companyFilterList?.industryList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setIndustryList(filterdData);
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

    const payload = {
      ...companySelectedFilterList,
      selectedIndustry: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onIndustryChange = (list) => {
    setCheckAllIndustry(list.length === industryList.length);
  };

  const onIndustryCheckAllChange = (e) => {
    setSelectedIndustryList(e.target.checked ? industryList : []);
    setCheckAllIndustry(e.target.checked);
    const payload = {
      ...companySelectedFilterList,
      selectedIndustry: e.target.checked ? industryList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*Industry End */

  /*start companytype */
  const showCompanyTypeList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.companyType && "show"}`}
          onClick={() => openVisibleFilter("companyType")}
        >
          <h2>
            <i className="left-company-menu-icons la la-city"></i>
            <span>Company Type</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onCompanyTypeCheckAllChange}
              checked={checkAllCompanyType}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterCompany}
            />
          </div>
          <CheckboxGroup
            onChange={onCompanyTypeChange}
            value={selectedCompanyTypeList}
          >
            <>
              <ul>
                {companyTypeList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateCompanyType($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateCompanyType($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll && companyTypeList.length > LEFT_FILETERS_SIZE.length && (
            <div className="viewmore">
              <span
                onClick={() => setOpenAdvancedModel({ open: true, key: 5 })}
              >
                View More
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const filterCompany = (ele) => {
    const filterdData = companyFilterList?.companyTypeList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setCompanyTypeList(filterdData);
    setSelectedCompanyTypeList([]);
    setCheckAllCompanyType(false);
  };

  const updateCompanyType = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedCompanyTypeList, el.target.value];
    } else {
      newList = selectedCompanyTypeList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedCompanyTypeList(newList);

    const payload = {
      ...companySelectedFilterList,
      selectedCompanytype: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onCompanyTypeChange = (list) => {
    setCheckAllCompanyType(list.length === companyTypeList.length);
  };

  const onCompanyTypeCheckAllChange = (e) => {
    setSelectedCompanyTypeList(e.target.checked ? companyTypeList : []);
    setCheckAllCompanyType(e.target.checked);

    const payload = {
      ...companySelectedFilterList,
      selectedCompanytype: e.target.checked ? companyTypeList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*End companytype */

  /*start employee count */
  const showEmployeeCountList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.employeeCount && "show"}`}
          onClick={() => openVisibleFilter("employeeCount")}
        >
          <h2>
            <i className="left-company-menu-icons las la-users"></i>
            <span>Employee Count</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onEmployeeCountCheckAllChange}
              checked={checkAllEmployeeCount}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterEmployeeCount}
            />
          </div>
          <CheckboxGroup
            onChange={onEmployeeCountChange}
            value={selectedemployeeCountList}
          >
            <>
              <ul>
                {employeeCountList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateEmployeeCount($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateEmployeeCount($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll &&
            employeeCountList.length > LEFT_FILETERS_SIZE.length && (
              <div className="viewmore">
                <span
                  onClick={() => setOpenAdvancedModel({ open: true, key: 6 })}
                >
                  View More
                </span>
              </div>
            )}
        </div>
      </>
    );
  };

  const filterEmployeeCount = (ele) => {
    const filterdData = companyFilterList?.employeeCountList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setEmployeeCountList(filterdData);
    setSelectedEmployeeCountList([]);
    setCheckAllEmployeeCount(false);
  };

  const updateEmployeeCount = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedemployeeCountList, el.target.value];
    } else {
      newList = selectedemployeeCountList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedEmployeeCountList(newList);
    const payload = {
      ...companySelectedFilterList,
      selectedEmployeecount: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onEmployeeCountChange = (list) => {
    setCheckAllEmployeeCount(list.length === employeeCountList.length);
  };

  const onEmployeeCountCheckAllChange = (e) => {
    setSelectedEmployeeCountList(e.target.checked ? employeeCountList : []);
    setCheckAllEmployeeCount(e.target.checked);

    const payload = {
      ...companySelectedFilterList,
      selectedEmployeecount: e.target.checked ? employeeCountList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*End employee count */

  /*Start revenue range */
  const showRevenueRangeList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.revenue && "show"}`}
          onClick={() => openVisibleFilter("revenue")}
        >
          <h2>
            <i className="left-company-menu-icons las la-money-bill"></i>
            <span>Revenue Range</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onRevenueRangeCheckAllChange}
              checked={checkAllRevenueRange}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterRevenueRange}
            />
          </div>
          <CheckboxGroup
            onChange={onRevenueRangeChange}
            value={selectedrevenueRangeList}
          >
            <>
              <ul>
                {revenueRangeList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateRevenueRange($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateRevenueRange($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll &&
            revenueRangeList.length > LEFT_FILETERS_SIZE.length && (
              <div className="viewmore">
                <span
                  onClick={() => setOpenAdvancedModel({ open: true, key: 7 })}
                >
                  View More
                </span>
              </div>
            )}
        </div>
      </>
    );
  };

  const filterRevenueRange = (ele) => {
    const filterdData = companyFilterList?.revenueRangeList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setRevenueRangeList(filterdData);
    setSelectedRevenueRangeList([]);
    setCheckAllRevenueRange(false);
  };

  const updateRevenueRange = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedrevenueRangeList, el.target.value];
    } else {
      newList = selectedrevenueRangeList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedRevenueRangeList(newList);

    const payload = {
      ...companySelectedFilterList,
      selectedRevenuerange: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onRevenueRangeChange = (list) => {
    setCheckAllRevenueRange(list.length === revenueRangeList.length);
  };

  const onRevenueRangeCheckAllChange = (e) => {
    setSelectedRevenueRangeList(e.target.checked ? revenueRangeList : []);
    setCheckAllRevenueRange(e.target.checked);

    const payload = {
      ...companySelectedFilterList,
      selectedRevenuerange: e.target.checked ? revenueRangeList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*End revenue range */

  /*Start Search List */
  const showSaveSearchList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.savedSearch && "show"}`}
          onClick={() => openVisibleFilter("savedSearch")}
        >
          <h2>
            <i className="left-company-menu-icons las la-save"></i>
            <span>Saved Search</span>
          </h2>
          {/* {showCheckAll && (
          <Checkbox
            onChange={onSavedSearchCheckAllChange}
            checked={checkAllSavedSearch}
          >
            Check all
          </Checkbox>
        )} */}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterSavedSearch}
            />
          </div>
          <CheckboxGroup
            onChange={onSavedSearchChange}
            value={selectedSavedSearchList}
          >
            <>
              <ul>
                {savedSearchList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateSavedSearch($event)}
                          >
                            {item.fullName}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateSavedSearch($event)}
                        >
                          {item.fullName}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll && savedSearchList.length > LEFT_FILETERS_SIZE.length && (
            <div className="viewmore">
              <span
                onClick={() => setOpenAdvancedModel({ open: true, key: 8 })}
              >
                View More
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const filterSavedSearch = (ele) => {
    const filterdData = companyFilterList?.saveSearchList.filter((item) =>
      item?.fullName.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setSavedSearchList(filterdData);
    setSelectedSavedSearchList([]);
    setCheckAllSavedSearch(false);
  };

  const updateSavedSearch = (el) => {
    let newList = [];
    if (el.target.checked) {
      //newList = [...selectedSavedSearchList, el.target.value];
      newList = [selectedSavedSearchList, el.target.value];
    } else {
      newList = selectedSavedSearchList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedSavedSearchList(newList);
    let searchData = companyFilterListSavedSearch.filter(
      (listItem) => listItem.id === el.target.value.id
    );
    // console.log(JSON.parse(searchData[0].dataDump),'selectedSavedSearchList')
    const searchPayload = JSON.parse(searchData[0].dataDump);
    const payload = {
      ...companySelectedFilterList,
      selectedSavedSearch: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(searchPayload, companyPaginationValue));
  };

  const onSavedSearchChange = (list) => {
    setCheckAllSavedSearch(list.length === savedSearchList.length);
  };

  const onSavedSearchCheckAllChange = (e) => {
    setSelectedSavedSearchList(e.target.checked ? savedSearchList : []);
    setCheckAllSavedSearch(e.target.checked);

    const payload = {
      ...companySelectedFilterList,
      selectedSavedSearch: e.target.checked ? savedSearchList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*End Search List */

  /*Start Company Tag List */
  const showExecutiveTagList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.companyTag && "show"}`}
          onClick={() => openVisibleFilter("companyTag")}
        >
          <h2>
            <i className="left-company-menu-icons las la-tags"></i>
            <span>Tags</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onCompanyTagsCheckAllChange}
              checked={checkAllCompanyTag}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterCompanyTags}
            />
          </div>
          <CheckboxGroup
            onChange={onCompanyTagChange}
            value={selectedCompanyTagList}
          >
            <>
              <ul>
                {companyTagList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item}
                            value={item}
                            onChange={($event) => updateExecutiveTag($event)}
                          >
                            {item}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item}
                          value={item}
                          onChange={($event) => updateExecutiveTag($event)}
                        >
                          {item}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll && companyTagList.length > LEFT_FILETERS_SIZE.length && (
            <div className="viewmore">
              <span
                onClick={() => setOpenAdvancedModel({ open: true, key: 9 })}
              >
                View More
              </span>
            </div>
          )}
        </div>
      </>
    );
  };

  const filterCompanyTags = (ele) => {
    const filterdData = companyFilterList?.companyTagList.filter((item) =>
      item?.text.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setCompanyTagList(filterdData);
    setSelectedCompanyTagList([]);
    setCheckAllCompanyTag(false);
  };

  const updateExecutiveTag = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedCompanyTagList, el.target.value];
      //newList = [selectedCompanyTagList, el.target.value];
    } else {
      newList = selectedCompanyTagList.filter(
        (listItem) => listItem !== el.target.value
      );
    }
    setSelectedCompanyTagList(newList);
    // let searchData = companyFilterListSavedSearch.filter(
    //   (listItem) => listItem.id === el.target.value.id
    // );
    // // console.log(JSON.parse(searchData[0].dataDump),'selectedSavedSearchList')
    // const searchPayload = JSON.parse(searchData[0].dataDump);
    const payload = {
      ...companySelectedFilterList,
      selectedCompanyTag: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onCompanyTagChange = (list) => {
    setCheckAllCompanyTag(list.length === companyTagList.length);
  };

  const onCompanyTagsCheckAllChange = (e) => {
    setSelectedCompanyTagList(e.target.checked ? companyTagList : []);
    setCheckAllCompanyTag(e.target.checked);

    const payload = {
      ...companySelectedFilterList,
      selectedCompanyTag: e.target.checked ? companyTagList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*End Company Tags List */

  /*Executive Function Start */
  const showExecutiveFunctionList = () => {
    return (
      <>
        <div
          className={`filterheader la ${
            visibleFilter.executiveFunction && "show"
          }`}
          onClick={() => openVisibleFilter("executiveFunction")}
        >
          <h2>
            <i className="left-company-menu-icons las la-suitcase"></i>
            <span>Executive Function</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onExecutiveFunctionCheckAllChange}
              checked={checkAllExecutiveFunction}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterExecutiveFunctionList}
            />
          </div>

          <CheckboxGroup
            onChange={onExecutiveFunctionChange}
            value={selectedExecutiveFunctionList}
          >
            <>
              <ul>
                {executiveFunctionList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) =>
                              updateExecutiveFunction($event)
                            }
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateExecutiveFunction($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll &&
            executiveFunctionList.length > LEFT_FILETERS_SIZE.length && (
              <div className="viewmore">
                <span
                  onClick={() => setOpenAdvancedModel({ open: true, key: 10 })}
                >
                  View More
                </span>
              </div>
            )}
        </div>
      </>
    );
  };

  const filterExecutiveFunctionList = (ele) => {
    const filterdData = companyFilterList?.executiveFunctionList.filter(
      (item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setExecutiveFunctionList(filterdData);
    setSelectedExecutiveFunctionList([]);
    setCheckAllExecutiveFunction(false);
  };

  const updateExecutiveFunction = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedExecutiveFunctionList, el.target.value];
    } else {
      newList = selectedExecutiveFunctionList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedExecutiveFunctionList(newList);

    const payload = {
      ...companySelectedFilterList,
      selectedExecutiveFunction: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onExecutiveFunctionChange = (list) => {
    setCheckAllExecutiveFunction(list.length === executiveFunctionList.length);
  };

  const onExecutiveFunctionCheckAllChange = (e) => {
    setSelectedExecutiveFunctionList(
      e.target.checked ? executiveFunctionList : []
    );
    setCheckAllExecutiveFunction(e.target.checked);
    const payload = {
      ...companySelectedFilterList,
      selectedExecutiveFunction: e.target.checked ? executiveFunctionList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*Executive Function End */

  /*Executive Level Start */
  const showExecutiveLevelList = () => {
    return (
      <>
        <div
          className={`filterheader la ${
            visibleFilter.executiveLevel && "show"
          }`}
          onClick={() => openVisibleFilter("executiveLevel")}
        >
          <h2>
            <i className="left-company-menu-icons las la-sitemap"></i>
            <span>Executive Level</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onExecutiveLevelCheckAllChange}
              checked={checkAllExecutiveLevel}
            >
              Check all
            </Checkbox>
          )}
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterExecutiveLevelList}
            />
          </div>

          <CheckboxGroup
            onChange={onExecutiveLevelChange}
            value={selectedExecutiveLevelList}
          >
            <>
              <ul>
                {executiveLevelList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateExecutiveLevel($event)}
                          >
                            {item.name}
                          </Checkbox>
                        </li>
                      )
                    );
                  } else {
                    return (
                      <li>
                        <Checkbox
                          key={item.id}
                          value={item}
                          onChange={($event) => updateExecutiveLevel($event)}
                        >
                          {item.name}
                        </Checkbox>
                      </li>
                    );
                  }
                })}
              </ul>
            </>
          </CheckboxGroup>

          {!showCheckAll &&
            executiveLevelList.length > LEFT_FILETERS_SIZE.length && (
              <div className="viewmore">
                <span
                  onClick={() => setOpenAdvancedModel({ open: true, key: 11 })}
                >
                  View More
                </span>
              </div>
            )}
        </div>
      </>
    );
  };

  const filterExecutiveLevelList = (ele) => {
    const filterdData = companyFilterList?.executiveLevelList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setExecutiveLevelList(filterdData);
    setSelectedExecutiveLevelList([]);
    setCheckAllExecutiveLevel(false);
  };

  const updateExecutiveLevel = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedExecutiveLevelList, el.target.value];
    } else {
      newList = selectedExecutiveLevelList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedExecutiveLevelList(newList);

    const payload = {
      ...companySelectedFilterList,
      selectedExecutiveLevel: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onExecutiveLevelChange = (list) => {
    setCheckAllExecutiveLevel(list.length === executiveLevelList.length);
  };

  const onExecutiveLevelCheckAllChange = (e) => {
    setSelectedExecutiveLevelList(e.target.checked ? executiveLevelList : []);
    setCheckAllExecutiveLevel(e.target.checked);
    const payload = {
      ...companySelectedFilterList,
      selectedExecutiveLevel: e.target.checked ? executiveLevelList : [],
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  /*Executive Level End */

  //   useEffect(() => {
  //     console.log(companySelectedFilterList,'companySelectedFilterList')
  //     dispatch(
  //       saveAdvancedSelectedFilters({
  //         selectedCountry: countriesList,
  //         selectedState: selectedStateList,
  //         selectedCity: selectedCitiesList,
  //         selectedIndustry: selectedIndustryList,
  //         selectedCompanytype: selectedCompanyTypeList,
  //         selectedEmployeecount: selectedemployeeCountList,
  //         selectedRevenuerange: selectedrevenueRangeList,
  //       })
  //     );
  //   }, [
  //     countriesList,
  //     selectedStateList,
  //     selectedCitiesList,
  //     selectedIndustryList,
  //     selectedCompanyTypeList,
  //     selectedemployeeCountList,
  //     selectedrevenueRangeList,
  //   ]);

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
        <div className="filterblk" id="emplyeeCount">
          {showEmployeeCountList()}
        </div>
      );
    } else if (openAdvancedModel.key === 7) {
      return (
        <div className="filterblk" id="revenueRange">
          {showRevenueRangeList()}
        </div>
      );
    } else if (openAdvancedModel.key === 8) {
      return (
        <div className="filterblk" id="savedsearch">
          {showSaveSearchList()}
        </div>
      );
    } else if (openAdvancedModel.key === 9) {
      return (
        <div className="filterblk" id="companyTag">
          {showExecutiveTagList()}
        </div>
      );
    } else if (openAdvancedModel.key === 10) {
      return (
        <div className="filterblk" id="execFunction">
          {showExecutiveFunctionList()}
        </div>
      );
    } else if (openAdvancedModel.key === 11) {
      return (
        <div className="filterblk" id="execLevel">
          {showExecutiveLevelList()}
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

          <div className="filterblk" id="execFunction">
            {showExecutiveFunctionList()}
          </div>
          <div className="filterblk" id="execLevel">
            {showExecutiveLevelList()}
          </div>
          <div className="filterblk" id="companyType">
            {showCompanyTypeList()}
          </div>
          <div className="filterblk" id="emplyeeCount">
            {showEmployeeCountList()}
          </div>
          <div className="filterblk" id="revenueRange">
            {showRevenueRangeList()}
          </div>
          <div className="filterblk" id="savedsearch">
            {showSaveSearchList()}
          </div>
          <div className="filterblk" id="companyTag">
            {showExecutiveTagList()}
          </div>
        </>
      );
    }
  };
  return <>{renderJsx()}</>;
};
export default AdvancedFilter;
