import {
  COMPANY_DETAILS,
  EMPLOYEE_LIST,
  DEPARTMENT_LIST,
  SUBMIT_EXECUTIVE_LEAD,
  SIMILAR_COMPANYLIST,
  SUBMIT_ERROR_FORM,
  SINGLE_COMPANY_TAG_ERROR,
  SINGLE_COMPANY_TAG,
  EMPTY_ERROR_OBJ,
  SIMILAR_COMPANYLIST_ERROR,
  COMPANY_DETAILS_ERROR,
  EMPLOYEE_LIST_ERROR,
  DEPARTMENT_LIST_ERROR,
  SUBMIT_EXECUTIVE_LEAD_ERROR,
  SUBMIT_ERROR_FORM_ERROR,
  DOWNLOAD_COMPANY_ERROR,
  DOWNLOAD_COMPANY,
  FETCH_COMPANY_TAG,
  FETCH_COMPANY_TAG_ERROR,
  POST_RELAVANT_COMPANY_TAG,
  POST_RELAVANT_COMPANY_TAG_ERROR,
  GET_RELAVANT_COMPANY_TAG,
  GET_RELAVANT_COMPANY_TAG_ERROR,
  SELECTED_EXECUTIVE,
  DOWNLOAD_EXECUTIVE,
  DOWNLOAD_EXECUTIVE_ERROR,
  SELECTED_DEPARTMENT,
  GET_EXECUTIVE_LEAD,
  GET_EXECUTIVE_LEAD_ERROR,
} from "../actionType/companyDetailsType";

const initialState = {
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

const CompanyDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COMPANY_DETAILS:
      return { ...state, companyDetails: payload };
    case EMPLOYEE_LIST:
      return { ...state, employeeList: payload };
    case DEPARTMENT_LIST:
      return { ...state, departmentList: payload };
    case SUBMIT_EXECUTIVE_LEAD:
      return { ...state, executiveLeads: payload };
    case SIMILAR_COMPANYLIST:
      return { ...state, similarCompanyList: payload };
    case SUBMIT_ERROR_FORM:
      return { ...state, errorFormSubmit: payload };
    case SINGLE_COMPANY_TAG:
      return { ...state, sigleCompanyTag: payload };
    case DOWNLOAD_COMPANY:
      return { ...state, downloadCompany: payload };
    case DOWNLOAD_EXECUTIVE:
      return { ...state, downloadExecutive: payload };
    case FETCH_COMPANY_TAG:
      return { ...state, fetchCompanyTag: payload };
    case POST_RELAVANT_COMPANY_TAG:
      return { ...state, postRelavantCompany: payload };
    case GET_RELAVANT_COMPANY_TAG:
      return { ...state, getRelavantCompany: payload };
    case SELECTED_EXECUTIVE:
      return { ...state, selectedExecutive: payload };
    case SELECTED_DEPARTMENT:
      return { ...state, selectedDepartment: payload };
    case GET_EXECUTIVE_LEAD:
      return { ...state, getExecutiveLead: payload };

    case SINGLE_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SIMILAR_COMPANYLIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case COMPANY_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EMPLOYEE_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DEPARTMENT_LIST_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SUBMIT_EXECUTIVE_LEAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SUBMIT_ERROR_FORM_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DOWNLOAD_COMPANY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case FETCH_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case POST_RELAVANT_COMPANY_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case GET_RELAVANT_COMPANY_TAG:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DOWNLOAD_EXECUTIVE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case GET_EXECUTIVE_LEAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EMPTY_ERROR_OBJ:
      return { ...state, errObj: payload };

    default:
      return state;
  }
};

export default CompanyDetailsReducer;
