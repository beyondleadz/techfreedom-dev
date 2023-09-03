import {
  EXECUTIVE_INDUSTRY_LIST,
  EXECUTIVE_GEOLOCATION,
  EXECUTIVE_COMPANY_TYPE,
  EXECUTIVE_EMPLOYEE_COUNT,
  EXECUTIVE_REVENUE_RANGE,
  EXECUTIVE_COMPANYLIST,
  EXECUTIVE_COMPANY_SEARCH_PAYLOAD,
  EXECUTIVE_ADVANCED_SELECTED_FILTERS,
  EXECUTIVE_PAGINATION_VALUE,
  EXECUTIVE_DOWNLOAD_COMPANYLIST,
  EXECUTIVE_SELECTED_RECORDS,
  EXECUTIVE_SAVE_SEARCH,
  EXECUTIVE_DOWNLOAD_COMPANYLIST_ERROR,
  EXECUTIVE_SAVE_SEARCH_ERROR,
  EXECUTIVE_INDUSTRY_LIST_ERROR,
  EXECUTIVE_COMPANY_TYPE_ERROR,
  EXECUTIVE_EMPLOYEE_COUNT_ERROR,
  EXECUTIVE_REVENUE_RANGE_ERROR,
  EXECUTIVE_COMPANYLIST_ERROR,
  EXECUTIVE_EMPTY_ERROR_OBJ_LISTING,
  EXECUTIVE_SAVE_SEARCH_LIST,
  EXECUTIVE_SAVE_SEARCH_LIST_ERROR,
  EXECUTIVE_COMPANY_TAG_LIST,
  EXECUTIVE_COMPANY_TAG_LIST_ERROR,
  EXECUTIVE_GROUP_COMPANY_TAG,
  EXECUTIVE_GROUP_COMPANY_TAG_ERROR,
  EXECUTIVE_EMPLOYEELIST,
  EXECUTIVE_EMPLOYEE_SEARCH_PAYLOAD,
  EXECUTIVE_EMPLOYEELIST_ERROR,
  EXECUTIVE_EMPLOYEE_SEARCH_PAYLOAD_ERROR,
  EXECUTIVE_FUNCTION_LIST,
  EXECUTIVE_FUNCTION_LIST_ERROR,
  EXECUTIVE_LEVEL_LIST,
  EXECUTIVE_LEVEL_LIST_ERROR,
} from "../actionType/executiveListingType";
import {
  getAuthMethod,
  getMethod,
  postAuthMethod  
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
  groupCompanyTagUrl,
  executiveEmployeeListingApiUrl,
  getExecutiveTagApiUrl,
  getExecutiveFunctionApiUrl,
  getExecutiveLevelApiUrl,
  groupExecutiveTagUrl,
  getRelavantCompanyApiUrl
} from "../constant/Constant";
import { dispatchStatus } from "./commonActionCreator";
import { Geolocation } from "../constant/Geolocation";
import { createExecutivePayload } from "../utils/utils";

export const getIndustryList = (payload) => (dispatch) => {
  return getAuthMethod(industryApiUrl)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_INDUSTRY_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_INDUSTRY_LIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_INDUSTRY_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyTypeList = (payload) => (dispatch) => {
  return getAuthMethod(companyTypeApiUrl)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_COMPANY_TYPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_COMPANY_TYPE_ERROR,
        payload:
          { [errEnum.EXECUTIVE_COMPANY_TYPE_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getEmployeeCountList = (payload) => (dispatch) => {
  return getAuthMethod(employeeCountApiUrl)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_EMPLOYEE_COUNT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_EMPLOYEE_COUNT_ERROR,
        payload:
          { [errEnum.EXECUTIVE_EMPLOYEE_COUNT_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getRevenuerangeList = (payload) => (dispatch) => {
  return getAuthMethod(revenueRangeApiUrl)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_REVENUE_RANGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_REVENUE_RANGE_ERROR,
        payload:
          { [errEnum.EXECUTIVE_REVENUE_RANGE_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyList = (payload, paginationValues) => (dispatch) => {
  dispatch(dispatchStatus(true));
  const url = createExecutivePayload(payload, paginationValues, companyListingApiUrl);
  // console.log(url,'urlurlurl')
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_COMPANYLIST,
        payload: res.data,
        count: res?.headers["X-Total-Count"],
      });
      dispatch(dispatchStatus(false));
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_COMPANYLIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_COMPANYLIST_ERROR]: err.response.data[ErrKey] } ||
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
        type: EXECUTIVE_COMPANYLIST,
        payload: res.data,
        count: res?.headers["X-Total-Count"],
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_COMPANYLIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_COMPANYLIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const downloadExecutiveList = (payload, urlSubstring) => (dispatch) => {
  let url = "";
  if (payload?.length) {
    //console.log(payload,'payloadpayload')
    let selectedRecords = "?id.in=";
    payload?.forEach((obj) => (selectedRecords += `${obj.key},`));
    const removedLastComma = selectedRecords.substring(
      selectedRecords.lastIndexOf(","),
      0
    );
    url = `${executiveEmployeeListingApiUrl}/${urlSubstring}${removedLastComma}`;
  } else {
    url = `${executiveEmployeeListingApiUrl}/${urlSubstring}?id.in=11,12`;
  }
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_DOWNLOAD_COMPANYLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_DOWNLOAD_COMPANYLIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_DOWNLOAD_ERROR]: err.response.data.error } ||
          "Error Occured",
      });
    });
};

export const getLocation = (payload) => ({
  type: EXECUTIVE_GEOLOCATION,
  payload: Geolocation,
});

export const createExecutiveSearchPayload = (payload) => {
  return {
    type: EXECUTIVE_COMPANY_SEARCH_PAYLOAD,
    payload: payload,
  };
};

export const saveAdvancedSelectedFilters = (payload) => {
  return {
    type: EXECUTIVE_ADVANCED_SELECTED_FILTERS,
    payload: payload,
  };
};

export const savePaginationValues = (payload) => {
  return {
    type: EXECUTIVE_PAGINATION_VALUE,
    payload: payload,
  };
};

export const selectedRow = (payload) => {
  return {
    type: EXECUTIVE_SELECTED_RECORDS,
    payload: payload,
  };
};


export const saveSearchAction = (payload) => (dispatch) => {
  return postAuthMethod(saveSearch, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SAVE_SEARCH,
        payload: res.data,
      });
      dispatch(saveExecutiveSearchList(payload?.userId));
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_SAVE_SEARCH_ERROR,
        payload:
          { [errEnum.EXECUTIVE_SAVE_SEARCH_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const emptyErrorObj = () => ({
  type: EXECUTIVE_EMPTY_ERROR_OBJ_LISTING,
  payload: {},
});

export const saveExecutiveSearchList = (userId) => (dispatch) => {
  const url=`${saveSearchListApiUrl}?source.equals=Executive&userId.equals=${userId}`
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SAVE_SEARCH_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_SAVE_SEARCH_LIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_SAVE_SEARCH_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getExecutiveTagList = (userId) => (dispatch) => {
  const url=`${getExecutiveTagApiUrl}${userId}`
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_COMPANY_TAG_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_COMPANY_TAG_LIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_COMPANY_TAG_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};


export const createGroupExecutiveTag = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return postAuthMethod(groupExecutiveTagUrl, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_GROUP_COMPANY_TAG,
        payload: res.data,
      });
      dispatch(getExecutiveTagList(payload?.[0].userId));
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_GROUP_COMPANY_TAG_ERROR,
        payload:
          { [errEnum.EXECUTIVE_GROUP_COMPANY_TAG_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getExecutiveEmployeeList = (payload, paginationValues) => (dispatch) => {
  dispatch(dispatchStatus(true));
  const url = createExecutivePayload(payload, paginationValues, executiveEmployeeListingApiUrl);
  // console.log(url,'urlurlurl')
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_EMPLOYEELIST,
        payload: res.data,
        count: res?.headers["x-total-count"],
      });
      //console.log(res?.headers["X-Total-Count"],res?.headers["x-total-count"],'dffdffdfd')
      dispatch(dispatchStatus(false));
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_EMPLOYEELIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_EMPLOYEELIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getExecutiveFunctionList = (payload) => (dispatch) => {
  return getAuthMethod(getExecutiveFunctionApiUrl)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_FUNCTION_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_FUNCTION_LIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_FUNCTION_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getExecutiveLevelList = (payload) => (dispatch) => {
  return getAuthMethod(getExecutiveLevelApiUrl)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_LEVEL_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_LEVEL_LIST_ERROR,
        payload:
          { [errEnum.EXECUTIVE_LEVEL_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const emptyDownload=()=>({
  type: EXECUTIVE_DOWNLOAD_COMPANYLIST,
  payload: {},  
});

