import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType.js";
import initialState from "./initialState.js";

/**
 * Create auth reducer
 */
const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        user: {},
        loginState: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loginState: true,
      };

    default:
      return state;
  }
};

// export
export default AuthReducer;
