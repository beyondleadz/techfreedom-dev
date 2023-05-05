import {LOADING} from '../actionType/commonType'

export const dispatchStatus = (payload) => {
    
    return {
      type: LOADING,
      payload: payload,
    };
  };