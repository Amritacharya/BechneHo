import { USER_LOGOUT } from "./types";

import history from "../history";
export const logout = () => {
  localStorage.removeItem("loginStatus");
  return (dispatch) => {
    dispatch({
      type: USER_LOGOUT,
      payload: {
        isSignedIn: false,
      },
    });

    history.push("/login");
  };
};
