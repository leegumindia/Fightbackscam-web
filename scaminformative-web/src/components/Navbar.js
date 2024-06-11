import React from "react";
import image from "../images/homepage_graphic.png";
import "../components/Fonts.css";
import Modal1 from "./GoogleForm.js";
import warning_icon from "../images/warning_icon.png";
import "../components/Navbar.css";
function Navbar() {
  return (
    <>
     
      <div
        className="fixed-top container-fluid nav_bg shadow "
        style={{ backgroundColor: "#14AAD0" }}
      >
      <div className="row">
        <div className="col-sm-12 col-lg-10">
        <div className="section-main d-flex flex-row roboto-black mt-2">
                    <img
                      src={warning_icon}
                      style={{ height: 40 }}
                      className="section-img img-fluid sm:w-screen lg:w-screen"
                      alt="i"
                    /><span style={{paddingLeft:'0.5rem'}}></span>
                    <h2 className="section-header" style={{ color: "white" }}>
                      <strong>BEWARE of investment scams</strong>
                    </h2> <br></br>
                  </div>
                
        </div>
        <div className="col-sm-6 col-lg-2 button"> 
        <button type="submit" className="btn mt-2" style={{backgroundColor:'#025B72', color:'white', fontWeight:'500', fontSize:'medium'}}>Share on WhatsApp</button>
        {/* <input class="btn btn-primary" type="submit" value="Submit"/> */}
        </div>
     </div>
   
        <div className="row" style={{backgroundColor:'white'}}>
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
