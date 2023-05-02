import {
  COMPANY_DETAILS,
  EMPLOYEE_LIST,
  DEPARTMENT_LIST,
  SUBMIT_EXECUTIVE_LEAD,
  SIMILAR_COMPANYLIST,
  SUBMIT_ERROR_FORM,
} from "../actionType/companyDetailsType";

const initialState = {
  companyDetails: {},
  employeeList: [],
  departmentList: [],
  executiveLeads: {},
  similarCompanyList: [],
  errorFormSubmit: [],
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
    default:
      return state;
  }
};

export default CompanyDetailsReducer;
