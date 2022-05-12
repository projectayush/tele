// import React, {  useState } from 'react'
// import axios from "axios";
// import '../css/Login.css';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// var validator = require('validator');
// const Registrations = () => {


//   const [full_name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");


//   async function handleSubmit(e) {
//     e.preventDefault();
//     let created_at = new Date().toLocaleDateString();
//     let updated_at = new Date().toLocaleDateString();
//     let role_id = 1;
//     let data = { full_name, email, password,role_id, created_at, updated_at };

//     if (email && password && full_name) {
//       if (validator.isEmail(email)) {
//         try {
//           const response = await axios.post(`http://localhost:5000/api/v1/registration`, data)
//           if (response.data.message === "you have been registered.") {

//             toast(response.data.message);
//           } else {
//             toast.error(response.data.message, "  please login.");
           
//           }
//         } catch (error) {
//           console.warn("something is wrong");
//         }
//       } else {
//         toast.error("Please enter valid Email ID")
//       };

//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");

//     } else {
//       toast.error("Fill Your Details To Sign Up");
//     }
//   }


//   return (
//     <div className="row" id="registrationForm">
//       <div className="col-md-7" style={{ verticalAlign: "middle" }}>
//         <img src={require('../../src/assets/images/GXI-telecom1.jpg')} className="img-fluid " alt="registration" />
//       </div>
//       <div className="col-md-5 mainclass text-center ">
//         <form>
//           <h3 className="  mx-3 text-center  fs-1 fw-bolder signclass" >Sign Up</h3>
//           <div className="form-group  mt-4 mx-3">
//             <label className="my-0">
//               <i className="fas fa-user"></i>
//               <input type="name" placeholder="Full name"
//                 value={full_name}
//                 onChange={(e) => setName(e.target.value)}
//                 // onChange={handlefullName}
//                 className="form-control-lg shadow-sm rounded-pill border border-secondary" />
//             </label>
//             {/* <p><span style={{ color: 'red' }}>{errors.full_name}</span></p> */}
//           </div>


//           <div className="form-group mx-3">
//             <label className="my-0">
//               <i className="fas fa-envelope"></i>
//               <input type="email" placeholder="Email-address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 // onChange={handleEmail}
//                 className="form-control-lg shadow-sm rounded-pill border border-secondary " />
//             </label>
//             {/* <p><span style={{ color: 'red' }}>{errors.email}</span></p> */}
//           </div>

//           <div className="form-group  mx-3">
//             <label className="my-0">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password"
//                 value={password}
//                  onChange={(e) => setPassword(e.target.value)}
//                 // onChange={handlePassword}
//                 className="form-control-lg shadow-sm rounded-pill border border-secondary" />
//             </label>

//             {/* <p><span style={{ color: 'red' }}>{errors.password}</span></p> */}
//           </div>

//           <div className="form-group  mx-3">
//             <label className="my-0">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Confirm-Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 // onChange={handleConfirmPassword}
//                 className="form-control-lg shadow-sm rounded-pill border border-secondary" />
//             </label>
//             {/* {confirmPassword&&<div className='error-msg'>{errors.confirmPassword}</div>} */}
//             {/* <p><span style={{ color: 'red' }}>{errors.confirmPassword}</span></p> */}
//           </div>
//           <div className="align-items-center justify-content-center mt-4 mx-4 ">
//             <button type="button" className="btn btn-primary border border-0 " onClick={handleSubmit} >Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>

//   )
// }

// export default Registrations
