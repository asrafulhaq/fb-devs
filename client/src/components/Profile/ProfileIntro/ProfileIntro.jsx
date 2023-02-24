import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Fbcard from "../../Fbcard/Fbcard";
import { profileUpdate } from "../../../redux/auth/authAction";
import FbModal from "../../FbModal/FbModal";
import ClickUpdate from "../../ClickUpdate/ClickUpdate";
import PopupFullWidth from "../../PopupFullWidth/PopupFullWidth";
import StorySlider from "../../StorySlider/StorySlider";
import banner from "../../../_assets/images/banner.png";
import "./ProfileIntro.css";
import axios from "axios";

const checkboxIndex = ["one", "two", "three"];

const ProfileIntro = () => {
  const { user } = useSelector((state) => state.auth);
  const [bioShow, setBioShow] = useState(false);
  const [bio, setBio] = useState(user.bio ? user.bio : "");
  const [remain, setRemain] = useState(101 - bio.length);
  const [saveBtn, setSaveBtn] = useState(true);
  const [editDetails, setEditDetails] = useState(false);
  const [catShow, setCatShow] = useState(false);
  const [cat, setCat] = useState(user.category ? user.category : "");

  const [jobShow, setJobShow] = useState(false);
  const [job, setJob] = useState(user.work ? user.work : []);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [featuredShow, setFeaturedShow] = useState(false);
  const [featuredAddShow, setFeaturedAddShow] = useState(false);
  const [featuredUploadShow, setFeaturedUploadShow] = useState(false);
  const [featuredPhotos, setFeaturedPhotos] = useState([]);
  const [featuredChecked, setFeaturedChecked] = useState([]);

  console.log(featuredChecked);

  const dispatch = useDispatch();

  const hanleBioShow = () => {
    setBioShow(!bioShow);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
    setRemain(101 - e.target.value.length);
    setSaveBtn(false);

    if (remain <= 0) {
      setSaveBtn(true);
    }
  };

  const handleBioUpdate = (e) => {
    e.preventDefault();

    dispatch(profileUpdate({ bio }, user._id, setBioShow));
  };

  const handleCatShow = (e) => {
    e.preventDefault();
    setCatShow(!catShow);
  };

  const handleUpdateCat = (e) => {
    e.preventDefault();
    dispatch(profileUpdate({ category: cat }, user._id, setCatShow));
  };

  const handleJobShow = (e) => {
    e.preventDefault();
    setJobShow(!jobShow);
  };

  const handleWorkSave = (e) => {
    e.preventDefault();

    dispatch(
      profileUpdate(
        { work: [...user.work, { position, company }] },
        user._id,
        setJobShow
      )
    );
  };

  const handleWorkDel = (company) => {
    const finalWork = user.work.filter((data) => data.company !== company);
    dispatch(profileUpdate({ work: finalWork }, user._id, setJobShow));
  };

  const handleFeaturedPhotos = (e) => {
    setFeaturedPhotos((prevState) => [
      ...prevState,
      ...Array.from(e.target.files),
    ]);

    setFeaturedChecked((prevState) => [
      ...prevState,
      ...Array.from(e.target.files),
    ]);
  };

  const handleFeaturdPreviewChange = (e) => {
    const updatedList = [...featuredChecked];

    const val = featuredPhotos.find((data) => data.name === e.target.value);

    if (featuredChecked.includes(val)) {
      updatedList.splice(updatedList.indexOf(val), 1);
    } else {
      updatedList.push(val);
    }
    setFeaturedChecked(updatedList);
  };

  const handleFeaturedSlider = (e) => {
    const data = new FormData();
    data.append("name", "FB MY");
    featuredChecked.forEach((item) => {
      data.append("slider", item);
    });

    axios.post(
      "http://localhost:5050/api/v1/user/featured-slider/63e28bc2fb434fd14e374a77",
      data
    );
  };

  return (
    <Fbcard>
      <div className="user-personal-info">
        <h3>Into</h3>
        <div className="bio">
          {user.bio && !bioShow && (
            <>
              <p>{user.bio}</p>
              <button className="personal-info-button" onClick={hanleBioShow}>
                Edit bio
              </button>
            </>
          )}

          {!user.bio && !bioShow && (
            <>
              <button className="personal-info-button" onClick={hanleBioShow}>
                Add bio
              </button>
            </>
          )}

          {bioShow && (
            <div className="click-update">
              <textarea
                placeholder="Describe who you are"
                name=""
                onChange={handleBioChange}
              >
                {user.bio}
              </textarea>
              <p>{remain} characters remaining</p>
              <div className="click-update-btn">
                <div className="bio-statuas">
                  <div
                    style={{
                      backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/HgfBXTEArfp.png?_nc_eui2=AeGav99Kwqf-UAPUTXSoK_dDc6lHD9kG4H5zqUcP2QbgfhpoX1olgG8Mr2r3vH22al-hT03XAUyLOgBd4gjGB3mr')`,
                    }}
                    className="earth_icon"
                  ></div>
                  <span></span>Public
                </div>
                <div className="bio-btn">
                  <button onClick={hanleBioShow}>Cancel</button>
                  <button
                    className={`save-btn ${!saveBtn && "active-save-btn"}`}
                    onClick={handleBioUpdate}
                    disabled={saveBtn}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="personal-info-details">
          <ul>
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png?_nc_eui2=AeEoR5VrwgILK4Lxw3NN0D1wu0ZhLjleVgW7RmEuOV5WBYY1W-jfX_bgFommJMSIl40"
                alt=""
              />
              <span className="bold-text">Profile</span> -{" "}
              {user.category ? user.category : ""}
            </li>

            {user.work.map((data, index) => (
              <li key={index}>
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png?_nc_eui2=AeHDKFA7oFiVHY0doohutozPQE0O-ZdJm-NATQ75l0mb489mSOlQp9HHtO0i2FMHiI0"
                  alt=""
                />
                <span>
                  {data.position} of -{" "}
                  <span className="bold-text">{data.company}</span>
                </span>
              </li>
            ))}

            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeGarVHygnkC9SPhVJO14bOLC7xezJFSLOkLvF7MkVIs6cKWkP3h9H156GQ4C2FXmtA"
                alt=""
              />
              <span>
                Went to{" "}
                <span className="bold-text">Ghorashal pilot high school</span>
              </span>
            </li>
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png?_nc_eui2=AeG_6Xk8k1lddXbisoN0tx06ysO07LK9kRPKw7Tssr2RE3B8kdl21v5RQWUxmORcnyY"
                alt=""
              />
              <span>
                Lives in{" "}
                <span className="bold-text">Mirpur, Dhaka, Bangladesh</span>
              </span>
            </li>
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png?_nc_eui2=AeGHL-7QqFaa2cjAtSzxAdptyuB9xaeJwC_K4H3Fp4nALxrpcKiYkODIVBwE7KRed80"
                alt=""
              />
              <span>
                From{" "}
                <span className="bold-text">Narsingdi, Dhaka, Bangladesh</span>
              </span>
            </li>
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png?_nc_eui2=AeEGvQSPG_rIlBoJFA3TqABlrlG3yvH4CWGuUbfK8fgJYW0aDNAZC6_umTZ-f2Xlpv8"
                alt=""
              />
              <span>
                Married to <span className="bold-text">‎جوانا أختر جولي</span>
              </span>
            </li>
            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/mp_faH0qhrY.png?_nc_eui2=AeHoeKGDGVGKp6_vZbkR4ughnFrlaiZVSWecWuVqJlVJZx_miJg76hfY3oiRL0qH_Aw"
                alt=""
              />
              <span>Joined February 2009</span>
            </li>

            <li>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/LPnnw6HJjJT.png?_nc_eui2=AeHiSYCBBWxiRMbf-TS10o9jIck9P4r7jPkhyT0_ivuM-RHxdezSDKiVe4767sJ7eBw"
                alt=""
              />
              <span>_asraful_haq_</span>
            </li>
          </ul>
          {editDetails && (
            <FbModal title="Edit details" closePopup={setEditDetails}>
              <div className="profile-intro">
                <div className="modal-header">
                  <span className="header-title">Customise your Intro</span>
                  <span className="header-subtitle">
                    Details you select will be public.
                  </span>
                </div>
                <div className="profile-intro-item">
                  <span className="into-title">Category</span>
                  {!catShow && !user.category && (
                    <a href="#" onClick={handleCatShow}>
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                        alt=""
                      />
                      <span className="into-name">Add a Category</span>
                    </a>
                  )}

                  {user.category && !catShow && (
                    <div className="profile-into-data">
                      <div className="profile-intro-details">
                        <img
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/4PEEs7qlhJk.png?_nc_eui2=AeEoR5VrwgILK4Lxw3NN0D1wu0ZhLjleVgW7RmEuOV5WBYY1W-jfX_bgFommJMSIl40"
                          alt=""
                        />
                        <span>{user.category}</span>
                      </div>
                      <button className="edit-icons" onClick={handleCatShow}>
                        <span
                          style={{
                            backgroundImage:
                              'url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/oxNZT_HFDW2.png?_nc_eui2=AeGD2uBgMiVzttKKSmIMsNTE1lk3Alp9npTWWTcCWn2elJT7NPKlxCqf7zMafwv6g_U")',
                          }}
                        ></span>
                      </button>
                    </div>
                  )}

                  {catShow && (
                    <ClickUpdate
                      hide={setCatShow}
                      data={{
                        placeholder: "Set your profile category",
                        data: cat,
                        setData: setCat,
                      }}
                      save={handleUpdateCat}
                    />
                  )}
                </div>
                <div className="profile-intro-item">
                  <span className="into-title">Work</span>

                  {user.work.map((data, index) => (
                    <div className="profile-into-data" key={index}>
                      <div className="profile-intro-details">
                        <img
                          src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/Q9Qu4uLgzdm.png?_nc_eui2=AeHDKFA7oFiVHY0doohutozPQE0O-ZdJm-NATQ75l0mb489mSOlQp9HHtO0i2FMHiI0"
                          alt=""
                        />
                        <span>{data.position}</span> of
                        <strong>{data.company}</strong>
                      </div>
                      <button
                        className="edit-icons"
                        onClick={() => handleWorkDel(data.company)}
                      >
                        <span
                          className="del-btn"
                          style={{
                            backgroundImage:
                              'url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/oxNZT_HFDW2.png?_nc_eui2=AeGD2uBgMiVzttKKSmIMsNTE1lk3Alp9npTWWTcCWn2elJT7NPKlxCqf7zMafwv6g_U")',
                          }}
                        ></span>
                      </button>
                    </div>
                  ))}

                  {!jobShow && (
                    <a href="#" onClick={handleJobShow}>
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                        alt=""
                      />
                      <span className="into-name">Add a workplace</span>
                    </a>
                  )}

                  {jobShow && (
                    <ClickUpdate
                      hide={setJobShow}
                      data={{
                        placeholder: "Set Company Name",
                        data: company,
                        setData: setCompany,
                      }}
                      data2={{
                        placeholder: "Set Position Name",
                        data: position,
                        setData: setPosition,
                      }}
                      save={handleWorkSave}
                    />
                  )}
                </div>

                <div className="profile-intro-item">
                  <span className="into-title">Education</span>
                  <a href="#">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                      alt=""
                    />
                    <span className="into-name">Add secondary school</span>
                  </a>

                  <a href="#">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                      alt=""
                    />
                    <span className="into-name">Add university</span>
                  </a>
                </div>

                <div className="profile-intro-item">
                  <span className="into-title">Current town/city</span>
                  <a href="#">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                      alt=""
                    />
                    <span className="into-name">Add current city</span>
                  </a>
                </div>

                <div className="profile-intro-item">
                  <span className="into-title">Home town</span>
                  <a href="#">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                      alt=""
                    />
                    <span className="into-name">Add home town</span>
                  </a>
                </div>

                <div className="profile-intro-item">
                  <span className="into-title">Relationship</span>
                  <a href="#">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                      alt=""
                    />
                    <span className="into-name">Add a relationship status</span>
                  </a>
                </div>

                <div className="profile-intro-item">
                  <span className="into-title">Websites</span>
                  <a href="#">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                      alt=""
                    />
                    <span className="into-name">
                      Add your portfolio website
                    </span>
                  </a>
                </div>

                <div className="profile-intro-item">
                  <span className="into-title">Social Link</span>
                  <a href="#">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png?_nc_eui2=AeGgN0SDxwATuPLHlMzWnwkJXco6tKIYP1Fdyjq0ohg_UUb0LzH7jlmC4Ssac5E9jLR5EWDSwoEFO06g_GeOiQ3s"
                      alt=""
                    />
                    <span className="into-name">Add your social links</span>
                  </a>
                </div>
              </div>
              <div className="profile-modal-footer">
                <span className="update-info">Update your information</span>
                <div className="update-btns">
                  <button onClick={() => setEditDetails(!editDetails)}>
                    Cancel
                  </button>
                  <button className="blue">Save</button>
                </div>
              </div>
            </FbModal>
          )}

          <button
            onClick={() => setEditDetails(!editDetails)}
            className="personal-info-button"
          >
            Edit details
          </button>
        </div>
        <div className="hobbies">
          <div className="hobbies-list">
            <div className="hobbie-list-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616616.png"
                alt=""
              />
              <span>Traveling</span>
            </div>
            <div className="hobbie-list-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616616.png"
                alt=""
              />
              <span>Traveling</span>
            </div>
            <div className="hobbie-list-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616616.png"
                alt=""
              />
              <span>Traveling</span>
            </div>
            <div className="hobbie-list-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616616.png"
                alt=""
              />
              <span>Traveling</span>
            </div>
          </div>
          <button className="personal-info-button">Edit Hobbies</button>
        </div>
        <div className="profile-featured">
          <div className="profile-featured-gallery">
            <div
              className="profile-featured-item"
              onClick={() => setFeaturedShow(true)}
            >
              <div
                style={{
                  backgroundImage:
                    "url('https://d2b464iem8ayj4.cloudfront.net/assets/marketing/gallery-walls-header-frame-b9be334daf2e9daf663cb422e7e7ad460aa9e8f6314e7daaf6b9a55b6e793c6f.jpg')",
                }}
                className="profile-featured-image"
              ></div>
              <span className="featured-count">+33</span>
            </div>
          </div>
          {featuredShow && (
            <PopupFullWidth hide={setFeaturedShow}>
              <StorySlider hide={setFeaturedShow} />
            </PopupFullWidth>
          )}
          <div className="add-featured-modal">
            {featuredAddShow && !featuredUploadShow && (
              <FbModal title="Edit Featured" closePopup={setFeaturedAddShow}>
                <div className="add-featured-banner">
                  <img src={banner} alt="" />
                  <p>
                    Feature your favourite photos and stories here for all of
                    your friends to see.
                  </p>
                  <button onClick={() => setFeaturedUploadShow(true)}>
                    Add New
                  </button>
                </div>
              </FbModal>
            )}

            {featuredUploadShow && (
              <FbModal title="Edit featured collection" back={true}>
                <div
                  className="add-featured-upload"
                  style={{ minHeight: "550px" }}
                >
                  <label htmlFor="featuredUpload">Upload photos</label>
                  <input
                    onChange={handleFeaturedPhotos}
                    type="file"
                    multiple={true}
                    id="featuredUpload"
                    style={{ display: "none" }}
                  />
                  <div className="featured-preview">
                    {featuredPhotos.map((item, index) => {
                      const prevURL = URL.createObjectURL(item);

                      return (
                        <>
                          <div className="preview-item" key={index}>
                            <label
                              className="wrap-label"
                              htmlFor={`checkbox-${index}`}
                            >
                              <img src={prevURL} alt="" />
                            </label>
                            <div class="container">
                              <div class="round">
                                <input
                                  type="checkbox"
                                  value={item.name}
                                  id={`checkbox-${index}`}
                                  checked={featuredChecked.includes(item)}
                                  onChange={handleFeaturdPreviewChange}
                                />
                                <label for="checkbox"></label>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="featured-buttons">
                    <button>Cancel</button>
                    <button
                      className="active"
                      disabled={featuredChecked.length === 0}
                      onClick={handleFeaturedSlider}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </FbModal>
            )}
          </div>

          <button
            onClick={() => setFeaturedAddShow(true)}
            className="personal-info-button"
          >
            Add featured
          </button>
        </div>
      </div>
    </Fbcard>
  );
};

export default ProfileIntro;
