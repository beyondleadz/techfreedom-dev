import {
  LEAD_DETAILS,
  LEAD_DETAILS_ERROR,
  UPDATE_LEAD_DETAILS,
  UPDATE_LEAD_DETAILS_ERROR,
  SAVE_CLIENT_NOTE,
  SAVE_CLIENT_NOTE_ERROR,
  LEAD_NOTES,
  LEAD_NOTES_ERROR,
  LEAD_REMARKS,
  LEAD_REMARKS_ERROR,
  LEAD_NOTE_DETAIL,
  LEAD_NOTE_DETAIL_ERROR,
  LEAD_REMARK_DETAIL,
  LEAD_REMARK_DETAIL_ERROR,
  SAVE_CLIENT_REMARKS,
  SAVE_CLIENT_REMARKS_ERROR,
  LEAD_EMPTY_ERROR_OBJ,
  DELETE_LEAD_NOTE,
  DELETE_LEAD_NOTE_ERROR,
  DELETE_LEAD_REMARKS,
  DELETE_LEAD_REMARKS_ERROR,
  LEAD_TASKS_STATUS_LIST,
  LEAD_TASKS_STATUS_LIST_ERROR,
} from "../actionType/leadDetailsType";
import {
  deleteAuthMethod,
  getAuthMethod,
  getMethod,
  postAuthMethod,
  putAuthMethod,
} from "../services/HttpServices";
import {
  getClientLeadsUrl,
  saveClientNoteApiUrl,
  getClientNotesApiUrl,
  getClientRemarksApiUrl,
  getLeadTasksStatusApiUrl,
  // getLeadNoteDetails
} from "../constant/Constant";
import { ErrKey, errEnum } from "../config";
import { EMPTY_ERROR_COMMON_OBJ } from "../actionType/commonType";
import {
  createActivityPayload,
  createActivityPayloadForRemarks,
} from "../utils/utils";

export const getLeadDetails = (id) => (dispatch) => {
  const url = `${getClientLeadsUrl}/${id}`;
  //console.log(url, id, "lksjdfklsjd");
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_DETAILS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      //console.log(err, "sjkflskdjfkl");
      dispatch({
        type: LEAD_DETAILS_ERROR,
        payload:
          { [errEnum.LEAD_DETAILS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const updateLeadDetails = (payload, isUpdate) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  if (isUpdate) {
    return putAuthMethod(getClientLeadsUrl, payload.id, payload)
      .then((res) => {
        dispatch({
          type: UPDATE_LEAD_DETAILS,
          payload: res.data,
        });
        dispatch(getLeadDetails(payload.id));
      })
      .catch((err) => {
        if (!err?.response?.data) return;
        dispatch({
          type: UPDATE_LEAD_DETAILS_ERROR,
          payload:
            {
              [errEnum.UPDATE_LEAD_DETAILS_ERROR]: err.response.data[ErrKey],
            } || "Error Occured",
        });
      });
  } else {
    return postAuthMethod(getClientLeadsUrl, payload)
      .then((res) => {
        dispatch({
          type: UPDATE_LEAD_DETAILS,
          payload: res.data,
        });
        dispatch(getLeadDetails(payload.id));
      })
      .catch((err) => {
        if (!err?.response?.data) return;
        dispatch({
          type: UPDATE_LEAD_DETAILS_ERROR,
          payload:
            {
              [errEnum.UPDATE_LEAD_DETAILS_ERROR]: err.response.data[ErrKey],
            } || "Error Occured",
        });
      });
  }
};

export const submitLeadNotes = (payload) => (dispatch) => {
  if (payload.update) {
    return putAuthMethod(saveClientNoteApiUrl, payload.id, payload)
      .then((res) => {
        dispatch({
          type: SAVE_CLIENT_NOTE,
          payload: res.data,
        });
        dispatch(getAllLeadNotes(payload?.lead?.id));
      })
      .catch((err) => {
        if (!err?.response?.data) return;
        dispatch({
          type: SAVE_CLIENT_NOTE_ERROR,
          payload:
            {
              [errEnum.SAVE_CLIENT_NOTE_ERROR]: err.response.data,
            } || "Error Occured",
        });
      });
  } else {
    return postAuthMethod(saveClientNoteApiUrl, payload)
      .then((res) => {
        dispatch({
          type: SAVE_CLIENT_NOTE,
          payload: res.data,
        });
        dispatch(getAllLeadNotes(payload?.lead?.id));
      })
      .catch((err) => {
        if (!err?.response?.data) return;
        dispatch({
          type: SAVE_CLIENT_NOTE_ERROR,
          payload:
            {
              [errEnum.SAVE_CLIENT_NOTE_ERROR]: err.response.data,
            } || "Error Occured",
        });
      });
  }
};

export const resetSubmitLeadNotes = (payload) => {
  return { type: SAVE_CLIENT_NOTE, payload: {} };
};

export const deleteLeadNote = (id, leadId) => (dispatch) => {
  return deleteAuthMethod(`${saveClientNoteApiUrl}/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD_NOTE,
        payload: res.data,
      });
      dispatch(getAllLeadNotes(leadId));
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: DELETE_LEAD_NOTE_ERROR,
        payload:
          {
            [errEnum.DELETE_LEAD_NOTE_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const getAllLeadNotes = (id, payload = {}) => (dispatch) => {
  let apiUrl = `${getClientNotesApiUrl}?leadId.equals=${id}`;
  const url = createActivityPayload(payload, apiUrl);
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_NOTES,
        payload: res?.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: LEAD_NOTES_ERROR,
        payload:
          { [errEnum.LEAD_NOTES_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getLeadNoteDetails = (id) => (dispatch) => {
  const url = `${getClientNotesApiUrl}/${id}`;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_NOTE_DETAIL,
        payload: res?.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: LEAD_NOTE_DETAIL_ERROR,
        payload:
          { [errEnum.LEAD_NOTE_DETAIL_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getAllLeadRemarks = (id, payload = {}) => (dispatch) => {
  let apiUrl = `${getClientRemarksApiUrl}?leadId.equals=${id}`;
  const url = createActivityPayloadForRemarks(payload, apiUrl);
  //const url = `${getClientRemarksApiUrl}?leadId.equals=${id}`;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_REMARKS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: LEAD_REMARKS_ERROR,
        payload:
          { [errEnum.LEAD_REMARKS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const submitLeadRemarks = (payload) => (dispatch) => {
  if (payload.update) {
    return putAuthMethod(getClientRemarksApiUrl, payload.id, payload)
      .then((res) => {
        dispatch({
          type: SAVE_CLIENT_REMARKS,
          payload: res.data,
        });
        dispatch(getAllLeadRemarks(payload?.lead?.id));
      })
      .catch((err) => {
        if (!err?.response?.data) return;
        dispatch({
          type: SAVE_CLIENT_REMARKS_ERROR,
          payload:
            {
              [errEnum.SAVE_CLIENT_REMARKS_ERROR]: err.response.data,
            } || "Error Occured",
        });
      });
  } else {
    return postAuthMethod(getClientRemarksApiUrl, payload)
      .then((res) => {
        dispatch({
          type: SAVE_CLIENT_REMARKS,
          payload: res.data,
        });
        dispatch(getAllLeadRemarks(payload?.lead?.id));
      })
      .catch((err) => {
        if (!err?.response?.data) return;
        dispatch({
          type: SAVE_CLIENT_REMARKS_ERROR,
          payload:
            {
              [errEnum.SAVE_CLIENT_REMARKS_ERROR]: err.response.data,
            } || "Error Occured",
        });
      });
  }
};

export const resetSubmitLeadRemarkss = (payload) => {
  return { type: SAVE_CLIENT_REMARKS, payload: {} };
};

export const getLeadRemarksDetails = (id) => (dispatch) => {
  const url = `${getClientRemarksApiUrl}/${id}`;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_REMARK_DETAIL,
        payload: res?.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: LEAD_REMARK_DETAIL_ERROR,
        payload:
          { [errEnum.LEAD_REMARK_DETAIL_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const deleteLeadRemarks = (id, leadId) => (dispatch) => {
  return deleteAuthMethod(`${getClientRemarksApiUrl}/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD_REMARKS,
        payload: res.data,
      });
      dispatch(getAllLeadRemarks(leadId));
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: DELETE_LEAD_REMARKS_ERROR,
        payload:
          {
            [errEnum.DELETE_LEAD_REMARKS_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};

export const emptyErrorObj = () => ({
  type: LEAD_EMPTY_ERROR_OBJ,
  payload: {},
});

export const getLeadTasksStatusList = (payload) => (dispatch) => {
  return getAuthMethod(getLeadTasksStatusApiUrl)
    .then((res) => {
      dispatch({
        type: LEAD_TASKS_STATUS_LIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (!err?.response?.data) return;
      dispatch({
        type: LEAD_TASKS_STATUS_LIST_ERROR,
        payload:
          {
            [errEnum.LEAD_TASKS_STATUS_LIST_ERROR]: err.response.data[ErrKey],
          } || "Error Occured",
      });
    });
};
