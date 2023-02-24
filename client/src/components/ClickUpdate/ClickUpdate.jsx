import React from "react";
import "./ClickUpdate.css";

const ClickUpdate = ({ save, hide, data, data2 }) => {
  return (
    <>
      <div className="click-update">
        {data && (
          <textarea
            placeholder={data.placeholder}
            name=""
            onChange={(e) => data.setData(e.target.value)}
          >
            {data.data}
          </textarea>
        )}

        {data2 && (
          <textarea
            placeholder={data2.placeholder}
            name=""
            onChange={(e) => data2.setData(e.target.value)}
          >
            {data2.data}
          </textarea>
        )}

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
            <button onClick={() => hide(false)}>Cancel</button>
            <button className="blue" onClick={save}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClickUpdate;
