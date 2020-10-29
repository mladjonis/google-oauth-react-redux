import { SIGN_IN, SIGN_OUT } from "./types";
import { CLIENT_ID, SCOPE } from "../constants/oauth2";

export const signIn = () => async (dispatch) => {
  await dispatch(onAuthChange());
};

export const signOut = () => async (dispatch) => {
  await dispatch(onAuthChange());
};

export const onAuthChange = () => async (dispatch) => {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        clientId: CLIENT_ID,
        scope: SCOPE,
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
        console.log(err);
      });
  });
};
