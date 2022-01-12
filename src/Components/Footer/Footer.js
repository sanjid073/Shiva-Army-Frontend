import React from 'react';
import "./Footer.css"
import footer_logo from "../../imgs/ShibaArmyToken (2).png"
import { Link } from 'react-router-dom';
import youtube from "../../imgs/youtube.png"
import discord from "../../imgs/discord.png"
import insta from "../../imgs/instagram.png"

const Footer = () => {
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
                            <Link  to="/">Product</Link>
                            <Link to="/">Resource</Link>
                            <Link to="/">Term & Condition</Link>
                            <Link to="/">FAQ</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-Company">
                            <h3>Company</h3>
                            <Link  to="/">Our Team</Link>
                            <Link to="/">Partner With Us</Link>
                            <Link to="/">Privacy & Policy</Link>
                            <Link to="/">Features</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-Contact">
                            <h3>Contact</h3>
                            <Link  to="/">+012 3456789</Link>
                            <Link to="/">info@shibaarmytoken</Link>
                            <div className="social-icons d-flex">
                                <img className="me-5" src={youtube} alt="" />
                                <img  className="me-5"  src={discord} alt="" />
                                <img    src={insta} alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;