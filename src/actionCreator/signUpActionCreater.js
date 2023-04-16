import {
  SIGNUP_STEP1,
  SIGNUP_STEP2,
  SIGNUP_STEP3,
} from "../actionType/signUpType";

export const formActionStep1 = (payload) => ({
  type: SIGNUP_STEP1,
  payload: payload,
});

export const formActionStep2 = (payload) => ({
  type: SIGNUP_STEP2,
  payload: payload,
});

// export const formActionStep3 = (payload) => ({
//     type: SIGNUP_STEP3,
//     payload: payload,
// });

//   export const setText = data => ({
//     type: actionType.SET_TEXT,
//     payload: data
//   });
