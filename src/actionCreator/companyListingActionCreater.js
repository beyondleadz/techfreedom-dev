import { INDUSTRY_LIST, GEOLOCATION,COMPANY_TYPE,EMPLOYEE_COUNT,REVENUE_RANGE,COMPANYLIST,COMPANY_SEARCH_PAYLOAD} from "../actionType/companyListingType";
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
  console.log(payload,'jslfdjlskjdfl')
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

export const createCompanySearchPayload = (payload) => {
  return {
    type: COMPANY_SEARCH_PAYLOAD,
    payload: payload,
  }
  
};
