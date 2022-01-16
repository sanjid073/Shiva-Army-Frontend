import React from "react";
import { NavLink } from "react-router-dom";
import UseFirebase from "../../Hooks/UseFirebase";
import logo from "../../imgs/Shiva-logo.png"
import "./Navbar.css"
const Navbar = () => {
  const {user,Logout} = UseFirebase()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent pt-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/Home">
          <img className="Navbar-logo" src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/aboutUs">
              About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="tokenomoics">
              tokenomoics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/roadMap">
              Roadmap
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/FAQ">
              FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/team">
              Team
              </NavLink>
            </li>
          
            <li className="nav-item">
            <a href="https://pancakeswap.finance/"> <button className=" main-btn">
             Buy on Pancake
             </button></a>
            </li>
           
            
          </ul>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
