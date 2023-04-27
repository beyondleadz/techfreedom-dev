import {
  // SIGNUP_STEP1,
  // SIGNUP_STEP2,
  // SIGNUP_STEP3,
  // LOGIN,
  REGISTER_USER,
} from "../actionType/signUpType";
import { signInUrl, signUpUrl } from "../constant/Constant";
import { postMethod } from "../services/HttpServices";

export const userRegister = (payload) => (dispatch) => {
  return postMethod(signUpUrl, payload).then((res) => {
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  });
};

// export const formActionStep1 = (payload) => ({
//   type: SIGNUP_STEP1,
//   payload: payload,
// });

// export const formActionStep2 = (payload) => ({
//   type: SIGNUP_STEP2,
//   payload: payload,
// });

// export const formActionStep3 = (payload) => ({
//     type: SIGNUP_STEP3,
//     payload: payload,
// });

//   export const setText = data => ({
//     type: actionType.SET_TEXT,
//     payload: data
//   });
