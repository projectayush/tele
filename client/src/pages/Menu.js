import React from 'react'
import '../css/Menu.css'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Menu = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            {/* <!-- Content area... --> */}
            <div className="row mx-2 mt-2">
              <div className="col-md-6">
                <h4 className="text-secondary"><b>Ticket Detail</b></h4>
              </div>
              <div className="col-md-6 d-flex align-items-end justify-content-end ">
                <button type="button"
                  className="d-flex justify-content-end align-items-end mx-3 p-2 border-0 text-white buttonclassName">Close
                  Ticket</button>
                <button type="button"
                  className="d-flex justify-content-end align-items-end p-2 border-0 text-white buttonclassName">Edit</button>
              </div>
              <div className="col-md-4 mt-3">
                <div className="card p-3 border-0 ">
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                </div>
              </div>
              <div className="col-md-4 mt-3 ">
                <div className="card p-3 border-0 ">
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                </div>
              </div>

              <div className="col-md-4 mt-3 ">
                <div className="card p-3 border-0 ">
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                  <p><b>Ticket ID:</b>8001256</p>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="card  mt-5 shadow-lg p-3 mx-1 ">
                  <p className="p-3"><b>Description :</b>Delivered order(7589398) is marked as cancelled.
                    Please check carefully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sidebar End --> */}
      {/* <Footer /> */}
    </>
  )
}

export default Menu