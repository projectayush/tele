import React , {useState , useContext} from 'react'
import '../css/ConfirmPassword.css'
import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
// import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate, useParams } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


const ConfirmPassword = () => {

	const [password , setPassword] = useState([]);
	const [newPassword , setNewPassword] = useState([]);
	const token = useParams();
	// console.log('user_id',token)
	const navigate = useNavigate();
	

		let resetpassword = async () => {
			if(password.length === 0){
				toast("Please Enter Password")
			}else{
				if(password === newPassword){
					try {
				
						let res = await fetch(`http://localhost:5000/login/UpdatePasswords/${token}`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								password:password
							})
							,
						})
			
						let resJson = await res.json();
						console.log('resjson ', resJson);
						
						toast("Your password is Updated Succcesfully");
						navigate(`/`)
					} catch (error) {
						toast("Please Enter Valid email id");
					}
				}else{
					toast("Password doesnt match! Please Try again")
				}
				// navigate('/');
	
	
			}
				
	}


	return (
		<>
			<div className="row" id="confirmpassword">
				<div className="col-md-7 ">
					<img src={require('../../src/assets/images/GXI-telecom1.jpg')} alt="Image" className="img-fluid " />
				</div>
				<div className="col-md-5 mainclassName text-center">
					<form action="">
						<h3 className="text-center  fs-1 fw-bolder signclassName" ><b>Reset Password</b></h3>

						<div className="form-group  mx-3">
							<label className="my-0">
								<i className="fas fa-lock"></i>
								<input type="password" 
								placeholder="Reset Password" 
								className="form-control-lg shadow-sm rounded-pill border border-secondary"
								onChange={(e)=>setPassword(e.target.value)}
								/>
							</label>
						</div>

						<div className="form-group  mx-3">
							<label className="my-0">
								<i className="fas fa-lock"></i>
								<input type="password" placeholder="Confirm Password" 
									onChange={(e)=>setNewPassword(e.target.value)}
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

export default ConfirmPassword