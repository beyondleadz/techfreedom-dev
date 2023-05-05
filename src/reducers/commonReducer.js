import { LOADING } from "../actionType/commonType";

const initialState = {
  loading: true,
};

const CommonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload,'rajlsjflfjksd')
  switch (type) {
    case LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default CommonReducer;
