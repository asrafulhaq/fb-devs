import React from "react";
import { useSelector } from "react-redux";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import Timeline from "../../components/Timeline/Timeline";
import Auth from "../Auth/Auth";

const Home = () => {
  const { loginState } = useSelector((state) => state.auth);
  return (
    <>
      {loginState ? (
        <>
          <HomeHeader />
          <div className="fb-home-body">
            <Sidebar />
            <Timeline />
          </div>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Home;
