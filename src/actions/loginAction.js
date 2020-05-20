import { USER_LOGIN } from "./types";
import history from "../history";
export const login = (username, password) => {
  return async (dispatch) => {
    localStorage.setItem("loginStatus", true);

    dispatch({
      type: USER_LOGIN,
      payload: {
        isSignedIn: true,
      },
    });
    history.push("/");
  };
};
