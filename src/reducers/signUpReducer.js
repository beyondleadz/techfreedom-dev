import {
  SIGNUP_STEP1,
  SIGNUP_STEP2,
  SIGNUP_STEP3,
} from "../actionType/signUpType";

const initialState = {
  signUpStep1Data: {},
  signUpStep2Data: {},
//   signUpStep3Data: {},
};

const SignUpReducer = (state = initialState, action) => {
//   console.log(state, action, "skdjfslkdfjkl");
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_STEP1:
      return { ...state, signUpStep1Data: payload };
    case SIGNUP_STEP2:
      return { ...state, signUpStep2Data: payload };
    // case SIGNUP_STEP3:
    //   return { ...state, signUpStep3Data: payload };
    default:
      return state;
  }
};

export default SignUpReducer;
