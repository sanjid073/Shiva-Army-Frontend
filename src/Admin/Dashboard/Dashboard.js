import React from "react";
import { a } from "react-router-dom";
import "./Dashboard.css";
import Analysis from "../../Admin/Analysis/Analysis";
import FaqQustionAndAnswer from "../FaqQustionAndAnswer/FaqQustionAndAnswer";
import AboutText from "../../Admin/AboutText/AboutText"
import HolderAndPrice from "../HolderAndPrice/HolderAndPrice";
import UseFirebase from "../../Hooks/UseFirebase";
import IntroText from "../IntroText/IntroText";
import ContactInfo from "../ContactInfo/ContactInfo";
import TokenomicsText from "../TokenomicsText/TokenomicsText";
const Dashboard = () => {
    const {Logout} = UseFirebase()
  return (
    <div class="" id="wrapper">
      <a
        class="btn main-btn admin-btn"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Dashboard
      </a>
      <button
        class="btn btn-primary d-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Dashboard
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="bg-white fixed" id="sidebar-wrapper">
            <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
              <i class="fas fa-user-secret me-2"></i>Shiva Army Dashboard
            </div>
            <div class="list-group list-group-flush my-3">
              <a
                href="#introText"
                class="list-group-item list-group-item-action second-text fw-bold "
              >
                <i class="fas fa-project-diagram me-2"></i>Intro Text
              </a>
              <a
                href="#Analytics"
                class="list-group-item list-group-item-action second-text fw-bold "
              >
                <i class="fas fa-project-diagram me-2"></i>Analytics
              </a>
              <a
                href="#FaqQustion"
                class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i class="fas fa-chart-line me-2"></i>Faq Questions
              </a>
              <a
                href="#aboutText"
                class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i class="fas fa-paperclip me-2"></i>AboutText
              </a>
              <a
                href="#holderAndPrice"
                class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i class="fas fa-shopping-cart me-2"></i>Holder And Price
              </a>
              <a
                href="#contactInfo"
                class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i class="fas fa-gift me-2"></i>Contact Info
              </a>
              <a
                href="#TokenomoicsSubHeading"
                class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i class="fas fa-comment-dots me-2"></i>Tokenomoics Sub Heading
              </a>
              <a
                href=""
                class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
              >
                <i class="fas fa-map-marker-alt me-2"></i>Outlet
              </a>
              <a
              onClick={Logout}
                href="/"
                class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
              >
                <i class="fas fa-power-off me-2"></i>Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>

        <div class="container-fluid px-4">
          <div class="row my-5">
            <div id="introText">
              <IntroText/>
            </div>
            <hr />
            <div id="Analytics">
              <Analysis></Analysis>
            </div>
            <hr />
            <div id="TokenomoicsSubHeading">
              <TokenomicsText/>
            </div>
            <hr />
            <div id="FaqQustion">
              <FaqQustionAndAnswer />
            </div>
            <hr />
            <div id="aboutText">
              <AboutText/> 
            </div>
            <hr />
            <div id="holderAndPrice">
            <HolderAndPrice/> 
            </div>
            <div id="contactInfo">
            <ContactInfo/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
