import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate } from 'react-router-dom';
import '../css/ResetPassword.css'


const ResetPassword = () => {
	let navigate = useNavigate();

	// const [password , setPassword] = useState([]);
	const [resetToken, setResetToken] = useState([]);

	// const [otp, setOtp] = useState([]);

	console.log('Id : ', localStorage.getItem('f_Id'));
	console.log('Token : ', localStorage.getItem('f_Token'));
	let data ={otp:resetToken};
	const resetpassword = async () => {
		try {
			let res = await fetch(`http://localhost:5000/login/checkOtp`, {
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
			alert("Your OTP is verified Successfully");
			navigate(`/confirmpassword/${localStorage.getItem('f_Token')}/${localStorage.getItem('f_Id')}`)
			
		} catch (error) {
			window.alert("Please Enter Valid Data");
		}
	}
	
	return (
		<div className='body-class'>
			<div className="container-fluid ">
				<div className='mainclasses'>
					<form action="">
						<div className="form-group ">
							<h4 className="text-center">ENTER OTP</h4>
							<label htmlFor="">OTP</label>
							<input type="password"
								className="form-control text-black"
								onChange={(e) => setResetToken(e.target.value)}
								placeholder="Enter OTP"
								required />
						</div>

					

						<div className="row mt-3">

							<div className="col-md-6 mt-3">
								<p><input type="button" className="btn" value="Submit"
									onClick={resetpassword}
								/></p>
							</div>

						</div>

					</form>
				</div>
			</div> 
		</div>
	)

}

export default ResetPassword
