import {
  COMPANY_DETAILS,
  EMPLOYEE_LIST,
} from "../actionType/companyDetailsType";
import { getAuthMethod, getMethod } from "../services/HttpServices";
import { companyListingApiUrl, employeeListUrl } from "../constant/Constant";

export const getCompanyDetails = (id) => (dispatch) => {
  const url = `${companyListingApiUrl}/${id}`;
  return getMethod(url).then((res) => {
    dispatch({
      type: COMPANY_DETAILS,
      payload: res.data,
    });
  });
};

export const getEmployeeList = (id) => (dispatch) => {
  const url = `${employeeListUrl}?companyId.in=${id}`;
  return getMethod(url).then((res) => {
    dispatch({
      type: EMPLOYEE_LIST,
      payload: res.data,
    });
  });
};
