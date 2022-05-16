// import React from 'react'
// import '../css/Login.css'
// import { useNavigate } from 'react-router-dom';

// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // toast.configure()

// const Login = () => {

//   let navigate = useNavigate();
//   const routeChange = () => {
// 		let path = `/forgotpassword`;
// 		navigate(path);
// 	  }
//     const pathChange = () => {
//       let path = `/home`;
//       navigate(path);
//       }



//   return (
//     <>
//       <div className="row" id="loginform">
//         <div className="col-md-7 ">
//           <img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
//         </div>
//         <div className="col-md-5 mainclassName text-center">
//           <form action="">
//             <h3 className="text-center  fs-1 fw-bolder signclassName" ><b>Sign In</b></h3>

//             <div className="form-group  mx-3">
//               <label className="my-0">
//                 <i className="fas fa-envelope"></i>
//                 <input type="email" placeholder="Email id" className="form-control-lg shadow-sm rounded-pill border border-secondary" />
//               </label>
//             </div>

//             <div className="form-group  mx-3">
//               <label className="my-0">
//                 <i className="fas fa-lock"></i>
//                 <input type="password" placeholder="Password" className="form-control-lg shadow-sm rounded-pill border border-secondary" />
//               </label>
//             </div>
//             <div className="form-group mt-4 mx-3">
//               <button type="button" className="btn btn-primary border-0 "
//               onClick={pathChange}
//               >Sign In</button>

//               <p className="mt-3 fs-5" ><a href='#'
//               onClick={routeChange}
//               >Forgot Your Password?</a></p>
//             </div>

//             <div className="form-group  mx-3 ">
//               <h5><span>OR</span></h5><br />
//             </div>
//             <p className="one fs-5" >Sign Up with your Social Media accounts</p><br />
//             <div className="form-group d-flex align-items-center justify-content-center ">
//               <i className="fa-brands fa-facebook f px-4 "></i>
//               <i className="fa-brands fa-twitter "></i>
//             </div>
//           </form>
//         </div>

//       </div>

//     </>
//   )
// }

// export default Login



import React, { useState, useContext } from 'react'
import axios from 'axios';
import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

var validator = require('validator');
const Login = () => {
  const userctx = useContext(userContext);
  const [password, setPassword] = UseLocalStorage1("password", '');
  const [email, setEmail] = UseLocalStorage('email', '');



  let navigate = useNavigate();

  async function LoginIn(e) {
    e.preventDefault();
    let data = { email, password };
    console.log('data', data);
    if (email && password) {

      try {
        const response = await axios.post(`http://localhost:5000/loginfrontend`, data);

        console.log(data);
        console.log(response);
        // console.log('id:' ,localStorage.getItem('data.full_name'))
        if (response.data.message === "login successfully") {
          toast(response.data.message);

          let user = {
            full_name: response.data.full_name,
            token: response.data.token,
            email: email,
            id: response.data.id
          }
          console.log("userdata2343:", user);
          console.log("userctx", userctx.updateUser(user))
          userctx.updateUser(user);
          console.log(response);
          navigate("/home");

        }
        else {
          toast("Please try again")
        }
      } catch (error) {

        console.log(error);
      }
    }
    else {
      toast.error("Fill Your Details To Sign In");
    }

  }



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
                <input type="email" placeholder="Email id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onChange={handleEmail}
                  className="form-control-lg shadow-sm rounded-pill border border-secondary" />
              </label>
            </div>

            <div className="form-group  mx-3">
              <label className="my-0">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"
                  value={password}
                  // onChange={handlePassword}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control-lg shadow-sm rounded-pill border border-secondary" />
              </label>
            </div>
            <div className="form-group mt-4 mx-3">
              <button type="button" className="btn btn-primary border-0 " onClick={(e) => { LoginIn(e) }} >Sign In</button>

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
