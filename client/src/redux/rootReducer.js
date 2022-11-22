import { combineReducers } from "redux";
import AuthReducer from "../redux/auth/AuthReducer.js";

// create root reducer
const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
