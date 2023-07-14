import {
  LEAD_EXECUTIVE_INDUSTRY_LIST,
  LEAD_EXECUTIVE_GEOLOCATION,
  LEAD_EXECUTIVE_GEOLOCATION_ERROR,
  LEAD_EXECUTIVE_COMPANY_TYPE,
  LEAD_EXECUTIVE_EMPLOYEE_COUNT,
  LEAD_EXECUTIVE_REVENUE_RANGE,
  LEAD_EXECUTIVE_COMPANYLIST,
  LEAD_EXECUTIVE_COMPANY_SEARCH_PAYLOAD,
  LEAD_EXECUTIVE_COMPANY_SEARCH_PAYLOAD_ERROR,
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
  LEAD_EXECUTIVE_PAGINATION_VALUE_ERROR,
  LEAD_EXECUTIVE_ADVANCED_SELECTED_FILTERS_ERROR,
  LEAD_EXECUTIVE_SELECTED_RECORDS_ERROR,
  LEAD_EXECUTIVE_EMPLOYEELIST,
  LEAD_EXECUTIVE_EMPLOYEELIST_ERROR,
  LEAD_EXECUTIVE_FUNCTION_LIST,
  LEAD_EXECUTIVE_FUNCTION_LIST_ERROR,
  LEAD_STATUS_LIST,
  LEAD_STATUS_LIST_ERROR, 
  LEAD_PAGE_LAYOUT 
} from "../actionType/leadListingType";
import { PAGE_LENGTH } from "../config";

const initialState = {
  leadPageLayout:{activePage:1},
  leadStatusList: [],
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
    selectedEmployeecount: [],
    selectedLeadRating: [],
    selectedLeadStatus: [],
    selectedLeadSource: [],
    searchKeyword: "",
    selectedSavedSearch: [],
    selectedCompanyTag: [],
    selectedExecutiveFunction: [],
    selectedLeadOwner: "",
    selectedFirstName: "",
    selectedLastName: "",
    selectedCompanyName: "",
    selectedTitle: "",
    selectedZipCode: "",
    selectedPageLayout: 1,
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

const LeadListingReducer = (state = initialState, action) => {
  const { type, payload, count } = action || {};
  switch (type) {
    case LEAD_EXECUTIVE_INDUSTRY_LIST:
      return { ...state, industryList: payload };
    case LEAD_EXECUTIVE_GEOLOCATION:
      return { ...state, geoLocation: payload };
    case LEAD_EXECUTIVE_COMPANY_TYPE:
      return { ...state, companyTypeList: payload };
    case LEAD_EXECUTIVE_EMPLOYEE_COUNT:
      return { ...state, employeeCountList: payload };
    case LEAD_EXECUTIVE_REVENUE_RANGE:
      return { ...state, revenueRangeList: payload };
    case LEAD_EXECUTIVE_COMPANYLIST:
      return { ...state, companyList: payload, totalExecutiveCount: count };
    case LEAD_EXECUTIVE_COMPANY_SEARCH_PAYLOAD:
      return { ...state, companySearchPayload: payload };
    case LEAD_EXECUTIVE_PAGINATION_VALUE:
      return { ...state, paginationValue: payload };
    case LEAD_EXECUTIVE_ADVANCED_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: payload,
      };
    case LEAD_EXECUTIVE_DOWNLOAD_COMPANYLIST:
      return { ...state, download: payload };
    case LEAD_EXECUTIVE_SELECTED_RECORDS:
      return { ...state, selectedRecords: payload };
    case LEAD_EXECUTIVE_SAVE_SEARCH:
      return { ...state, saveSearch: payload };
    case LEAD_EXECUTIVE_SAVE_SEARCH_LIST:
      return { ...state, saveSearchList: payload };
    case LEAD_EXECUTIVE_COMPANY_TAG_LIST:
      return { ...state, companyTagList: payload };
    case LEAD_EXECUTIVE_GROUP_COMPANY_TAG:
      return { ...state, groupCompanyTag: payload };
    case LEAD_EXECUTIVE_EMPLOYEELIST:
      return {
        ...state,
        executiveEmployeeList: payload,
        totalExecutiveCount: count,
      };
    case LEAD_EXECUTIVE_FUNCTION_LIST:
      return { ...state, executiveFunctionList: payload };
    case LEAD_STATUS_LIST:
      return { ...state, leadStatusList: payload };
    case LEAD_PAGE_LAYOUT:
      return { ...state, leadPageLayout: payload };  
    
    case LEAD_EXECUTIVE_INDUSTRY_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_GEOLOCATION_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_COMPANY_TYPE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_EMPLOYEE_COUNT_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_REVENUE_RANGE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_COMPANY_SEARCH_PAYLOAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_PAGINATION_VALUE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_ADVANCED_SELECTED_FILTERS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_DOWNLOAD_COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_SELECTED_RECORDS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_SAVE_SEARCH_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_SAVE_SEARCH_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_COMPANY_TAG_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_GROUP_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_EMPLOYEELIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_FUNCTION_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_STATUS_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EXECUTIVE_EMPTY_ERROR_OBJ_LISTING:
      return { ...state, errObj: payload };
    default:
      return state;
  }
};

export default LeadListingReducer;
