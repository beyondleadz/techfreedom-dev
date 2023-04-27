import { COMPANY_DETAILS, EMPLOYEE_LIST} from "../actionType/companyDetailsType";

const initialState = {
  companyDetails: {},
  employeeList:[]
};

const CompanyDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(type, payload, "sklfsjldfksd");
  switch (type) {
    case COMPANY_DETAILS:
      return { ...state, companyDetails: payload };
      case EMPLOYEE_LIST:
        return { ...state, employeeList: payload };
    default:
      return state;
  }
};


export default CompanyDetailsReducer;
