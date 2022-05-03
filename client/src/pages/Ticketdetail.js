import React, { useState, useEffect } from 'react'
import '../css/Ticketdetail.css'
import Sidebar from '../components/Sidebar'
import History from '../components/History'
import Comments from '../components/Comments'
import { useParams } from 'react-router-dom'


const Ticketdetail = () => {

  // const [ticket, setTicket] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [show, setShow] = useState([]);
  const [currentTab, setCurrentTab] = useState('comments');
  let { id } = useParams();
  

  useEffect(() => {
    const getTicket = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/ticket/${id}`);
      const gettic = await res.json();
      console.log('getdata', gettic);
      setTickets(gettic.ticketid[0]);
      console.log('tickets: ', tickets);
    }
    getTicket();
  }, [])


  useEffect(() => {
    const getdepart = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/ticket/dept/${id}`);
      // console.log('ticketid',id);
      const gettic1 = await res.json();
      console.log('gettic1', gettic1);
      // const data = gettic1.dept[0]
      // console.log("cat_id", cat_id.category_id);
      setShow(gettic1.dept[0]);
      // setShow(gettic1.dept[0]);
      // console.log('show: ', show);
      // console.log(show);
    }
    getdepart();
  }, [])

  return (
    
    <>
    
      <div className="container-fluid ">
        {/* <!-- Sidebar start --> */}
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <Sidebar />
            <div className="col py-3">
              {/* <!-- content start --> */}

              <div className="row mx-2 mt-2">
                <div className="col-md-6">
                  <h4 className="text-secondary"><b>Ticket Detail</b></h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-end ">
                  <button type="button" className="text-center  border-0 p-2 buttonclass text-white" >Edit</button>
                </div>

                {/* Ticketdetail component start */}

                <div className='row'>
                  <div className="col-md-6 ">
                    <div className="card mt-3 border-0 shadow-lg">
                      <p className="mt-3 px-2"><b>Ticket ID : </b>{show.ticket_id}</p>
                      <p className="px-2"><b>Title of Ticket : </b>{show.title_name}</p>
                      <p className="px-2"><b>Category : </b>{show.category_name}</p>
                      <p className="px-2"><b>Subcategory : </b>{show.subcategory_name}</p>
                      <p className="px-2"><b>From : </b>{show.username}</p>
                      <p className="px-2"><b>Created By <br /> Department : </b>{show.created_by}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mt-3 border-0 shadow-lg">
                      <p className="mt-3 px-2"><b>Department : </b>{show.department_name}</p>
                      <p className="px-2"><b>Record Date : </b>{show.updated_at}</p>
                      <p className="px-2"><b>Last activity date : </b>{show.created_at}</p>

                      <p className="px-2"><b>Status : </b>{show.status}</p>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="card  mt-5 border-0 p-3 mx-1 shadow-lg">
                      <p className="p-3"><b>Description :</b>{show.description}</p>
                    </div>

                  </div>
                </div>
                {/* trying................ */}
                <div className='d-inline'>
                  <div className="col-md-12 mt-3 ">
                    <div className="card mt-3 border-0 shadow-lg">
                      <div className="col-md-6 px-3 mt-3">
                        <button type="button" className="btn text-white btn-dark mx-2" onClick={() => setCurrentTab('comments')} >Comments</button>
                        <button type="button" className="btn text-white btn-dark mx-2" onClick={() => setCurrentTab('history')} >History</button>
                        {/* trying......... */}

                        {/* <button type="button" className="button btn" >History</button> */}
                      </div>
                      {currentTab == 'comments' ? <Comments /> : null}
                      {currentTab == 'history' ? <History /> : null}

                    </div>
                  </div>

                </div>

                {/* comments component start */}
                {/* <Comments  /> */}
                {/* comments component end */}

                {/* history component start */}
                {/* <History  /> */}

                {/* history component end */}
              </div>
              {/* <!-- Content end -->  */}
            </div>
          </div>
        </div>
        {/* <!-- Sidebar end --> */}

      </div>
    </>
  )
}

export default Ticketdetail