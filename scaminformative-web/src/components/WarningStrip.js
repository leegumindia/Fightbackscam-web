import React from "react";
import warning_icon from "../images/warning_icon.png";

export default function WarningStrip (){
    return (
        <>
        <section className=""style={{backgroundColor :'#B14AED'}}>
     <div className="row col-10 mx-auto">
        <div className="col-sm-12 col-lg-10">
        <div className="section-main d-flex flex-row roboto-black mt-2">
                    {/* <img
                      src={warning_icon}
                      style={{ height: 40 }}
                      className="section-img img-fluid sm:w-screen lg:w-screen"
                      alt="i"
                    /><span style={{paddingLeft:'0.5rem'}}></span> */}
                    <h2 className="section-header" style={{ color: "white" }}>
                      <strong>BEWARE of investment scams</strong>
                    </h2> <br></br>
                  </div>
        </div>
        <div className="col-sm-6 col-lg-2">
        <button type="submit" className="btn" style={{backgroundColor:'#941ED9', color:'white', fontWeight:'500'}}>SUBSCRIBE</button>
        </div>
     </div>

    </section>
        </>
    );
}