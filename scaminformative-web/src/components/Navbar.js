import React from "react";
import image from "../images/homepage_graphic.png";
import "../components/Fonts.css";
import Modal1 from "./GoogleForm.js";

function Navbar() {
  return (
    <>
      <div
        className="fixed-top container-fluid nav_bg shadow "
        style={{ backgroundColor: "white" }}
      >
        <div className="row">
          <div className="mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid font-sans">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div>
                    <a
                      class="navbar-brand d-flex flex-row ms-auto mb-2 mb-lg-0"
                      href="#"
                    >
                      <img src={image} alt="" width="50px" height="50px" />
                      {/* <h6>FightBackScams</h6> */}
                    </a>
                  </div>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {/* <li class="nav-item active">
        <a class="nav-link" style={{paddingRight :'2rem', fontWeight:'bold'}} href="#"><h5>Home</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{paddingRight :'2rem', fontWeight:'bold'}} href="#"><h5>Home</h5></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{paddingRight :'2rem', fontWeight:'bold'}} href="#"><h5>Home</h5></a>
      </li> */}
                    <a className="nav-link">
                      <Modal1></Modal1>
                      {/* <button type="button" class="btn btn-default" style={{backgroundColor: '#2D5767', color: 'white', width: '10rem',borderRadius: '5rem'}}>Report Fraud Case</button> */}
                    </a>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
