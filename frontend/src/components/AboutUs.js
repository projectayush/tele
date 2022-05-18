import React from 'react'
import '../css/Home.css'

const AboutUs = () => {
  return (
    <>
      <div className="card mt-1 text-center ">
        <div className="card-body">
          <div className="col-md-12">
            <div className="row ">
              <div className="col-md-4 p-4  ">
                <i className="fa-solid fa-location-dot px-4 text-info fw-bolder fs-4 card-title"></i>
                <h3 className="shadow-sm text-info card-text" >Address</h3>
                <h6 className="card-text fs-5" >Block A - 7th Floor, Safal Profitaire, Corporate Rd, Prahlad
                  Nagar, Ahmedabad, Gujarat 380015</h6>
              </div>
              <div className="col-md-4 p-4">
                <i className="fa-solid fa-phone px-4 text-info fw-bolder fs-4 card-title"></i>
                <h3 className="shadow-sm text-info card-text" >Phones</h3>
                <h6 className="card-text fs-5" >Phone: 079 4004 1994</h6>
                <h6 className="card-text fs-5" >Mobile : +91 2345678904</h6>
              </div>
              <div className="col-md-4  p-4">
                <i className="fa-solid fa-envelope px-4 text-info fw-bolder fs-4 card-title"></i>
                <h3 className="shadow-sm text-info card-text" >E-mail address</h3>
                <h6 className="card-text fs-5" >aesha.shah@volansys.com</h6>
                <h6 className="card-text fs-5" >dhwani.sanghvi@volansys.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs