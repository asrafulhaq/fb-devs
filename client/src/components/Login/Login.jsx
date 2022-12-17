import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/auth/authAction";
import createToast from "../../utility/toast";

const Login = ({ setRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    auth: "",
    password: "",
  });

  // hamdle input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle user login
  const handleUserLogin = (e) => {
    e.preventDefault();

    if (!input.auth || !input.password) {
      createToast("All fields are required");
    } else {
      dispatch(
        userLogin({ auth: input.auth, password: input.password }, navigate)
      );
    }
  };

  return (
    <>
      <div className="auth-box">
        <form onSubmit={handleUserLogin}>
          <div className="auth-form">
            <input
              onChange={handleInputChange}
              type="text"
              name="auth"
              value={input.auth}
              placeholder="Email address or phone number"
            />
          </div>
          <div className="auth-form">
            <input
              name="password"
              onChange={handleInputChange}
              value={input.password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="auth-form">
            <button type="submit">Log In</button>
          </div>
        </form>

        <Link to="/forgot-password">Forgotten password?</Link>

        <div className="divider"></div>

        <button onClick={() => setRegister(true)}>Create New Account</button>
      </div>
    </>
  );
};

export default Login;
