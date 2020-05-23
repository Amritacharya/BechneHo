import { combineReducers } from "redux";
import productReducer from "./product";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
export default combineReducers({
  featured: productReducer,
  authentication,
  registration,
  users,
});
