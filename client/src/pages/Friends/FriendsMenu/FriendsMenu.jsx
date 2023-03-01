import React from "react";
import { Link } from "react-router-dom";
import "./FriendsMenu.scss";

const FriendsMenu = () => {
  return (
    <div className="friends-menu shadow-reg">
      <div className="friends-menu-wraper">
        <div className="friends-menu-header">
          <h2>Friends</h2>
          <button>
            <i class="bx bxs-cog"></i>
          </button>
        </div>
        <div className="friends-menu-list">
          <ul>
            <li>
              <span className="menu-iocn">
                <i class="bx bxs-user"></i>
              </span>
              <Link href="#">Home</Link>
            </li>
            <li>
              <span className="menu-iocn">
                <i class="bx bxs-user-check"></i>
              </span>
              <Link href="#">Friend Requests</Link>
            </li>
            <li>
              <span className="menu-iocn">
                <i class="bx bxs-user-check"></i>
              </span>
              <Link href="#">All friends</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FriendsMenu;
