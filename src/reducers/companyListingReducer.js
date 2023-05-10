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
  GEOLOCATION_ERROR,
  COMPANY_TYPE_ERROR,
  EMPLOYEE_COUNT_ERROR,
  REVENUE_RANGE_ERROR,
  COMPANYLIST_ERROR,
  COMPANY_SEARCH_PAYLOAD_ERROR,
  PAGINATION_VALUE_ERROR,
  ADVANCED_SELECTED_FILTERS_ERROR,
  SELECTED_RECORDS_ERROR,
  EMPTY_ERROR_OBJ_LISTING,
  SAVE_SEARCH_LIST,
  SAVE_SEARCH_LIST_ERROR,
  COMPANY_TAG_LIST,
  COMPANY_TAG_LIST_ERROR,
} from "../actionType/companyListingType";
import { PAGE_LENGTH } from "../config";

const initialState = {
  industryList: [],
  geoLocation: [],
  companyTypeList: [],
  employeeCountList: [],
  revenueRangeList: [],
  companyList: [],
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
  errObj: {},
};

const CompanyListingReducer = (state = initialState, action) => {
  const { type, payload, count } = action || {};
  switch (type) {
    case INDUSTRY_LIST:
      return { ...state, industryList: payload };
    case GEOLOCATION:
      return { ...state, geoLocation: payload };
    case COMPANY_TYPE:
      return { ...state, companyTypeList: payload };
    case EMPLOYEE_COUNT:
      return { ...state, employeeCountList: payload };
    case REVENUE_RANGE:
      return { ...state, revenueRangeList: payload };
    case COMPANYLIST:
      return { ...state, companyList: payload, totalCount: count };
    case COMPANY_SEARCH_PAYLOAD:
      return { ...state, companySearchPayload: payload };
    case PAGINATION_VALUE:
      return { ...state, paginationValue: payload };
    case ADVANCED_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: payload,
      };
    case DOWNLOAD_COMPANYLIST:
      return { ...state, download: payload };
    case SELECTED_RECORDS:
      return { ...state, selectedRecords: payload };
    case SAVE_SEARCH:
      return { ...state, saveSearch: payload };
    case SAVE_SEARCH_LIST:
      return { ...state, saveSearchList: payload };
    case COMPANY_TAG_LIST:
      return { ...state, companyTagList: payload };

    case INDUSTRY_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case GEOLOCATION_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case COMPANY_TYPE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EMPLOYEE_COUNT_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case REVENUE_RANGE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case COMPANY_SEARCH_PAYLOAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case PAGINATION_VALUE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case ADVANCED_SELECTED_FILTERS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DOWNLOAD_COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SELECTED_RECORDS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SAVE_SEARCH_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SAVE_SEARCH_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case COMPANY_TAG_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EMPTY_ERROR_OBJ_LISTING:
      return { ...state, errObj: payload };
    default:
      return state;
  }
};

export default CompanyListingReducer;
