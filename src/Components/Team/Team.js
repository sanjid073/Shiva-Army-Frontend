import React from "react";
import { NavLink } from "react-router-dom";
import "./Team.css";
import ShivaToken from "../../Components/Home/ShivaToken/ShivaToken";
import team_1 from "../../imgs/team-1.png";
import team_2 from "../../imgs/team-2.png";
import team_3 from "../../imgs/team-3.png";
import team_4 from "../../imgs/team-4.png";
import team_5 from "../../imgs/team-5.png";
import team_6 from "../../imgs/team-6.png";

const Team = () => {
  return (
    <div className="team-page">
      <div className="container">
        <h1 className="page-heading">Our Team</h1>
        <div className="navigate-link">
          <NavLink to="/">Home {">"} </NavLink>
          <NavLink to="/team"> Our Team</NavLink>
        </div>
        <div className="team-member">
          <div className="row">
            <div className="col-lg-4">
              <img src={team_1} alt="" />
              <h3>Anrew Gaunfield</h3>
              <p>CEO</p>
            </div>
            <div className="col-lg-4">
              <img src={team_2} alt="" />
              <h3>Anrew Gaunfield</h3>
              <p>Developer</p>
            </div>
            <div className="col-lg-4">
              <img src={team_3} alt="" />
              <h3>Anrew Gaunfield</h3>
              <p>Engineer</p>
            </div>
            <div className="col-lg-4">
              <img src={team_4} alt="" />
              <h3>Anrew Gaunfield</h3>
              <p>Digital Marketing Manager</p>
            </div>
            <div className="col-lg-4">
              <img src={team_5} alt="" />
              <h3>Anrew Gaunfield</h3>
              <p>Developer</p>
            </div>
            <div className="col-lg-4">
              <img src={team_6} alt="" />
              <h3>Anrew Gaunfield</h3>
              <p>Engineer</p>
            </div>
          </div>
        </div>
        <ShivaToken />
      </div>
    </div>
  );
};

export default Team;
