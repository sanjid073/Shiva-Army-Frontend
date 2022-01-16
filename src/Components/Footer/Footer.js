import React, { useEffect, useState } from 'react';
import "./Footer.css"
import footer_logo from "../../imgs/ShibaArmyToken (2).png"
import { NavLink } from 'react-router-dom';
import youtube from "../../imgs/youtube.png"
import discord from "../../imgs/discord.png"
import insta from "../../imgs/instagram.png"

const Footer = () => {
    const [contactTexts, setContactTexts] = useState([]);

    useEffect(() => {
      fetch("https://peaceful-scrubland-01312.herokuapp.com/contact")
        .then((res) => res.json())
        .then((data) => setContactTexts(data));
    }, []);
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-logo">
                            <img src={footer_logo} alt="" />
                            <p>The best token marketplace website in the world and feel your experience in selling or buy our work</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-about">
                            <h3>About</h3>
                            <NavLink  to="/">Product</NavLink>
                            <NavLink to="/">Resource</NavLink>
                            <NavLink to="/">Term & Condition</NavLink>
                            <NavLink to="/FAQ">FAQ</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-Company">
                            <h3>Company</h3>
                            <NavLink  to="/team">Our Team</NavLink>
                            <NavLink to="/">Partner With Us</NavLink>
                            <NavLink to="/">Privacy & Policy</NavLink>
                            <NavLink to="/">Features</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        {
                            contactTexts.map(contactText => <div className="footer-Contact">
                            <h3>Contact</h3>
                            <NavLink to="/" >{contactText.contact_phone}</NavLink>
                            <NavLink to="/">{contactText.contact_email}</NavLink>
                            <div className="social-icons d-flex">
                            <a href={contactText.contact_youtube}>
                                <img className="me-5" src={youtube} alt="" />
                                </a>
                                <a href={contactText.contact_discord}>
                                <img  className="me-5"  src={discord} alt="" />
                                </a>
                                <a href={contactText.contact_discord}>
                                <img    src={insta} alt="" />
                                </a>
                               
                            </div>
                        </div>)
                        }
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;