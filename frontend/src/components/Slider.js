import React from 'react'
import '../css/Home.css'

const Slider = () => {
  return (
    <div id="demo" className="carousel-slide" data-bs-ride="carousel"  >

      {/* <!-- Indicators/dots --> */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      {/* <!-- The slideshow/carousel --> */}
      <div className="carousel-inner"  >
        <div className="carousel-item active">
          <img src={require('../../src/assets/images/telecom1.jpg')} alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
          <div className="carousel-caption">
            <h1>We give Free Home Services</h1>
            <p >You can Checkout our services</p>
            <div className="slider-btn">
              <button className="btn btn-1 text-white mx-2" >Our Services</button>
              <button className="btn btn-1 text-white" >Get a Quote</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require('../../src/assets/images/telecom1.jpg')} alt="Chicago" className="d-block" style={{ width: "100%" }} />
          <div className="carousel-caption">
            <h1 >Presenting Office Internet</h1>
            <p >Your work is now easy!!!</p>
            <div className="slider-btn">
              <button className="btn btn-4 text-white" >KNOW MORE</button>

            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={require('../../src/assets/images/telecom1.jpg')} alt="New York" className="d-block" style={{ width: "100%" }} />
          <div className="carousel-caption">
            <h1 >Recharge with great Offers</h1>
            <p >You can Checkout Different Schemes</p>
            <div className="slider-btn">
              <button className="btn btn-3 text-white" >RECHARGE NOW</button>
            </div>
            <p className="fw-bolder mt-4" >You can now enjoy additional Schemes</p>
          </div>
        </div>
      </div>

      {/* <!-- Left and right controls/icons --> */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>

  )
}

export default Slider

