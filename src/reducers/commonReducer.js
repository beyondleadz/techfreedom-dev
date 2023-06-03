import {
  LOADING,
  ACCOUNTINFO,
  ACCOUNTINFO_ERROR,
  SUBSCRIPTIONACCOUNTINFO,
  SUBSCRIPTIONACCOUNTINFO_ERROR,
  EMPTY_ERROR_COMMON_OBJ,
} from "../actionType/commonType";

const initialState = {
  loading: true,
  accountInfo: {},
  errObj: {},
  subscriptionaccountInfo: {},
};

const CommonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return { ...state, loading: payload };
    case ACCOUNTINFO:
      return { ...state, accountInfo: payload };
    case ACCOUNTINFO_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SUBSCRIPTIONACCOUNTINFO:
      return { ...state, subscriptionaccountInfo: payload };
    case SUBSCRIPTIONACCOUNTINFO_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EMPTY_ERROR_COMMON_OBJ:
      return { ...state, errObj: payload };
    default:
      return state;
  }
};

export default CommonReducer;
