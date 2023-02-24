import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Register from "../../components/Register/Register";
import FacebookLogo from "../../_assets/icons/facebook.svg";

const RegisterPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="fb-auth">
        <div style={{ width: "auto" }} className="auth-wraper">
          <div className="auth-right">
            <img src={FacebookLogo} alt="" />
            <Register setRegister={setRegister} />
            <p>
              <a href="#">Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegisterPage;
