import React from "react";
import { Link } from "react-router-dom";
import FriendBox from "../../../components/FriendBox/FriendBox";
import "./FriendsContainer.scss";

const FriendsContainer = () => {
  return (
    <div className="friends-container">
      <div className="friends-container-wraper">
        <div className="friends-container-section">
          <div className="container-section-header">
            <h2>Friend Request</h2>
            <Link to="">See all</Link>
          </div>
          <div className="container-section-list">
            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>
          </div>

          <hr />
          <div className="container-section-header">
            <h2>People You May Know</h2>
            <Link to="">See all</Link>
          </div>
          <div className="container-section-list">
            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>

            <Link to="">
              <FriendBox />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsContainer;
