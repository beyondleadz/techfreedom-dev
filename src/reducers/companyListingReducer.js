import {
  INDUSTRY_LIST,
  GEOLOCATION,
  COMPANY_TYPE,
  EMPLOYEE_COUNT,
  REVENUE_RANGE,
  COMPANYLIST,
  COMPANY_SEARCH_PAYLOAD,
} from "../actionType/companyListingType";

const initialState = {
  industryList: [],
  geoLocation: [],
  companyTypeList:[],
  employeeCountList:[],
  revenueRangeList:[],
  companyList:[],
  companySearchPayload:{}
};

const CompanyListingReducer = (state = initialState, action) => {
  //   console.log(state, action, "skdjfslkdfjkl");
  const { type, payload } = action;
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
      return { ...state, companyList:payload};  
    case COMPANY_SEARCH_PAYLOAD:
      return {...state,companySearchPayload:{...state.companySearchPayload,payload}};  
    default:      
      return state;
  }
};

export default CompanyListingReducer;
