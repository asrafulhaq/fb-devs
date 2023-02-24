import axios from "axios";
import Cookies from "js-cookie";

import createToast from "../../utility/toast";
import { LOADER_START } from "../top-loader/loaderTypes";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  TOKEN_USER_FAILED,
  TOKEN_USER_REQ,
  TOKEN_USER_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_UPDATE,
} from "./actionType";

// user register
export const userRegister =
  (data, setInput, e, setRegister, navigate) => async (dispatch) => {
    try {
      dispatch({
        type: REGISTER_REQUEST,
      });
      await axios
        .post("/api/v1/user/register", data)
        .then((res) => {
          createToast(res.data.message, "success");
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data.message,
          });
          setInput({
            fname: "",
            sname: "",
            emailOrMobile: "",
            password: "",
            day: "",
            month: "",
            year: "",
            gender: "",
          });
          e.target.reset();
          setRegister(false);
          navigate("/activation/account");
        })
        .catch((error) => {
          createToast(error.response.data.message);
          dispatch({
            type: REGISTER_FAILED,
            payload: error.response.data,
          });
        });
    } catch (error) {
      createToast(error.response.data.message);
      dispatch({
        type: REGISTER_FAILED,
        payload: error.response.data,
      });
    }
  };

// user account activation by OTP
export const activationByOTP =
  ({ code, email }, navigate) =>
  async (dispatch) => {
    try {
      await axios
        .post("/api/v1/user/code-activate", {
          code: code,
          email: email,
        })
        .then((res) => {
          createToast("Account activate successfull", "success");
          Cookies.remove("otp");
          navigate("/");
        })
        .catch((error) => {
          createToast(error.response.data.message);
        });
    } catch (error) {
      createToast(error.response.data.message);
    }
  };

// user account activation by OTP
export const resendLink = (email, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/resend-activate", {
        auth: email,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/activation/account");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

// user account activation by OTP
export const checkPasswordResetCode = (data, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/check-password-reset-otp", {
        auth: data.auth,
        code: data.code,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/change-password");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

// user account activation by OTP
export const changePassword = (data, navigate) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/user-password-reset", {
        id: data.id,
        code: data.code,
        password: data.password,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/login");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};

// user login
export const userLogin = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    await axios
      .post("/api/v1/user/login", {
        auth: data.auth,
        password: data.password,
      })
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.user,
        });
        dispatch({
          type: LOADER_START,
        });
        createToast("Login successful", "success");
        navigate("/");
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        createToast(error.response.data.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

// user login
export const tokenUser = (token, navigate) => async (dispatch) => {
  try {
    await axios
      .get("/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: TOKEN_USER_SUCCESS,
          payload: res.data.user,
        });
        dispatch({
          type: LOADER_START,
        });
      })
      .catch((error) => {
        dispatch({
          type: TOKEN_USER_FAILED,
        });
        dispatch(userLogout());
        createToast(error.response.data.message);
      });
  } catch (error) {
    console.log(error.message);
    dispatch(userLogout());
    dispatch({
      type: TOKEN_USER_FAILED,
    });
  }
};

// logout
export const userLogout = (navigate) => (dispatch) => {
  dispatch({
    type: LOADER_START,
  });
  Cookies.remove("authToken");

  dispatch({
    type: USER_LOGOUT,
  });
};

// user login
export const profileUpdate =
  (data, id, setBioShow = null) =>
  async (dispatch) => {
    try {
      await axios
        .put(`/api/v1/user/profile-update/${id}`, data)
        .then((res) => {
          setBioShow && setBioShow(false);
          dispatch({ type: USER_PROFILE_UPDATE, payload: res.data.user });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
