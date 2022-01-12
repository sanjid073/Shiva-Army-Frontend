import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/Shiva-logo.png"
import "./Navbar.css"
const Navbar = () => {
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
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dashboard
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink to="/analysis" class="dropdown-item">Analysis</NavLink></li>
            <li><NavLink to="/FaqQustion" class="dropdown-item">Faq Question</NavLink></li>
            <li><NavLink to="/aboutText" class="dropdown-item">AboutText</NavLink></li>
            <li><NavLink to="/holderAndPrice" class="dropdown-item">holderAndPrice</NavLink></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
            <li className="nav-item">
             <button className=" main-btn">
             Buy on Pancake
             </button>
            </li>
           
            
          </ul>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
