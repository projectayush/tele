// import React from 'react'

// const TicketDetail = () => {
//   return (
//     <>
//       <div classNameName="container-fluid ">
//         {/* <!-- Sidebar start --> */}
//         <div classNameName="container-fluid">
//           <div className="row flex-nowrap">

//             <div className="col py-3">
//               {/* <!-- content start --> */}

//               <div className="row mx-2 mt-2">
//                 <div className="col-md-6">
//                   <h4 className="text-secondary"><b>Ticket Details</b></h4>
//                 </div>


//                 {/* Ticketdetail component start */}

//                 <div className='row'>
//                   <div className="col-md-4">
//                     <div className="card mt-3 border-0 shadow-lg">


//                       <p className="mt-3 px-2"><b>Department : </b></p>
//                       <p className="px-2"><b>Record Date : </b></p>
//                       <p className="px-2"><b>Last activity date : </b></p>

//                       <p className="px-2"><b>Status : </b></p>

//                     </div>

//                   </div>


//                   <div className="col-md-4">
//                     <div className="card mt-3 border-0 shadow-lg">
//                       <p className="mt-3 px-2"><b>Department : </b></p>
//                       <p className="px-2"><b>Record Date : </b></p>
//                       <p className="px-2"><b>Last activity date : </b></p>

//                       <p className="px-2"><b>Status : </b></p>
//                     </div>
//                   </div>

//                   <div className="col-md-4">
//                     <div className="card mt-3 border-0 shadow-lg">
//                       <p className="mt-3 px-2"><b>Department : </b></p>
//                       <p className="px-2"><b>Record Date : </b></p>
//                       <p className="px-2"><b>Last activity date : </b></p>

//                       <p className="px-2"><b>Status : </b></p>
//                     </div>
//                   </div>

//                 </div>


//               </div>
//               {/* <!-- Content end -->  */}
//             </div>
//           </div>
//         </div>
//         {/* <!-- Sidebar end --> */}
//       </div>
//     </>
//   )
// }

// export default TicketDetail

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TicketDetail = () => {
  return (
    <>
      <Header />
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container-fluid py-4">
          <div className="row ">
            <div className="col-md-6 ">
              <div className="card text-black">
                {/* <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i> */}
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" */}
                {/* className="card-img-top" alt="Apple Computer" /> */}
                <div className="card-body">
                  <div className="text-center">
                    {/* <h5 className="card-title"></h5> */}
                    <h3 className=" mb-4 fs-3"style={{color:'#0cb4ce'}} ><b>Ticket Details</b></h3>
                  </div>
                  <p> <b style={{color:'#0cb4ce'}}>Ticket No. :</b> Caller Services</p>
                  <p> <b style={{color:'#0cb4ce'}}>Category :</b> Caller Services</p>
                  <p> <b style={{color:'#0cb4ce'}}>Subcategory :</b> Caller Services</p>
                  <p> <b style={{color:'#0cb4ce'}}>Title :</b> Caller Services</p>
                  <p> <b style={{color:'#0cb4ce'}}>Department :</b> Caller Services</p>
                  <p> <b style={{color:'#0cb4ce'}}>Description :</b> My Services are not working Properly</p>
                  <p> <b style={{color:'#0cb4ce'}}>From:</b> Dhwani Sanghvi</p>
                  <p> <b style={{color:'#0cb4ce'}}>Created By :</b> User</p>
                  <p> <b style={{color:'#0cb4ce'}}>Last Changed Date :</b> 26-05-22</p>
                  <p> <b style={{color:'#0cb4ce'}}>Record Date :</b> 01-05-22</p>
                  <p> <b style={{color:'#0cb4ce'}}>Status:</b> 02-05-22</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="card text-black">
                {/* <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i> */}
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp" */}
                {/* className="card-img-top" alt="Apple Computer" /> */}
                <div className="card-body">
                  <div className="text-center">
                    {/* <h5 className="card-title"></h5> */}
                    <button className='btn text-white mx-2' style={{ backgroundColor: '#0cb4ce' }}>Comments</button>
                    <button className='btn btn-secondary text-white mx-3'>Add Comment</button>
                    <button className='btn text-white' style={{ backgroundColor: '#0cb4ce' }}>History</button>
                    {/* <p className="text-muted mb-4">Ticket Detail</p> */}
                  </div>
                  <div className="col-md-12">

                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{color:'#0cb4ce'}}>Dhwani Sanghvi  Created ticket successfully</p>
                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{color:'#0cb4ce'}}>Dhwani Sanghvi  Edited ticket successfully</p>
                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{color:'#0cb4ce'}}>Dhwani Sanghvi  Updated ticket successfully</p>
                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{color:'#0cb4ce'}}>Dhwani Sanghvi  Changed status to open</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TicketDetail