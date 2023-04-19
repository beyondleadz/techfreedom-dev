import { INDUSTRY_LIST, GEOLOCATION,COMPANY_TYPE,EMPLOYEE_COUNT,REVENUE_RANGE,COMPANYLIST} from "../actionType/companyListingType";
import { getAuthMethod,getMethod } from "../services/HttpServices";
import { industryApiUrl,employeeCountApiUrl,companyTypeApiUrl,revenueRangeApiUrl,companyListingApiUrl } from "../constant/Constant";
import { Geolocation } from "../constant/Geolocation";

export const getIndustryList = (payload) => (dispatch) => {
  return getAuthMethod(industryApiUrl).then((res) => {
    dispatch({
      type: INDUSTRY_LIST,
      payload: res.data,
    });
  });
  // return dispatch(
  //   {
  //     type: INDUSTRY_LIST,
  //     payload: [{id:1,name:"Animation"},{id:2,name:"Accounting"}],
  //   }
  // )
};

export const getCompanyTypeList = (payload) => (dispatch) => {
  return getAuthMethod(companyTypeApiUrl).then((res) => {
    dispatch({
      type: COMPANY_TYPE,
      payload: res.data,
    });
  });  
};

export const getEmployeeCountList = (payload) => (dispatch) => {
  return getAuthMethod(employeeCountApiUrl).then((res) => {
    dispatch({
      type: EMPLOYEE_COUNT,
      payload: res.data,
    });
  });  
};

export const getRevenuerangeList = (payload) => (dispatch) => {
  return getAuthMethod(revenueRangeApiUrl).then((res) => {
    dispatch({
      type: REVENUE_RANGE,
      payload: res.data,
    });
  });  
};

export const getCompanyList = (payload) => (dispatch) => {
  return getMethod(companyListingApiUrl).then((res) => {
    dispatch({
      type: COMPANYLIST,
      payload: res.data,
    });
  });  
};

export const getLocation = (payload) => ({
  type: GEOLOCATION,
  payload: Geolocation,
});
