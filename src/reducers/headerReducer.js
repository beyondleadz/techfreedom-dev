import { TOP_SEARCH_VALUE, SELECTED_ITEM } from "../actionType/headerType";

const initialState = {
  topSearchValue: "",
  selectedItem: "Advanced",
};

const HeaderReducer = (state = initialState, action) => {
  const { type, payload } = action; 
  switch (type) {
    case TOP_SEARCH_VALUE:
      return { ...state, topSearchValue: payload };
    case SELECTED_ITEM:
      return { ...state, selectedItem: payload };
    default:
      return state;
  }
};

export default HeaderReducer;
