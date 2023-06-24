import {
  LEAD_DETAILS,
  LEAD_DETAILS_ERROR,
  UPDATE_LEAD_DETAILS,
  UPDATE_LEAD_DETAILS_ERROR,
  LEAD_EMPTY_ERROR_OBJ,
  SAVE_CLIENT_NOTE,
  SAVE_CLIENT_NOTE_ERROR,
  LEAD_NOTES,
  LEAD_NOTES_ERROR,
  LEAD_REMARKS,
  LEAD_REMARKS_ERROR,
  LEAD_NOTE_DETAIL,
  LEAD_NOTE_DETAIL_ERROR,
} from "../actionType/leadDetailsType";

const initialState = {
  leadDetails: {},
  updateleadDetails: {},
  saveleadNotes: {},
  leadNotes: [],
  leadRemarks: [],
  leadNoteDetails: {},
};

const LeadDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LEAD_DETAILS:
      return { ...state, leadDetails: payload };
    case UPDATE_LEAD_DETAILS:
      return { ...state, updateleadDetails: payload };
    case SAVE_CLIENT_NOTE:
      return { ...state, saveleadNotes: payload };
    case LEAD_NOTES:
      return { ...state, leadNotes: payload };
    case LEAD_REMARKS:
      return { ...state, leadRemarks: payload };
    case LEAD_NOTE_DETAIL:
      return { ...state, leadNoteDetails: payload };
    case LEAD_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case UPDATE_LEAD_DETAILS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case SAVE_CLIENT_NOTE_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_NOTES_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_REMARKS_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_NOTE_DETAIL_ERROR:
      return { ...state, errObj: { ...state.errObj, ...payload } };
    case LEAD_EMPTY_ERROR_OBJ:
      return { ...state, errObj: payload };

    default:
      return state;
  }
};

export default LeadDetailsReducer;
