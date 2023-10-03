import { TOP_SEARCH_VALUE, SELECTED_ITEM,TOP_SEARCH_CLICK } from "../actionType/headerType";
export const topSearch = (value) => ({
  type: TOP_SEARCH_VALUE,
  payload: value,
});

export const selectItem = (value) => {
    return {
        type: SELECTED_ITEM,
        payload: value,
      };
}

export const topSearchClick = (value) => {
  return {
      type: TOP_SEARCH_CLICK,
      payload: value,
    };
}


    
  
