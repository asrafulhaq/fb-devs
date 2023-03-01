import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  TOKEN_USER_FAILED,
  TOKEN_USER_SUCCESS,
  USER_LOGOUT,
  TOKEN_USER_REQ,
  USER_PROFILE_UPDATE,
  USER_PROFILE_PHOTO_UPDATE,
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
        user: null,
        loginState: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loginState: true,
      };

    case TOKEN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loginState: true,
      };

    case TOKEN_USER_FAILED:
      return {
        ...state,
        user: null,
        loginState: false,
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        loginState: false,
      };

    case USER_PROFILE_UPDATE:
      return {
        ...state,
        user: {
          ...payload,
        },
      };

    case USER_PROFILE_PHOTO_UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };

    default:
      return state;
  }
};

// export
export default AuthReducer;
