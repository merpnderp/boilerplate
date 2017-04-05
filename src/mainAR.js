import update from "immutability-helper";

import { postAJAX, getAJAX, setCSRFToken } from "./fetch";

const initialState = {
  user: undefined,
  loginAttemptError: "",
  loggingIn: false,
  signupSuccess: false
};

export const mainReducer = function(state = initialState, action) {
  switch (action.type) {
    case "SetUser":
      return update(state, { user: { $set: action.value } });
    case "LoginAttemptError":
      return update(state, { loginAttemptError: { $set: action.value } });
    case "IsLoggingIn":
      return update(state, { loggingIn: { $set: action.value } });
    case "SignupSuccess":
      return update(state, { signupSuccess: { $set: action.value } });
    case "GettingCurrentUser":
      return update(state, { gettingCurrentUser: { $set: action.value } });
    default:
      return state;
  }
};

export function isLoggingIn(value) {
  return {
    type: "IsLoggingIn",
    value: value
  };
}

export function getCurrentUser() {
  return function(dispatch) {
    dispatch({ type: "GettingCurrentUser", value: true });
    return postAJAX("users/getCurrentUser", {}).then(data => {
      dispatch({ type: "GettingCurrentUser", value: false });
      if (data.user) {
        setCSRFToken(data.user.csrftoken);
        dispatch({ type: "SetUser", value: data.user });
        getAJAX("users/test");
        //				console.log("user");
        //				console.log(data.user);
      }
    });
  };
}

export function login(username, password) {
  return function(dispatch) {
    dispatch(isLoggingIn(true));
    return postAJAX("users/login", { username, password })
      .then(data => {
        dispatch(isLoggingIn(false));
        if (!data.error) {
          dispatch({ type: "SetUser", value: data });
          dispatch({ type: "LoginAttemptError", value: false });
        } else {
          dispatch({ type: "LoginAttemptError", value: true });
        }
      })
      .catch(e => {
        dispatch(isLoggingIn(false));
        dispatch({ type: "LoginAttemptError", value: true });
      });
  };
}

export function logout() {
  console.log("called logout");
  return function(dispatch) {
    return postAJAX("users/logout")
      .then(data => {
        if (data.success) {
          dispatch({ type: "SetUser", value: undefined });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function signup(email, password) {
  return dispatch => {
    dispatch(isLoggingIn(true));
    dispatch({ type: "SignupSuccess", value: false });
    dispatch({ type: "LoginAttemptError", value: false });
    return postAJAX("/users/signup", { email, password })
      .then(user => {
        dispatch(isLoggingIn(false));
        dispatch({ type: "LoginAttemptError", value: false });
        dispatch({ type: "SignupSuccess", value: true });
      })
      .catch(e => {
        dispatch(isLoggingIn(false));
        dispatch({ type: "LoginAttemptError", value: true });
        console.log(e);
      });
  };
}
