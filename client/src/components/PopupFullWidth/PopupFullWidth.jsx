import "./PopupFullWidth.css";
import cross from "../../_assets/icons/cross.png";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { useState } from "react";

const PopupFullWidth = ({ hide, children }) => {
  const [userMenu, setUsermenu] = useState(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="popup-full-wraper">
      <div onClick={() => hide(false)} className="popup-full-close">
        <button>
          <img src={cross} alt="" />
        </button>
      </div>
      <div className="popup-fb-logo">
        <a href="#">
          <svg
            viewBox="0 0 36 36"
            class="x1lliihq x1k90msu x2h7rmj x1qfuztq x1ssd25i"
            fill="url(#jsc_s_3)"
            height="40"
            width="40"
          >
            <defs>
              <linearGradient
                x1="50%"
                x2="50%"
                y1="97.0782153%"
                y2="0%"
                id="jsc_s_3"
              >
                <stop offset="0%" stop-color="#0062E0"></stop>
                <stop offset="100%" stop-color="#19AFFF"></stop>
              </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
            <path
              class="xe3v8dz"
              fill="#FFF"
              d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            ></path>
          </svg>
        </a>
      </div>
      <div className="popup-user-menu">
        <UserMenu userMenu={userMenu} setUsermenu={setUsermenu} user={user} />
      </div>

      {children}
    </div>
  );
};

export default PopupFullWidth;
