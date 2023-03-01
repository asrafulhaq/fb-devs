import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import FriendsContainer from "./FriendsContainer/FriendsContainer";
import FriendsMenu from "./FriendsMenu/FriendsMenu";
import "./Friends.scss";

const Friends = () => {
  return (
    <>
      <HomeHeader />
      <div className="friends-area">
        <FriendsMenu />
        <FriendsContainer />
      </div>
    </>
  );
};

export default Friends;
