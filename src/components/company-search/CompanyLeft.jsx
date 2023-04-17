import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIndustryList } from "../../actionCreator/companyListingActionCreater";
const CompanyLeft = () => {
  //usestate,useeffect,function
  const dispatch = useDispatch();
  const [industryList, setIndustryList] = useState();

  const industryOrgList = useSelector(
    (state) => state.companyListingReducer.industryList
  );

  //console.log("industryList",industryList)
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

  useEffect(() => {
    dispatch(getIndustryList());
  }, []);
  useEffect(() => {
    setIndustryList(industryOrgList);
  }, [industryOrgList]);

  const filterKeyword = (type, ele) => {
    if (type === "industry") {
      const filterdData = industryOrgList.filter((item) =>
        item?.name.toLowerCase().includes(ele.target.value.toLowerCase())
      );
      // console.log(ele.target.value, filterdData);
      setIndustryList(filterdData);
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

  const openLeftMenu = () => {
    setMenuVisible(!menuVisible);
  };

  console.log(menuVisible, "sjdfk");
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
          <a className="nav-link-sd" href="#">
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
            href="#"
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
              <a className="collapse-item" href="buttons.html">
                <input type="checkbox" />
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                <input type="checkbox" />
                Cards
              </a>{" "}
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.state && "collapsed"}`}
            onClick={() => openMenu("state")}
            href="#"
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
              <a className="collapse-item" href="buttons.html">
                <input type="checkbox" />
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                <input type="checkbox" />
                Cards
              </a>{" "}
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.city && "collapsed"}`}
            onClick={() => openMenu("city")}
            href="#"
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
                />
              </h6>
              <a className="collapse-item" href="buttons.html">
                <input type="checkbox" />
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                <input type="checkbox" />
                Cards
              </a>{" "}
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.industry && "collapsed"}`}
            onClick={() => openMenu("industry")}
            href="#"
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
            href="#"
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
                />
              </h6>
              <a className="collapse-item" href="buttons.html">
                <input type="checkbox" />
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                <input type="checkbox" />
                Cards
              </a>{" "}
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.employeeCount && "collapsed"}`}
            onClick={() => openMenu("employeeCount")}
            href="#"
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
                />
              </h6>
              <a className="collapse-item" href="buttons.html">
                <input type="checkbox" />
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                <input type="checkbox" />
                Cards
              </a>{" "}
            </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a
            className={`nav-link-sd ${!open?.revenue && "collapsed"}`}
            onClick={() => openMenu("revenue")}
            href="#"
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
                />
              </h6>
              <a className="collapse-item" href="buttons.html">
                <input type="checkbox" />
                Buttons
              </a>
              <a className="collapse-item" href="cards.html">
                <input type="checkbox" />
                Cards
              </a>{" "}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default CompanyLeft;
