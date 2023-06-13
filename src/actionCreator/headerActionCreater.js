import { TOP_SEARCH_VALUE, SELECTED_ITEM } from "../actionType/headerType";
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
    
  
