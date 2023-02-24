import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activation from "./pages/Activation/Activation";
import Forgot from "./pages/Forgot/Forgot";
import FindAccount from "./pages/FindAccount/FindAccount";
import Password from "./pages/Password/Password";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_END } from "./redux/top-loader/loaderTypes";
import { useEffect } from "react";
import { tokenUser } from "./redux/auth/authAction";
import Cookies from "js-cookie";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Friends from "./pages/Friends/Friends";
import LoggedInRoute from "./privateRoute/LoggedInRoute";
import LoggedOutRoute from "./privateRoute/LoggedOutRoute";
function App() {
  const loader = useSelector((state) => state.loader);
  const loaderDispatch = useDispatch();
  const tokenDispatch = useDispatch();
  const token = Cookies.get("authToken");

  useEffect(() => {
    if (token) {
      tokenDispatch(tokenUser(token));
    }
  }, [tokenDispatch, token]);

  return (
    <>
      <LoadingBar
        color="#2376F2"
        progress={loader}
        onLoaderFinished={() => loaderDispatch({ type: LOADER_END })}
      />
      <ToastContainer
        style={{ zIndex: 999999 }}
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
      />

      <Routes>
        <Route path="/activation/:type" element={<Activation />} />
        <Route path="/" element={<Home />} />

        <Route element={<LoggedOutRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<LoggedInRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
        </Route>

        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/change-password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
