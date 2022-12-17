import React from "react";
import { useSelector } from "react-redux";

const Avatar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <img
        src={
          user.profile_photo
            ? user.profile_photo
            : "https://tb-planquadrat.at/wp-content/uploads/2016/09/facebook-avatar.jpg"
        }
        alt=""
      />
    </>
  );
};

export default Avatar;
