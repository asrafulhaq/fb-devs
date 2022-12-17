import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="fb-home-body-sidebar">
        <ul>
          <li>
            <a href="#">
              <div className="body-icon">
                <Avatar />
              </div>
              <span>{`${user.first_name} ${user.sur_name}`}</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Friends</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Groups</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Marketplace</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Watch</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="body-icon"></div>
              <span>Watch</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
