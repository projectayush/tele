// import React , {useState , useEffect , useContext} from 'react'

// import '../css/ForgotPassword.css'
// import axios from 'axios';
// // import { toast, ToastContainer } from 'react-toastify';
// // import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
// // import { UseLocalStorage1 } from '../UseLocalStorage';
// import userContext from '../Store/userContext';
// import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';
// import { useParams } from 'react-router-dom'
// import {ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure()



// const ForgotPassword = () => {

// 	const params = useParams();



// 	const [email, setEmail] = useState([]);
// 	let navigate = useNavigate();
// 	let data = { email: email };

// 	let forgotpassword = async () => {
// 		if(email.length===0){
// 			toast.error("Please Enter Email id")
// 		}else{
// 			try {

// 				let res = await fetch('http://localhost:5000/login/ResetPasswords', {
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 					body: JSON.stringify(data)
// 					,
// 				})

// 				let resJson = await res.json();
// 				console.log('resjson ', resJson);
// 				console.log('resJson.token', resJson.token);

// 				localStorage.setItem("f_Id", resJson.result.id);
// 				localStorage.setItem("f_Token", resJson.token)
// 				console.log('id:', resJson.result.id)
// 				console.log('token:', resJson.token)
// 				toast("Successfully sent to your Email id , Please Check")


// 				navigate(`/resetpassword/${resJson.token}/`)
// 			} catch (error) {
// 				toast("Email ID is not valid , Try again!");
// 			}

// 		// let user ={id:id};

// 		}


// 	}






// 	return (
// 		<>
// 			<div className="row" id="forgotpassword">
// 				<div className="col-md-7 ">
// 					<img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
// 				</div>
// 				<div className="col-md-5 mainclassName text-center">
// 					<form action="">
// 						<h3 className="text-center  fs-1 fw-bolder signclassName" ><b>Forgot Password</b></h3>

// 						<div className="form-group  mx-3">
// 							<label className="my-0">
// 								<i className="fas fa-envelope"></i>
// 								<input type="email" placeholder="Email id" 
// 								onChange={(e) => setEmail(e.target.value)}
// 								className="form-control-lg shadow-sm rounded-pill border border-secondary" />
// 							</label>
// 						</div>


// 						<div className="form-group mt-4 mx-3">
// 							<button type="button" className="btn btn-primary border-0 "
// 							onClick={forgotpassword}
// 							>Send OTP</button>


// 						</div>

// 						<div className="form-group  mx-3 ">

// 						</div>

// 					</form>
// 				</div>

// 			</div>

// 		</>
// 	)
// }

// export default ForgotPassword

import React, { useState, useEffect, useContext } from 'react'

import '../css/ForgotPassword.css'
import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
// import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()



const ForgotPassword = () => {

  const params = useParams();



  const [email, setEmail] = useState([]);
  let navigate = useNavigate();
  let data = { email: email };

  let forgotpassword = async () => {
    if (email.length === 0) {
      toast.error("Please Enter Email id")
    } else {
      try {

        let res = await fetch('http://localhost:5000/loginfrontend/ResetPasswords', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
          ,
        })

        let resJson = await res.json();
        console.log('resjson ', resJson);
        console.log('resJson.token', resJson.token);

        localStorage.setItem("f_Id", resJson.result.id);
        localStorage.setItem("f_Token", resJson.token)
        console.log('id:', resJson.result.id)
        console.log('token:', resJson.token)
        toast("Successfully sent to your Email id , Please Check")


        navigate(`/resetpassword/${resJson.token}/`)
      } catch (error) {
        toast.error("Email ID is not valid , Try again!");
      }
 }
}






  return (
    <>
      <div className="row" id="forgotpassword">
        <div className="col-md-7 ">
          <img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
        </div>
        <div className="col-md-5 mainclassName text-center">
          <form action="">
            <h3 className="text-center  fs-1 fw-bolder signclassName" ><b>Forgot Password</b></h3>

            <div className="form-group  mx-3">
              <label className="my-0">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email id"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control-lg shadow-sm rounded-pill border border-secondary" />
              </label>
            </div>


            <div className="form-group mt-4 mx-3">
              <button type="button" className="btn btn-primary border-0 "
                onClick={forgotpassword}
              >Send OTP</button>


            </div>

            <div className="form-group  mx-3 ">

            </div>

          </form>
        </div>

      </div>

    </>
  )
}

export default ForgotPassword
