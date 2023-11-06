import {
  CLOSED_OPPORTUNITY,
  CLOSED_OPPORTUNITY_ERROR,
  OPEN_OPPORTUNITY,
  OPEN_OPPORTUNITY_ERROR,
} from "../actionType/dashboardType";

const initialState = {
  closedOpp: [],
  openOpp:[]
};

const DashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLOSED_OPPORTUNITY:
      return { ...state, closedOpp: payload };
    case OPEN_OPPORTUNITY:
      return { ...state, openOpp: payload };
    case CLOSED_OPPORTUNITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case OPEN_OPPORTUNITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    default:
      return state;
  }
};

export default DashboardReducer;
