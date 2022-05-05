import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/ConfirmPassword.css'


const ConfirmPassword = () => {

	const [password , setPassword] = useState([]);
	const {user_id} = useParams();
	
	// const [resetToken , setResetToken] = useState([]);
	
	

		const resetpassword = ()=>{
			console.log('user_id',user_id)
			axios.post(`http://localhost:5000/login/updatePassword/${user_id}`,
			
			{				
				
				password:password
			}).then(()=>{
				window.alert("Your Password is updated successfully")
				window.location.href = "/";
			}).catch(error=>window.alert("Please Enter Valid Data"))

			axios.post()

		}


	return (
		<div className='body-class'>
			<div className="container-fluid ">
				<div className='mainclasses1'>
					<form action="">
						<div className="form-group ">
							<h4 className="text-center">RESET PASSWORD</h4>
						</div>
						<div className="form-group mt-3">
							<label htmlFor="">New Password*</label>
							<input type="password" className="form-control text-black" 
							onChange={(e)=>setPassword(e.target.value)}
							placeholder="Enter new Password"
							required />
						</div>

						<div className="form-group mt-3">
							<label htmlFor="">Confirm Password*</label>
							<input type="password" className="form-control text-black" 
							onChange={(e)=>setPassword(e.target.value)}
							placeholder="Enter Confirm Password"
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

export default ConfirmPassword
