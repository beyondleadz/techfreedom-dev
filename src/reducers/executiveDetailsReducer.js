import {
  EXECUTIVE_DETAILS,
  EXECUTIVE_DETAILS_ERROR,
  EXECUTIVE_COMPANY_DETAILS,
  EXECUTIVE_EMPLOYEE_LIST,
  EXECUTIVE_DEPARTMENT_LIST,
  EXECUTIVE_SUBMIT_EXECUTIVE_LEAD,
  EXECUTIVE_SIMILAR_COMPANYLIST,
  EXECUTIVE_SUBMIT_ERROR_FORM,
  EXECUTIVE_SINGLE_COMPANY_TAG,
  EXECUTIVE_SINGLE_COMPANY_TAG_ERROR,
  EXECUTIVE_EMPTY_ERROR_OBJ,
  EXECUTIVE_COMPANY_DETAILS_ERROR,
  EXECUTIVE_EMPLOYEE_LIST_ERROR,
  EXECUTIVE_DEPARTMENT_LIST_ERROR,
  EXECUTIVE_SUBMIT_EXECUTIVE_LEAD_ERROR,
  EXECUTIVE_SIMILAR_COMPANYLIST_ERROR,
  EXECUTIVE_SUBMIT_ERROR_FORM_ERROR,
  EXECUTIVE_DOWNLOAD_COMPANY,
  EXECUTIVE_DOWNLOAD_COMPANY_ERROR,
  EXECUTIVE_FETCH_COMPANY_TAG,
  EXECUTIVE_FETCH_COMPANY_TAG_ERROR,
  EXECUTIVE_POST_RELAVANT_COMPANY_TAG,
  EXECUTIVE_POST_RELAVANT_COMPANY_TAG_ERROR,
  EXECUTIVE_GET_RELAVANT_COMPANY_TAG,
  EXECUTIVE_GET_RELAVANT_COMPANY_TAG_ERROR,
  EXECUTIVE_SELECTED_EXECUTIVE,
  EXECUTIVE_DOWNLOAD_EXECUTIVE,
  EXECUTIVE_DOWNLOAD_EXECUTIVE_ERROR,
  EXECUTIVE_SELECTED_DEPARTMENT,
  EXECUTIVE_GET_EXECUTIVE_LEAD,
  EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR
} from "../actionType/executiveDetailsType";

const initialState = {
  executiveDetails:{},
  companyDetails: {},
  employeeList: [],
  departmentList: [],
  executiveLeads: {},
  similarCompanyList: [],
  errorFormSubmit: [],
  sigleCompanyTag: {},
  fetchCompanyTag: {},
  postRelavantCompany: {},
  getRelavantCompany: {},
  errObj: {},
  selectedExecutive: [],
  downloadCompany: "",
  downloadExecutive: "",
  selectedDepartment: "",
  getExecutiveLead: [],
};

const ExecutiveDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EXECUTIVE_DETAILS:
      return { ...state, executiveDetails: payload };    
    case EXECUTIVE_COMPANY_DETAILS:
      return { ...state, companyDetails: payload };
    case EXECUTIVE_EMPLOYEE_LIST:
      return { ...state, employeeList: payload };
    case EXECUTIVE_DEPARTMENT_LIST:
      return { ...state, departmentList: payload };
    case EXECUTIVE_SUBMIT_EXECUTIVE_LEAD:
      return { ...state, executiveLeads: payload };
    case EXECUTIVE_SIMILAR_COMPANYLIST:
      return { ...state, similarCompanyList: payload };
    case EXECUTIVE_SUBMIT_ERROR_FORM:
      return { ...state, errorFormSubmit: payload };
    case EXECUTIVE_SINGLE_COMPANY_TAG:
      return { ...state, sigleCompanyTag: payload };
    case EXECUTIVE_DOWNLOAD_COMPANY:
      return { ...state, downloadCompany: payload };
    case EXECUTIVE_DOWNLOAD_EXECUTIVE:
      return { ...state, downloadExecutive: payload };
    case EXECUTIVE_FETCH_COMPANY_TAG:
      return { ...state, fetchCompanyTag: payload };
    case EXECUTIVE_POST_RELAVANT_COMPANY_TAG:
      return { ...state, postRelavantCompany: payload };
    case EXECUTIVE_GET_RELAVANT_COMPANY_TAG:
      return { ...state, getRelavantCompany: payload };
    case EXECUTIVE_SELECTED_EXECUTIVE:
      return { ...state, selectedExecutive: payload };
    case EXECUTIVE_SELECTED_DEPARTMENT:
      return { ...state, selectedDepartment: payload };
    case EXECUTIVE_GET_EXECUTIVE_LEAD:
      return { ...state, getExecutiveLead: payload };

    case EXECUTIVE_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };  
    case EXECUTIVE_SINGLE_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_SIMILAR_COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_COMPANY_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_EMPLOYEE_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_DEPARTMENT_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_SUBMIT_EXECUTIVE_LEAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_SUBMIT_ERROR_FORM_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_DOWNLOAD_COMPANY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_FETCH_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_POST_RELAVANT_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_GET_RELAVANT_COMPANY_TAG:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_DOWNLOAD_EXECUTIVE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_EMPTY_ERROR_OBJ:
      return { ...state, errObj: payload };

    default:
      return state;
  }
};

export default ExecutiveDetailsReducer;
