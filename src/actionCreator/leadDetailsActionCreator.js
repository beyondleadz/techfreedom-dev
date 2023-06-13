import {
  LEAD_DETAILS,
  LEAD_DETAILS_ERROR,  
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
