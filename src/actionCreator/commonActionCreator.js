import {LOADING,ACCOUNTINFO,ACCOUNTINFO_ERROR, EMPTY_ERROR_COMMON_OBJ} from '../actionType/commonType'
import {
  accountInfoApiUrl,
} from "../constant/Constant";
import {
  getAuthMethod
} from "../services/HttpServices";
import { ErrKey, errEnum } from "../config";

export const dispatchStatus = (payload) => {    
    return {
      type: LOADING,
      payload: payload,
    };
  };

  export const getAccountInfo = (token) =>(dispatch)=> {  
  return getAuthMethod(accountInfoApiUrl,token)
    .then((res) => {
      dispatch({
        type: ACCOUNTINFO,
        payload: res.data,
      });
      sessionStorage.setItem("userInfo",JSON.stringify(res.data));
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

  export const emptyCommonErrorObj = () => ({
    type: EMPTY_ERROR_COMMON_OBJ,
    payload: {},
  });