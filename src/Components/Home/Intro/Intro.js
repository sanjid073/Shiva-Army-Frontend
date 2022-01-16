import React, { useEffect, useState } from "react";
import "./Intro.css";
import petImg from "../../../imgs/Pet-Sticker.png";
import star from "../../../imgs/Star.png"
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
const Intro = () => {
  const [analysiss, setAnalysis] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/analysis")
    .then(res => res.json())
    .then(data => setAnalysis(data))
  }, [])
  const [introTexts, setIntroTexts] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/intro")
      .then((res) => res.json())
      .then((data) => setIntroTexts(data));
  }, []);
  return (
    <div className="container">
      <div className="intro">
        <div className="row">
        
          <div className="col-lg-6">
              <img className="star" src={star} alt="" />
              {introTexts.map(introText=> 
              <Zoom left>
            <h3>
              World's Best <br />
              Community Coin
            </h3>
           
              <p>
              {introText.intro_sub}
            </p>
            <div className="d-flex address">
              <div className="address-box">
              {introText.address_box}
              </div>
            
              <button className="main-btn">Copy Address</button>
            </div>
            </Zoom>
            
            ) }
            
           {analysiss.map(analysis =><Bounce bottom> <div className="d-flex analysis">
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
            </Bounce>
           ) }
           
          </div>
          <Zoom>
          <div className="col-lg-6">
            
              <div className="pet-img">
                <img src={petImg} alt="" />
            </div>
           
          </div>
           </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Intro;
