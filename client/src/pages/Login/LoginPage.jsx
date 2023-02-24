import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import FacebookLogo from "../../_assets/icons/facebook.svg";

const LoginPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="fb-auth">
        <div style={{ width: "auto" }} className="auth-wraper">
          <div className="auth-right">
            <img src={FacebookLogo} alt="" />
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

export default LoginPage;
