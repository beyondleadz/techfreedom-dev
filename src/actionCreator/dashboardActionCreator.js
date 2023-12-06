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
import {
  getDashboardClosedOpportunityApiUrl,
  getDashboardOpenOpportunityApiUrl,
  getDashboardGroupedCountApiUrl,
  getDashboardSalesTrendApiUrl,
  getDashboardGroupedBySourceApiUrl,
  getDashboardGroupedByIndustryApiUrl,
  getDashboardGroupedByActivityApiUrl,
} from "../constant/Constant";

import {
  getMethod,
  getAuthMethod,
  postAuthMethod,
} from "../services/HttpServices";
import { ErrKey, errEnum } from "../config";

export const getTopClosedOpportunity = (payload) => (dispatch) => {
  return getAuthMethod(getDashboardClosedOpportunityApiUrl, payload)
    .then((res) => {
      dispatch({
        type: CLOSED_OPPORTUNITY,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: CLOSED_OPPORTUNITY_ERROR,
        payload:
          { [errEnum.CLOSED_OPPORTUNITY_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getTopOpenOpportunity = (payload) => (dispatch) => {
  return getAuthMethod(getDashboardOpenOpportunityApiUrl, payload)
    .then((res) => {
      dispatch({
        type: OPEN_OPPORTUNITY,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: OPEN_OPPORTUNITY_ERROR,
        payload:
          { [errEnum.OPEN_OPPORTUNITY_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getGroupedCountData = (payload) => (dispatch) => {
  return getAuthMethod(getDashboardGroupedCountApiUrl, payload)
    .then((res) => {
      dispatch({
        type: DASHBOARD_GROUPED_COUNT,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: DASHBOARD_GROUPED_COUNT_ERROR,
        payload:
          {
            [errEnum.DASHBOARD_GROUPED_COUNT_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const getSalesTrendData = (payload) => (dispatch) => {
  return getAuthMethod(getDashboardSalesTrendApiUrl, payload)
    .then((res) => {
      dispatch({
        type: DASHBOARD_SALES_TREND,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: DASHBOARD_SALES_TREND_ERROR,
        payload:
          {
            [errEnum.DASHBOARD_SALES_TREND_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const getGroupedBySourceData = (payload) => (dispatch) => {
  return getAuthMethod(getDashboardGroupedBySourceApiUrl, payload)
    .then((res) => {
      dispatch({
        type: DASHBOARD_GROUPED_BYSOURCE,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: DASHBOARD_GROUPED_BYSOURCE_ERROR,
        payload:
          {
            [errEnum.DASHBOARD_GROUPED_BYSOURCE_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const getGroupedByIndustryData = (payload) => (dispatch) => {
  return getAuthMethod(getDashboardGroupedByIndustryApiUrl, payload)
    .then((res) => {
      dispatch({
        type: DASHBOARD_GROUPED_BYINDUSTRY,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: DASHBOARD_GROUPED_BYINDUSTRY_ERROR,
        payload:
          {
            [errEnum.DASHBOARD_GROUPED_BYINDUSTRY_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const getGroupedByActivityData = (payload) => (dispatch) => {
  //console.log("getGroupedByActivityData")
  return getAuthMethod(getDashboardGroupedByActivityApiUrl, payload)
    .then((res) => {
      dispatch({
        type: DASHBOARD_GROUPED_BYACTIVITY,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      // console.log(err.response.status,err.response.data,'error data')
      dispatch({
        type: DASHBOARD_GROUPED_BYACTIVITY_ERROR,
        payload:
          { [errEnum.DASHBOARD_GROUPED_BYACTIVITY_ERROR]: err.response.data } ||
          "Error Occured",
      });
    });
};
