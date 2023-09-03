import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
  getIndustryList,
  getLocation,
  getEmployeeCountList,
  createExecutiveSearchPayload,
  getCompanyList,
  saveAdvancedSelectedFilters,
  saveExecutiveSearchList,
  getExecutiveTagList,
  getLeadStatusList,
  getLeadRatingList,
} from "../../actionCreator/leadListingActionCreater";
import AdvancedFilterModel from "./AdvancedFilterModel";
import AdvancedFilter from "./AdvancedFilter";
import { LEFT_FILETERS_SIZE } from "../../config";
import { getToken,getUserInfo } from "../../utils/utils";
const LeadLeft = () => {
  const dispatch = useDispatch();
  const [industryList, setIndustryList] = useState();
  const [companyTypeList, setCompanyTypeList] = useState();
  const [employeeCountList, setEmployeeCountList] = useState();
  const [revenuerangeList, setRevenuerangeList] = useState();
  const [location, setLocation] = useState();
  const [citiesList, setCitiesList] = useState();
  const [selectedState, setSelectedState] = useState([]);
  const [searchList, setSearchList] = useState();
  const [companyTagList, setCompanyTagList] = useState();
  const [executiveFunctionList, setExecutiveFunctionList] = useState();
  const [executiveLevelList, setExecutiveLevelList] = useState();
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
  const companyFilterList = useSelector((state) => state.leadListingReducer);
  const userAccountInfo=useSelector((state)=>state.CommonReducer.accountInfo);
  useMemo(() => {
    /*?page=0&size=10&sort=id,asc */
    dispatch(getLeadStatusList());
    dispatch(getLeadRatingList());
    dispatch(getIndustryList());
    dispatch(getLocation());
    dispatch(getEmployeeCountList());
    
  }, []);

  useMemo(() => {   
    //console.log(Object.keys(userAccountInfo)?.length,'Object.keys(userAccountInfo)?.length') 
    if(Object.keys(getUserInfo()).length){
      const {id}= getUserInfo();
     // dispatch(saveExecutiveSearchList(id));
     // dispatch(getExecutiveTagList(id));
    }
  }, [userAccountInfo]);

  useEffect(() => {
    setIndustryList(companyFilterList?.industryList);
    setCompanyTypeList(companyFilterList?.companyTypeList);
    setEmployeeCountList(companyFilterList?.employeeCountList);
    setRevenuerangeList(companyFilterList?.revenueRangeList);
    setLocation(companyFilterList?.geoLocation);
    setCitiesList(companyFilterList?.geoLocation);
    setSearchList(companyFilterList?.saveExecutiveSearchList);
    setCompanyTagList(companyFilterList?.companyTagList);
    setExecutiveFunctionList(companyFilterList?.executiveFunctionList);
    setExecutiveLevelList(companyFilterList?.executiveLevelList);
  }, [companyFilterList]);

  useEffect(() => {
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
    // console.log(arrObj, "vvccxvcv");
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
export default LeadLeft;
