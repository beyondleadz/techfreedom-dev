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

const initialState = {
  loading: true,
  accountInfo: {},
  errObj: {},
  subscriptionaccountInfo: {},
  updateaccountInfo:{}
};

const CommonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return { ...state, loading: payload };
    case ACCOUNTINFO:
      return { ...state, accountInfo: payload };
    case UPDATEACCOUNTINFO:
      return { ...state, updateaccountInfo: payload };  
    case ACCOUNTINFO_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SUBSCRIPTIONACCOUNTINFO:
      return { ...state, subscriptionaccountInfo: payload };
    case SUBSCRIPTIONACCOUNTINFO_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case UPDATEACCOUNTINFO_ERROR:  
    return { ...state, errObj: { ...state.errObj, ...payload } };
    case EMPTY_ERROR_COMMON_OBJ:
      return { ...state, errObj: payload };
    default:
      return state;
  }
};

export default CommonReducer;
