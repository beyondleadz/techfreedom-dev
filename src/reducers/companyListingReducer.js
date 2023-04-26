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
} from "../actionType/companyListingType";
import { PAGE_LENGTH } from "../config";

const initialState = {
  industryList: [],
  geoLocation: [],
  companyTypeList: [],
  employeeCountList: [],
  revenueRangeList: [],
  companyList: [],
  selectedFilters: {
    selectedCountry: [],
    selectedState: [],
    selectedCity: [],
    selectedIndustry: [],
    selectedCompanytype: [],
    selectedEmployeecount: [],
    selectedRevenuerange: [],
    searchKeyword:"",
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
};

const CompanyListingReducer = (state = initialState, action) => {
  const { type, payload,count } = action || {};
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
      return { ...state, companyList: payload, totalCount:count };
    case COMPANY_SEARCH_PAYLOAD:
      return { ...state, companySearchPayload: payload };
      case PAGINATION_VALUE:
      return { ...state, paginationValue: payload };
    case ADVANCED_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: payload,
      };

    default:
      return state;
  }
};

export default CompanyListingReducer;
