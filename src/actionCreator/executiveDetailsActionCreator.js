import {
  EXECUTIVE_DETAILS,
  EXECUTIVE_DETAILS_ERROR,
  EXECUTIVE_COMPANY_DETAILS,
  EXECUTIVE_EMPLOYEE_LIST,
  EXECUTIVE_DEPARTMENT_LIST,
  EXECUTIVE_SUBMIT_EXECUTIVE_LEAD,
  EXECUTIVE_SIMILAR_COMPANYLIST,
  EXECUTIVE_SUBMIT_ERROR_FORM,
  EXECUTIVE_SINGLE_COMPANY_TAG,
  EXECUTIVE_SINGLE_COMPANY_TAG_ERROR,
  EXECUTIVE_EMPTY_ERROR_OBJ,
  EXECUTIVE_COMPANY_DETAILS_ERROR,
  EXECUTIVE_EMPLOYEE_LIST_ERROR,
  EXECUTIVE_DEPARTMENT_LIST_ERROR,
  EXECUTIVE_SUBMIT_EXECUTIVE_LEAD_ERROR,
  EXECUTIVE_SIMILAR_COMPANYLIST_ERROR,
  EXECUTIVE_SUBMIT_ERROR_FORM_ERROR,
  EXECUTIVE_DOWNLOAD_COMPANY,
  EXECUTIVE_DOWNLOAD_COMPANY_ERROR,
  EXECUTIVE_FETCH_COMPANY_TAG,
  EXECUTIVE_FETCH_COMPANY_TAG_ERROR,
  EXECUTIVE_POST_RELAVANT_COMPANY_TAG,
  EXECUTIVE_POST_RELAVANT_COMPANY_TAG_ERROR,
  EXECUTIVE_GET_RELAVANT_COMPANY_TAG,
  EXECUTIVE_GET_RELAVANT_COMPANY_TAG_ERROR,
  EXECUTIVE_SELECTED_EXECUTIVE,
  EXECUTIVE_DOWNLOAD_EXECUTIVE,
  EXECUTIVE_DOWNLOAD_EXECUTIVE_ERROR,
  EXECUTIVE_SELECTED_DEPARTMENT,
  EXECUTIVE_GET_EXECUTIVE_LEAD,
  EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR
} from "../actionType/executiveDetailsType";
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
  errorReport,
  sigleCompanyTag,
  fetchCompanyTagApiUrl,
  postRelavantCompanyApiUrl,
  getRelavantCompanyApiUrl,
  companyExlDownloadUrl,
  getClientLeadsUrl,
  companyPdfDownloadUrl,
  executiveEmployeeListingApiUrl,
} from "../constant/Constant";
import { createPayload } from "../utils/utils";
import { ErrKey, errEnum } from "../config";
import {
  DOWNLOAD_COMPANYLIST,
  DOWNLOAD_COMPANYLIST_ERROR,
} from "../actionType/companyListingType";

export const getExecutiveDetails = (id) => (dispatch) => {
  const url = `${executiveEmployeeListingApiUrl}/${id}`;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_DETAILS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_DETAILS_ERROR,
        payload:
          { [errEnum.EXECUTIVE_DETAILS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const resetEmployeeList = () => ({
  type: EXECUTIVE_EMPLOYEE_LIST,
  payload: [],
});

export const getEmployeeList = (id, department) => (dispatch) => {
  let url = `${employeeListUrl}?companyId.in=${id}`;
  if (department) {
    url += `&exfunction.in=${department}`;
  }
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_EMPLOYEE_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_EMPLOYEE_LIST_ERROR,
        payload:
          { [errEnum.EMPLOYEE_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getDepartmentList = () => (dispatch) => {
  return getMethod(executiveDepartmentList)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_DEPARTMENT_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_DEPARTMENT_LIST_ERROR,
        payload:
          { [errEnum.DEPARTMENT_LIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const submitLead = (payload) => (dispatch) => {
  return postAuthMethod(clientLeadsUrl, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SUBMIT_EXECUTIVE_LEAD,
        payload: res.data,
      });
      dispatch(getExecutiveLead(payload?.userId));
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_SUBMIT_EXECUTIVE_LEAD_ERROR,
        payload:
          {
            [errEnum.SUBMIT_EXECUTIVE_LEAD_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const resetLead = (payload) => {
  return { type: EXECUTIVE_SUBMIT_EXECUTIVE_LEAD, payload: payload };
};

export const getSimilarCompanyList = (payload, paginationValues) => (
  dispatch
) => {
  const url = createPayload(payload, paginationValues, companyListingApiUrl);
  console.log(payload, "payloadpayload");
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SIMILAR_COMPANYLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_SIMILAR_COMPANYLIST_ERROR,
        payload:
          { [errEnum.SIMILAR_COMPANYLIST_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const submitErrorForm = (payload) => (dispatch) => {
  console.log(payload, "payloadpayload");
  return postAuthMethod(errorReport, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SUBMIT_ERROR_FORM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_SUBMIT_ERROR_FORM_ERROR,
        payload:
          { [errEnum.SUBMIT_ERROR_FORM_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const createCompanyTag = (payload) => (dispatch) => {
  console.log(payload, "payloadpayload");
  return postAuthMethod(sigleCompanyTag, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SINGLE_COMPANY_TAG,
        payload: res.data,
      });
      dispatch(getCompanyTag(payload?.company?.id, payload?.userId));
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_SINGLE_COMPANY_TAG_ERROR,
        payload:
          { [errEnum.SINGLE_COMPANY_TAG_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const emptyErrorObj = () => ({
  type: EXECUTIVE_EMPTY_ERROR_OBJ,
  payload: {},
});

export const downloadCompany = (payload, urlSubstring) => (dispatch) => {
  // const url =  createPayload(payload,null,`${companyListingApiUrl}/${urlSubstring}`);
  let url = "";
  if (payload?.length) {
    let selectedRecords = "?id.in=";
    payload?.forEach((id) => (selectedRecords += `${id},`));
    const removedLastComma = selectedRecords.substring(
      selectedRecords.lastIndexOf(","),
      0
    );
    url = `${companyPdfDownloadUrl}${removedLastComma}`;
  } else {
    url = `${companyPdfDownloadUrl}`;
  }
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_DOWNLOAD_COMPANY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "skjfslkjdf", err.response.data.error);
      dispatch({
        type: EXECUTIVE_DOWNLOAD_COMPANY_ERROR,
        payload:
          { [errEnum.DOWNLOAD_ERROR]: err.response.data.error } ||
          "Error Occured",
      });
    });
};

export const downloadExecutiveExl = (payload) => (dispatch) => {
  let url = "";
  let filter = `?companyId.equals=${payload.companyId}`;
  if (payload?.empIds) {
    filter += `&employeeTagId.in=${payload.empIds}`;
  }
  if (payload?.department) {
    filter += `&exfunction.equals=${payload?.department}`;
  }
  url = `${companyExlDownloadUrl}${filter}`;
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_DOWNLOAD_EXECUTIVE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_DOWNLOAD_EXECUTIVE_ERROR,
        payload:
          { [errEnum.DOWNLOAD_ERROR]: err.response.data.error } ||
          "Error Occured",
      });
    });
};

export const getCompanyTag = (cid, userId) => (dispatch) => {
  let filter = "userId.equals=" + userId + "&companyId.equals=" + cid;
  const url = `${fetchCompanyTagApiUrl}?${filter}`;
  //console.log(url, id, "lksjdfklsjd");
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_FETCH_COMPANY_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_FETCH_COMPANY_TAG_ERROR,
        payload:
          { [errEnum.FETCH_COMPANY_TAG_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const resetCompanyTag = (payload) => {
  return { type: EXECUTIVE_SINGLE_COMPANY_TAG, payload: [] };
};

export const postRelavantCompany = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return postAuthMethod(postRelavantCompanyApiUrl, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_POST_RELAVANT_COMPANY_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EXECUTIVE_POST_RELAVANT_COMPANY_TAG_ERROR,
        payload:
          {
            [errEnum.POST_RELAVANT_COMPANY_TAG_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const getRelavantCompany = (id, cid) => (dispatch) => {
  let filter = "userId.equals=" + id + "&companyId.equals=" + cid;
  const url = `${getRelavantCompanyApiUrl}?${filter}`;
  //console.log(url, id, "lksjdfklsjd");
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_GET_RELAVANT_COMPANY_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_GET_RELAVANT_COMPANY_TAG_ERROR,
        payload:
          {
            [errEnum.GET_RELAVANT_COMPANY_TAG_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const resetPostRelavantCompany = (payload) => {
  return { type: EXECUTIVE_POST_RELAVANT_COMPANY_TAG, payload: [] };
};

export const storeSelectedExecutive = (selectedExecutive) => ({
  type: EXECUTIVE_SELECTED_EXECUTIVE,
  payload: selectedExecutive,
});

export const storeSelectedDepartment = (selectedDepartment) => ({
  type: EXECUTIVE_SELECTED_DEPARTMENT,
  payload: selectedDepartment,
});

export const getExecutiveLead = (id) => (dispatch) => {
  let filter = "userId.equals=" + id;
  const url = `${getClientLeadsUrl}?${filter}`;
  //console.log(url, id, "lksjdfklsjd");
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_GET_EXECUTIVE_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR,
        payload:
          {
            [errEnum.GET_EXECUTIVE_LEAD_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};