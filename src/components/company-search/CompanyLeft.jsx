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
} from "../../actionCreator/companyListingActionCreater";
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
    let filteredObj = _.cloneDeep(location);
    const filteredCities = companyFilterList?.geoLocation?.cities?.filter(
      (city) => {
        return selectedState?.some(
          (selCity) =>{
            return selCity.state_id === city.state_id
          } 
        );
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
        utility: false,
        pages: false,
      },
      [menu]: !open[menu],
    });
  };

  const selectStates = (ele, selState) => {
    if (ele.currentTarget.checked) {
      setSelectedState([...selectedState, selState]);
      dispatch(createCompanySearchPayload());
      //createCompanySearchPayload()
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

  const menuOptions = (arrObj, key = null) => {
    // console.log(arrObj,"vvccxvcv")
    if (!arrObj) return;
    let menuSize = [];
    const data = _.cloneDeep(arrObj);
    if (arrObj?.length < LEFT_FILETERS_SIZE.length) {
      menuSize = data.splice(0, arrObj?.length);
    } else {
      menuSize = data.splice(0, LEFT_FILETERS_SIZE.length);
    }

    return menuSize.map((val) => {
      return (
        <li className="collapse-item">
          <input
            type="checkbox"
            onChange={(ele) => (key ? selectStates(ele, val) : null)}
          />
          {val?.name}
        </li>
      );
    });
  };

  return (
    <>
      <button className="filter-button btn-primary" onClick={openLeftMenu}>
        Filter
      </button>
      <ul
        className={`navbar-nav-sd bg-light ssidebar ssidebar-light accordion ${
          menuVisible ? "showLeftMenu" : ""
        }`}
        id="accordionsidebar"
      >
        <li className="nav-item-sd active">
          <a className="nav-link-sd">
            <i className="left-company-menu-icons la la-filter"></i>
            <span className="mr-4">Filter</span>
            <span className="btn btn-outline-primary btn-sm">Advanced</span>
          </a>
        </li>

        <li className="nav-item-sd">
          <a
            className={`nav-link-sd mt-3 nav-item-sd ${
              !open?.country && "collapsed"
            }`}
            onClick={() => openMenu("country")}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="left-company-menu-icons la la-globe"></i>
            <span className="menu-item">Country</span>{" "}
          </a>
          <div
            id="collapseTwo"
            className={`collapse ${open?.country && "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionsidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchboxinput"
                />
              </h6>

              <ul>
                {menuOptions(location?.countries)}
                {location?.countries?.length > LEFT_FILETERS_SIZE.length && (
                  <span>View More</span>
                )}

                {/* {location &&
                  location?.countries?.map((country) => {
                    return (
                      <li key={country?.country_id} className="collapse-item">
                        <input type="checkbox" />
                        {country?.name}
                      </li>
                    );
                  })} */}
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.state && "collapsed"}`}
            onClick={() => openMenu("state")}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="left-company-menu-icons las la-map-marked-alt"></i>
            <span className="menu-item">State</span>{" "}
          </a>
          <div
            id="collapseTwo"
            className={`collapse ${open?.state && "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionsidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchboxinput"
                  onChange={(ele) => filterKeyword("state", ele)}
                />
              </h6>
              <ul>
                {menuOptions(location?.states, "state")}
                {location?.states?.length > LEFT_FILETERS_SIZE.length && (
                  <span>View More</span>
                )}
                {/* {location &&
                  location?.states?.map((state) => {
                    return (
                      <li key={state?.state_id} className="collapse-item">
                        <input
                          type="checkbox"
                          onChange={(ele) => selectStates(ele, state)}
                        />
                        {state?.name}
                      </li>
                    );
                  })} */}
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.city && "collapsed"}`}
            onClick={() => openMenu("city")}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="left-company-menu-icons la la-map-marker"></i>
            <span className="menu-item">City</span>
          </a>
          <div
            id="collapseTwo"
            className={`collapse ${open?.city && "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionsidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchboxinput"
                  onChange={(ele) => filterKeyword("city", ele)}
                />
              </h6>

              <ul>
                {menuOptions(location?.cities)}
                {location?.cities?.length > LEFT_FILETERS_SIZE.length && (
                  <span>View More</span>
                )}
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.industry && "collapsed"}`}
            onClick={() => openMenu("industry")}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="left-company-menu-icons las la-industry"></i>
            <span className="menu-item">Industry</span>{" "}
          </a>
          <div
            id="collapseTwo"
            className={`collapse ${open?.industry && "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionsidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchboxinput"
                  onChange={(ele) => filterKeyword("industry", ele)}
                />
              </h6>
              <ul>
                {menuOptions(industryList)}
                {industryList?.length > LEFT_FILETERS_SIZE.length && (
                  <span>View More</span>
                )}

                {/* {industryList &&
                  industryList.map((item) => {
                    return (
                      <li key={item.id} className="collapse-item">
                        <input type="checkbox" />
                        {item?.name}
                      </li>
                    );
                  })} */}
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.companyType && "collapsed"}`}
            onClick={() => openMenu("companyType")}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="left-company-menu-icons la la-city"></i>
            <span className="menu-item">Company Type</span>{" "}
          </a>
          <div
            id="collapseTwo"
            className={`collapse ${open?.companyType && "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionsidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchboxinput"
                  onChange={(ele) => filterKeyword("companytype", ele)}
                />
              </h6>
              {menuOptions(companyTypeList)}
              {companyTypeList?.length > LEFT_FILETERS_SIZE.length && (
                <span>View More</span>
              )}

              {/* {companyTypeList &&
                companyTypeList.map((item) => {
                  return (
                    <li key={item.id} className="collapse-item">
                      <input type="checkbox" />
                      {item?.name}
                    </li>
                  );
                })} */}
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.employeeCount && "collapsed"}`}
            onClick={() => openMenu("employeeCount")}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="left-company-menu-icons las la-users"></i>
            <span className="menu-item">Employee Count</span>{" "}
          </a>
          <div
            id="collapseTwo"
            className={`collapse ${open?.employeeCount && "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionsidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchboxinput"
                  onChange={(ele) => filterKeyword("employeecount", ele)}
                />
              </h6>
              {employeeCountList &&
                employeeCountList.map((item) => {
                  return (
                    <li key={item.id} className="collapse-item">
                      <input type="checkbox" />
                      {item?.name}
                    </li>
                  );
                })}
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.revenue && "collapsed"}`}
            onClick={() => openMenu("revenue")}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="left-company-menu-icons las la-money-bill"></i>
            <span className="menu-item">Revenue Range</span>{" "}
          </a>
          <div
            id="collapseTwo"
            className={`collapse ${open?.revenue && "show"}`}
            aria-labelledby="headingTwo"
            data-parent="#accordionsidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchboxinput"
                  onChange={(ele) => filterKeyword("revenuerange", ele)}
                />
              </h6>
              {/* {revenuerangeList &&
                revenuerangeList.map((item) => {
                  return (
                    <li key={item.id} className="collapse-item">
                      <input type="checkbox" />
                      {item?.name}
                    </li>
                  );
                })} */}
              {menuOptions(revenuerangeList)}
              {revenuerangeList?.length > LEFT_FILETERS_SIZE.length && (
                <span>View More</span>
              )}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default CompanyLeft;
