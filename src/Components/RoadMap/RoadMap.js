import React from "react";
import { NavLink } from "react-router-dom";
import ShivaToken from "../Home/ShivaToken/ShivaToken";
import "./RoadMap.css";

const RoadMap = () => {
  return (
    <div className="roadmap">
      <div className="container">
        <h1 className="page-heading">Roadmap</h1>
        <div className="navigate-link">
          <NavLink to="/">Home {">"} </NavLink>
          <NavLink to="/roadMap"> Roadmap</NavLink>
        </div>

        <div className="roadmap-item">
          <div className="row align-items-baseline">
            <div className="col-lg-4 mb-3">
              <div className="roadMap-box">
                <h3>Phase 1</h3>
                <ul>
                  <li>Website development</li>
                  <li>Socials Creation</li>
                  <li>Memes and Stickers</li>
                  <li> Promotional/Logo Reveal Videos</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="roadMap-box">
                <h3>Phase 2</h3>
                <ul>
                  <li>Contract Verified on BSCScan</li>
                  <li>passed Audit by Soken.io</li>
                  <li>passed Audit by TechRate</li>
                  <li>passed Audit by Solidproof</li>
                  <li>List on PancakeSwap</li>
                  <li>Lock Liquidity 100%</li>
                  <li>5000+ Holders</li>
                  <li>List on Coingecko</li>
                  <li>LiveCointWatch</li>
                  <li>Mars Floki Inu Dashboard</li>
                  <li>BSCScan Update (Logo, TG, Twitter, Website)</li>
                  <li>Icon updates - Trustwallet, Dextools</li>
                  <li>Partnership</li>
                  <li>Extended Marketing Plan & Push</li>
                  <li>Market Cap Stable Above 50 million</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="roadMap-box">
                <h3>Phase 3</h3>
                <ul>
                  <li>First Vote to Donate to Charities</li>
                  <li>list on indoex</li>
                  <li>Influencer Partnerships</li>
                  <li>Big Marketing Push (i.e BTOK Ads)</li>
                  <li>Update ON Trustwallet</li>
                  <li>Launch Lottery</li>
                  <li>Certik audit</li>
                  <li>Launch Mars Floki Inu Swap</li>
                  <li>CEX listings Hotbit.io</li>
                  <li>CEX listings Whitebit</li>
                  <li>CEX listings Bitmart</li>
                  <li>Trading Competition</li>
                  <li>List on CoinMarketCap</li>
                  <li>Extended Marketing Plan & Push</li>
                  <li>NFT / NFT Marketplace Creation</li>
                  <li>list on LBank</li>
                  <li>50k+ Holders</li>
                  <li>Market Cap Stable Above 100 million</li>
                  <li>NFT Game metasverse</li>
                  <li>Android, iOS, and Windows Release</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         
         <ShivaToken/>

      </div>
    </div>
  );
};

export default RoadMap;
