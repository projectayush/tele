import React from 'react'
import '../css/Login.css'

const Login = () => {
  return (
    <>
      <div className="row" id="loginform">
        <div className="col-md-7 ">
          <img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
        </div>
        <div className="col-md-5 mainclassName text-center">
          <form action="">
            <h3 className="text-center  fs-1 fw-bolder signclassName" ><b>Sign In</b></h3>

            <div className="form-group  mx-3">
              <label className="my-0">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email id" className="form-control-lg shadow-sm rounded-pill border border-secondary" />
              </label>
            </div>

            <div className="form-group  mx-3">
              <label className="my-0">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" className="form-control-lg shadow-sm rounded-pill border border-secondary" />
              </label>
            </div>
            <div className="form-group mt-4 mx-3">
              <button type="button" className="btn btn-primary border-0 " >Sign In</button>

              <p className="mt-3 fs-5" >Forgot Your Password?</p>
            </div>

            <div className="form-group  mx-3 ">
              <h5><span>OR</span></h5><br />
            </div>
            <p className="one fs-5" >Sign Up with your Social Media accounts</p><br />
            <div className="form-group d-flex align-items-center justify-content-center ">
              <i className="fa-brands fa-facebook f px-4 "></i>
              <i className="fa-brands fa-twitter "></i>
            </div>
          </form>
        </div>

      </div>

    </>
  )
}

export default Login