import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import UseLocalStorage, { UseLocalStorage2 } from '../UseLocalStorage';
import { UseLocalStorage1 } from '../UseLocalStorage';
import userContext from '../Store/userContext';
import { useNavigate } from 'react-router-dom';
import '../css/Adminlogin.css'


const Adminlogin = () => {

	const userctx = useContext(userContext);

	const [password, setPassword] = UseLocalStorage1("password", '');
	const [email, setEmail] = UseLocalStorage('email', '');

	let navigate = useNavigate();
	async function LoginIn(e) {
		e.preventDefault();
		let data = { email, password };
		console.log(data);


		try {
			const response = await axios.post(`http://localhost:5000/login`, data);

			console.log(data);
			console.log(response);

			if (response.data.message === "login successfully") {
				toast(response.data.message);

				let user = {
					full_name: response.data.full_name,
					token: response.data.token,
					email: email,
					id: response.data.id
				}
				console.log("userdata:", user)
				userctx.updateUser(user);
				console.log(response);
				navigate("/dashboard");

			}
			else {
				toast("Please try again")
			}
		} catch (error) {

			console.log(error);
		}
	}

	return (
		<div className='body-class'>
			<div className="container-fluid ">
				<div className='main-class'>
					<form action="">
						<div className="form-group ">
							<h2 className="text-center">SIGN IN</h2>
							<label htmlFor="">Email*</label>
							<input type="email" value={email} className="form-control text-black" onChange={(e) => setEmail(e.target.value)} required />
						</div>
						<div className="form-group mt-3">
							<label htmlFor="">Password*</label>
							<input type="password" value={password} className="form-control text-black" onChange={(e) => setPassword(e.target.value)} required />
						</div>


						<div className="row mt-3">
							<div className="col-md-6 mt-3">
								<p>Forgot Password?</p>
							</div>
							<div className="col-md-6 mt-3">
								<p><input type="submit" className="btn" value="Submit" onClick={(e) => { LoginIn(e) }} /></p>
							</div>

						</div>

					</form>
				</div>
			</div>
		</div>
	)

}

export default Adminlogin