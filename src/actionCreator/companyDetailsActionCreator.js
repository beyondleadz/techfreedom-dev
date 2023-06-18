import {
  COMPANY_DETAILS,
  EMPLOYEE_LIST,
  DEPARTMENT_LIST,
  SUBMIT_EXECUTIVE_LEAD,
  SIMILAR_COMPANYLIST,
  SUBMIT_ERROR_FORM,
  SINGLE_COMPANY_TAG,
  SINGLE_COMPANY_TAG_ERROR,
  EMPTY_ERROR_OBJ,
  COMPANY_DETAILS_ERROR,
  EMPLOYEE_LIST_ERROR,
  DEPARTMENT_LIST_ERROR,
  SUBMIT_EXECUTIVE_LEAD_ERROR,
  SIMILAR_COMPANYLIST_ERROR,
  SUBMIT_ERROR_FORM_ERROR,
  DOWNLOAD_COMPANY,
  DOWNLOAD_COMPANY_ERROR,
  FETCH_COMPANY_TAG,
  FETCH_COMPANY_TAG_ERROR,
  POST_RELAVANT_COMPANY_TAG,
  POST_RELAVANT_COMPANY_TAG_ERROR,
  GET_RELAVANT_COMPANY_TAG,
  GET_RELAVANT_COMPANY_TAG_ERROR,
  SELECTED_EXECUTIVE,
  DOWNLOAD_EXECUTIVE,
  DOWNLOAD_EXECUTIVE_ERROR,
  SELECTED_DEPARTMENT,
  GET_EXECUTIVE_LEAD,
  GET_EXECUTIVE_LEAD_ERROR,
  EMPLOYEE_VIEWABLE_STATUS,
  EMPLOYEE_VIEWABLE_STATUS_ERROR  
} from "../actionType/companyDetailsType";
import {
  getAuthMethod,
  getMethod,
  postAuthMethod,
  putAuthMethod
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
} from "../constant/Constant";
import { createPayload } from "../utils/utils";
import { ErrKey, errEnum } from "../config";
import {
  DOWNLOAD_COMPANYLIST,
  DOWNLOAD_COMPANYLIST_ERROR,
} from "../actionType/companyListingType";

export const getCompanyDetails = (id) => (dispatch) => {
  const url = `${companyListingApiUrl}/${id}`;
  console.log(url, id, "lksjdfklsjd");
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: COMPANY_DETAILS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: COMPANY_DETAILS_ERROR,
        payload:
          { [errEnum.COMPANY_DETAILS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
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
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: EMPLOYEE_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: EMPLOYEE_LIST_ERROR,
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
        type: DEPARTMENT_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: DEPARTMENT_LIST_ERROR,
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
        type: SUBMIT_EXECUTIVE_LEAD,
        payload: res.data,
      });
      dispatch(getExecutiveLead(payload?.userId));
    })
    .catch((err) => {
      dispatch({
        type: SUBMIT_EXECUTIVE_LEAD_ERROR,
        payload:
          {
            [errEnum.SUBMIT_EXECUTIVE_LEAD_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const resetLead = (payload) => {
  return { type: SUBMIT_EXECUTIVE_LEAD, payload: payload };
};

export const getSimilarCompanyList = (payload, paginationValues) => (
  dispatch
) => {
  let url = createPayload(payload, paginationValues, companyListingApiUrl);
  url+="&id.notEquals="+payload.cid;
  console.log(payload, "payloadpayload");
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: SIMILAR_COMPANYLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: SIMILAR_COMPANYLIST_ERROR,
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
        type: SUBMIT_ERROR_FORM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: SUBMIT_ERROR_FORM_ERROR,
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
        type: SINGLE_COMPANY_TAG,
        payload: res.data,
      });
      dispatch(getCompanyTag(payload?.company?.id, payload?.userId));
    })
    .catch((err) => {
      dispatch({
        type: SINGLE_COMPANY_TAG_ERROR,
        payload:
          { [errEnum.SINGLE_COMPANY_TAG_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const emptyErrorObj = () => ({
  type: EMPTY_ERROR_OBJ,
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
        type: DOWNLOAD_COMPANY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "skjfslkjdf", err.response.data.error);
      dispatch({
        type: DOWNLOAD_COMPANY_ERROR,
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
        type: DOWNLOAD_EXECUTIVE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DOWNLOAD_EXECUTIVE_ERROR,
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
        type: FETCH_COMPANY_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: FETCH_COMPANY_TAG_ERROR,
        payload:
          { [errEnum.FETCH_COMPANY_TAG_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const resetCompanyTag = (payload) => {
  return { type: SINGLE_COMPANY_TAG, payload: [] };
};

export const updateRelavantCompany = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return putAuthMethod(postRelavantCompanyApiUrl,payload.id, payload)
    .then((res) => {
      dispatch({
        type: POST_RELAVANT_COMPANY_TAG,
        payload: res.data,
      });
      dispatch(getRelavantCompany(payload.userId,payload.companyId));
    })
    .catch((err) => {
      dispatch({
        type: POST_RELAVANT_COMPANY_TAG_ERROR,
        payload:
          {
            [errEnum.POST_RELAVANT_COMPANY_TAG_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });     
    });
    
};

export const postRelavantCompany = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return postAuthMethod(postRelavantCompanyApiUrl, payload)
    .then((res) => {
      dispatch({
        type: POST_RELAVANT_COMPANY_TAG,
        payload: res.data,
      });
      dispatch(getRelavantCompany(payload.userId,payload.companyId));
    })
    .catch((err) => {
      dispatch({
        type: POST_RELAVANT_COMPANY_TAG_ERROR,
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
        type: GET_RELAVANT_COMPANY_TAG,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: GET_RELAVANT_COMPANY_TAG_ERROR,
        payload:
          {
            [errEnum.GET_RELAVANT_COMPANY_TAG_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const resetPostRelavantCompany = (payload) => {
  return { type: POST_RELAVANT_COMPANY_TAG, payload: [] };
};

export const storeSelectedExecutive = (selectedExecutive) => ({
  type: SELECTED_EXECUTIVE,
  payload: selectedExecutive,
});

export const storeSelectedDepartment = (selectedDepartment) => ({
  type: SELECTED_DEPARTMENT,
  payload: selectedDepartment,
});

export const getExecutiveLead = (id) => (dispatch) => {
  let filter = "userId.equals=" + id;
  const url = `${getClientLeadsUrl}?${filter}`;
  //console.log(url, id, "lksjdfklsjd");
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: GET_EXECUTIVE_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: GET_EXECUTIVE_LEAD_ERROR,
        payload:
          {
            [errEnum.GET_EXECUTIVE_LEAD_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};


export const getEmployeeViewableStatusUpdate = (type, payload,department) => (dispatch) => {
  let url = `${employeeListUrl}/${type}/${payload.id}`;
  return getAuthMethod(url)
    .then((res) => {
      dispatch({
        type: EMPLOYEE_VIEWABLE_STATUS,
        payload: res.data,
      });
      //console.log('getEmployeeViewableStatusUpdate',payload)
      if(department){
        dispatch(getEmployeeList(payload?.directDial?.company.id,department));
      }else{
        dispatch(getEmployeeList(payload?.directDial?.company.id));
      }
      
    })
    .catch((err) => {
      dispatch({
        type: EMPLOYEE_VIEWABLE_STATUS_ERROR,
        payload:
          { [errEnum.EMPLOYEE_VIEWABLE_STATUS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};
