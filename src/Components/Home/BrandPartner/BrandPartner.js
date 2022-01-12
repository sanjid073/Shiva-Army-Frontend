import React from "react";
import Binance_logo from "../../../imgs/Binance_logo logo.png";
import Ethereum_logo from "../../../imgs/Ethereum logo.png";
import bcio from "../../../imgs/bcio.png";
import "./BrandPartner.css";
const BrandPartner = () => {
  return (
    <div className="container">
      <div className="brand-partner">
        <div className="row">
          <div className="col-lg-4">
            <img src={Binance_logo} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={Ethereum_logo} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={bcio} alt="" />
          </div>
        </div>
      </div>
      <div className="about-header">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>
    </div>
  );
};

export default BrandPartner;
