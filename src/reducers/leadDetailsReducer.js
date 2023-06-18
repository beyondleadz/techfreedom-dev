import {
  LEAD_DETAILS,
  LEAD_DETAILS_ERROR,
  UPDATE_LEAD_DETAILS,
  UPDATE_LEAD_DETAILS_ERROR,
  LEAD_EMPTY_ERROR_OBJ,
} from "../actionType/leadDetailsType";

const initialState = {
  leadDetails: {},
  updateleadDetails: {},
};

const LeadDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LEAD_DETAILS:
      return { ...state, leadDetails: payload };
    case UPDATE_LEAD_DETAILS:
      return { ...state, updateleadDetails: payload };
    case LEAD_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case UPDATE_LEAD_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EMPTY_ERROR_OBJ:
      return { ...state, errObj: payload };

    default:
      return state;
  }
};

export default LeadDetailsReducer;
