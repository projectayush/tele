import React, { useContext } from 'react'
import userContext from '../Store/userContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';


const Header = () => {
  const userctx = useContext(userContext);
  const data = userctx.user;
  const logout = userctx.clearUser;
  console.log('username', data);

  return (
    <>
      {/* <!-- header --> */}
      <div className="card " style={{ backgroundColor: 'rgb(78, 3, 112)' }}>
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


              <div className="dropdown mt-4 px-3">
                <a style={{marginLeft:'10%'}} href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width="40" height="40" className="rounded-circle " />
                  <span className="d-none d-sm-inline mx-1 fs-4">{data.full_name}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
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