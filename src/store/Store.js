import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/RootReducers";

export const appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
