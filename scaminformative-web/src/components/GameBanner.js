import React from "react";

import "../components/GameBanner.css";
import "../components/HowHelp2.css";
import "../components/Fonts.css";
import game_coming_soon_banner from "../images/Game_coming_soon_banner.png";

export default function gameAnnouncementBanner() {
  return (
    <>
      <section>
        <section id="header" className="d-flex align-items-center">
          <div
            className="container-fluid nav_bg"
            style={{ overflowX: "hidden" }}
          >
            <div className="container">
              <img src={game_coming_soon_banner} className="banner" />
              <form className="banner">
                {/* <label for="whatsapp">
                  Subscribe to get whatsapp message with early access code?\n
                </label> */}
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="Your Whatsapp Number"
                ></input>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
