import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
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
import AuthReject from "./privateRoute/AuthReject";
function App() {
  const loader = useSelector((state) => state.loader);
  const loaderDispatch = useDispatch();

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
        <Route
          path="/"
          element={
            <AuthReject>
              <Home />
            </AuthReject>
          }
        />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/change-password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
