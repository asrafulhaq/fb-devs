import React, { useEffect, useState } from "react";
import "./StorySlider.css";
import { featured } from "../../faker/featured";

const StorySlider = ({ hide }) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSlideNext = () => {
    setSliderIndex((sliderIndex + 1) % featured.length);
  };

  const handleSlidePrev = () => {
    setSliderIndex((sliderIndex - 1) % featured.length);
  };

  useEffect(() => {
    const sliderTimeout = setTimeout(() => {
      if (sliderIndex <= featured.length) {
        setSliderIndex(sliderIndex + 1);
      }
      if (sliderIndex === featured.length - 1) {
        hide(false);
      }
    }, 5000);

    return () => clearTimeout(sliderTimeout);
  }, [sliderIndex]);

  return (
    <div className="story-slider-wraper">
      <div className="story-slider">
        <div
          className="slider-item"
          style={{
            backgroundImage: `url(${featured[sliderIndex].photo})`,
          }}
        >
          <div className="slider-bars-wraper">
            {featured.map((item, index) => (
              <div
                className={`bars-item ${
                  index === sliderIndex ? "active" : ""
                } ${index < sliderIndex ? "viwed" : ""}`}
                key={index}
              >
                <div className={`progress`}></div>
              </div>
            ))}
          </div>
          <div className="navigation">
            <div className="prev">
              {sliderIndex === 0 ? (
                ""
              ) : (
                <button onClick={handleSlidePrev}>
                  <i class="bx bx-chevron-left"></i>
                </button>
              )}
            </div>
            <div className="next">
              <button onClick={handleSlideNext}>
                <i class="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySlider;
