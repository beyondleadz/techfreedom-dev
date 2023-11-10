import {
  CLOSED_OPPORTUNITY,
  CLOSED_OPPORTUNITY_ERROR,
  OPEN_OPPORTUNITY,
  OPEN_OPPORTUNITY_ERROR,
  DASHBOARD_GROUPED_COUNT,
  DASHBOARD_GROUPED_COUNT_ERROR,
} from "../actionType/dashboardType";

const initialState = {
  closedOpp: [],
  openOpp: [],
  groupedCountData: {},
};

const DashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLOSED_OPPORTUNITY:
      return { ...state, closedOpp: payload };
    case OPEN_OPPORTUNITY:
      return { ...state, openOpp: payload };
    case DASHBOARD_GROUPED_COUNT:
      return { ...state, groupedCountData: payload };
    case CLOSED_OPPORTUNITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case OPEN_OPPORTUNITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_GROUPED_COUNT_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    default:
      return state;
  }
};

export default DashboardReducer;
