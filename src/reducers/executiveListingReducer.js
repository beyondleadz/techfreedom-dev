import {
  EXECUTIVE_INDUSTRY_LIST,
  EXECUTIVE_GEOLOCATION,
  EXECUTIVE_GEOLOCATION_ERROR,
  EXECUTIVE_COMPANY_TYPE,
  EXECUTIVE_EMPLOYEE_COUNT,
  EXECUTIVE_REVENUE_RANGE,
  EXECUTIVE_COMPANYLIST,
  EXECUTIVE_COMPANY_SEARCH_PAYLOAD,
  EXECUTIVE_COMPANY_SEARCH_PAYLOAD_ERROR,
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
  EXECUTIVE_PAGINATION_VALUE_ERROR,
  EXECUTIVE_ADVANCED_SELECTED_FILTERS_ERROR,
  EXECUTIVE_SELECTED_RECORDS_ERROR,
  EXECUTIVE_EMPLOYEELIST,
  EXECUTIVE_EMPLOYEELIST_ERROR,
  EXECUTIVE_FUNCTION_LIST,
  EXECUTIVE_FUNCTION_LIST_ERROR,
  EXECUTIVE_LEVEL_LIST,
  EXECUTIVE_LEVEL_LIST_ERROR,
} from "../actionType/executiveListingType";
import { PAGE_LENGTH } from "../config";

const initialState = {
  executiveFunctionList: [],
  executiveLevelList: [],
  industryList: [],
  geoLocation: [],
  companyTypeList: [],
  employeeCountList: [],
  revenueRangeList: [],
  companyList: [],
  executiveEmployeeList: [],
  saveSearchList: [],
  companyTagList: [],
  selectedFilters: {
    selectedCountry: [],
    selectedState: [],
    selectedCity: [],
    selectedIndustry: [],
    selectedCompanytype: [],
    selectedEmployeecount: [],
    selectedRevenuerange: [],
    searchKeyword: "",
    selectedSavedSearch: [],
    selectedCompanyTag: [],
    selectedExecutiveFunction: [],
    selectedExecutiveLevel: [],

  },
  companySearchPayload: {
    country: [],
    state: [],
    city: [],
    industry: [],
    companytype: [],
    employeecount: [],
    revenuerange: [],
  },
  paginationValue: {
    start: 0,
    end: PAGE_LENGTH,
  },
  selectedRecords: [],
  download: "",
  saveSearch: "",
  groupCompanyTag: "",
  errObj: {},
};

const ExecutiveListingReducer = (state = initialState, action) => {
  const { type, payload, count } = action || {};
  switch (type) {
    case EXECUTIVE_INDUSTRY_LIST:
      return { ...state, industryList: payload };
    case EXECUTIVE_GEOLOCATION:
      return { ...state, geoLocation: payload };
    case EXECUTIVE_COMPANY_TYPE:
      return { ...state, companyTypeList: payload };
    case EXECUTIVE_EMPLOYEE_COUNT:
      return { ...state, employeeCountList: payload };
    case EXECUTIVE_REVENUE_RANGE:
      return { ...state, revenueRangeList: payload };
    case EXECUTIVE_COMPANYLIST:
      return { ...state, companyList: payload, totalCount: count };
    case EXECUTIVE_COMPANY_SEARCH_PAYLOAD:
      return { ...state, companySearchPayload: payload };
    case EXECUTIVE_PAGINATION_VALUE:
      return { ...state, paginationValue: payload };
    case EXECUTIVE_ADVANCED_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: payload,
      };
    case EXECUTIVE_DOWNLOAD_COMPANYLIST:
      return { ...state, download: payload };
    case EXECUTIVE_SELECTED_RECORDS:
      return { ...state, selectedRecords: payload };
    case EXECUTIVE_SAVE_SEARCH:
      return { ...state, saveSearch: payload };
    case EXECUTIVE_SAVE_SEARCH_LIST:
      return { ...state, saveSearchList: payload };
    case EXECUTIVE_COMPANY_TAG_LIST:
      return { ...state, companyTagList: payload };
    case EXECUTIVE_GROUP_COMPANY_TAG:
      return { ...state, groupCompanyTag: payload };
    case EXECUTIVE_EMPLOYEELIST:
      return { ...state, executiveEmployeeList: payload };
    case EXECUTIVE_FUNCTION_LIST:
      return { ...state, executiveFunctionList: payload };
    case EXECUTIVE_LEVEL_LIST:
      return { ...state, executiveLevelList: payload };

    case EXECUTIVE_INDUSTRY_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_GEOLOCATION_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_COMPANY_TYPE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_EMPLOYEE_COUNT_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_REVENUE_RANGE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_COMPANY_SEARCH_PAYLOAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_PAGINATION_VALUE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_ADVANCED_SELECTED_FILTERS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_DOWNLOAD_COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_SELECTED_RECORDS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_SAVE_SEARCH_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_SAVE_SEARCH_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_COMPANY_TAG_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_GROUP_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_EMPLOYEELIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_FUNCTION_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_LEVEL_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_EMPTY_ERROR_OBJ_LISTING:
      return { ...state, errObj: payload };
    default:
      return state;
  }
};

export default ExecutiveListingReducer;
