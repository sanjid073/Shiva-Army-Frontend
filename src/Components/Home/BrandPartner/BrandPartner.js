import React, { useEffect, useState } from "react";
import Binance_logo from "../../../imgs/Binance_logo logo.png";
import Ethereum_logo from "../../../imgs/Ethereum logo.png";
import bcio from "../../../imgs/bcio.png";
import "./BrandPartner.css";
import Wobble from "react-reveal/Wobble";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BrandPartner = () => {
  const [aboutTexts, setAboutTexts] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/aboutText")
      .then((res) => res.json())
      .then((data) => setAboutTexts(data));
  }, []);
  const animation = { duration: 7000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: 2,
      spacing: -110,
    },
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });
  return (
    <div className="container">
      <div className="brand-partner">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={Binance_logo} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={Ethereum_logo} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={bcio} alt="" />
          </div>
        </div>
      </div>
      {aboutTexts.map((aboutText) => (
        <div className="about-header">
          <h3>About us</h3>
          <p className="w-50 mx-auto">{aboutText.about_sub}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandPartner;
