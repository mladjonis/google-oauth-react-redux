import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  signedIn: null,
  auth: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, signedIn: true, auth: action.payload };
    case SIGN_OUT:
      return { ...state, signedIn: false, auth: null };
    default:
      return state;
  }
};
