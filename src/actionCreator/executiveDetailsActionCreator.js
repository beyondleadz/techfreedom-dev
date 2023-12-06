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
  EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR,
  GET_RELAVANT_EXECUTIVE_TAG,
  GET_RELAVANT_EXECUTIVE_TAG_ERROR,
  POST_RELAVANT_EXECUTIVE_TAG,
  POST_RELAVANT_EXECUTIVE_TAG_ERROR,
  EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS,
  EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS_ERROR,
} from "../actionType/executiveDetailsType";
import {
  getAuthMethod,
  getMethod,
  postAuthMethod,
  putAuthMethod,
} from "../services/HttpServices";
import {
  companyListingApiUrl,
  employeeListUrl,
  executiveDepartmentList,
  clientLeadsUrl,
  errorReport,
  postRelavantCompanyApiUrl,
  getRelavantCompanyApiUrl,
  companyExlDownloadUrl,
  getClientLeadsUrl,
  companyPdfDownloadUrl,
  executiveEmployeeListingApiUrl,
  fetchExecutiveTagApiUrl,
  groupExecutiveTagUrl,
} from "../constant/Constant";
import { createExecutivePayload, createPayload } from "../utils/utils";
import { ErrKey, errEnum } from "../config";
import {
  DOWNLOAD_COMPANYLIST,
  DOWNLOAD_COMPANYLIST_ERROR,
} from "../actionType/companyListingType";

export const getExecutiveCompanyDetails = (id) => (dispatch) => {
  const url = `${companyListingApiUrl}?employeeId.equals=${id}`;
  //console.log(url, id, "lksjdfklsjd");
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_COMPANY_DETAILS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_COMPANY_DETAILS_ERROR,
        payload:
          {
            [errEnum.EXECUTIVE_COMPANY_DETAILS_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

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
      if (!err?.response?.data) return;
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

export const getEmployeeList = (id, cid) => (dispatch) => {
  let url = `${employeeListUrl}?companyId.in=${cid}`;
  if (id > 0) {
    url += "&id.notEquals=" + id;
  }
  //console.log(url,"urlurl")
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_EMPLOYEE_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
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
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
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
      if (!err?.response?.data) return;
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

export const getSimilarExecutiveList = (payload, paginationValues) => (
  dispatch
) => {
  let url = createExecutivePayload(payload, paginationValues, employeeListUrl);
  //console.log(payload, "payloadpayload");
  url += "&id.notEquals=" + payload.id;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SIMILAR_COMPANYLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: EXECUTIVE_SIMILAR_COMPANYLIST_ERROR,
        payload:
          {
            [errEnum.EXECUTIVE_SIMILAR_COMPANYLIST_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const submitErrorForm = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return postAuthMethod(errorReport, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SUBMIT_ERROR_FORM,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_SUBMIT_ERROR_FORM_ERROR,
        payload:
          { [errEnum.SUBMIT_ERROR_FORM_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const createExecutiveTag = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return postAuthMethod(groupExecutiveTagUrl, payload)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_SINGLE_COMPANY_TAG,
        payload: res.data,
      });
      dispatch(getExecutiveTag(payload?.company?.id, payload?.userId));
    })
    .catch((err) => {
      if (!err?.response?.data) return;
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
      if (!err?.response?.data) return;
      //console.log(err, "skjfslkjdf", err.response.data.error);
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
  if (payload?.id) {
    filter += `&id.notEquals=${payload?.id}`;
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
      if (!err?.response?.data) return;
      dispatch({
        type: EXECUTIVE_DOWNLOAD_EXECUTIVE_ERROR,
        payload:
          { [errEnum.DOWNLOAD_ERROR]: err.response.data.error } ||
          "Error Occured",
      });
    });
};

export const getExecutiveTag = (cid, userId) => (dispatch) => {
  let filter = "employeeId.equals=" + userId + "&companyId.equals=" + cid;
  const url = `${fetchExecutiveTagApiUrl}?${filter}`;
  //console.log(url, id, "lksjdfklsjd");
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_FETCH_COMPANY_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_FETCH_COMPANY_TAG_ERROR,
        payload:
          { [errEnum.FETCH_COMPANY_TAG_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const resetExecutiveTag = (payload) => {
  return { type: EXECUTIVE_SINGLE_COMPANY_TAG, payload: [] };
};

export const storeSelectedColleagues = (selectedExecutive) => ({
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
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EXECUTIVE_GET_EXECUTIVE_LEAD_ERROR,
        payload:
          {
            [errEnum.GET_EXECUTIVE_LEAD_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const getRelavantExecutive = (id, cid) => (dispatch) => {
  let filter = "userId.equals=" + id + "&emplaoyeeId.equals=" + cid;
  const url = `${getRelavantCompanyApiUrl}?${filter}`;
  //console.log(url, id, "lksjdfklsjd");
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: GET_RELAVANT_EXECUTIVE_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
      dispatch({
        type: GET_RELAVANT_EXECUTIVE_TAG_ERROR,
        payload:
          {
            [errEnum.GET_RELAVANT_EXECUTIVE_TAG_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const updateRelavantExecutive = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return putAuthMethod(postRelavantCompanyApiUrl, payload.id, payload)
    .then((res) => {
      dispatch({
        type: POST_RELAVANT_EXECUTIVE_TAG,
        payload: res.data,
      });
      dispatch(getRelavantExecutive(payload.userId, payload.emplaoyeeId));
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: POST_RELAVANT_EXECUTIVE_TAG_ERROR,
        payload:
          {
            [errEnum.POST_RELAVANT_EXECUTIVE_TAG_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const postRelavantExecutive = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return postAuthMethod(postRelavantCompanyApiUrl, payload)
    .then((res) => {
      dispatch({
        type: POST_RELAVANT_EXECUTIVE_TAG,
        payload: res.data,
      });
      dispatch(getRelavantExecutive(payload.userId, payload.emplaoyeeId));
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: POST_RELAVANT_EXECUTIVE_TAG_ERROR,
        payload:
          {
            [errEnum.POST_RELAVANT_EXECUTIVE_TAG_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const resetPostRelavantExecutive = (payload) => {
  return { type: POST_RELAVANT_EXECUTIVE_TAG, payload: [] };
};

export const getEmployeeViewableStatusUpdate = (type, payload) => (
  dispatch
) => {
  let url = `${employeeListUrl}/${type}/${payload.id}`;
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS,
        payload: res.data,
      });
      //console.log('getEmployeeViewableStatusUpdate',payload)
      if (payload?.pageFor && payload?.pageFor == 1) {
        dispatch(getExecutiveDetails(payload.id));
      }
      if (payload?.pageFor && payload?.pageFor == 2) {
        dispatch(getEmployeeList(payload.id, payload?.directDial?.company.id));
      }
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS_ERROR,
        payload:
          {
            [errEnum.EXECUTIVE_EMPLOYEE_VIEWABLE_STATUS_ERROR]:
              err?.response?.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const emptyDownload = () => ({
  type: EXECUTIVE_DOWNLOAD_EXECUTIVE,
  payload: {},
});
