import {
  COMPANY_DETAILS,
  EMPLOYEE_LIST,
  DEPARTMENT_LIST,
  SUBMIT_EXECUTIVE_LEAD,
  SIMILAR_COMPANYLIST,
  SUBMIT_ERROR_FORM,
} from "../actionType/companyDetailsType";
import {
  getAuthMethod,
  getMethod,
  postAuthMethod,
} from "../services/HttpServices";
import {
  companyListingApiUrl,
  employeeListUrl,
  executiveDepartmentList,
  clientLeadsUrl,
} from "../constant/Constant";
import { createPayload } from "../utils/utils";

export const getCompanyDetails = (id) => (dispatch) => {
  const url = `${companyListingApiUrl}/${id}`;
  return getMethod(url).then((res) => {
    dispatch({
      type: COMPANY_DETAILS,
      payload: res.data,
    });
  });
};

export const resetEmployeeList = () => ({
  type: EMPLOYEE_LIST,
  payload: [],
});

export const getEmployeeList = (id, department) => (dispatch) => {
  let url = `${employeeListUrl}?companyId.in=${id}`;
  if (department) {
    url += `&exfunction.in=${department}`;
  }
  return getMethod(url).then((res) => {
    dispatch({
      type: EMPLOYEE_LIST,
      payload: res.data,
    });
  });
};

export const getDepartmentList = () => (dispatch) => {
  return getMethod(executiveDepartmentList).then((res) => {
    dispatch({
      type: DEPARTMENT_LIST,
      payload: res.data,
    });
  });
};

export const submitLead = (payload) => (dispatch) => {
  return postAuthMethod(clientLeadsUrl, payload).then((res) => {
    dispatch({
      type: SUBMIT_EXECUTIVE_LEAD,
      payload: res.data,
    });
  });
};

export const resetLead = (payload) => {
  return { type: SUBMIT_EXECUTIVE_LEAD, payload: payload };
};

export const getSimilarCompanyList = (payload, paginationValues) => (
  dispatch
) => {
  const url = createPayload(payload, paginationValues, companyListingApiUrl);
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: SIMILAR_COMPANYLIST,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: SIMILAR_COMPANYLIST,
        payload: [],
      });
    });
};

export const submitErrorForm = (payload) => (dispatch) => {
  return postAuthMethod(executiveDepartmentList, payload).then((res) => {
    dispatch({
      type: SUBMIT_ERROR_FORM,
      payload: res.data,
    });
  });
};
