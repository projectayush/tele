import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{ backgroundColor: "rgb(202, 202, 221)" }}>
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">

          </a>
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item mt-3">

              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-table-columns fs-4 text-black"></i>
                <NavLink className="ms-1 d-none d-sm-inline text-black" to="/Dashboard">Dashboard</NavLink>
              </a>
            </li>


            <li className="nav-item mt-3">

              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-ticket fs-4 text-black"></i>
                <NavLink className="ms-1 d-none d-sm-inline text-black" to="/Allticket">Ticket Management</NavLink>

              </a>
            </li>


            <li className="nav-item mt-3">

              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-ticket fs-4 text-black"></i>
                <NavLink className="ms-1 d-none d-sm-inline text-black" to="/Subcategory">SubCategory Management</NavLink>

              </a>
            </li>

            <li className="nav-item mt-3">

              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-book-open-reader fs-4 text-black"></i>
                <NavLink className="ms-1 d-none d-sm-inline text-black" to="/Title">Title Management</NavLink>

              </a>
            </li>


            <li className="nav-item mt-3">

              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-ticket fs-4 text-black"></i>
                <NavLink className="ms-1 d-none d-sm-inline text-black" to="/Department">Deparment Management</NavLink>

              </a>
            </li>

            <li className="nav-item mt-3">

              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-ticket fs-4 text-black"></i>
                <NavLink className="ms-1 d-none d-sm-inline text-black" to="/Category">Category Management</NavLink>

              </a>
            </li>

            <li className="nav-item mt-3">

              <a href="#" className="nav-link align-middle px-0">
                <i className="fa-solid fa-ticket fs-4 text-black"></i>
                <NavLink className="ms-1 d-none d-sm-inline text-black" to="/feedback">Feedback</NavLink>

              </a>
            </li>
          </ul>

          <hr />
        </div>
      </div>

    </>
  )
}

export default Sidebar