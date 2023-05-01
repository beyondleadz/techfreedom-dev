import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  getIndustryList,
  getLocation,
  getCompanyTypeList,
  getEmployeeCountList,
  getRevenuerangeList,
  createCompanySearchPayload,
  getCompanyList,
  saveAdvancedSelectedFilters,
} from "../../actionCreator/companyListingActionCreater";
import AdvancedFilterModel from "./AdvancedFilterModel";
import AdvancedFilter from "./AdvancedFilter";
import { LEFT_FILETERS_SIZE } from "../../config";
const CompanyLeft = () => {
  const dispatch = useDispatch();
  const [industryList, setIndustryList] = useState();
  const [companyTypeList, setCompanyTypeList] = useState();
  const [employeeCountList, setEmployeeCountList] = useState();
  const [revenuerangeList, setRevenuerangeList] = useState();
  const [location, setLocation] = useState();
  const [citiesList, setCitiesList] = useState();
  const [selectedState, setSelectedState] = useState([]);
  const [open, setopen] = useState({
    country: false,
    state: false,
    city: false,
    industry: false,
    companyType: false,
    employeeCount: false,
    revenue: false,
    utility: false,
    pages: false,
  });
  const [menuVisible, setMenuVisible] = useState(true);

  const [openAdvancedModel, setOpenAdvancedModel] = useState({
    open: false,
    key: 0,
  });
  const companyFilterList = useSelector((state) => state.companyListingReducer);

  useMemo(() => {
    /*?page=0&size=10&sort=id,asc */
    dispatch(getIndustryList());
    dispatch(getLocation());
    dispatch(getCompanyTypeList());
    dispatch(getEmployeeCountList());
    dispatch(getRevenuerangeList());
  }, []);

  useEffect(() => {
    setIndustryList(companyFilterList?.industryList);
    setCompanyTypeList(companyFilterList?.companyTypeList);
    setEmployeeCountList(companyFilterList?.employeeCountList);
    setRevenuerangeList(companyFilterList?.revenueRangeList);
    setLocation(companyFilterList?.geoLocation);
    setCitiesList(companyFilterList?.geoLocation);
  }, [companyFilterList]);

  useEffect(() => {
    console.log(selectedState, "selectedStateselectedState");

    let filteredObj = _.cloneDeep(location);
    const filteredCities = companyFilterList?.geoLocation?.cities?.filter(
      (city) => {
        return selectedState?.some((selCity) => {
          return selCity.state_id === city.state_id;
        });
      }
    );
    filteredObj = {
      ...filteredObj,
      cities: filteredCities,
    };

    setLocation(
      selectedState.length ? filteredObj : companyFilterList?.geoLocation
    );
    setCitiesList(
      selectedState.length ? filteredObj : companyFilterList?.geoLocation
    );
  }, [selectedState]);

  const filterKeyword = (type, ele) => {
    if (type === "industry") {
      const filterdData = companyFilterList?.industryList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      setIndustryList(filterdData);
    } else if (type === "revenuerange") {
      const filterdData1 = companyFilterList?.revenueRangeList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      setRevenuerangeList(filterdData1);
    } else if (type === "employeecount") {
      const filterdData2 = companyFilterList?.employeeCountList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      setEmployeeCountList(filterdData2);
    } else if (type === "companytype") {
      const filterdData3 = companyFilterList?.companyTypeList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      setCompanyTypeList(filterdData3);
    } else if (type === "city") {
      let filteredObj = _.cloneDeep(location);
      const filteredCities = citiesList?.cities?.filter((item) => {
        return item?.name
          .toLowerCase()
          .includes(ele.target.value.toLowerCase());
      });
      filteredObj = {
        ...filteredObj,
        cities: filteredCities,
      };
      setLocation(filteredObj);
    } else if (type === "state") {
      let filteredObj = _.cloneDeep(location);
      const filteredStates = companyFilterList?.geoLocation?.states?.filter(
        (item) =>
          item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      filteredObj = {
        ...filteredObj,
        states: filteredStates,
      };
      setLocation(filteredObj);
    }
  };

  const openMenu = (menu) => {
    setopen({
      ...{
        country: false,
        state: false,
        city: false,
        industry: false,
        companyType: false,
        employeeCount: false,
        revenue: false,
      },
      [menu]: !open[menu],
    });
  };

  const selectStates = (ele, selState) => {
    if (ele.target.checked) {
      setSelectedState([...selectedState, selState]);
    } else {
      const removedItem = selectedState.filter(
        (item) => item.state_id !== selState.state_id
      );
      setSelectedState([...removedItem]);
    }
  };

  const openLeftMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const createPayload = (ele, item, key, prop) => {
    let data = {};
    if (ele.currentTarget.checked) {
      data = {
        [key]: [...companyFilterList?.selectedFilters[key], item],
      };
    } else {
      data = {
        [key]: companyFilterList?.selectedFilters[key].filter(
          (item) => item[prop] !== item[prop]
        ),
      };
    }
    if (key === "selectedState") {
      selectStates(ele, item);
    }
    // dispatch(
    //   saveAdvancedSelectedFilters({
    //     ...companyFilterList?.selectedFilters,
    //     ...data,
    //   })
    // );

    // dispatch(createCompanySearchPayload(data));
    // dispatch(getCompanyList(data));
  };

  const menuOptions = (arrObj, key = null, prop = "id") => {
    console.log(arrObj, "vvccxvcv");
    if (!arrObj) return;
    let menuSize = [];
    const data = _.cloneDeep(arrObj);
    if (arrObj?.length < LEFT_FILETERS_SIZE.length) {
      menuSize = data.splice(0, arrObj?.length);
    } else {
      menuSize = data.splice(0, LEFT_FILETERS_SIZE.length);
    }

    return menuSize.map((item) => {
      return (
        <li className="collapse-item">
          <input
            type="checkbox"
            onChange={(ele) => createPayload(ele, item, key, prop)}
          />
          {item?.name}
        </li>
      );
    });
  };

  const openAdvancedFilter = () => {
    setOpenAdvancedModel({ open: true, key: 0 });
  };

  return (
    <>
      <div className="leftmenuheading">
        <button className="filter-button btn-primary" onClick={openLeftMenu}>
          Filter
        </button>
        <div className={`${menuVisible ? "hideLeftMenu" : ""}`}>
          <div className="nav-link-sd deskmenu">
            <div>
              <i className="left-company-menu-icons la la-filter"></i>
              <span className="mr-4">Filter</span>
            </div>
            <div
              className="btn btn-outline-primary btn-sm"
              onClick={openAdvancedFilter}
            >
              Advanced
            </div>
          </div>

          <div className={`leftmenufilter`}>
            <AdvancedFilter
              openAdvancedModel={openAdvancedModel}
              showCheckAll={false}
              setOpenAdvancedModel={setOpenAdvancedModel}
              showNumberofRecords={8}
            />
          </div>
        </div>
      </div>

      {openAdvancedModel.open && (
        <AdvancedFilterModel
          setOpenAdvancedModel={setOpenAdvancedModel}
          openAdvancedModel={openAdvancedModel}
          showNumberofRecords={36}
        />
      )}
    </>
  );
};
export default CompanyLeft;
