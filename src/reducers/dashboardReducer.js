import {
  CLOSED_OPPORTUNITY,
  CLOSED_OPPORTUNITY_ERROR,
  OPEN_OPPORTUNITY,
  OPEN_OPPORTUNITY_ERROR,
  DASHBOARD_GROUPED_COUNT,
  DASHBOARD_GROUPED_COUNT_ERROR,
  DASHBOARD_SALES_TREND,
  DASHBOARD_SALES_TREND_ERROR,
  DASHBOARD_GROUPED_BYSOURCE,
  DASHBOARD_GROUPED_BYSOURCE_ERROR,
  DASHBOARD_GROUPED_BYINDUSTRY,
  DASHBOARD_GROUPED_BYINDUSTRY_ERROR,
  DASHBOARD_GROUPED_BYACTIVITY,
  DASHBOARD_GROUPED_BYACTIVITY_ERROR,
} from "../actionType/dashboardType";

const initialState = {
  closedOpp: [],
  openOpp: [],
  groupedCountData: {},
  salesTrendData: {},
  groupedSourceData: {},
  groupedIndustryData: {},
  groupedActivityData: {},
  errObj: {},
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
    case DASHBOARD_SALES_TREND:
      return { ...state, salesTrendData: payload };
    case DASHBOARD_GROUPED_BYSOURCE:
      return { ...state, groupedSourceData: payload };
    case DASHBOARD_GROUPED_BYINDUSTRY:
      return { ...state, groupedIndustryData: payload };
    case DASHBOARD_GROUPED_BYACTIVITY:
      return { ...state, groupedActivityData: payload };
    case CLOSED_OPPORTUNITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case OPEN_OPPORTUNITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_GROUPED_COUNT_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_SALES_TREND_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_GROUPED_BYSOURCE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_GROUPED_BYINDUSTRY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_GROUPED_BYACTIVITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    default:
      return state;
  }
};

export default DashboardReducer;
