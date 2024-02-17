import React from "react";

import "../components/Home.css";
import image from "../images/homepage_graphic.png";
import fist_navy from "../images/fist_navy.png";
function App() {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg" style={{ overflowX: "hidden" }}>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  data-aos="slide-up"
                  className="col-md-7 pt-5  d-flex justify-content-center flex-column home"
                >
                  <div className="col-md-7 pt-5  d-flex justify-content-center flex-row">
                    <h1 style={{ color: "black" }}>
                      <strong>#F</strong>
                    </h1>
                    <img
                      src={fist_navy}
                      className="img-fluid sm:w-screen lg:w-screen"
                      alt="i"
                    />
                    <h1 style={{ color: "black" }}>
                      <strong>ghtBackScams</strong>
                    </h1>
                  </div>
                  <br></br>
                  {/* #211b1b colour used previously here was: 595656 */}
                  <h2 className="text-content" style={{ color: "black" }}>
                    Take Action Against Online Fraud: We're Here to Help!
                  </h2>
                  <h2 className="my-3 content" style={{ color: "black" }}>
                    Have you been a victim of{" "}
                    <span style={{ fontWeight: "bold" }}>online fraud?</span>{" "}
                    Whether it's a{" "}
                    <span style={{ fontWeight: "bold" }}>
                      phishing scam, identity theft
                    </span>{" "}
                    experiencing online fraud can be stressful and overwhelming.
                    You're not alone. <br></br>
                  </h2>
                  <h3 className=" sub-content" style={{ color: "#488E1B" }}>
                    Don't hesitate to reach out!
                  </h3>
                  <div className="mt-4 pb-5 app-button">
                    <a href="" target="_blank">
                      <button
                        className="btn btn-default  mr-2"
                        style={{ backgroundColor: "#EF7820", color: "white" }}
                      >
                        Report your Scam
                      </button>
                    </a>
                  </div>
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
