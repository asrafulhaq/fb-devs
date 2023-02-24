import React from "react";

import Cover from "./Cover/Cover";
import Info from "./Info/Info";

const ProfileHeader = () => {
  return (
    <>
      <div className="fb-profile-header">
        <Cover />
        <Info />
        <div className="fb-profile-menu">
          <ul>
            <li>
              <a href="#">Posts</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Followers</a>
            </li>
            <li>
              <a href="#">Photos</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Articlse</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
