import axios from "axios";
import { GET_FEATURED } from "./types";
export const fetchFeatured = () => {
  return async (dispatch) => {
    const res = await axios.get("https://bechneho.com/api/market/featured/");
    dispatch({
      type: GET_FEATURED,
      payload: res.data.results,
    });
  };
};
