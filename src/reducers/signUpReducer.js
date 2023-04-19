import {
  SIGNUP_STEP1,
  SIGNUP_STEP2,
  SIGNUP_STEP3,
  LOGIN,
} from "../actionType/signUpType";

const initialState = {
  signUpStep1Data: {},
  signUpStep2Data: {},
  signInData: {},
};

const SignUpReducer = (state = initialState, action) => {
//   console.log(state, action, "skdjfslkdfjkl");
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_STEP1:
      return { ...state, signUpStep1Data: payload };
    case SIGNUP_STEP2:
      return { ...state, signUpStep2Data: payload };
    case LOGIN:
      return { ...state, signInData: payload };
    default:
      return state;
  }
};

export default SignUpReducer;
