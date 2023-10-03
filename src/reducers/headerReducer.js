import {
  TOP_SEARCH_VALUE,
  SELECTED_ITEM,
  TOP_SEARCH_CLICK,
} from "../actionType/headerType";

const initialState = {
  topSearchValue: "",
  selectedItem: "Advanced",
  topSearchClick: 1,
};

const HeaderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOP_SEARCH_VALUE:
      return { ...state, topSearchValue: payload };
    case SELECTED_ITEM:
      return { ...state, selectedItem: payload };
    case TOP_SEARCH_CLICK:
      return { ...state, topSearchClick: payload };
    default:
      return state;
  }
};

export default HeaderReducer;
