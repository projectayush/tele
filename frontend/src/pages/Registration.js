import React from 'react'
import '../css/Registration.css'

const Registration = () => {
  return (

    <div className="row" id="registrationForm">
      <div className="col-md-7" style={{ verticalAlign: "middle" }}>
        <img src={require('../../src/assets/images/GXI-telecom1.jpg')} className="img-fluid " alt="registration" />
      </div>
      <div className="col-md-5 mainclass text-center ">
        <form>
          <h3 className="  mx-3 text-center  fs-1 fw-bolder signclass" >Sign Up</h3>
          <div className="form-group  mt-4 mx-3">
            <label className="my-0">
              <i className="fas fa-user"></i>
              <input type="name" placeholder="Full name"
                className="form-control-lg shadow-sm rounded-pill border border-secondary" />
            </label>
          </div>

          <div className="form-group mx-3">
            <label className="my-0">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email-address"
                className="form-control-lg shadow-sm rounded-pill border border-secondary " />
            </label>
          </div>

          <div className="form-group  mx-3">
            <label className="my-0">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username"
                className="form-control-lg shadow-sm rounded-pill border border-secondary" />
            </label>
          </div>

          <div className="form-group  mx-3">
            <label className="my-0">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password"
                className="form-control-lg shadow-sm rounded-pill border border-secondary" />
            </label>
          </div>

          <div className="form-group  mx-3">
            <label className="my-0">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm-Password"
                className="form-control-lg shadow-sm rounded-pill border border-secondary" />
            </label>
          </div>

          <div className="align-items-center justify-content-center mt-4 mx-4 ">
            <button type="button" className="btn btn-primary border border-0 " >Sign Up</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Registration