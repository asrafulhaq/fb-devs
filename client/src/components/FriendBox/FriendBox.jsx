import React from "react";
import "./FriendBox.scss";

const FriendBox = () => {
  return (
    <div className="friend-request-box shadow-reg">
      <img
        className="friends-photo"
        src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/331991711_749141966606663_8845285146120108175_n.jpg?stp=c65.425.1200.1200a_dst-jpg_s240x240&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF7Sqhv8FL3F4VFm76pCcECq6cjXIrw20irpyNcivDbSI2wy4s9dHqvGwfzARKAZ7E&_nc_ohc=hxVCpcYTxPgAX_cBb9s&_nc_oc=AQkDl0VOPThXjOfAFMASAPG2L7P4ynqSidiXPjPbtmcDyW9g-SXGPujt-FmuDuAUeG4&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBUJiE2Cp5oTEOdpWrtZhFUo_IGEWw5BZibxzjtUtRTlQ&oe=6403417B"
        alt=""
      />
      <div className="friend-info">
        <h3>Tanveer Hasan</h3>
        <div className="mutual">
          <div className="mutual-friends">
            <img
              src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/223112640_952238692287751_5578168972235268198_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGciYliHyaFBQLFFXIhJeyR-d4l2YqxAD_53iXZirEAP5VF5tRcSidmTOM1cfDYcNM&_nc_ohc=mJqMWJCSVmMAX8uWdZn&_nc_ht=scontent.fdac157-1.fna&oh=00_AfCLuCdWoMI36GlPWrVLeI_VT-mw6-W1XRNGRnqi0BBp-g&oe=6403931C"
              alt=""
            />
            <img
              src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/330612331_914052423120592_1706093644071124669_n.jpg?stp=c404.252.652.652a_dst-jpg_s240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG8uP3bPLY6JfmoJXLwfKJ_P7VLe1FwzIg_tUt7UXDMiA9V8Lc-8cx-oE1-fJcxwN4&_nc_ohc=EKdc1TsyZ1MAX_L1HwK&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBOkl4w-FA-O9a6mM1HxkWUyb88hcnwIzDMXwoBNRDenQ&oe=6403BE59"
              alt=""
            />
          </div>
          <span>12 mutual friends</span>
        </div>
      </div>
      <div className="friends-action-btns">
        <button className="fb-btn blue">Confirm</button>
        <button className="fb-btn gray-btn">Delete</button>
      </div>
    </div>
  );
};

export default FriendBox;
