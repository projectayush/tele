import React from 'react'

const Footer = () => {
  return (
    <>
        {/* <!-- footer start --> */}
<div className="card-footer text-muted   mb-3 bg-info" >
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
        <div className="col-md-3 pt-4 col-sm-4 py-2">
            <i className="fa-brands fa-facebook px-2 text-white fw-bolder fs-4"></i>
            <i className="fa-brands fa-twitter px-2 text-white fw-bolder fs-4"></i>
            <i className="fa-brands fa-linkedin px-2 text-white fw-bolder fs-4"></i>
            <i className="fa-solid fa-envelope px-2 text-white fw-bolder fs-4"></i>
            <i className="fa-brands fa-instagram px-2 text-white fw-bolder fs-4"></i>
            <i className="fa-brands fa-whatsapp px-2 text-white fw-bolder fs-4"></i>
        </div>
    </div>
</div>
    {/* <!-- footer end --> */}
    </>
  )
}

export default Footer