import {
  LEAD_DETAILS,
  LEAD_DETAILS_ERROR,
  LEAD_EMPTY_ERROR_OBJ
} from "../actionType/leadDetailsType";

const initialState = {
  leadDetails:{},
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
};

const LeadDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LEAD_DETAILS:
      return { ...state, leadDetails: payload };    
    
    case LEAD_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };  
    case LEAD_EMPTY_ERROR_OBJ:
      return { ...state, errObj: payload };

    default:
      return state;
  }
};

export default LeadDetailsReducer;
