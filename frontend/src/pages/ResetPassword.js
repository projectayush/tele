import React, { useState, useEffect, useContext } from 'react'
import '../css/ResetPassword.css'
import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
// import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const ResetPassword = () => {

	let navigate = useNavigate();

	// const [password , setPassword] = useState([]);
	const [resetToken, setResetToken] = useState([]);
	const [formErrors, setFormErrors] = useState([]);
	const [isSubmit, setIsSubmit] = useState(false);
	// const [otp, setOtp] = useState([]);

	console.log('Id : ', localStorage.getItem('f_Id'));
	console.log('Token : ', localStorage.getItem('f_Token'));
	let data = { otp: resetToken };
	const user_id = useParams();
	console.log('params.token', user_id);
	const resetpassword = async () => {


		if (resetToken.length === 0) {
			toast.error("Please Enter OTP")
		} else {

			try {

				let res = await fetch(`http://localhost:5000/loginfrontend/CheckOtps/`, {
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

				if (resetToken !== resJson.result.otp) {
					toast("Otp is verified");
					navigate(`/confirmpassword/${localStorage.getItem('f_Token')}`)
				}
			} catch (error) {
				toast.error("Please Enter Valid OTP");
			}




		}






	}



	const validate = (values) => {
		const errors = {};
		if (!values.resetToken) {
			errors.otp = "**Please Enter OTP"
		}
	}



	return (
		<>
			<div className="row" id="resetpassword">
				<div className="col-md-7 ">
					<img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
				</div>
				<div className="col-md-5 mainclassName text-center">
					<form action="">
						<h3 className="text-center  fs-1 fw-bolder signclassName" ><b>Enter OTP</b></h3>

						<div className="form-group  mx-3">
							<label className="my-0">
								<i className="fas fa-lock"></i>
								<input type="password" placeholder="Enter OTP"
									onChange={(e) => setResetToken(e.target.value)}
									className="form-control-lg shadow-sm rounded-pill border border-secondary" />
							</label>
						</div>


						<div className="form-group mt-4 mx-3">
							<button type="button" className="btn btn-primary border-0 "
								onClick={resetpassword}
							>Submit</button>


						</div>

						<div className="form-group  mx-3 ">

						</div>

					</form>
				</div>

			</div>

		</>
	)
}

export default ResetPassword