import {
  COMPANY_DETAILS,
  EMPLOYEE_LIST,
  DEPARTMENT_LIST,
  SUBMIT_EXECUTIVE_LEAD,
  SIMILAR_COMPANYLIST,
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

export const getEmployeeList = (id, department) => (dispatch) => {
  let url = `${employeeListUrl}?companyId.in=${id}`;
  if (department) {
    url += `&exfunction.in=${department}`;
  }
  // const url = `${employeeListUrl}?companyId.in=${id}`;
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
  return postAuthMethod(executiveDepartmentList, payload).then((res) => {
    dispatch({
      type: SUBMIT_EXECUTIVE_LEAD,
      payload: res.data,
    });
  });
};

export const getSimilarCompanyList = (payload, paginationValues) => (
  dispatch
) => {
  const url = createPayload(payload, paginationValues, companyListingApiUrl);
  return getMethod(url).then((res) => {
    dispatch({
      type: SIMILAR_COMPANYLIST,
      payload: res.data,
    });
  }).catch(() => {
    dispatch({
      type: SIMILAR_COMPANYLIST,
      payload: [],
    });
  });
};
