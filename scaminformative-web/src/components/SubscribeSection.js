import React from "react";
import graphic from "../images/mobile_notification_graphic.png";
import notification_bell from "../images/notification_bell.png";
import "../components/SubscribeSection.css";
import { IoInformationCircleOutline } from "react-icons/io5";
export default function SubscribeSection (){
return (
    <>
    <section className="mt-4"style={{backgroundColor :'#B14AED'}}>
     <div className="row col-10 mx-auto">
        <div className="col-sm-12 col-lg-10">
        <div className="section-main d-flex flex-row roboto-black mt-2">
                    <img
                      src={notification_bell}
                      style={{ height: 40 }}
                      className="section-img img-fluid sm:w-screen lg:w-screen"
                      alt="i"
                    /><span style={{paddingLeft:'0.5rem'}}></span>
                    <h2 className="section-header" style={{ color: "white" }}>
                      <strong>Game on soon!!!</strong>
                    </h2> <br></br>
                  </div>
                  <p className="section-content" style={{color:'white', fontWeight:'500'}}> 
                    Get notified when the game is live, we'll send your invite code over 
                    <br></br>WhatsApp so that you can experience it early as soon as it's launched
                    </p>
                    <form className="d-flex form">
                        <div className="d-flex form-group mb-2">
                        {/* <label for="inputPassword2"  class="sr-only">Password</label> */}
                        <input className="form-control" type="tel" id="phone" placeholder="Enter your WhatsApp number"/>
                        <button type="submit" className="btn" style={{backgroundColor:'#941ED9', color:'white', fontWeight:'500'}}>SUBSCRIBE</button>
                        <IoInformationCircleOutline style={{color:'white'}}/>
                        </div>
                    </form>
        </div>
        <div className="col-sm-6 col-lg-2 graphic"> 
        <img src={graphic} className="img-fluid sm:w-screen lg:w-screen mt-2" alt="home-img"/>
        </div>
     </div>

    </section>
    </>
);
}