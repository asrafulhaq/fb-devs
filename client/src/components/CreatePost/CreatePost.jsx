import React from "react";
import Avatar from "../Avatar/Avatar";

const CreatePost = () => {
  return (
    <>
      <div className="create-post">
        <div className="create-post-header">
          <Avatar />
          <button>Whats on your mind ?</button>
        </div>
        <div className="divider-0"></div>
        <div className="create-post-footer">
          <ul>
            <li>
              <div className="post-icon"></div>
              <span>Live Video</span>
            </li>
            <li>
              <div className="post-icon"></div>
              Photo/video
            </li>
            <li>
              <div className="post-icon"></div>
              Feeling/ctivity
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
