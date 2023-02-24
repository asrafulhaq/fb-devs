import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../../../Avatar/Avatar";
import FbModal from "../../../FbModal/FbModal";
import Cropper from "react-easy-crop";
import "./info.css";

const Info = () => {
  const { user } = useSelector((state) => state.auth);
  const [profilePhotoModal, setProfilePhotoModal] = useState(false);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  return (
    <div>
      {profilePhotoModal && (
        <FbModal
          title="Update profile picture"
          closePopup={setProfilePhotoModal}
        >
          {/* <div className="profile-upload">
            <label>
              <input type="file" style={{ display: "none" }} />
              <i class="bx bx-plus"></i> Uplaod Photo
            </label>
          </div> */}
          <div className="profile-photo-manage">
            <div className="caption-box">
              <textarea placeholder="description"></textarea>
            </div>
            <div className="profile-crop-zone">
              <Cropper
                image="https://www.pngitem.com/pimgs/m/615-6152413_team-members-gentleman-hd-png-download.png"
                crop={crop}
                zoom={zoom}
                aspect={1 / 1}
                showGrid={false}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                cropShape="round"
              />
            </div>
            <div className="photo-slider">
              <button>
                <i class="bx bx-minus"></i>
              </button>
              <input
                type="range"
                min={1}
                value={zoom}
                max={5}
                step={0.01}
                onChange={(e) => setZoom(e.target.value)}
              />
              <button>
                <i class="bx bx-plus"></i>
              </button>
            </div>
          </div>
        </FbModal>
      )}
      <div className="fb-profile-details">
        <div className="profile-info">
          <div className="profile-photo">
            <Avatar />
            <button
              className="profile-photo-uplaod"
              onClick={() => setProfilePhotoModal(true)}
            >
              <i class="bx bxs-camera"></i>
            </button>
          </div>

          <div className="profile-desc">
            <h1>
              {user.first_name} {user.sur_name} <span>( neooo inc )</span>
            </h1>
            <div className="profile-follow-details">
              <span className="profile-followers">15k follower</span>.
              <span className="profile-following">1k following</span>
            </div>
            <div className="profile-friends-list">
              <ul>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-action">
          <button>
            <span className="follow-icon"></span> <span>Follow</span>
          </button>
          <button>
            <span className="message-icon"></span> <span>Message</span>
          </button>
          <button className="blue">
            <span className="add-friend-icon"></span> <span>Add friend</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
