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
  DELETE_LEAD_REMARKS_ERROR
} from "../actionType/leadDetailsType";
import {
  deleteAuthMethod,
  getAuthMethod,
  getMethod,
  postAuthMethod,
  putAuthMethod
} from "../services/HttpServices";
import {
  getClientLeadsUrl,
  saveClientNoteApiUrl,
  getClientNotesApiUrl,
  getClientRemarksApiUrl,
 // getLeadNoteDetails
} from "../constant/Constant";
import { ErrKey, errEnum } from "../config";
import { EMPTY_ERROR_COMMON_OBJ } from "../actionType/commonType";

export const getLeadDetails = (id) => (dispatch) => {
  const url = `${getClientLeadsUrl}/${id}`;
  console.log(url, id, "lksjdfklsjd");
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_DETAILS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: LEAD_DETAILS_ERROR,
        payload:
          { [errEnum.LEAD_DETAILS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const updateLeadDetails = (payload) => (dispatch) => {
  //console.log(payload, "payloadpayload");
  return putAuthMethod(getClientLeadsUrl,payload.id, payload)
    .then((res) => {
      dispatch({
        type: UPDATE_LEAD_DETAILS,
        payload: res.data,
      });
      dispatch(getLeadDetails(payload.id));
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_LEAD_DETAILS_ERROR,
        payload:
          {
            [errEnum.UPDATE_LEAD_DETAILS_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });     
    });
    
};

export const submitLeadNotes = (payload) => (dispatch) => {  
  if(payload.update){
    return putAuthMethod(saveClientNoteApiUrl,payload.id, payload)
    .then((res) => {
      dispatch({
        type: SAVE_CLIENT_NOTE,
        payload: res.data,
      });
      dispatch(getAllLeadNotes(payload?.lead?.id));
    })
    .catch((err) => {
      dispatch({
        type: SAVE_CLIENT_NOTE_ERROR,
        payload:
          {
            [errEnum.SAVE_CLIENT_NOTE_ERROR]: err.response.data,
          } || "Error Occured",
      });
    });
  }else{
    return postAuthMethod(saveClientNoteApiUrl, payload)
    .then((res) => {
      dispatch({
        type: SAVE_CLIENT_NOTE,
        payload: res.data,
      });
      dispatch(getAllLeadNotes(payload?.lead?.id));
    })
    .catch((err) => {
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

export const deleteLeadNote = (id,leadId) => (dispatch) => {
  return deleteAuthMethod(`${saveClientNoteApiUrl}/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD_NOTE,
        payload: res.data,
      });
      dispatch(getAllLeadNotes(leadId));
    })
    .catch((err) => {
      dispatch({
        type: DELETE_LEAD_NOTE_ERROR,
        payload:
          {
            [errEnum.DELETE_LEAD_NOTE_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });     
    });
    
};

export const getAllLeadNotes = (id) => (dispatch) => {
  const url = `${getClientNotesApiUrl}?leadId.equals=${id}`;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_NOTES,
        payload: res?.data,
      });
    })
    .catch((err) => {
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
      dispatch({
        type: LEAD_NOTE_DETAIL_ERROR,
        payload:
          { [errEnum.LEAD_NOTE_DETAIL_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};


export const getAllLeadRemarks = (id) => (dispatch) => {
  const url = `${getClientRemarksApiUrl}?leadId.equals=${id}`;
  return getMethod(url)
    .then((res) => {
      dispatch({
        type: LEAD_REMARKS,
        payload: res?.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LEAD_REMARKS_ERROR,
        payload:
          { [errEnum.LEAD_REMARKS_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const submitLeadRemarks = (payload) => (dispatch) => {  
  if(payload.update){
    return putAuthMethod(getClientRemarksApiUrl,payload.id, payload)
    .then((res) => {
      dispatch({ 
        type: SAVE_CLIENT_REMARKS,
        payload: res.data,
      });
      dispatch(getAllLeadRemarks(payload?.lead?.id));
    })
    .catch((err) => {
      dispatch({
        type: SAVE_CLIENT_REMARKS_ERROR,
        payload:
          {
            [errEnum.SAVE_CLIENT_REMARKS_ERROR]: err.response.data,
          } || "Error Occured",
      });
    });
  }else{
    return postAuthMethod(getClientRemarksApiUrl, payload)
    .then((res) => {
      dispatch({
        type: SAVE_CLIENT_REMARKS,
        payload: res.data,
      });
      dispatch(getAllLeadRemarks(payload?.lead?.id));
    })
    .catch((err) => {
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
      dispatch({
        type: LEAD_REMARK_DETAIL_ERROR,
        payload:
          { [errEnum.LEAD_REMARK_DETAIL_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const deleteLeadRemarks = (id,leadId) => (dispatch) => {
  return deleteAuthMethod(`${getClientRemarksApiUrl}/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD_REMARKS,
        payload: res.data,
      });
      dispatch(getAllLeadRemarks(leadId));
    })
    .catch((err) => {
      dispatch({
        type: DELETE_LEAD_REMARKS_ERROR,
        payload:
          {
            [errEnum.DELETE_LEAD_REMARKS_ERROR]:
              err.response.data[ErrKey],
          } || "Error Occured",
      });     
    });
    
};


export const emptyErrorObj = () => ({
  type: LEAD_EMPTY_ERROR_OBJ,
  payload: {},
});
