import React from "react";
import "./FbModal.css";
import cross from "../../_assets/icons/cross.png";

const FbModal = ({ children, title, closePopup, back = null }) => {
  return (
    <div className="blur-box">
      <div className="fb-modal-wraper">
        <div className="fb-modal-popup">
          <div className="fb-modal-header">
            {back && (
              <button className="back" onClick={() => back()}>
                <i class="bx bx-arrow-back"></i>
              </button>
            )}
            <span className="title">{title}</span>
            {closePopup && (
              <button onClick={() => closePopup(false)}>
                <img src={cross} alt="" />
              </button>
            )}
          </div>
          <div className="fb-modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FbModal;
