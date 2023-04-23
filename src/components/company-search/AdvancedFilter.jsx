import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { Modal, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";

const AdvancedFilter = ({ setOpenAdvancedModel, openAdvancedModel }) => {
  const dispatch = useDispatch();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [filteredCitiesList, setFilteredCitiesList] = useState();

  const [countriesList, setCountriesList] = useState([]);
  const [checkAllCountries, setCheckAllCountries] = useState(false);

  const [statesList, setStatesList] = useState([]);
  const [checkAllStates, setCheckAllStates] = useState(false);

  const companyFilterList = useSelector((state) => state.companyListingReducer);

  const [citiesList, setCitiesList] = useState([]);
  const [checkAllCities, setCheckAllCities] = useState(false);

  const [industryList, setIndustryList] = useState([]);
  const [checkAllIndustry, setCheckAllIndustry] = useState(false);

  const [companyTypeList, setCompanyTypeList] = useState([]);
  const [checkAllCompanyType, setCheckAllCompanyType] = useState(false);

  const [employeeCountList, setEmployeeCountList] = useState([]);
  const [checkAllEmployeeCount, setCheckAllEmployeeCount] = useState(false);

  const [revenueRangeList, setRevenueRangeList] = useState([]);
  const [checkAllRevenueRange, setCheckAllRevenueRange] = useState(false);

  useEffect(() => {
    if (!statesList.length) {
      setFilteredCitiesList(companyFilterList?.geoLocation?.cities);
    }
  }, [statesList]);

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
            onChange={onCountriesCheckAllChange}
            checked={checkAllCountries}
          >
            Check all
          </Checkbox>
        </div>

        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onCountryChange}
          value={list}
        >
          <ul>
            {optionValues.map((item) => {
              return (
                <li>
                  <Checkbox value={item.value}>{item.value}</Checkbox>
                </li>
              );
            })}
          </ul>
        </Checkbox.Group>
      </>
    );
  };

  const onCountryChange = (list) => {
    let optionValues = [];
    list.forEach((item) => {
      optionValues = [...optionValues, { name: item }];
    });
    setCountriesList(optionValues);
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
          <Checkbox onChange={onStatesCheckAllChange} checked={checkAllStates}>
            Check all
          </Checkbox>
        </div>

        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onStatesChange}
          value={list}
        >
          <ul>
            {optionValues.map((item) => {
              return (
                <li>
                  <Checkbox value={item.value}>{item.value}</Checkbox>
                </li>
              );
            })}
          </ul>
        </Checkbox.Group>
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
    setCheckAllStates(
      list.length === companyFilterList?.geoLocation?.states.length
    );
    updateCityBasedOnState(list);
  };

  const updateCityBasedOnState = (list) => {
    const stateIds = companyFilterList?.geoLocation?.states.filter((state) => {
      return list.some((st) => {
        return state?.name === st;
      });
    });
    const cityList = companyFilterList?.geoLocation?.cities.filter((city) => {
      return stateIds.some((ct) => {
        console.log(
          city?.state_id,
          ct.state_id,
          "city?.name === ct",
          city?.state_id === ct.state_id
        );
        return city?.state_id === ct.state_id;
      });
    });
    setFilteredCitiesList(cityList);
  };

  const onStatesCheckAllChange = (e) => {
    setStatesList(
      e.target.checked ? companyFilterList?.geoLocation?.states : []
    );
    setCheckAllStates(e.target.checked);
    setFilteredCitiesList(companyFilterList?.geoLocation?.cities);
  };

  /*state End */

  //   City Fiter start
  const onCityCheckAllChange = (e) => {
    setCitiesList(e.target.checked ? filteredCitiesList : []);
    setCheckAllCities(e.target.checked);
  };

  const onCityChange = (list) => {
    let optionValues = [];
    list.forEach((item, index) => {
      optionValues = [...optionValues, { name: item }];
    });
    setCitiesList(optionValues);
    setCheckAllCities(list.length === filteredCitiesList.length);
  };

  const showCitiesList = () => {
    if (!filteredCitiesList) return;
    let optionValues = [];
    filteredCitiesList.forEach((item) => {
      optionValues = [...optionValues, { label: item.name, value: item.name }];
    });

    let list = [];
    citiesList.forEach((item) => {
      list = [...list, item.name];
    });

    return (
      <>
        <div className="filterheader">
          <h2>Cities - {filteredCitiesList.length}</h2>
          <Checkbox onChange={onCityCheckAllChange} checked={checkAllCities}>
            Check all
          </Checkbox>
        </div>

        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onCityChange}
          value={list}
        >
          <ul>
            {optionValues.map((item) => {
              return (
                <li>
                  <Checkbox value={item.value}>{item.value}</Checkbox>
                </li>
              );
            })}
          </ul>
        </Checkbox.Group>
      </>
    );
  };

  //city filter end

  //start industry filter

  const onIndustryCheckAllChange = (e) => {
    setIndustryList(e.target.checked ? companyFilterList?.industryList : []);
    setCheckAllIndustry(e.target.checked);
  };

  const onIndustryChange = (list) => {
    let optionValues = [];
    list.forEach((item, index) => {
      optionValues = [...optionValues, { name: item }];
    });
    setIndustryList(optionValues);
    setCheckAllIndustry(list.length === companyFilterList?.industryList.length);
  };
  const showIndustryList = () => {
    if (!companyFilterList?.industryList) return;
    let optionValues = [];
    companyFilterList?.industryList.forEach((item) => {
      optionValues = [...optionValues, { label: item.id, value: item.name }];
    });

    let list = [];
    industryList.forEach((item) => {
      list = [...list, item.name];
    });

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

        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onIndustryChange}
          value={list}
        >
          <ul>
            {optionValues.map((item) => {
              return (
                <li>
                  <Checkbox value={item.value}>{item.value}</Checkbox>
                </li>
              );
            })}
          </ul>
        </Checkbox.Group>
      </>
    );
  };
  // end industry list

  //start company type filter
  const onCompanyTypeCheckAllChange = (e) => {
    setCompanyTypeList(
      e.target.checked ? companyFilterList?.companyTypeList : []
    );
    setCheckAllCompanyType(e.target.checked);
  };

  const onCompanyTypeChange = (list) => {
    let optionValues = [];
    list.forEach((item, index) => {
      optionValues = [...optionValues, { name: item }];
    });
    setCompanyTypeList(optionValues);
    setCheckAllCompanyType(
      list.length === companyFilterList?.companyTypeList.length
    );
  };
  const showCompanyTypeList = () => {
    if (!companyFilterList?.companyTypeList) return;
    let optionValues = [];
    companyFilterList?.companyTypeList.forEach((item) => {
      optionValues = [...optionValues, { label: item.id, value: item.name }];
    });

    let list = [];
    companyTypeList.forEach((item) => {
      list = [...list, item.name];
    });

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

        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onCompanyTypeChange}
          value={list}
        >
          <ul>
            {optionValues.map((item) => {
              return (
                <li>
                  <Checkbox value={item.value}>{item.value}</Checkbox>
                </li>
              );
            })}
          </ul>
        </Checkbox.Group>
      </>
    );
  };

  //end company type filter
  //start employee count filter
  const onEmployeeCountCheckAllChange = (e) => {
    setEmployeeCountList(
      e.target.checked ? companyFilterList?.employeeCountList : []
    );
    setCheckAllEmployeeCount(e.target.checked);
  };

  const onEmployeeCountChange = (list) => {
    let optionValues = [];
    list.forEach((item, index) => {
      optionValues = [...optionValues, { name: item }];
    });
    setEmployeeCountList(optionValues);

    setCheckAllEmployeeCount(
      list.length === companyFilterList?.employeeCountList.length
    );
  };
  const showEmployeeCountList = () => {
    if (!companyFilterList?.employeeCountList) return;
    let optionValues = [];
    companyFilterList?.employeeCountList.forEach((item) => {
      optionValues = [...optionValues, { label: item.id, value: item.name }];
    });

    let list = [];
    employeeCountList.forEach((item) => {
      list = [...list, item.name];
    });

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

        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onEmployeeCountChange}
          value={list}
        >
          <ul>
            {optionValues.map((item) => {
              return (
                <li>
                  <Checkbox value={item.value}>{item.value}</Checkbox>
                </li>
              );
            })}
          </ul>
        </Checkbox.Group>
      </>
    );
  };

  //end employee count filter
  //start revenue range filter

  const onRevenueRangeCheckAllChange = (e) => {
    setRevenueRangeList(
      e.target.checked ? companyFilterList?.revenueRangeList : []
    );
    setCheckAllRevenueRange(e.target.checked);
  };

  const onRevenueRangeChange = (list) => {
    let optionValues = [];
    list.forEach((item, index) => {
      optionValues = [...optionValues, { name: item }];
    });
    setRevenueRangeList(optionValues);
    setCheckAllRevenueRange(
      list.length === companyFilterList?.revenueRangeList.length
    );
  };
  const showRevenueRangeList = () => {
    if (!companyFilterList?.revenueRangeList) return;
    let optionValues = [];
    companyFilterList?.revenueRangeList.forEach((item) => {
      optionValues = [...optionValues, { label: item.id, value: item.name }];
    });

    let list = [];
    revenueRangeList.forEach((item) => {
      list = [...list, item.name];
    });

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

        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={onRevenueRangeChange}
          value={list}
        >
          <ul>
            {optionValues.map((item) => {
              return (
                <li>
                  <Checkbox value={item.value}>{item.value}</Checkbox>
                </li>
              );
            })}
          </ul>
        </Checkbox.Group>
      </>
    );
  };

  const handleOk = () => {
    console.log(
      statesList,
      countriesList,
      "skjldflskdj",
      industryList,
      citiesList
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

  console.log(openAdvancedModel, "srajlksj");

  return (
    <>
      <Modal
        width={"90%"}
        wrapClassName="advancedfilter"
        title="Advanced Filter"
        open={openAdvancedModel?.open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {renderJsx()}
      </Modal>
    </>
  );
};
export default AdvancedFilter;
