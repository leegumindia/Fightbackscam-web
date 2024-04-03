import React from "react";
import Banner4 from "../images/Banner 4.png";
import Banner5 from "../images/Banner 5.png";
import Banner6 from "../images/Banner 6.png";
import "../components/Fonts.css";
function TypesOfScams(){
    return (
        <>
        <section className="pt-3 bg-light">
<div className="container px-5 my-5">
<div className="text-center">
<h2 className="fw-bolder mb-0">Types of Scams</h2>
</div>
<div className="row mt-5">
<div className="col-sm-12 col-md-4 mb-5">
<div class="card">
  <img class="card-img-top" src={Banner4} alt="Card image cap"/>
  <div class="card-body">
    <a href="#" class="btn btn-outline-success d-flex justify-content-center" style={{borderRadius:'5rem'}}>Read More</a>
  </div>
</div>

</div>
<div className="col-sm-12 col-md-4 mb-5">
<div class="card">
  <img class="card-img-top" src={Banner5} alt="Card image cap"/>
  <div class="card-body">
    <a href="#" class="btn btn-outline-success d-flex justify-content-center" style={{borderRadius:'5rem'}}>Read More</a>
  </div>
</div>

</div>
<div className="col-sm-12 col-md-4 mb-5">
<div class="card">
  <img class="card-img-top" src={Banner6} alt="Card image cap"/>
  <div class="card-body">
    <a href="#" class="btn btn-outline-success d-flex justify-content-center" style={{borderRadius:'5rem'}}>Read More</a>
  </div>
</div>

</div>


</div>
</div>
        </section>
        </>
    );

}

export default TypesOfScams;