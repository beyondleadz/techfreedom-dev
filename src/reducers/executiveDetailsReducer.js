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
  EXECUTIVE_SELECTED_EXECUTIVE,
  EXECUTIVE_DOWNLOAD_EXECUTIVE,
  EXECUTIVE_DOWNLOAD_EXECUTIVE_ERROR,
  EXECUTIVE_SELECTED_DEPARTMENT,
  EXECUTIVE_GET_EXECUTIVE_LEAD,
  EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR,
  GET_RELAVANT_EXECUTIVE_TAG,
  GET_RELAVANT_EXECUTIVE_TAG_ERROR,
  POST_RELAVANT_EXECUTIVE_TAG,
  POST_RELAVANT_EXECUTIVE_TAG_ERROR,
  EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS,
  EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS_ERROR
} from "../actionType/executiveDetailsType";

const initialState = {
  executiveDetails:{},
  executiveCompanyDetails: {},
  employeeList: [],
  departmentList: [],
  executiveLeads: {},
  similarExecutiveList: [],
  errorFormSubmit: [],
  sigleCompanyTag: {},
  fetchCompanyTag: {},
  postRelavantExecutive: {},
  getRelavantExecutive: [],
  errObj: {},
  selectedColleague: [],
  downloadCompany: "",
  downloadExecutive: "",
  selectedDepartment: "",
  getExecutiveLead: [],
  executiveEmployeeViewableStatus:{}
};

const ExecutiveDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EXECUTIVE_DETAILS:
      return { ...state, executiveDetails: payload };    
    case EXECUTIVE_COMPANY_DETAILS:
      return { ...state, executiveCompanyDetails: payload };
    case EXECUTIVE_EMPLOYEE_LIST:
      return { ...state, employeeList: payload };
    case EXECUTIVE_DEPARTMENT_LIST:
      return { ...state, departmentList: payload };
    case EXECUTIVE_SUBMIT_EXECUTIVE_LEAD:
      return { ...state, executiveLeads: payload };
    case EXECUTIVE_SIMILAR_COMPANYLIST:
      return { ...state, similarExecutiveList: payload };
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
    case POST_RELAVANT_EXECUTIVE_TAG:
      return { ...state, postRelavantExecutive: payload };
    case GET_RELAVANT_EXECUTIVE_TAG:
      return { ...state, getRelavantExecutive: payload };
    case EXECUTIVE_SELECTED_EXECUTIVE:
      return { ...state, selectedColleague: payload };
    case EXECUTIVE_SELECTED_DEPARTMENT:
      return { ...state, selectedDepartment: payload };
    case EXECUTIVE_GET_EXECUTIVE_LEAD:
      return { ...state, getExecutiveLead: payload };
    case EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS:
      return { ...state, executiveEmployeeViewableStatus: payload };  
        

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
    case POST_RELAVANT_EXECUTIVE_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case GET_RELAVANT_EXECUTIVE_TAG_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_DOWNLOAD_EXECUTIVE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EXECUTIVE_EMPTY_ERROR_OBJ:
      return { ...state, errObj: payload };

    default:
      return state;
  }
};

export default ExecutiveDetailsReducer;
