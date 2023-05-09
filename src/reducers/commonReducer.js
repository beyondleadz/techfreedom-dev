import { LOADING,ACCOUNTINFO,ACCOUNTINFO_ERROR,EMPTY_ERROR_COMMON_OBJ } from "../actionType/commonType";

const initialState = {
  loading: true,
  accountInfo:{},
  errObj: {},
};

const CommonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload,'rajlsjflfjksd')
  switch (type) {
    case LOADING:
      return { ...state, loading: payload };
    case ACCOUNTINFO:
        return { ...state, accountInfo: payload };
    case ACCOUNTINFO_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case EMPTY_ERROR_COMMON_OBJ:
      return { ...state, errObj: payload };
    default:
      return state;
  }
};

export default CommonReducer;
