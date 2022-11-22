import axios from "axios";
import Cookies from "js-cookie";

import createToast from "../../utility/toast";
import {
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
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
          navigate("/activation");
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
          navigate("/login");
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
        email: email,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/activation");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};
