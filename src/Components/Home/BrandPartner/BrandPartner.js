import React, { useEffect, useState } from "react";
import Binance_logo from "../../../imgs/Binance_logo logo.png";
import Ethereum_logo from "../../../imgs/Ethereum logo.png";
import bcio from "../../../imgs/bcio.png";
import "./BrandPartner.css";
import Wobble from 'react-reveal/Wobble';
const BrandPartner = () => {
  const [aboutTexts, setAboutTexts] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/aboutText")
      .then((res) => res.json())
      .then((data) => setAboutTexts(data));
  }, []);
  return (
    <div className="container">
      <div className="brand-partner">
      
        <div className="row">
        <Wobble>
          <div className="col-lg-4">
            <img src={Binance_logo} alt="" />
          </div>
          </Wobble>
          <Wobble>
          <div className="col-lg-4">
            <img src={Ethereum_logo} alt="" />
          </div>
          </Wobble>
          <Wobble>
          <div className="col-lg-4">
            <img src={bcio} alt="" />
          </div>
          </Wobble>
        </div>
        
      </div>
      {
        aboutTexts.map(aboutText => <div className="about-header">
        <h3>About us</h3>
        <p className="w-25 mx-auto">
          {aboutText.about_sub}
        </p>
      </div>)
      }
    </div>
  );
};

export default BrandPartner;
