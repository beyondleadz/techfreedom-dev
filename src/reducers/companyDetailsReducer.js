import {
  COMPANY_DETAILS,
  EMPLOYEE_LIST,
  DEPARTMENT_LIST,
  SUBMIT_EXECUTIVE_LEAD,
} from "../actionType/companyDetailsType";

const initialState = {
  companyDetails: {},
  employeeList: [],
  departmentList: [],
  executiveLeads: {},
};

const CompanyDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type, payload, "sklfsjldfksd");
  switch (type) {
    case COMPANY_DETAILS:
      return { ...state, companyDetails: payload };
    case EMPLOYEE_LIST:
      return { ...state, employeeList: payload };
    case DEPARTMENT_LIST:
      return { ...state, departmentList: payload };
    case SUBMIT_EXECUTIVE_LEAD:
      return { ...state, executiveLeads: payload };
    default:
      return state;
  }
};

export default CompanyDetailsReducer;
