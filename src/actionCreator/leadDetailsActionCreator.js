import {
  LEAD_DETAILS,
  LEAD_DETAILS_ERROR,  
  UPDATE_LEAD_DETAILS,
  UPDATE_LEAD_DETAILS_ERROR
} from "../actionType/leadDetailsType";
import {
  getAuthMethod,
  getMethod,
  postAuthMethod,
  putAuthMethod
} from "../services/HttpServices";
import {
  getClientLeadsUrl  
} from "../constant/Constant";
import { ErrKey, errEnum } from "../config";

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

