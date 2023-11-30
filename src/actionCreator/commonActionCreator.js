import {
  LOADING,
  ACCOUNTINFO,
  ACCOUNTINFO_ERROR,
  SUBSCRIPTIONACCOUNTINFO,
  SUBSCRIPTIONACCOUNTINFO_ERROR,
  EMPTY_ERROR_COMMON_OBJ,
  UPDATEACCOUNTINFO,
  UPDATEACCOUNTINFO_ERROR
} from "../actionType/commonType";
import {
  accountInfoApiUrl,
  subscriptionaccountInfoApiUrl,
} from "../constant/Constant";

import { getAuthMethod,postAuthMethod } from "../services/HttpServices";
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
if(!err?.response?.data) return ;
      dispatch({
        type: ACCOUNTINFO_ERROR,
        payload:
          { [errEnum.ACCOUNTINFO_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

export const getSubscriptionInfo = (token,data) => (dispatch) => {
  //console.log(data,'getSubscriptionInfo')
  if(data?.subscriberId){ //subscriberId TODO previouse data - data?.account?.subscriberId
  return getAuthMethod(subscriptionaccountInfoApiUrl+data?.subscriberId, token)
    .then((res) => {
      dispatch({
        type: SUBSCRIPTIONACCOUNTINFO,
        payload: res.data,
      });  
      sessionStorage.setItem("subscriptionuserInfo", JSON.stringify(res.data));    
    })
    
    .catch((err) => {
if(!err?.response?.data) return ;
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


export const updateAccountInfo = (token,payload) => (dispatch) => {
  return postAuthMethod(accountInfoApiUrl, payload)
    .then((res) => {
      dispatch({
        type: UPDATEACCOUNTINFO,
        payload: res.data,
      });
      dispatch(getAccountInfo(token));
    })
    .catch((err) => {
if(!err?.response?.data) return ;
      dispatch({
        type: UPDATEACCOUNTINFO_ERROR,
        payload:
          { [errEnum.UPDATEACCOUNTINFO_ERROR]: err.response.data[ErrKey] } ||
          "Error Occured",
      });
    });
};

