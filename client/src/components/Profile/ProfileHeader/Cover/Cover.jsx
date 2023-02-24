import React from "react";

const Cover = () => {
  return (
    <div>
      <div className="fb-header-shad"></div>
      <div className="fb-cover-photo">
        <img
          src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg"
          alt=""
        />
        <button>
          <span className="camera-icon"></span> Edit cover photo
        </button>
      </div>
    </div>
  );
};

export default Cover;
