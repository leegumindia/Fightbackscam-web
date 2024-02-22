import React from "react";

import'../components/TypeOfScams.css';
import image_phone from "../images/proof1.png";


function Scam (){
    return (
        <>
         <div className="col-10 mx-auto">
         <h1 className="page-text-heading pt-5" style={{textAlign:'center', color:'#484646'}}>BEWARE OF SCAMS !!!</h1> 
        </div>
     <section  id="header" className="d-flex align-items-center ">
    
        <div className="container-fluid nav_bg"style={{overflowX:'hidden'}}>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row" >
              <div className="col-lg-8 col-sm-app col-md-8 order-lg-1 header-img-phone"data-aos="zoom-in">
                  <img
                    src={image_phone}
                    className="img-fluid sm:w-screen lg:w-screen mt-5"
                    alt="home-img"
                   
                  />
                </div>
              <div className="col-md-4  pt-lg-0 order-2 d-flex justify-content-center flex-column home-text2">
                <h2 className="sub-text" style={{color:'#2D5767'}}>
                    <strong>
                    DON'T CLICK UNKNOWN LINKS!!!
                    </strong>
                  </h2>
                
                  <p className="my-3 content-text" style={{color:'black'}}>
                  Have you or someone you care about been <span style={{fontWeight:'bold'}}>scammed online?</span><br></br> 
                  Tell us your story and help others avoid the same <span style={{fontWeight:'bold'}}>fraud</span>.<br></br> 
                  We're here to listen and learn, so the more details you share, the better we can fight!  <br></br>
                  </p>
                  
                  
                </div>
             
               
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}


export default Scam;