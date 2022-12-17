import { combineReducers } from "redux";
import AuthReducer from "../redux/auth/AuthReducer.js";
import LoaderReducer from "./top-loader/LoaderReducer.js";

// create root reducer
const rootReducer = combineReducers({
  auth: AuthReducer,
  loader: LoaderReducer,
});

export default rootReducer;
