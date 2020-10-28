import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (auth) => async (dispatch) => {
  await dispatch(onAuthChange());
  return {
    type: SIGN_IN,
    payload: auth,
  };
};

export const signOut = () => async (dispatch) => {
  await dispatch(onAuthChange());
  return {
    type: SIGN_OUT,
  };
};

export const onAuthChange = () => async (dispatch) => {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        clientId: "YOUR_CLINT_ID",
        scope: "YOUR_SCOPE",
      })
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        if (auth.isSignedIn.get()) {
          auth.signOut().then(() => {
            dispatch({ type: SIGN_OUT });
          });
        } else {
          auth.signIn().then(() => {
            dispatch({ type: SIGN_IN, payload: auth });
          });
        }
      })
      .catch((err) => {
        //handle errors
      });
  });
};
