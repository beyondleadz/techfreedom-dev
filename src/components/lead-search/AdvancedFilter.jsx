import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Modal, Checkbox, Input } from "antd";
import {
  saveAdvancedSelectedFilters,
  getCompanyList,
  getExecutiveEmployeeList,
} from "../../actionCreator/leadListingActionCreater";
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
  const companyFilterList = useSelector((state) => state.leadListingReducer);

  const companyPaginationValue = useSelector(
    (state) => state.leadListingReducer.paginationValue
  );

  const companySelectedFilterList = useSelector(
    (state) => state.leadListingReducer.selectedFilters
  );

  const companyFilterListIndustry = useSelector(
    (state) => state.leadListingReducer.industryList
  );

  const companyFilterListCompanyType = useSelector(
    (state) => state.leadListingReducer.companyTypeList
  );

  const companyFilterListEmployeeCountList = useSelector(
    (state) => state.leadListingReducer.employeeCountList
  );

  const companyFilterListRevenueRangeList = useSelector(
    (state) => state.leadListingReducer.revenueRangeList
  );

  const companyFilterListCities = useSelector(
    (state) => state.leadListingReducer.geoLocation?.cities
  );
  const companyFilterListCountries = useSelector(
    (state) => state.leadListingReducer.geoLocation?.countries
  );
  const companyFilterListStates = useSelector(
    (state) => state.leadListingReducer.geoLocation?.states
  );

  const companyFilterListSavedSearch = useSelector(
    (state) => state.leadListingReducer.saveSearchList
  );

  const companyFilterListTags = useSelector(
    (state) => state.leadListingReducer.companyTagList
  );

  const leadFilterStatusList = useSelector(
    (state) => state.leadListingReducer.leadStatusList
  );

  const executiveFilterLevelList = useSelector(
    (state) => state.leadListingReducer.executiveLevelList
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
    leadTimeRange: false,
    leadRating: false,
    leadStatus: false,
    leadSource: false,
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

  const [selectedSavedSearchList, setSelectedSavedSearchList] = useState([]);
  const [savedSearchList, setSavedSearchList] = useState([]);
  const [checkAllSavedSearch, setCheckAllSavedSearch] = useState(false);

  const [selectedCompanyTagList, setSelectedCompanyTagList] = useState([]);
  const [companyTagList, setCompanyTagList] = useState([]);
  const [checkAllCompanyTag, setCheckAllCompanyTag] = useState(false);

  const [selectedLeadSourceList, setSelectedLeadSourceList] = useState([]);
  const [leadSourceList, setLeadSourceList] = useState([]);
  const [checkAllLeadSource, setCheckAllLeadSource] = useState(false);

  const [selectedLeadStatusList, setSelectedLeadStatusList] = useState([]);
  const [leadStatusList, setLeadStatusList] = useState([]);
  const [checkAllLeadStatus, setCheckAllLeadStatus] = useState(false);

  const [selectedLeadRatingList, setSelectedLeadRatingList] = useState([]);
  const [leadRatingListOrg, setLeadRatingListOrg] = useState([
    { name: "Cold" },
    { name: "Hot" },
    { name: "Warm" },
  ]);
  const [leadRatingList, setLeadRatingList] = useState(leadRatingListOrg);
  const [checkAllLeadRating, setCheckAllLeadRating] = useState(false);
  const [selectedLeadTimeList, setSelectedLeadTimeList] = useState([]);
  const [leadTimeListOrg, setLeadTimeListOrg] = useState([
    { name: "Today" },
    { name: "Yesterday" },
    { name: "This Month" },
    { name: "This Year" },
    { name: "Last 7 days" },
  ]);
  const [leadTimeList, setLeadTimeList] = useState(leadTimeListOrg);
  const [checkAllLeadTime, setCheckAllLeadTime] = useState(false);

  const [
    selectedExecutiveFunctionList,
    setSelectedExecutiveFunctionList,
  ] = useState([]);
  const [executiveFunctionList, setExecutiveFunctionList] = useState([]);
  const [checkAllExecutiveFunction, setCheckAllExecutiveFunction] = useState(
    false
  );

  
  const [executiveLevelList, setExecutiveLevelList] = useState([]);
  const [checkAllExecutiveLevel, setCheckAllExecutiveLevel] = useState(false);

  const [viewMore, setViewMore] = useState(true);
  const CheckboxGroup = Checkbox.Group;

  useEffect(() => {
    if (!selectedStateList.length) {
      setCitiesOnSelectedStateList(companyFilterList?.geoLocation?.cities);
      setCitiesList(companyFilterList?.geoLocation?.cities);
    }
  }, [selectedStateList]);

  useEffect(() => {
    setLeadStatusList(leadFilterStatusList);
    setCountriesList(companyFilterListCountries);
    setIndustryList(companyFilterListIndustry);
    setCitiesList(companyFilterListCities);
    setStatesList(companyFilterListStates);
    setEmployeeCountList(companyFilterListEmployeeCountList);
    setSavedSearchList(companyFilterListSavedSearch);
    setCompanyTagList(companyFilterListTags);
  }, [
    companyFilterListCountries,
    companyFilterListIndustry,
    companyFilterListCities,
    companyFilterListStates,
    companyFilterListEmployeeCountList,
    companyFilterListSavedSearch,
    companyFilterListTags,
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
    // setCheckAllCompanyType(
    //   companySelectedFilterList.selectedCompanytype.length ===
    //     companyFilterListCompanyType.length
    // );
    setSelectedIndustryList(companySelectedFilterList.selectedIndustry);
    setCheckAllIndustry(
      companySelectedFilterList.selectedIndustry.length ===
        companyFilterListIndustry.length
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
        leadOwner: false,
        firstName: false,
        lastName: false,
        zipCode: false,
        leadStatus: false,
        leadSource: false,
      },
      [menu]: !visibleFilter[menu],
    });
    console.log(menu, "sdfsd", visibleFilter);
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
                        <li key={`li_${item.id}`}>
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
                        <li key={`stateli_${item.id}${index}`}>
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
                        <li key={`cityli_${item}${index}`}>
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
                        <li key={`industryli_${item.id}`}>
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
  /*Lead Rating Start */
  const showLeadRatingList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.leadRating && "show"}`}
          onClick={() => openVisibleFilter("leadRating")}
        >
          <h2>
            <i className="left-company-menu-icons las la-check-square"></i>
            <span>Lead Rating</span>
          </h2>
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterLeadRating}
            />
          </div>
          <CheckboxGroup
            onChange={onLeadRatingChange}
            value={selectedLeadRatingList}
          >
            <>
              <ul>
                {leadRatingList.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li key={`ratingli_${index}`}>
                          <Checkbox
                            key={item.name}
                            value={item}
                            onChange={($event) => updateLeadRating($event)}
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
                          key={item.name}
                          value={item}
                          onChange={($event) => updateLeadRating($event)}
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
          {!showCheckAll && leadRatingList.length > LEFT_FILETERS_SIZE.length && (
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

  const filterLeadRating = (ele) => {
    const filterdData = leadRatingListOrg?.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    //const filterdData = [{"name":"Cold"},{"name":"Hot"},{"name":"Warm"}]
    setLeadRatingList(filterdData);
    setSelectedLeadRatingList([]);
    setCheckAllStates(false);
  };

  const updateLeadRating = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedLeadRatingList, el.target.value];
    } else {
      newList = selectedLeadRatingList.filter(
        (listItem) => listItem.name !== el.target.value.name
      );
    }
    setSelectedLeadRatingList(newList);
    const payload = {
      ...companySelectedFilterList,
      selectedLeadRating: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onLeadRatingChange = (list) => {
    setCheckAllCountries(list.length === leadRatingList.length);
  };

  /*Lead Rating End */

  /*Lead Time Start */
  const showLeadTimeList = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.leadTime && "show"}`}
          onClick={() => openVisibleFilter("leadTime")}
        >
          <h2>
            <i className="left-company-menu-icons las la-clock"></i>
            <span>Lead Time</span>
          </h2>
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={filterLeadTime}
            />
          </div>
          <CheckboxGroup
            onChange={onLeadTimeChange}
            value={selectedLeadTimeList}
          >
            <>
              <ul>
                {leadTimeList.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li key={`leadtimeli_${index}`}>
                          <Checkbox
                            key={item.name}
                            value={item}
                            onChange={($event) => updateLeadTime($event)}
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
                          key={item.name}
                          value={item}
                          onChange={($event) => updateLeadTime($event)}
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
          {!showCheckAll && leadTimeList.length > LEFT_FILETERS_SIZE.length && (
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

  const filterLeadTime = (ele) => {
    const filterdData = leadTimeListOrg?.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setLeadTimeList(filterdData);
    setSelectedLeadTimeList([]);
    setCheckAllStates(false);
  };

  const updateLeadTime = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedLeadTimeList, el.target.value];
    } else {
      newList = selectedLeadTimeList.filter(
        (listItem) => listItem.name !== el.target.value.name
      );
    }
    setSelectedLeadTimeList(newList);
    const payload = {
      ...companySelectedFilterList,
      selectedLeadTime: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onLeadTimeChange = (list) => {
    setCheckAllCountries(list.length === leadTimeList.length);
  };

  /*Lead Time End */

  //start lead status list
  const showLeadStatus = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.leadStatus && "show"}`}
          onClick={() => openVisibleFilter("leadStatus")}
        >
          <h2>
            <i className="left-company-menu-icons las la-thumbs-up"></i>
            <span>Lead Status</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onLeadStatusCheckAllChange}
              checked={checkAllLeadStatus}
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
              onChange={leadStatusFilterList}
            />
          </div>
          <CheckboxGroup
            onChange={onLeadStatusChange}
            value={selectedLeadStatusList}
          >
            <>
              <ul>
                {leadStatusList?.length && leadStatusList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li key={`leadstatusli_${item.id}`}>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateLeadStatus($event)}
                          >
                            {item.text}
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
                          onChange={($event) => updateLeadStatus($event)}
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

          {!showCheckAll && leadStatusList.length > LEFT_FILETERS_SIZE.length && (
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

  const leadStatusFilterList = (ele) => {
    const filterdData = companyFilterList?.leadStatusList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setLeadStatusList(filterdData);
    setSelectedLeadStatusList([]);
    setCheckAllLeadStatus(false);
  };

  const updateLeadStatus = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedLeadStatusList, el.target.value];
    } else {
      newList = selectedLeadStatusList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedLeadStatusList(newList);

    const payload = {
      ...companySelectedFilterList,
      selectedLeadStatus: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onLeadStatusChange = (list) => {
    setCheckAllLeadStatus(list.length === leadStatusList.length);
  };

  const onLeadStatusCheckAllChange = (e) => {
    setSelectedLeadStatusList(e.target.checked ? leadStatusList : []);
    setCheckAllLeadStatus(e.target.checked);
    const payload = {
      ...companySelectedFilterList,
      selectedLeadStatus: e.target.checked ? leadStatusList : [],
    };
    //dispatch(saveAdvancedSelectedFilters(payload));
    //dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  //end lead status list

  //start lead source list
  const showLeadSource = () => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter.leadSource && "show"}`}
          onClick={() => openVisibleFilter("leadSource")}
        >
          <h2>
            <i className="left-company-menu-icons las la-book"></i>
            <span>Lead Source</span>
          </h2>
          {showCheckAll && (
            <Checkbox
              onChange={onLeadSourceCheckAllChange}
              checked={checkAllLeadSource}
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
              onChange={leadSourceFilterList}
            />
          </div>

          <CheckboxGroup
            onChange={onLeadSourceChange}
            value={selectedLeadSourceList}
          >
            <>
              <ul>
                {leadSourceList?.map((item, index) => {
                  if (showNumberofRecords) {
                    return (
                      index < showNumberofRecords && (
                        <li key={`leadsourceli_${item.id}`}>
                          <Checkbox
                            key={item.id}
                            value={item}
                            onChange={($event) => updateLeadSource($event)}
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
                          onChange={($event) => updateLeadSource($event)}
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

          {!showCheckAll && leadSourceList.length > LEFT_FILETERS_SIZE.length && (
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

  const leadSourceFilterList = (ele) => {
    const filterdData = companyFilterList?.leadSourceList.filter((item) =>
      item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
    );
    setLeadSourceList(filterdData);
    setSelectedLeadSourceList([]);
    setCheckAllLeadSource(false);
  };

  const updateLeadSource = (el) => {
    let newList = [];
    if (el.target.checked) {
      newList = [...selectedLeadSourceList, el.target.value];
    } else {
      newList = selectedLeadSourceList.filter(
        (listItem) => listItem.id !== el.target.value.id
      );
    }
    setSelectedLeadSourceList(newList);

    const payload = {
      ...companySelectedFilterList,
      selectedLeadSource: newList,
    };
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };

  const onLeadSourceChange = (list) => {
    setCheckAllLeadSource(list.length === leadSourceList.length);
  };

  const onLeadSourceCheckAllChange = (e) => {
    setSelectedLeadSourceList(e.target.checked ? leadSourceList : []);
    setCheckAllLeadSource(e.target.checked);
    const payload = {
      ...companySelectedFilterList,
      selectedLeadSource: e.target.checked ? leadSourceList : [],
    };
    //dispatch(saveAdvancedSelectedFilters(payload));
    //dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  };
  //end lead Source list

  //start lead Owner filter
  const showInputSearch = (
    visibleFilter,
    type,
    title,
    iconClass = "la-industry"
  ) => {
    return (
      <>
        <div
          className={`filterheader la ${visibleFilter[type] && "show"}`}
          onClick={() => openVisibleFilter(type)}
        >
          <h2>
            <i className={`left-company-menu-icons las ${iconClass}`}></i>
            <span>{title}</span>
          </h2>
        </div>
        <div className="filteroptions">
          <div className="searchbox">
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={(e) => filterInputSearch(e, type)}
            />
          </div>
        </div>
      </>
    );
  };

  const functionDebounce = _.debounce((type,ele) => {
    let payload = companySelectedFilterList;
    let inputValue=ele.target.value.toLowerCase();
    if(type==="leadOwner"){
      payload = {
        ...companySelectedFilterList,
        selectedLeadOwner:inputValue,
      };
    }else if(type==="firstName"){
      payload = {
        ...companySelectedFilterList,
        selectedFirstName:inputValue,
      };
    }else if(type==="lastName"){
      payload = {
        ...companySelectedFilterList,
        selectedLastName:inputValue,
      };
    }else if(type==="companyName"){
      payload = {
        ...companySelectedFilterList,
        selectedCompanyName:inputValue,
      };
    }else if(type==="designation"){
      payload = {
        ...companySelectedFilterList,
        selectedTitle:inputValue,
      };
    }else if(type==="zipCode"){
      payload = {
        ...companySelectedFilterList,
        selectedZipCode:inputValue,
      };
    }else if(type==="leadSource"){
      payload = {
        ...companySelectedFilterList,
        selectedLeadSource:inputValue,
      };  
    }else{

    }  
    dispatch(saveAdvancedSelectedFilters(payload));
    dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));    
  }, 500);

  const filterInputSearch = (ele, type) => {
    //console.log(ele.target.value.toLowerCase(), type);
    //console.log("pre-lodash");
    functionDebounce(type,ele);    
  };

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
            <span>Employee Size</span>
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
                        <li key={`empcountli_${item.id}`}>
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
                        <li key={`searchli_${item.id}`}>
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

  // /*Start Company Tag List */
  // const showExecutiveTagList = () => {
  //   return (
  //     <>
  //       <div
  //         className={`filterheader la ${visibleFilter.companyTag && "show"}`}
  //         onClick={() => openVisibleFilter("companyTag")}
  //       >
  //         <h2>
  //           <i className="left-company-menu-icons las la-tags"></i>
  //           <span>Tags</span>
  //         </h2>
  //         {showCheckAll && (
  //           <Checkbox
  //             onChange={onCompanyTagsCheckAllChange}
  //             checked={checkAllCompanyTag}
  //           >
  //             Check all
  //           </Checkbox>
  //         )}
  //       </div>
  //       <div className="filteroptions">
  //         <div className="searchbox">
  //           <Input
  //             placeholder="Search"
  //             prefix={<SearchOutlined />}
  //             onChange={filterCompanyTags}
  //           />
  //         </div>
  //         <CheckboxGroup
  //           onChange={onCompanyTagChange}
  //           value={selectedCompanyTagList}
  //         >
  //           <>
  //             <ul>
  //               {companyTagList?.map((item, index) => {
  //                 if (showNumberofRecords) {
  //                   return (
  //                     index < showNumberofRecords && (
  //                       <li>
  //                         <Checkbox
  //                           key={item}
  //                           value={item}
  //                           onChange={($event) => updateExecutiveTag($event)}
  //                         >
  //                           {item}
  //                         </Checkbox>
  //                       </li>
  //                     )
  //                   );
  //                 } else {
  //                   return (
  //                     <li>
  //                       <Checkbox
  //                         key={item}
  //                         value={item}
  //                         onChange={($event) => updateExecutiveTag($event)}
  //                       >
  //                         {item}
  //                       </Checkbox>
  //                     </li>
  //                   );
  //                 }
  //               })}
  //             </ul>
  //           </>
  //         </CheckboxGroup>

  //         {!showCheckAll && companyTagList.length > LEFT_FILETERS_SIZE.length && (
  //           <div className="viewmore">
  //             <span
  //               onClick={() => setOpenAdvancedModel({ open: true, key: 9 })}
  //             >
  //               View More
  //             </span>
  //           </div>
  //         )}
  //       </div>
  //     </>
  //   );
  // };

  // const filterCompanyTags = (ele) => {
  //   const filterdData = companyFilterList?.companyTagList.filter((item) =>
  //     item?.text.toLowerCase().includes(ele.target.value.toLowerCase())
  //   );
  //   setCompanyTagList(filterdData);
  //   setSelectedCompanyTagList([]);
  //   setCheckAllCompanyTag(false);
  // };

  // const updateExecutiveTag = (el) => {
  //   let newList = [];
  //   if (el.target.checked) {
  //     newList = [...selectedCompanyTagList, el.target.value];
  //     //newList = [selectedCompanyTagList, el.target.value];
  //   } else {
  //     newList = selectedCompanyTagList.filter(
  //       (listItem) => listItem !== el.target.value
  //     );
  //   }
  //   setSelectedCompanyTagList(newList);
  //   // let searchData = companyFilterListSavedSearch.filter(
  //   //   (listItem) => listItem.id === el.target.value.id
  //   // );
  //   // // console.log(JSON.parse(searchData[0].dataDump),'selectedSavedSearchList')
  //   // const searchPayload = JSON.parse(searchData[0].dataDump);
  //   const payload = {
  //     ...companySelectedFilterList,
  //     selectedCompanyTag: newList,
  //   };
  //   dispatch(saveAdvancedSelectedFilters(payload));
  //   dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  // };

  // const onCompanyTagChange = (list) => {
  //   setCheckAllCompanyTag(list.length === companyTagList.length);
  // };

  // const onCompanyTagsCheckAllChange = (e) => {
  //   setSelectedCompanyTagList(e.target.checked ? companyTagList : []);
  //   setCheckAllCompanyTag(e.target.checked);

  //   const payload = {
  //     ...companySelectedFilterList,
  //     selectedCompanyTag: e.target.checked ? companyTagList : [],
  //   };
  //   dispatch(saveAdvancedSelectedFilters(payload));
  //   dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  // };
  // /*End Company Tags List */

  // const filterExecutiveFunctionList = (ele) => {
  //   const filterdData = companyFilterList?.executiveFunctionList.filter(
  //     (item) =>
  //       item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
  //   );
  //   setExecutiveFunctionList(filterdData);
  //   setSelectedExecutiveFunctionList([]);
  //   setCheckAllExecutiveFunction(false);
  // };

  // const updateExecutiveFunction = (el) => {
  //   let newList = [];
  //   if (el.target.checked) {
  //     newList = [...selectedExecutiveFunctionList, el.target.value];
  //   } else {
  //     newList = selectedExecutiveFunctionList.filter(
  //       (listItem) => listItem.id !== el.target.value.id
  //     );
  //   }
  //   setSelectedExecutiveFunctionList(newList);

  //   const payload = {
  //     ...companySelectedFilterList,
  //     selectedExecutiveFunction: newList,
  //   };
  //   dispatch(saveAdvancedSelectedFilters(payload));
  //   dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  // };

  // const onExecutiveFunctionChange = (list) => {
  //   setCheckAllExecutiveFunction(list.length === executiveFunctionList.length);
  // };

  // const onExecutiveFunctionCheckAllChange = (e) => {
  //   setSelectedExecutiveFunctionList(
  //     e.target.checked ? executiveFunctionList : []
  //   );
  //   setCheckAllExecutiveFunction(e.target.checked);
  //   const payload = {
  //     ...companySelectedFilterList,
  //     selectedExecutiveFunction: e.target.checked ? executiveFunctionList : [],
  //   };
  //   dispatch(saveAdvancedSelectedFilters(payload));
  //   dispatch(getExecutiveEmployeeList(payload, companyPaginationValue));
  // };
  /*Executive Function End */

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
  //       })
  //     );
  //   }, [
  //     countriesList,
  //     selectedStateList,
  //     selectedCitiesList,
  //     selectedIndustryList,
  //     selectedCompanyTypeList,
  //     selectedemployeeCountList,
  //     
  //   ]);

  const renderJsx = () => {
    if (openAdvancedModel.key === 4) {
      return (
        <div className="filterblk" id="industry">
          {showIndustryList()}
        </div>
      );
    } else if (openAdvancedModel.key === 1) {
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
    } else if (openAdvancedModel.key === 5) {
      return (
        <div className="filterblk" id="leadOwner">
          {showInputSearch(
            visibleFilter,
            "leadOwner",
            "Lead Owner",
            "la-industry"
          )}
        </div>
      );
    } else if (openAdvancedModel.key === 6) {
      return (
        <div className="filterblk" id="emplyeeCount">
          {showEmployeeCountList()}
        </div>
      );

      // else if (openAdvancedModel.key === 5) {

      // } else if (openAdvancedModel.key === 6) {
      //   return (
      //     <div className="filterblk" id="emplyeeCount">
      //       {showEmployeeCountList()}
      //     </div>
      //   );
      // } else if (openAdvancedModel.key === 7) {
      //   return (
      //     <div className="filterblk" id="revenueRange">
      //       {showRevenueRangeList()}
      //     </div>
      //   );
      // } else if (openAdvancedModel.key === 8) {
      //   return (
      //     <div className="filterblk" id="savedsearch">
      //       {showSaveSearchList()}
      //     </div>
      //   );
      // } else if (openAdvancedModel.key === 9) {
      //   return (
      //     <div className="filterblk" id="companyTag">
      //       {showExecutiveTagList()}
      //     </div>
      //   );
      // } else if (openAdvancedModel.key === 10) {
      //   return (
      //     <div className="filterblk" id="execFunction">

      //     </div>
      //   );
      // } else if (openAdvancedModel.key === 11) {
    } else {
      return (
        <>
          <div className="filterblk" id="leadTimeRange">
            {showLeadTimeList()}
          </div>
          <div className="filterblk" id="leadOwner">
            {showInputSearch(
              visibleFilter,
              "leadOwner",
              "Lead Owner",
              "la-user-alt"
            )}
          </div>
          <div className="filterblk" id="firstName">
            {showInputSearch(
              visibleFilter,
              "firstName",
              "First Name",
              "la-address-book"
            )}
          </div>
          <div className="filterblk" id="lastName">
            {showInputSearch(
              visibleFilter,
              "lastName",
              "Last Name",
              "la-address-book"
            )}
          </div>
          <div className="filterblk" id="companyName">
            {showInputSearch(
              visibleFilter,
              "companyName",
              "Company Name",
              "la-building"
            )}
          </div>
          <div className="filterblk" id="designation">
            {showInputSearch(
              visibleFilter,
              "designation",
              "Designation",
              "la-suitcase"
            )}
          </div>
          <div className="filterblk" id="emplyeeCount">
            {showEmployeeCountList()}
          </div>
          <div className="filterblk" id="industry">
            {showIndustryList()}
          </div>
          <div className="filterblk" id="rating">
            {showLeadRatingList()}
          </div>
          <div className="filterblk" id="leadStatus">
            {showLeadStatus()}
          </div>
          <div className="filterblk" id="leadSource">
            {/* {showLeadSource()} */}
            {showInputSearch(
              visibleFilter,
              "leadSource",
              "Lead Source",
              "la-history"
            )}
          </div>
          <div className="filterblk" id="county">
            {showCountriesList()}
          </div>
          <div className="filterblk" id="state">
            {showStatesList()}
          </div>
          <div className="filterblk" id="city">
            {showCitiesList()}
          </div>
          <div className="filterblk" id="zipCode">
            {showInputSearch(
              visibleFilter,
              "zipCode",
              "Zip Code",
              "la-book"
            )}
          </div>
          {/* <div className="filterblk" id="execFunction">
           
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
          </div> */}
        </>
      );
    }
  };
  return <>{renderJsx()}</>;
};
export default AdvancedFilter;
