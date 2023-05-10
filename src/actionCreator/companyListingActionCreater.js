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
  DOWNLOAD_COMPANYLIST,
  SELECTED_RECORDS,
  SAVE_SEARCH,
  DOWNLOAD_COMPANYLIST_ERROR,
  SAVE_SEARCH_ERROR,
  INDUSTRY_LIST_ERROR,
  COMPANY_TYPE_ERROR,
  EMPLOYEE_COUNT_ERROR,
  REVENUE_RANGE_ERROR,
  COMPANYLIST_ERROR,
  EMPTY_ERROR_OBJ_LISTING,
  SAVE_SEARCH_LIST,
  SAVE_SEARCH_LIST_ERROR,
  COMPANY_TAG_LIST,
  COMPANY_TAG_LIST_ERROR,
} from "../actionType/companyListingType";
import {
  getAuthMethod,
  getMethod,
  postAuthMethod,
} from "../services/HttpServices";
import { errEnum, ErrKey } from "../config";
import {
  industryApiUrl,
  employeeCountApiUrl,
  companyTypeApiUrl,
  revenueRangeApiUrl,
  companyListingApiUrl,
  saveSearch,
  saveSearchListApiUrl,
  getCompanyTagApiUrl,
} from "../constant/Constant";
import { dispatchStatus } from "./commonActionCreator";
import { Geolocation } from "../constant/Geolocation";
import { createPayload } from "../utils/utils";

export const getIndustryList = (payload) => (dispatch) => {
  return getAuthMethod(industryApiUrl)
    .then((res) => {
      dispatch({
        type: INDUSTRY_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: INDUSTRY_LIST_ERROR,
        payload:
          { [errEnum.INDUSTRY_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyTypeList = (payload) => (dispatch) => {
  return getAuthMethod(companyTypeApiUrl)
    .then((res) => {
      dispatch({
        type: COMPANY_TYPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: COMPANY_TYPE_ERROR,
        payload:
          { [errEnum.COMPANY_TYPE_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getEmployeeCountList = (payload) => (dispatch) => {
  return getAuthMethod(employeeCountApiUrl)
    .then((res) => {
      dispatch({
        type: EMPLOYEE_COUNT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EMPLOYEE_COUNT_ERROR,
        payload:
          { [errEnum.EMPLOYEE_COUNT_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getRevenuerangeList = (payload) => (dispatch) => {
  return getAuthMethod(revenueRangeApiUrl)
    .then((res) => {
      dispatch({
        type: REVENUE_RANGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REVENUE_RANGE_ERROR,
        payload:
          { [errEnum.REVENUE_RANGE_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyList = (payload, paginationValues) => (dispatch) => {
  dispatch(dispatchStatus(true));
  const url = createPayload(payload, paginationValues, companyListingApiUrl);
  // console.log(url,'urlurlurl')
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: COMPANYLIST,
        payload: res.data,
        count: res?.headers["x-total-count"],
      });
      dispatch(dispatchStatus(false));
    })
    .catch((err) => {
      dispatch({
        type: COMPANYLIST_ERROR,
        payload:
          { [errEnum.COMPANYLIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyListWithStartAndEnd = (paginationValues) => (
  dispatch
) => {
  let url = `${companyListingApiUrl}?page=${paginationValues?.start}&size=${paginationValues?.end}`;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: COMPANYLIST,
        payload: res.data,
        count: res?.headers["x-total-count"],
      });
    })
    .catch((err) => {
      dispatch({
        type: COMPANYLIST_ERROR,
        payload:
          { [errEnum.COMPANYLIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const downloadCompanyList = (payload, urlSubstring) => (dispatch) => {
  // const url =  createPayload(payload,null,`${companyListingApiUrl}/${urlSubstring}`);
  let url = "";
  if (payload?.length) {
    let selectedRecords = "id.in=";
    payload?.forEach((id) => (selectedRecords += `${id},`));
    const removedLastComma = selectedRecords.substring(
      selectedRecords.lastIndexOf(","),
      0
    );
    url = `${companyListingApiUrl}/${urlSubstring}/${removedLastComma}`;
  } else {
    url = `${companyListingApiUrl}/${urlSubstring}`;
  }
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: DOWNLOAD_COMPANYLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DOWNLOAD_COMPANYLIST_ERROR,
        payload:
          { [errEnum.DOWNLOAD_ERROR]: err.response.data.error } ||
          "Error Occured",
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

export const selectedRow = (payload) => {
  return {
    type: SELECTED_RECORDS,
    payload: payload,
  };
};

export const saveSearchAction = (payload) => (dispatch) => {
  return postAuthMethod(saveSearch, payload)
    .then((res) => {
      dispatch({
        type: SAVE_SEARCH,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SAVE_SEARCH_ERROR,
        payload:
          { [errEnum.SAVE_SEARCH_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const emptyErrorObj = () => ({
  type: EMPTY_ERROR_OBJ_LISTING,
  payload: {},
});

export const saveSearchList = (userId) => (dispatch) => {
  const url=`${saveSearchListApiUrl}?userId.equals=${userId}`
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: SAVE_SEARCH_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SAVE_SEARCH_LIST_ERROR,
        payload:
          { [errEnum.SAVE_SEARCH_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyTagList = (userId) => (dispatch) => {
  const url=`${getCompanyTagApiUrl}?userId.equals=${userId}`
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: COMPANY_TAG_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: COMPANY_TAG_LIST_ERROR,
        payload:
          { [errEnum.COMPANY_TAG_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};
