import React, { useEffect, useState } from "react";
import "./Intro.css";
import petImg from "../../../imgs/Pet-Sticker.png";
import star from "../../../imgs/Star.png"

const Intro = () => {
  const [analysiss, setAnalysis] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/analysis")
    .then(res => res.json())
    .then(data => setAnalysis(data))
  }, [])
  // analysiss.map(analysis => console.log(analysis.Liquidity))
  return (
    <div className="container">
      <div className="intro">
        <div className="row">
          <div className="col-lg-6">
              <img className="star" src={star} alt="" />
            <h3>
              World's Best <br />
              Community Coin
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Nunc vulputate libero et velit.
            </p>
            <div className="d-flex address">
              <div className="address-box">
                0xc748673057861a797275CD8A068AbB95A9
              </div>
              <button className="main-btn">Copy Address</button>
            </div>
           {analysiss.map(analysis => <div className="d-flex analysis">
                <div className="div1">
                    <h1>{analysis.Liquidity}%</h1>
                    <p>Liquidity</p>
                </div>
                <div className="div2">
                <h1>{analysis.Marketing}%</h1>
                    <p>Marketing</p>
                </div>
                <div className="div3">
                <h1>{analysis.Buy_Tax}%</h1>
                    <p>Buy Tax</p>
                </div>
            </div>
           ) }
          </div>
          <div className="col-lg-6">
              <div className="pet-img">
                <img src={petImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
