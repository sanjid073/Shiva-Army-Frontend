import React, { useEffect, useState } from "react";
import "./About.css";
import pet from "../../imgs/Frame (1).png";
import Shake from "react-reveal/Shake";

const About = () => {
  const [aboutTexts, setAboutTexts] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-scrubland-01312.herokuapp.com/aboutText")
      .then((res) => res.json())
      .then((data) => setAboutTexts(data));
  }, []);
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="pet-i">
              <img src={pet} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            {aboutTexts.map((aboutText) => (
              <Shake>
                <div className="about-info">
                  <h3>Shiba Army Token Protocol</h3>
                  <p>{aboutText.about_text}</p>
                  <button className="main-btn">Show more</button>
                </div>
              </Shake>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
