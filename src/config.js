let baseUrl;
export const DEVMODE = false;
export const getBaseUrl = () => {
  if (DEVMODE) {
    baseUrl = "http://3.215.187.36:9002/"; //"http://besthosting4u.co.in/beyondapi/";
  } else {
    baseUrl = "http://3.215.187.36:9002/"; //"http://besthosting4u.co.in/beyondapi/";
  }
  return baseUrl;
};

export const LEFT_FILETERS_SIZE = [0, 1, 2, 3, 4, 5, 6, 7];
export const MORE_FILETERS_SIZE = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
];
export const PAGE_LENGTH = 10;
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const errEnum = {
  SAVE_SEARCH_ERROR: "SAVE_SEARCH_ERROR",
  DOWNLOAD_ERROR: "DOWNLOAD_ERROR",
  SINGLE_COMPANY_TAG_ERROR:"SINGLE_COMPANY_TAG_ERROR",
  COMPANY_DETAILS_ERROR:"COMPANY_DETAILS_ERROR",
  EMPLOYEE_LIST_ERROR:'EMPLOYEE_LIST_ERROR',
  DEPARTMENT_LIST_ERROR:'DEPARTMENT_LIST_ERROR',
  SUBMIT_EXECUTIVE_LEAD_ERROR:'SUBMIT_EXECUTIVE_LEAD_ERROR',
  SIMILAR_COMPANYLIST_ERROR:'SIMILAR_COMPANYLIST_ERROR',
  SUBMIT_ERROR_FORM_ERROR:'SUBMIT_ERROR_FORM_ERROR',
  INDUSTRY_LIST_ERROR:'INDUSTRY_LIST_ERROR',
  COMPANY_TYPE_ERROR:'COMPANY_TYPE_ERROR',
  EMPLOYEE_COUNT_ERROR:'EMPLOYEE_COUNT_ERROR',
  REVENUE_RANGE_ERROR:'REVENUE_RANGE_ERROR',
  COMPANYLIST_ERROR:'COMPANYLIST_ERROR',
  ACCOUNTINFO_ERROR:'ACCOUNTINFO_ERROR',
  SAVE_SEARCH_LIST_ERROR:'SAVE_SEARCH_LIST_ERROR',
  COMPANY_TAG_LIST_ERROR:'COMPANY_TAG_LIST_ERROR',
  POST_RELAVANT_COMPANY_TAG:'POST_RELAVANT_COMPANY_TAG',
  GET_RELAVANT_COMPANY_TAG_ERROR:'GET_RELAVANT_COMPANY_TAG_ERROR',
  GET_EXECUTIVE_LEAD_ERROR:'GET_EXECUTIVE_LEAD_ERROR',
  GROUP_COMPANY_TAG_ERROR:'GROUP_COMPANY_TAG_ERROR',
  EXECUTIVE_LEVEL_LIST_ERROR:'EXECUTIVE_LEVEL_LIST_ERROR',
  EXECUTIVE_FUNCTION_LIST_ERROR:'EXECUTIVE_FUNCTION_LIST_ERROR',
  EXECUTIVE_DETAILS_ERROR : 'EXECUTIVE_DETAILS_ERROR',
  EXECUTIVE_SIMILAR_COMPANYLIST_ERROR:'EXECUTIVE_SIMILAR_COMPANYLIST_ERROR',
  SUBSCRIPTIONACCOUNTINFO_ERROR:'SUBSCRIPTIONACCOUNTINFO_ERROR',
  EXECUTIVE_COMPANY_DETAILS:'EXECUTIVE_COMPANY_DETAILS',
  EMPLOYEE_VIEWABLE_STATUS:'EMPLOYEE_VIEWABLE_STATUS',
  LEAD_DETAILS_ERROR:'LEAD_DETAILS_ERROR',
  LEAD_DETAILS:'LEAD_DETAILS',
  EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS_ERROR:'EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS_ERROR',
  UPDATE_LEAD_DETAILS_ERROR:'UPDATE_LEAD_DETAILS_ERROR',
  SAVE_CLIENT_NOTE_ERROR:'SAVE_CLIENT_NOTE_ERROR',
  LEAD_REMARKS_ERROR:'LEAD_REMARKS_ERROR',
  LEAD_NOTE_DETAIL_ERROR:'LEAD_NOTE_DETAIL_ERROR',
  LEAD_STATUS_LIST_ERROR:'LEAD_STATUS_LIST_ERROR',
  DELETE_LEAD_NOTE_ERROR:'DELETE_LEAD_NOTE_ERROR',
  SAVE_CLIENT_REMARKS_ERROR:'SAVE_CLIENT_REMARKS_ERROR',
  UPDATEACCOUNTINFO_ERROR:'UPDATEACCOUNTINFO_ERROR',
  LEAD_EXECUTIVE_REMARKS:'LEAD_EXECUTIVE_REMARKS',
  LEAD_EXECUTIVE_REMARKS_ERROR:'LEAD_EXECUTIVE_REMARKS_ERROR',
  LEAD_TASKS_STATUS_LIST:'LEAD_TASKS_STATUS_LIST',
  CLOSED_OPPORTUNITY_ERROR:'CLOSED_OPPORTUNITY_ERROR',

};

export const ErrKey = 'title'
