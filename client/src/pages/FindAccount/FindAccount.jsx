import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ResetHeader from "../../components/ResetHeader/ResetHeader";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { hideMobileEmail } from "../../utility/helper.js";
import axios from "axios";
import createToast from "../../utility/toast";

const FindAccount = () => {
  const navigate = useNavigate();
  // find user data state
  const [findUser, setFindUser] = useState({
    name: "",
    email: "",
    mobile: "",
    photo: "",
  });

  // not you
  const handleNotYou = (e) => {
    e.preventDefault();
    Cookies.remove("findUser");
    navigate("/forgot-password");
  };

  // handle passowrd reset linkj
  const handlePasswordResetLink = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/v1/user/send-password-reset-otp", {
        auth: findUser.mobile ?? findUser.email,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/activation/reset-pass");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  };

  useEffect(() => {
    // get all cookie data
    const userData = JSON.parse(Cookies.get("findUser")) ?? null;

    if (userData) {
      setFindUser({
        name: userData.name,
        email: userData.email ?? null,
        mobile: userData.mobile ?? null,
        photo: userData.photo,
      });
    }
  }, []);

  return (
    <>
      <ResetHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Reset your password</span>
            </div>
            <div className="reset-body">
              <div className="find-user-account">
                <img
                  src={
                    findUser.photo
                      ? findUser.photo
                      : "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                  }
                  alt=""
                />
                <span>{findUser.name}</span>
                {findUser.email && (
                  <p>Email : {hideMobileEmail(findUser.email)}</p>
                )}
                {findUser.mobile && (
                  <p>Mobile : {hideMobileEmail(findUser.mobile)}</p>
                )}

                <p>To reset your account password, please continue</p>
              </div>
            </div>
            <div className="reset-footer">
              <a href="#"></a>
              <div className="reset-btns">
                <a onClick={handleNotYou} className="cancel" href="#">
                  Not you ?
                </a>
                <a
                  onClick={handlePasswordResetLink}
                  className="continue"
                  href="#"
                >
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindAccount;
