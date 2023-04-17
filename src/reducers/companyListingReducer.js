import {
  INDUSTRY_LIST,
} from "../actionType/companyListingType";

const initialState = {
  industryList: [],
};

const CompanyListingReducer = (state = initialState, action) => {
//   console.log(state, action, "skdjfslkdfjkl");
  const { type, payload } = action;
  switch (type) {
    case INDUSTRY_LIST:
      return { ...state, industryList: payload };
    default:
      return state;
  }
};

export default CompanyListingReducer;
