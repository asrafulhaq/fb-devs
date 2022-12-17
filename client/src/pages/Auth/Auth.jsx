import React from "react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import FacebookLogo from "../../_assets/icons/facebook.svg";

const Auth = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      <div className="fb-auth">
        <div className="auth-wraper">
          <div className="auth-left">
            <img src={FacebookLogo} alt="" />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="auth-right">
            <Login setRegister={setRegister} />
            <p>
              <a href="#">Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      {register && <Register setRegister={setRegister} />}
      <Footer />
    </>
  );
};

export default Auth;
