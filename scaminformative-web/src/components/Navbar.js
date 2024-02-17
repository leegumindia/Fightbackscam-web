import React from "react";


function Navbar (){
    return (
        <>
        <div className=" container-fluid nav_bg shadow ">
        <div className="row">
          <div className="mx-auto">
          <nav className="navbar navbar-expand-lg" style={{fontFamily: 'sans-serif'}}>
  <div className="container-fluid font-sans">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
        <li className="nav-item font-semibold">
          <button className="nav-link" to="features" spy={true} smooth={true} duration={500} style={{paddingRight:'2rem'}}><a href="" style={{textDecoration:'none', color:'grey'}}>Login</a></button>
        </li>
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