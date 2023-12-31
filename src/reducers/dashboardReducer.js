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
  DASHBOARD_GROUPED_BY_EMAIL_ACTIVITY,
  DASHBOARD_GROUPED_BY_EMAIL_ACTIVITY_ERROR,
  DASHBOARD_GROUPED_BY_CALL_ACTIVITY,
  DASHBOARD_GROUPED_BY_CALL_ACTIVITY_ERROR,
  DASHBOARD_GROUPED_BY_MEETING_ACTIVITY,
  DASHBOARD_GROUPED_BY_MEETING_ACTIVITY_ERROR,
  DASHBOARD_CONVERTED_LEADS,
  DASHBOARD_CONVERTED_LEADS_ERROR,
  DASHBOARD_RECOMENDATION_COMPANY,
  DASHBOARD_RECOMENDATION_COMPANY_ERROR,
  DASHBOARD_RECOMENDATION_EMPLOYEE,
  DASHBOARD_RECOMENDATION_EMPLOYEE_ERROR,
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
  groupedActivityCallData: {},
  groupedActivityMeetingData: {},
  groupedActivityEmailData: {},
  convertedLeadsData: [],
  recommendedEmployeeData: [],
  recommendedCompanyData: [],
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
    case DASHBOARD_GROUPED_BY_CALL_ACTIVITY:
      return { ...state, groupedActivityCallData: payload };
    case DASHBOARD_GROUPED_BY_MEETING_ACTIVITY:
      return { ...state, groupedActivityMeetingData: payload };
    case DASHBOARD_GROUPED_BY_EMAIL_ACTIVITY:
      return { ...state, groupedActivityEmailData: payload };
    case DASHBOARD_CONVERTED_LEADS:
      return { ...state, convertedLeadsData: payload };
    case DASHBOARD_RECOMENDATION_COMPANY:
      return { ...state, recommendedCompanyData: payload };
    case DASHBOARD_RECOMENDATION_EMPLOYEE:
      return { ...state, recommendedEmployeeData: payload };
    case DASHBOARD_RECOMENDATION_COMPANY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_RECOMENDATION_EMPLOYEE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
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
    case DASHBOARD_GROUPED_BY_CALL_ACTIVITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_GROUPED_BY_MEETING_ACTIVITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_GROUPED_BY_EMAIL_ACTIVITY_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case DASHBOARD_CONVERTED_LEADS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    default:
      return state;
  }
};

export default DashboardReducer;
