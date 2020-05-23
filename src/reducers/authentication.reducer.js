import { userConstants } from "../constants";

let user = localStorage.getItem("user");
const initialState = user
  ? {
      loggedIn: true,
      user,
      pendingRefreshingToken: null,
      tokenIsValid: null,
      error: false,
    }
  : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user,
        error: false,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        user: action.user,
        error: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        error: true,
        loggingOut: false,
      };
    case userConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        loggingOut: false,
      };
    default:
      return state;
  }
}
