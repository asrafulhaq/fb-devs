import React from "react";
import Avatar from "../Avatar/Avatar";
import CreatePost from "../CreatePost/CreatePost";
import UserPost from "../UserPost/UserPost";

const Timeline = () => {
  return (
    <>
      <div className="fb-home-timeline-area">
        <div className="fb-home-timeline">
          <CreatePost />
          <UserPost />
        </div>
      </div>
    </>
  );
};

export default Timeline;
