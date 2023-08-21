import {
  LEAD_EXECUTIVE_INDUSTRY_LIST,
  LEAD_EXECUTIVE_GEOLOCATION,
  LEAD_EXECUTIVE_COMPANY_TYPE,
  LEAD_EXECUTIVE_EMPLOYEE_COUNT,
  LEAD_EXECUTIVE_REVENUE_RANGE,
  LEAD_EXECUTIVE_COMPANYLIST,
  LEAD_EXECUTIVE_COMPANY_SEARCH_PAYLOAD,
  LEAD_EXECUTIVE_ADVANCED_SELECTED_FILTERS,
  LEAD_EXECUTIVE_PAGINATION_VALUE,
  LEAD_EXECUTIVE_DOWNLOAD_COMPANYLIST,
  LEAD_EXECUTIVE_SELECTED_RECORDS,
  LEAD_EXECUTIVE_SAVE_SEARCH,
  LEAD_EXECUTIVE_DOWNLOAD_COMPANYLIST_ERROR,
  LEAD_EXECUTIVE_SAVE_SEARCH_ERROR,
  LEAD_EXECUTIVE_INDUSTRY_LIST_ERROR,
  LEAD_EXECUTIVE_COMPANY_TYPE_ERROR,
  LEAD_EXECUTIVE_EMPLOYEE_COUNT_ERROR,
  LEAD_EXECUTIVE_REVENUE_RANGE_ERROR,
  LEAD_EXECUTIVE_COMPANYLIST_ERROR,
  LEAD_EXECUTIVE_EMPTY_ERROR_OBJ_LISTING,
  LEAD_EXECUTIVE_SAVE_SEARCH_LIST,
  LEAD_EXECUTIVE_SAVE_SEARCH_LIST_ERROR,
  LEAD_EXECUTIVE_COMPANY_TAG_LIST,
  LEAD_EXECUTIVE_COMPANY_TAG_LIST_ERROR,
  LEAD_EXECUTIVE_GROUP_COMPANY_TAG,
  LEAD_EXECUTIVE_GROUP_COMPANY_TAG_ERROR,
  LEAD_EXECUTIVE_EMPLOYEELIST,
  LEAD_EXECUTIVE_EMPLOYEE_SEARCH_PAYLOAD,
  LEAD_EXECUTIVE_EMPLOYEELIST_ERROR,
  LEAD_EXECUTIVE_EMPLOYEE_SEARCH_PAYLOAD_ERROR,
  LEAD_EXECUTIVE_FUNCTION_LIST,
  LEAD_EXECUTIVE_FUNCTION_LIST_ERROR,
  LEAD_STATUS_LIST,
  LEAD_STATUS_LIST_ERROR,
  LEAD_PAGE_LAYOUT,
  LEAD_RATING_LIST,
  LEAD_RATING_LIST_ERROR,
  LEAD_EXECUTIVE_NOTES,
  LEAD_EXECUTIVE_NOTES_ERROR,
  LEAD_EXECUTIVE_REMARKS,
  LEAD_EXECUTIVE_REMARKS_ERROR
} from "../actionType/leadListingType";
import {
  getAuthMethod,
  getMethod,
  postAuthMethod  
} from "../services/HttpServices";
import { errEnum, ErrKey } from "../config";
import {
  getClientRemarksApiUrl,
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
  getRelavantCompanyApiUrl,
  getClientLeadsUrl,
  getClientLeadsKanbanUrl,
  getLeadStatusApiUrl,
  getLeadRatingApiUrl,
  getClientNotesApiUrl
} from "../constant/Constant";
import { dispatchStatus } from "./commonActionCreator";
import { Geolocation } from "../constant/Geolocation";
import { createLeadPayload,createActivityPayloadForCalendar } from "../utils/utils";

export const getIndustryList = (payload) => (dispatch) => {
  return getAuthMethod(industryApiUrl)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_INDUSTRY_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_INDUSTRY_LIST_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_INDUSTRY_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyTypeList = (payload) => (dispatch) => {
  return getAuthMethod(companyTypeApiUrl)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_COMPANY_TYPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_COMPANY_TYPE_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_COMPANY_TYPE_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getEmployeeCountList = (payload) => (dispatch) => {
  return getAuthMethod(employeeCountApiUrl)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_EMPLOYEE_COUNT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_EMPLOYEE_COUNT_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_EMPLOYEE_COUNT_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getRevenuerangeList = (payload) => (dispatch) => {
  return getAuthMethod(revenueRangeApiUrl)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_REVENUE_RANGE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_REVENUE_RANGE_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_REVENUE_RANGE_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getCompanyList = (payload, paginationValues) => (dispatch) => {
  dispatch(dispatchStatus(true));
  const url = createLeadPayload(payload, paginationValues, companyListingApiUrl);
  // console.log(url,'urlurlurl')
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_COMPANYLIST,
        payload: res.data,
        count: res?.headers["X-Total-Count"],
      });
      dispatch(dispatchStatus(false));
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_COMPANYLIST_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_COMPANYLIST_ERROR]: err.response.data[ErrKey] } ||
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
        type: LEAD_EXECUTIVE_COMPANYLIST,
        payload: res.data,
        count: res?.headers["X-Total-Count"],
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_COMPANYLIST_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_COMPANYLIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const downloadExecutiveList = (payload, urlSubstring) => (dispatch) => {
  let url = "";
  if (payload?.length) {
    //console.log(payload,'payloadpayload')
    let selectedRecords = "id.in=";
    payload?.forEach((obj) => (selectedRecords += `${obj.key},`));
    const removedLastComma = selectedRecords.substring(
      selectedRecords.lastIndexOf(","),
      0
    );
    url = `${executiveEmployeeListingApiUrl}/${urlSubstring}/${removedLastComma}`;
  } else {
    url = `${executiveEmployeeListingApiUrl}/${urlSubstring}`;
  }
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_DOWNLOAD_COMPANYLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_DOWNLOAD_COMPANYLIST_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_DOWNLOAD_ERROR]: err.response.data.error } ||
          "Error Occured",
      });
    });
};

export const getLocation = (payload) => ({
  type: LEAD_EXECUTIVE_GEOLOCATION,
  payload: Geolocation,
});

export const createExecutiveSearchPayload = (payload) => {
  return {
    type: LEAD_EXECUTIVE_COMPANY_SEARCH_PAYLOAD,
    payload: payload,
  };
};

export const saveAdvancedSelectedFilters = (payload) => {
  return {
    type: LEAD_EXECUTIVE_ADVANCED_SELECTED_FILTERS,
    payload: payload,
  };
};

export const savePaginationValues = (payload) => {
  return {
    type: LEAD_EXECUTIVE_PAGINATION_VALUE,
    payload: payload,
  };
};

export const selectedRow = (payload) => {
  return {
    type: LEAD_EXECUTIVE_SELECTED_RECORDS,
    payload: payload,
  };
};


export const saveSearchAction = (payload) => (dispatch) => {
  return postAuthMethod(saveSearch, payload)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_SAVE_SEARCH,
        payload: res.data,
      });
      dispatch(saveExecutiveSearchList(payload?.userId));
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_SAVE_SEARCH_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_SAVE_SEARCH_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const emptyErrorObj = () => ({
  type: LEAD_EXECUTIVE_EMPTY_ERROR_OBJ_LISTING,
  payload: {},
});

export const saveExecutiveSearchList = (userId) => (dispatch) => {
  const url=`${saveSearchListApiUrl}?source.equals=Executive&userId.equals=${userId}`
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_SAVE_SEARCH_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_SAVE_SEARCH_LIST_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_SAVE_SEARCH_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getExecutiveTagList = (userId) => (dispatch) => {
  const url=`${getExecutiveTagApiUrl}${userId}`
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_COMPANY_TAG_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_COMPANY_TAG_LIST_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_COMPANY_TAG_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};


export const createGroupLeadTag = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return postAuthMethod(groupExecutiveTagUrl, payload)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_GROUP_COMPANY_TAG,
        payload: res.data,
      });
      dispatch(getExecutiveTagList(payload?.[0].userId));
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_GROUP_COMPANY_TAG_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_GROUP_COMPANY_TAG_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getExecutiveEmployeeList = (payload, paginationValues) => (dispatch) => {
  dispatch(dispatchStatus(true));
  //console.log(payload,'payloadpayload')
  //payload?.checkPageLayout
  let apiUrl=getClientLeadsUrl;
  if(payload?.selectedPageLayout===2){
    apiUrl=getClientLeadsKanbanUrl;
  }
  const url = createLeadPayload(payload, paginationValues,apiUrl );  
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_EMPLOYEELIST,
        payload: res.data,
        count: res?.headers["x-total-count"],
      });
      //console.log(res?.headers["X-Total-Count"],res?.headers["x-total-count"],'dffdffdfd')
      dispatch(dispatchStatus(false));
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_EMPLOYEELIST_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_EMPLOYEELIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getLeadStatusList = (payload) => (dispatch) => {
  return getAuthMethod(getLeadStatusApiUrl)
    .then((res) => {
      dispatch({
        type: LEAD_STATUS_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_STATUS_LIST_ERROR,
        payload:
          { [errEnum.LEAD_STATUS_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getLeadRatingList = (payload) => (dispatch) => {
  return getAuthMethod(getLeadRatingApiUrl)
    .then((res) => {
      dispatch({
        type: LEAD_RATING_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_RATING_LIST_ERROR,
        payload:
          { [errEnum.LEAD_RATING_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const setPageLayout = (payload) => {
  return {
    type: LEAD_PAGE_LAYOUT,
    payload: payload,
  };
};

export const getLeadExecutiveNotes = (payload={}) => (dispatch) => {
  const url=`${getClientNotesApiUrl}`;
  //const url =createActivityPayloadForCalendar(payload,apiUrl); getClientRemarksApiUrl
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_NOTES,
        payload: res?.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_NOTES_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_NOTES_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getLeadExecutiveRemarks = (payload={}) => (dispatch) => {
  const url=`${getClientRemarksApiUrl}`;
  //const url =createActivityPayloadForCalendar(payload,apiUrl); 
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_EXECUTIVE_REMARKS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_EXECUTIVE_REMARKS_ERROR,
        payload:
          { [errEnum.LEAD_EXECUTIVE_REMARKS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};
