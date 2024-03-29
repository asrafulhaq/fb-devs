import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../../Avatar/Avatar";
import FbModal from "../../../FbModal/FbModal";
import Cropper from "react-easy-crop";
import "./info.css";
import getCroppedImg, { createImage } from "../../../../utility/croper";
import axios from "axios";

const Info = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [profilePhotoModal, setProfilePhotoModal] = useState(false);
  const [image, setImage] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  console.log(croppedImage);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      setImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const handleProfilePhotoUpload = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    setImage(img);
  };

  const handleProfilePhotoUpdate = async (e) => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
      setImage(croppedImage);

      const finalImageBlob = await fetch(croppedImage).then((res) =>
        res.blob()
      );

      const finalFile = new File([finalImageBlob], "profile_photo.png", {
        type: "image/png",
      });

      const form_data = new FormData();
      form_data.append("profile", finalFile);

      await axios
        .put(`/api/v1/user//profile-photo-update/${user._id}`, form_data)
        .then((res) => {
          setProfilePhotoModal(false);
          setImage(null);
          dispatch({
            type: "USER_PROFILE_PHOTO_UPDATE",
            payload: { profile_photo: res.data.filename },
          });
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {profilePhotoModal && (
        <FbModal
          title="Update profile picture"
          closePopup={setProfilePhotoModal}
        >
          {!image && (
            <div className="profile-upload">
              <label>
                <input
                  type="file"
                  onChange={handleProfilePhotoUpload}
                  style={{ display: "none" }}
                />
                <i class="bx bx-plus"></i> Uplaod Photo
              </label>
            </div>
          )}
          {image && (
            <div className="profile-photo-manage">
              <div className="caption-box">
                <textarea placeholder="description"></textarea>
              </div>
              <div className="profile-crop-zone">
                <Cropper
                  image={image}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  aspect={1 / 1}
                  cropShape="round"
                  showGrid={false}
                  cropSize={{ width: 300, height: 300 }}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
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
              <div className="photo-crop-btns">
                <button onClick={showCroppedImage}>
                  <i className="bx bx-crop"></i> <span>Crop Photo</span>
                </button>
                <button>
                  <i className="bx bxs-time-five"></i>{" "}
                  <span>Make Temporary</span>
                </button>
              </div>
              <div className="save-area">
                <button>Cancel</button>
                <button className="blue" onClick={handleProfilePhotoUpdate}>
                  Save
                </button>
              </div>
            </div>
          )}
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
