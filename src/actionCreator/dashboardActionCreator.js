import {
  CLOSED_OPPORTUNITY,
  CLOSED_OPPORTUNITY_ERROR,
  OPEN_OPPORTUNITY,
  OPEN_OPPORTUNITY_ERROR,
  DASHBOARD_GROUPED_COUNT,
  DASHBOARD_GROUPED_COUNT_ERROR
} from "../actionType/dashboardType";
import {
  getDashboardClosedOpportunityApiUrl,
  getDashboardOpenOpportunityApiUrl,
  getDashboardGroupedCountApiUrl
} from "../constant/Constant";

import { getAuthMethod,postAuthMethod } from "../services/HttpServices";
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
      dispatch({
        type: DASHBOARD_GROUPED_COUNT_ERROR,
        payload:
          { [errEnum.DASHBOARD_GROUPED_COUNT_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};


