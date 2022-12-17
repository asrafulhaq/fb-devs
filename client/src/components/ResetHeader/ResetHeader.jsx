import React from "react";
import FacebookLogo from "../../_assets/icons/facebook.svg";
import { Link } from "react-router-dom";

const ResetHeader = () => {
  return (
    <>
      <div className="reset-header">
        <div className="reset-header-wraper">
          <div className="reset-logo">
            <img src={FacebookLogo} alt="" />
          </div>
          <div className="login-part">
            <input type="text" placeholder="Email or mobile number" />
            <input type="text" placeholder="Password" />
            <button>Log In</button>
            <Link to="/forgot-password">Forgotten account?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetHeader;
