import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Footer = () => {

  //     let navigate = useNavigate();
  //   const routeChange = () => {
  //     let path = `https://m.facebook.com/profile.php?id=552063841612569`;
  //     navigate(path);
  //   }

  return (
    <>
      {/* <!-- footer start --> */}
      <div className="card-footer text-muted   mb-3" style={{ backgroundColor: "rgb(78, 3, 112)" }}>
        <div className="row">
          <div className="col-md-3 col-sm-4 py-2 pt-4">
            <h6 className="text-white fw-bolder fs-4" >2022 @ Copyrights</h6>
          </div>
          <div className="col-md-6 col-sm-4 py-2 pt-3">
            <a href="" className="px-2 text-white fw-bolder fs-4 text-decoration-none" >Support </a>
            <a className="px-2 text-white fw-bolder text-decoration-none">|</a>
            <a href="" className="px-2 text-white fw-bolder fs-4 text-decoration-none" >About Us </a>
            <a className="px-2 text-white fw-bolder text-decoration-none">|</a>
            <a href="" className="px-2 text-white fw-bolder fs-4 text-decoration-none" >Disclaimer </a>
            <a className="px-2 text-white fw-bolder text-decoration-none">|</a>
            <a href="" className="px-2 text-white fw-bolder fs-4 text-decoration-none" >Add more </a>
          </div>
          <div className="col-md-3 pt-4 col-sm-4 py-2 ">
            <a href="https://m.facebook.com/profile.php?id=552063841612569">
              <i className="fa-brands fa-facebook px-2 text-white fw-bolder fs-4 mx-2"
              ></i>
            </a>
            <a href="https://m.facebook.com/profile.php?id=552063841612569">
              <i className="fa-brands fa-twitter px-2 text-white fw-bolder fs-4 mx-2"></i>
            </a>
            <a href='https://in.linkedin.com/company/volansys'>
              <i className="fa-brands fa-linkedin px-2 text-white fw-bolder fs-4 mx-2"></i>
            </a>
            <a href='https://www.instagram.com/explore/locations/1023258403/volansys-technologies?hl=en'>
              <i className="fa-brands fa-instagram px-2 text-white fw-bolder fs-4 mx-2"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- footer end --> */}
    </>
  )
}

export default Footer


{/* <Link to={"/ticketdetail/" + tickget.id}>
                                  <i className='fa-solid fa-eye text-white mx-2'
                                  // onClick={() => routeChange1(tickget.id)}
                                  ></i>
                                </Link> */}