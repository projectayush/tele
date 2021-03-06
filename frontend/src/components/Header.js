// import React from 'react'

// const Header = () => {

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
//                   <span className="d-none d-sm-inline mx-1 fs-4">Aesha</span>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//                   <li><a className="dropdown-item" href="#">New project...</a></li>
//                   <li><a className="dropdown-item" href="#">Settings</a></li>
//                   <li><a className="dropdown-item" href="#">Profile</a></li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li><a className="dropdown-item" href="#" >Sign out</a></li>
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

// import React, { useContext , useEffect } from 'react'
// import userContext from '../Store/userContext';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap';
// import { useNavigate } from 'react-router-dom';


// const Header = () => {
//   const userctx = useContext(userContext);
//   const data = userctx.user;
//   // const logout = userctx.clearUser;
//   function logout (){
//     userctx.clearUser();
//     navigate(`/`);
//   }
//   let navigate = useNavigate();
//   // navigate(`/`);
//   // console.log('username', data);

//   return (
//     <>
//       {/* <!-- header --> */}
//       <div className="card bg-info" >
//         <div className="card-header">
//           <div className="row">
//             <div className="col-md-7">
//               <img src="./images/logo.jpg" alt="logo" height="auto" width="140px" className="px-4 pt-0 pb-1" />
//               <label>
//                 <h3 className="text-white fw-bolder fs-1 pt-3 "
//                   style={{ fontFamily: 'cursive', letterSpacing: '6px' }}><i>TELETIC</i></h3>
//               </label>
              

//             </div>
//             {/* <div className='col-md-3'>
//               <button style={{marginLeft:'100%'}} type='button' className='btn text-white mt-3 fs-4'>
//                 <b>TICKETS</b>
//               </button>
//             </div> */}
//             <div className="col-md-5 pb-3 pt-3 d-flex align-items-end justify-content-end">
//             {/* <a  href="" class="px-4 text-white fw-bolder fs-5 text-decoration-none">TICKETS</a> */}
//             {/* <a  href="" class="px-4 text-white fw-bolder fs-5 text-decoration-none">TICKETS</a> */}
//             {/* <a  href="" class="px-4 text-white fw-bolder fs-5 text-decoration-none">TICKETS</a> */}
//             {/* <a  href="" class="px-4 text-white fw-bolder fs-5 text-decoration-none">TICKETS</a> */}
//             {/* <a  href="" class="px-4 text-white fw-bolder fs-5 text-decoration-none">TICKETS</a> */}
            
//               <div  className="dropdown  " >
//               {/* <a  href="" class="px-4 text-white fw-bolder fs-5 text-decoration-none">TICKETS</a> */}
//                 <a style={{marginLeft:'380%'}} href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                   <img   src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" className="rounded-circle " />
//                   <span  className="d-none d-sm-inline mx-1 fs-4">{data.full_name}</span>
//                 </a>
//                 <ul  className="dropdown-menu dropdown-menu-dark text-small shadow">
                 
//                   <li ><a  className="dropdown-item" href="#" onClick={logout}>Sign out</a></li>
//                   {/* <Link  to="/Logout" className="dropdown-item" href="#">Log Out</Link> */}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- header end --> */}
//     </>
//   )
// }

// export default Header
import React, { useContext } from 'react'
import userContext from '../Store/userContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Header.css'

toast.configure()


const Header = () => {
  // const [name, setName] = useState;
  const userctx = useContext(userContext);
  // console.log(userctx.user  );
  const data = userctx.user;

  function logout (){
    toast("logged out");
    userctx.clearUser();
    navigate(`/`);
  }
  let navigate = useNavigate();
  // console.log('username', userctx.user.full_name);
  // console.log('data.full_name' , data.full_name);

  

  const pathChange = ()=>{
    navigate(`/alltickets`)
  }

  return (
    <>
      {/* <!-- header --> */}
      <div className="card bg-info" >
        <div className="card-header">
          <div className="row">
            <div className="col-md-8 mt-4">
              <img src="./images/logo.jpg" alt="logo" height="auto" width="140px" className="px-4 pt-0 pb-1" />
              <label>
                <h3 className="text-white fw-bolder fs-1 pt-3 "
                  style={{ fontFamily: 'cursive', letterSpacing: '6px' }}><i>TELETIC</i></h3>
              </label>
            </div>
            <div  className="   col-md-4 pb-4  d-flex align-items-end justify-content-end">
            
             <a  href="" className="  px-3 text-white fw-bolder fs-4 text-decoration-none"
             onClick={pathChange}
             >TICKETS</a>

              <div className=" dropdown mt-4 px-3">
                <a  href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" className="rounded-circle " />
                  <span className="d-none d-sm-inline mx-1 fs-4">{localStorage.getItem('full_name')}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                 
                  <li><a className="dropdown-item" href="#" onClick={logout}>Sign out</a></li>
                  
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
