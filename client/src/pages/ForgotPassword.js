import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate } from 'react-router-dom';
import '../css/ForgotPassword.css';
import Axios from 'axios';
import { useParams } from 'react-router-dom'


const ForgotPassword = () => {
  const params = useParams();
  const [email, setEmail] = useState([]);
  let navigate = useNavigate();
  let data = { email: email };

  // const forgotpassword = () => {
  // 	Axios.post('http://localhost:5000/login/resetPassword',
  // 		{
  // 			email: email
  // 		}).then(() => {
  // 			alert("Successfully sent to your Email id , Please Check")
  // 			navigate(`/resetpassword`)

  // 		}).catch(error => window.alert("Please Enter Valid Data"))
  // }
  let forgotpassword = async () => {

    // let user ={id:id};
    try {
      let res = await fetch('http://localhost:5000/login/resetPassword', {
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
      alert("Successfully sent to your Email id , Please Check")
      navigate(`/resetpassword/${resJson.token}/${resJson.result.id}`)
    } catch (error) {
      window.alert("Please Enter Valid email id");
    }
  }



  return (
    <div className='body-class'>
      <div className="container-fluid ">
        <div className='mainclass'>
          <form action="">
            <div className="form-group ">
              <h2 className="text-center">FORGOT PASSWORD</h2>
              <label htmlFor="">Email*</label>
              <input type="email" className="form-control text-black "
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>

            <div className="row mt-3">

              <div className="col-md-6 mt-3">

                <p><input type="button" className="btn" value="Submit"
                  onClick={forgotpassword} />

                </p>
              </div>

            </div>

          </form>
        </div>
      </div>
    </div>
  )

}

export default ForgotPassword
