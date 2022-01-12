import React, { useEffect, useState } from "react";
import "./TokenomicsSection.css";
import img1 from "../../../imgs/svgexport-6 (85) 1.png";
import img2 from "../../../imgs/svgexport-6 (86) 1.png";
import img3 from "../../../imgs/svgexport-6 (87) 1.png";
import star from "../../../imgs/Star.png"

const TokenomicsSection = () => {
  const [analysiss, setAnalysis] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/analysis")
      .then((res) => res.json())
      .then((data) => setAnalysis(data));
  }, []);
  return (
    <div className="TokenomicsSection">
      <div className="container">
        <div className="TokenomicsSection-header">
        <img className="star-1" src={star} alt="" />
          <h3>Tokenomics</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
          </p>
        </div>

        {analysiss.map((analysis) => (
          <div className="row text-center tokenmics-analysis">
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
      </div>
    </div>
  );
};

export default TokenomicsSection;
