import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Sliders.css";
import card1 from "../../../imgs/Frame 291.png";
import card2 from "../../../imgs/Frame 292.png";
import card3 from "../../../imgs/Frame 293.png";
import button from "../../../imgs/Frame 19079.png"

const Sliders = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 1.5,
      spacing: -110,
    },
  });

  return (
    <div className="sliders-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 text-center">
            <h3>Roadmap</h3>
            <img src={button} alt="" />
          </div>
          <div className="col-lg-8">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <img src={card1} alt="" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src={card2} alt="" />
              </div>
              <div className="keen-slider__slide number-slide3">
                <img src={card3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
