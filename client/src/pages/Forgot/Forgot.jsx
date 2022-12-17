import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ResetHeader from "../../components/ResetHeader/ResetHeader";
import createToast from "../../utility/toast";

const Forgot = () => {
  const [auth, setAuth] = useState("");

  const navigate = useNavigate();

  // input change handler
  const handleInputChange = (e) => {
    setAuth(e.target.value);
  };

  // find user
  const handleFindUser = (e) => {
    e.preventDefault();
    if (!auth) {
      createToast("Input field is required");
    } else {
      axios
        .post("/api/v1/user/find-user-account", {
          auth,
        })
        .then((res) => {
          navigate("/find-account");
        })
        .catch((error) => {
          createToast(error.response.data.message);
        });
    }
  };
  return (
    <>
      <ResetHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Find Your Account</span>
            </div>
            <div className="reset-body">
              <p>
                Please enter your email address or mobile number to search for
                your account.
              </p>
              <div className="code-box">
                <input
                  className="w-100"
                  type="text"
                  name="auth"
                  value={auth}
                  onChange={handleInputChange}
                  placeholder="Email address or mobile number"
                />
              </div>
            </div>
            <div className="reset-footer">
              <a href="#"></a>
              <div className="reset-btns">
                <Link className="cancel" to="/login">
                  Cancel
                </Link>
                <a
                  onClick={handleFindUser}
                  href="/"
                  type="submit"
                  className="continue"
                >
                  Search
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

export default Forgot;
