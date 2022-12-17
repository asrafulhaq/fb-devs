import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import Timeline from "../../components/Timeline/Timeline";
import user from "../../_assets/images/user.png";
const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="fb-home-body">
        <Sidebar />
        <Timeline />
      </div>
    </>
  );
};

export default Home;
