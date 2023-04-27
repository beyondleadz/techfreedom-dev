import {
  INDUSTRY_LIST,
  GEOLOCATION,
  COMPANY_TYPE,
  EMPLOYEE_COUNT,
  REVENUE_RANGE,
  COMPANYLIST,
  COMPANY_SEARCH_PAYLOAD,
  ADVANCED_SELECTED_FILTERS,
  PAGINATION_VALUE,
  DOWNLOAD_COMPANYLIST
} from "../actionType/companyListingType";
import { getAuthMethod, getMethod } from "../services/HttpServices";
import {
  industryApiUrl,
  employeeCountApiUrl,
  companyTypeApiUrl,
  revenueRangeApiUrl,
  companyListingApiUrl,
} from "../constant/Constant";
import { Geolocation } from "../constant/Geolocation";
import { createPayload } from "../utils/utils";

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

export const getCompanyList = (payload,paginationValues) => (dispatch) => {
  const url =  createPayload(payload,paginationValues,companyListingApiUrl);
 // console.log(url,'urlurlurl')
  return getMethod(companyListingApiUrl).then((res) => {
    console.log(res.headers,"response.headers");
    dispatch({
      type: COMPANYLIST,
      payload: res.data,
      count: res?.headers['x-total-count'],
    });
  });
};

export const downloadCompanyList = (payload,urlSubstring) => (dispatch) => {
  const url =  createPayload(payload,null,`${companyListingApiUrl}/${urlSubstring}`);
  return getMethod(url).then((res) => {
    dispatch({
      type: DOWNLOAD_COMPANYLIST,
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
  };
};

export const saveAdvancedSelectedFilters = (payload) => {
  return {
    type: ADVANCED_SELECTED_FILTERS,
    payload: payload,
  };
};

export const savePaginationValues = (payload) => {
  return {
    type: PAGINATION_VALUE,
    payload: payload,
  };
};



