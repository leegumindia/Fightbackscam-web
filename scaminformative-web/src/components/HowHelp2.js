import React from "react";

import "../components/HowHelp2.css";
import "../components/Fonts.css";
import image1 from "../images/complain.png";
import image2 from "../images/unity1.png";
import image3 from "../images/justice1.png";

function HowHelp() {
  return (
    <>
      <section>
        <div className="mt-3">
          <h1
            className="page-text roboto-bold pt-5"
            style={{ textAlign: "center", color: "#484646" }}
          >
            Steps to Report Scam!
          </h1>
        </div>
        <section id="header" className="d-flex align-items-center">
          <div
            className="container-fluid nav_bg"
            style={{ overflowX: "hidden" }}
          >
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row ms-3 me-3">
                  <div className="col-md-7  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1
                      className="sub-text roboto-bold"
                      style={{ color: "#2D5767" }}
                    >
                      Register your Scam
                    </h1>

                    <p
                      className="my-3 content roboto-regular"
                      style={{ color: "black" }}
                    >
                      Have you or someone you care about been{" "}
                      <span style={{ fontWeight: "bold" }}>
                        scammed online?
                      </span>
                      Tell us your story and help others avoid the same{" "}
                      <span style={{ fontWeight: "bold" }}>fraud</span>. We're
                      here to listen and learn, so the more details you share,
                      the better we can fight!
                    </p>
                  </div>
                  <div className="col-lg-5 col-sm-app col-md-5 order-2 order-lg-2 header-img1">
                    <img
                      src={image1}
                      className="img-fluid sm:w-screen lg:w-screen mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="header" className="d-flex align-items-center ">
          <div
            className="container-fluid nav_bg"
            style={{ overflowX: "hidden" }}
          >
            <div className="row ">
              <div className="col-10 mx-auto">
                <div className="row ms-3 me-3">
                  <div className="col-md-7 orer-2 order-lg-1 d-flex justify-content-center flex-column ">
                    <h1
                      className="sub-text roboto-bold"
                      style={{ color: "#2D5767" }}
                    >
                      Collecting proofs nation wide
                    </h1>

                    <p
                      className="my-3 content robot-regular"
                      style={{ color: "black" }}
                    >
                      Our team is actively{" "}
                      <span style={{ fontWeight: "bold" }}>
                        collecting evidence from across India
                      </span>{" "}
                      to build strong cases<br></br>
                      against scammers. By submitting your proofs, you
                      contribute to our collective <br></br>
                      effort to combat fraud
                    </p>
                  </div>
                  <div
                    className=" col-lg-5 col-sm-app col-md-5 order-1 order-lg-2 header-img"
                    data-aos="zoom-in"
                  >
                    <img
                      src={image2}
                      className="img-fluid sm:w-screen lg:w-screen"
                      alt="home-img"
                      // style={{height:'80%'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="header" className="d-flex align-items-center ">
          <div
            className="container-fluid nav_bg"
            style={{ overflowX: "hidden" }}
          >
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row ms-3 me-3">
                  <div className="col-md-7 orer-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1
                      className="subt-text roboto-bold"
                      style={{ color: "#2D5767" }}
                    >
                      Fight against scams
                    </h1>

                    <p className="my-3 content" style={{ color: "black" }}>
                      <span style={{ fontWeight: "bold" }}>
                        We won't stop until justice is served
                      </span>
                      . Once we have enough evidence, we'll bring your case
                      directly to the police or relevant authorities. We'll
                      advocate for you every step of the way, ensuring your
                      complaint is registered and swift action is taken
                    </p>
                  </div>
                  <div
                    className=" col-lg-5 col-sm-app col-md-5 order-1 order-lg-2 header-img2"
                    data-aos="zoom-in"
                  >
                    <img
                      src={image3}
                      className="img-fluid sm:w-screen lg:w-screen"
                      alt="home-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default HowHelp;
