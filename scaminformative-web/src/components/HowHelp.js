import React from "react";

import'../components/HowHelp.css';
import image1 from "../images/registerComplaint.png";
import image2 from "../images/unity.png";
import image3 from "../images/justice.png";


function HowHelp() {
   return (
    <>
     <div>
         <h1 className="page-text">How can we help you?</h1> 
        </div>
     <section id="header" className="d-flex align-items-center ">
    
        <div className="container-fluid nav_bg"style={{overflowX:'hidden'}}>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row" >
              <div className="col-md-7  pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column home-text1">
                <h2 className="sub-text" style={{color:'#EF7820'}}>
                    <strong>
                    Report Fraud Case
                    </strong>
                  </h2>
                
                  <p className="my-3 content" style={{color:'black'}}>
                  Have you or someone you care about been <span style={{fontWeight:'bold'}}>scammed online?</span><br></br> 
                  Tell us your story and help others avoid the same <span style={{fontWeight:'bold'}}>fraud</span>.<br></br> 
                  We're here to listen and learn, so the more details you share, the better we can fight!  <br></br>
                  </p>
                  
                  <div className="mt-4 app-button">
                   <a href="" target="_blank">
                   <button className="btn btn-default  mr-2" style={{backgroundColor:'#EF7820',color:'white'}}>Report your Scam</button>
                    </a>
                 </div>
                </div>
              <div className="col-lg-5 col-sm-app col-md-5 order-1 order-lg-2 header-img1"data-aos="zoom-in">
                  <img
                    src={image1}
                    className="img-fluid sm:w-screen lg:w-screen mt-5"
                    alt="home-img"
                   
                  />
                </div>
               
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  id="header" className="d-flex align-items-center ">
    
        <div className="container-fluid nav_bg"style={{overflowX:'hidden'}}>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row" >
              <div className="col-md-7 pt-5 pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column home-text">
                <h1  style={{color:'#EF7820'}}>
                    <strong>
                    Collecting proofs nation wide    
                    </strong>
                  </h1>
                
                  <p className="my-3 content" style={{color:'black'}}>
                  Our team is actively <span style={{fontWeight:'bold'}}>collecting evidence from across India</span> to build strong cases<br></br>
                  against scammers. By submitting your proofs, you contribute to our collective <br></br>
                  effort to combat fraud
                  </p>
                  
                 
                </div>
              <div className=" col-lg-5 col-sm-app col-md-5 order-1 order-lg-2 header-img"data-aos="zoom-in">
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
      <section  id="header" className="d-flex align-items-center ">
    
    <div className="container-fluid nav_bg"style={{overflowX:'hidden'}}>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row" >
          <div className="col-md-7 pt-5 pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column home-text">
            <h1  style={{color:'#EF7820'}}>
                <strong>
                Fight against scams 
                </strong>
              </h1>
            
              <p className="my-3 content" style={{color:'black'}}>
              <span style={{fontWeight:'bold'}}>We won't stop until justice is served</span>. Once we have enough evidence, we'll bring your case directly to the police or relevant authorities. We'll advocate for you every step of the way, ensuring your complaint is registered and swift action is taken
              </p>
              
             
            </div>
          <div className=" col-lg-5 col-sm-app col-md-5 order-1 order-lg-2 header-img2"data-aos="zoom-in">
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



 
    </>
   );
}


export default HowHelp;