import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  getIndustryList,
  getLocation,
  getCompanyTypeList,
  getEmployeeCountList,
  getRevenuerangeList,
} from "../../actionCreator/companyListingActionCreater";
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
    let newFilterdLocation = [];
    let allSelectedStates = [];
    companyFilterList?.geoLocation.forEach((location) => {
      Object.keys(location).forEach((country) => {
        location[country].forEach((state) => {
          const [stateName] = Object.keys(state);
          if (_.includes(selectedState, stateName)) {
            console.log([country]);
            allSelectedStates = [...allSelectedStates, state];
          }
        });
        newFilterdLocation = [
          {
            [country]: allSelectedStates,
          },
        ];
      });
    });
    setCitiesList(newFilterdLocation);
  }, [selectedState]);

  const filterKeyword = (type, ele) => {
    console.log(type,citiesList)
    if (type === "industry") {
      const filterdData = companyFilterList?.industryList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      // console.log(ele.target.value, filterdData);
      setIndustryList(filterdData);
    } else if (type === "revenuerange") {
      const filterdData1 = companyFilterList?.revenueRangeList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      // console.log(ele.target.value, filterdData);
      setRevenuerangeList(filterdData1);
    } else if (type === "employeecount") {
      const filterdData2 = companyFilterList?.employeeCountList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      // console.log(ele.target.value, filterdData);
      setEmployeeCountList(filterdData2);
    } else if (type === "companytype") {
      const filterdData3 = companyFilterList?.companyTypeList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );

      // console.log(ele.target.value, filterdData);
      setCompanyTypeList(filterdData3);
    }
    else if (type === "city") {
      const filterdData4 = []
      // const filterdData4 = citiesList?.filter((item) =>
      //   item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      // );
      citiesList.forEach((location) => {
        Object.keys(location).forEach((country) => {
          location[country].forEach((state) => {
            const [stateName] = Object.keys(state);
            Object.values(state).forEach((cities) => {
              cities.forEach((city) => {

              })
              console.log(cities,'sdkfjsldfj')
            })
            // if (_.includes(selectedState, stateName)) {
            //   console.log([country]);
            //   allSelectedStates = [...allSelectedStates, state];
            // }
          });
          // newFilterdLocation = [
          //   {
          //     [country]: allSelectedStates,
          //   },
          // ];
        });
      });
      // setCitiesList(filterdData4)
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

  const filterState = (e) => {
    setSelectedState([...selectedState, e.target.name]);
  };

  const openLeftMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <button className="filter-button btn-primary" onClick={openLeftMenu}>
        Filter
      </button>
      <ul
        className={`navbar-nav-sd bg-light mt-2 ssidebar ssidebar-light accordion ${
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
                {location &&
                  location.map((country) => {
                    const [countryName] = Object.keys(country);
                    return (
                      <li key={countryName} className="collapse-item">
                        <input type="checkbox" />
                        {countryName}
                      </li>
                    );
                  })}
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
                />
              </h6>
              <ul>
                {location &&
                  location.map((country) => {
                    return Object.values(country).map((states) => {
                      return states.map((state) => {
                        const [stateName] = Object.keys(state);
                        return (
                          <li key={stateName} className="collapse-item">
                            <input
                              type="checkbox"
                              name={stateName}
                              onChange={filterState}
                            />
                            {stateName}
                          </li>
                        );
                      });
                    });
                  })}
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
            <span className="menu-item">City</span>{" "}
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
                {citiesList &&
                  citiesList.map((country) => {
                    return Object.values(country).map((states) => {
                      return states.map((state) => {
                        return Object.values(state).map((cities) => {
                          return cities.map((city) => {
                            return (
                              <li key={city} className="collapse-item">
                                <input type="checkbox" />
                                {city}
                              </li>
                            );
                          });
                        });
                      });
                    });
                  })}
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
                {industryList &&
                  industryList.map((item) => {
                    return (
                      <li key={item.id} className="collapse-item">
                        <input type="checkbox" />
                        {item?.name}
                      </li>
                    );
                  })}
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
              {companyTypeList &&
                companyTypeList.map((item) => {
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
              {revenuerangeList &&
                revenuerangeList.map((item) => {
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
      </ul>
    </>
  );
};
export default CompanyLeft;
