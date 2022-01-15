import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Tokenomoics.css";
import img1 from "../../imgs/svgexport-6 (85) 1.png";
import img2 from "../../imgs/svgexport-6 (86) 1.png";
import img3 from "../../imgs/svgexport-6 (87) 1.png";
import pet from "../../imgs/Pet-Sticker-1.png";
import star from "../../imgs/Star.png";
import ShivaToken from "../Home/ShivaToken/ShivaToken";

const Tokenomoics = () => {
  const [analysiss, setAnalysis] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/analysis")
      .then((res) => res.json())
      .then((data) => setAnalysis(data));
  }, []);
  const [tokenomoics, setTokenomoics] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/tokenomoics")
      .then((res) => res.json())
      .then((data) => setTokenomoics(data));
  }, []);
  return (
    <div className="Tokenomoics-page">
      <div className="container">
        <img className="star-2" src={star} alt="" />
        <h1 className="page-heading">Tokenomoics</h1>
        <div className="navigate-link">
          <NavLink to="/">Home {">"} </NavLink>
          <NavLink to="/Tokenomoics"> Tokenomoics</NavLink>
        </div>

        {tokenomoics.map((tokenomoic) => (
          <div className="row align-items-center Tokenomoics-info">
            <div className="col-lg-6">
              <img src={pet} alt="" />
            </div>
            <div className="col-lg-6 text-center">
              <div className="holders">
                <h3>{tokenomoic.holders}</h3>
                <p>HOLDERS</p>
              </div>
              <div className="market-cap">
                <h3>${tokenomoic.market_cap} Millions</h3>
                <p>MARKET CAP</p>
              </div>
              <div className="current-price">
                <h3>${tokenomoic.current_price}</h3>
                <p>CURRENT PRICE</p>
              </div>
            </div>
          </div>
        ))}

        {analysiss.map((analysis) => (
          <div className="row text-center tokenmics-analysis-1">
            <div className="col-lg-4">
              <img src={img1} alt="" />
              <h1>{analysis.Liquidity}%</h1>
              <p>Liquidity</p>
            </div>
            <div className="col-lg-4">
              <img src={img2} alt="" />
              <h1>{analysis.Marketing}%</h1>
              <p>Marketing</p>
            </div>
            <div className="col-lg-4">
              <img src={img3} alt="" />
              <h1>{analysis.Buy_Tax}%</h1>
              <p>Buy Tax</p>
            </div>
          </div>
        ))}

        <ShivaToken />
      </div>
    </div>
  );
};

export default Tokenomoics;
