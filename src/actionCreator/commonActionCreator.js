import {
  LOADING,
  ACCOUNTINFO,
  ACCOUNTINFO_ERROR,
  SUBSCRIPTIONACCOUNTINFO,
  SUBSCRIPTIONACCOUNTINFO_ERROR,
  EMPTY_ERROR_COMMON_OBJ,
} from "../actionType/commonType";
import {
  accountInfoApiUrl,
  subscriptionaccountInfoApiUrl,
} from "../constant/Constant";
import { getAuthMethod } from "../services/HttpServices";
import { ErrKey, errEnum } from "../config";

export const dispatchStatus = (payload) => {
  return {
    type: LOADING,
    payload: payload,
  };
};

export const getAccountInfo = (token) => (dispatch) => {
  return getAuthMethod(accountInfoApiUrl, token)
    .then((res) => {
      dispatch({
        type: ACCOUNTINFO,
        payload: res.data,
      });
      dispatch(getSubscriptionInfo(token,res.data));
      sessionStorage.setItem("userInfo", JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err, "sjkflskdjfkl");
      dispatch({
        type: ACCOUNTINFO_ERROR,
        payload:
          { [errEnum.ACCOUNTINFO_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getSubscriptionInfo = (token,data) => (dispatch) => {
  if(data?.account?.id){
  return getAuthMethod(subscriptionaccountInfoApiUrl+data?.account?.id, token)
    .then((res) => {
      dispatch({
        type: SUBSCRIPTIONACCOUNTINFO,
        payload: res.data,
      });  
      sessionStorage.setItem("subscriptionuserInfo", JSON.stringify(res.data));    
    })
    
    .catch((err) => {
      dispatch({
        type: SUBSCRIPTIONACCOUNTINFO_ERROR,
        payload:
          { [errEnum.SUBSCRIPTIONACCOUNTINFO_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
  }
};

export const emptyCommonErrorObj = () => ({
  type: EMPTY_ERROR_COMMON_OBJ,
  payload: {},
});
