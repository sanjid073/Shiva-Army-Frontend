import React from 'react';
import { NavLink } from 'react-router-dom';
import About from '../About/About';
import ShivaToken from '../Home/ShivaToken/ShivaToken';
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="About-us-section">
            <div className="container">
                <h1 className="page-heading">About</h1>
                <div className="navigate-link">
                <NavLink to="/">Home {'>'} </NavLink>               
                <NavLink to="/aboutUs"> About</NavLink>
                </div>
            </div>

            <About/>
            <ShivaToken/>
        </div>
    );
};

export default AboutUs;