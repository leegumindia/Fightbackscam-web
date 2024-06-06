import React from "react";
import { useState } from "react";

import "../components/Home.css";
import "../components/Fonts.css";

import Modal1 from "./GoogleForm.js";
import image from "../images/homepage_graphic.png";
import fist_navy from "../images/fist_navy.png";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <section id="header" className="d-flex align-items-center mt-5">
        <div className="container-fluid nav_bg" style={{ overflowX: "hidden" }}>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row mt-5">
                <div
                  data-aos="slide-up"
                  className="col-md-7 pt-3 d-flex justify-content-center flex-column home"
                >
                  <div className=" d-flex flex-row roboto-black">
                    <h1 style={{ color: "black" }}>
                      <strong>#F</strong>
                    </h1>
                    <img
                      src={fist_navy}
                      style={{ height: 88 }}
                      className="img-fluid sm:w-screen lg:w-screen"
                      alt="i"
                    />
                    <h1 style={{ color: "black" }}>
                      <strong>ghtBackScams</strong>
                    </h1>
                  </div>
                  <br></br>
                  {/* #211b1b colour used previously here was: 595656 */}
                  <h2
                    className="text-content roboto-medium "
                    style={{ color: "black" }}
                  >
                    Take Action Against Online Fraud: We're Here to Help!
                  </h2>
                  <h2
                    className="my-3 content roboto-regular"
                    style={{ color: "black", fontSize: "1.2rem" }}
                  >
                    Have you been a victim of{" "}
                    <span style={{ fontWeight: "bold" }}>online fraud?</span>{" "}
                    Whether it's a{" "}
                    <span style={{ fontWeight: "bold" }}>
                      phishing scam, identity theft
                    </span>{" "}
                    experiencing online fraud can be stressful and overwhelming.
                    You're not alone. <br></br>
                  </h2>
                  <h3
                    className=" sub-content roboto-medium"
                    style={{ color: "#2D5767" }}
                  >
                    Don't hesitate to reach out!
                  </h3>
                  <div className=" app-button">
                    <Modal1></Modal1>
                  </div>
                  <p
                    className="roboto-regular mt-2 mandate-text"
                    style={{ color: "red" }}
                  >
                    * In case of a scam, report it immediately
                  </p>
                </div>
                <div
                  className="col-lg-5 col-sm-app col-md-5 order-1 order-lg-2 header-img"
                  data-aos="zoom-in"
                >
                  <img
                    src={image}
                    className="img-fluid sm:w-screen lg:w-screen mt-5"
                    alt="home-img"
                    // style={{height:'28em',minWidth:'100'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
