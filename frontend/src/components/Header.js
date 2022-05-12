// import React,{ useContext }  from 'react'
// import userContext from '../Store/userContext';
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import 'bootstrap';

// const Header = () => {

//   const userctx = useContext(userContext);
// 	const data = userctx.user;
// 	const logout = userctx.clearUser;
// 	console.log('username', data);

//   return (
//     <>
//       <div className="card bg-info " >
//         <div className="card-header">
//           <div className="row">
//             <div className="col-md-6">
//               <img src="./images/logo.jpg" alt="logo" height="auto" width="140px" className="px-4 pt-0 pb-1" />
//               <label>
//                 <h3 className="text-white fw-bolder fs-1 pt-3 "
//                   style={{ fontFamily: 'cursive', letterSpacing: '6px' }}><i>TELETIC</i></h3>
//               </label>
//             </div>
//             <div className="col-md-6 pb-4 d-flex align-items-end justify-content-end">
//               <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none " >Sign In</a>
//               <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none" >Sign Up</a>
//               <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none" >Services</a>

//               <div className="dropdown mt-4 px-3">
//                 <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                   <img src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" className="rounded-circle " />
//                   <span className="d-none d-sm-inline mx-1 fs-4">{data.full_name}</span>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//                  <li><a className="dropdown-item" href="#" onClick={logout} >Sign out</a></li>
//                   {/* <Link  to="/Logout" className="dropdown-item" href="#">Log Out</Link> */}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Header

// adminlodin
import React, { useContext } from 'react'
import userContext from '../Store/userContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


const Header = () => {
  const userctx = useContext(userContext);
  console.log(userctx.user  );
  const data = userctx.user;

  function logout (){
    toast("logged out");
    userctx.clearUser();
    navigate(`/`);
  }
  let navigate = useNavigate();
  console.log('username', data);

  return (
    <>
      {/* <!-- header --> */}
      <div className="card bg-info" >
        <div className="card-header">
          <div className="row">
            <div className="col-md-7">
              <img src="./images/logo.jpg" alt="logo" height="auto" width="140px" className="px-4 pt-0 pb-1" />
              <label>
                <h3 className="text-white fw-bolder fs-1 pt-3 "
                  style={{ fontFamily: 'cursive', letterSpacing: '6px' }}><i>TELETIC</i></h3>
              </label>
            </div>
            <div className="col-md-5 pb-4 d-flex align-items-end justify-content-end">
            <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none " >Sign In</a>
               <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none" >Sign Up</a>
             <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none" >Services</a>

              <div className="dropdown mt-4 px-3">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" className="rounded-circle " />
                  <span className="d-none d-sm-inline mx-1 fs-4">{data.full_name}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                 
                  <li><a className="dropdown-item" href="#" onClick={logout}>Sign out</a></li>
                  {/* <Link  to="/Logout" className="dropdown-item" href="#">Log Out</Link> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header end --> */}
    </>
  )
}

export default Header
// -----------------------



// import React, { useContext } from 'react'
// import userContext from '../Store/userContext';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap';
// // import Logout from './Logout';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// const Header = () => {
// 	const userctx = useContext(userContext);
// 	const data = userctx.user;
//   console.log('data' , data);
//   // const clear = userctx.clearUser;
//   // let navigate = useNavigate();
//   const logout = userctx.clearUser;
//   console.log('username', data);
//   console.log('full_name' , data.full_name);

// 	return (
// 		<>
// 			{/* <!-- header --> */}
// 			<div className="card bg-info" >
// 				<div className="card-header">
// 					<div className="row">
// 						<div className="col-md-7">
// 							<img src="./images/logo.jpg" alt="logo" height="auto" width="140px" className="px-4 pt-0 pb-1" />
// 							<label>
// 								<h3 className="text-white fw-bolder fs-1 pt-3 "
// 									style={{ fontFamily: 'cursive', letterSpacing: '6px' }}><i>TELETIC</i></h3>
// 							</label>
// 						</div>
// 						<div className="col-md-5 pb-4 d-flex align-items-end justify-content-end">
//             <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none " >Sign In</a>
//               <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none" >Sign Up</a>
//               <a href="" class="px-3 text-white fw-bolder fs-4 text-decoration-none" >Services</a>

// 							<div className="dropdown mt-4 px-3">
// 								<a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
// 									<img src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" className="rounded-circle " />
// 									<span className="d-none d-sm-inline mx-1 fs-4">{data.full_name}</span>
// 								</a>
// 								<ul className="dropdown-menu dropdown-menu-dark text-small shadow">
								
// 									<li><a className="dropdown-item" href="#" onClick={logout}>Sign out</a></li>
// 									{/* <Link  to="/Logout" className="dropdown-item" href="#" >Log Out</Link> */}
                  
// 								</ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			{/* <!-- header end --> */}
// 		</>
// 	)
// }

// export default Header