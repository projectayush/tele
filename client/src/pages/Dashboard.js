import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'


const Dashboard = () => {

  const [ticket, setTicket] = useState([]);
  const [active, setActive] = useState([]);
  const [inactive, setInactive] = useState([]);
  const [user, setUser] = useState([]);
  const [reopen, setReopen] = useState([]);

  useEffect(() => {
    const getticket = async () => {
      const res = await fetch("http://localhost:5000/api/v1/ticket/dept");
      const gettick = await res.json();
      const depart = gettick.dept;
      console.log('depart', depart)
      let count = 0;
      let count1 = 0;
      let count2 = 0;
      let count3 = 0;
      let id = localStorage.getItem('id');
      console.log('id', id);
      console.log('gettick', gettick);

      setTicket(gettick.dept.length);
      console.log('gettick.tickets', gettick.dept.length)
      const length = gettick.dept.length;
      for (let i = 0; i < length; i++) {
        if (depart[i].status == 0) {
          count = count + 1;
        }
      }
      setActive(count);
      for (let i = 0; i < length; i++) {
        if (depart[i].status == 1) {
          count1 = count1 + 1;
        }
      }
      setInactive(count1)
      for (let i = 0; i < length; i++) {
        if (depart[i].user_id == id) {
          count2 = count2 + 1;
        }
      }
      setUser(count2);

      for (let i = 0; i < length; i++) {
        if (depart[i].status == 2) {
          count3 = count3 + 1
        }
      }
      setReopen(count3)
    }
    getticket();
  }, [])

  return (
    <>

      {/* <Header/> */}
      <div className="container-fluid" style={{ backgroundColor: 'white' }}>
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            {/* <!-- Content area... --> */}
            <div className="row">
              <h1>Dashboard</h1>
              <p className=" one fs-4 text-secondary">Ticket Info</p>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body border-top border-info border-4">
                    <h1 className="fw-bolder text-info">{ticket}</h1>
                    <p>Total Tickets Raised</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body border-top border-info border-4">
                    <h1 className="fw-bolder text-info">{active}</h1>
                    <p>Total Opened Tickets</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body border-top border-info border-4">
                    <h1 className="fw-bolder text-info">{inactive}</h1>
                    <p>Total Closed Tickets</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-5">
                <div className="card">
                  <div className="card-body border-top border-info border-4">
                    <h1 className="fw-bolder text-info">{reopen}</h1>
                    <p>Total Reopened Tickets</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mt-5">
                <div className="card">
                  <div className="card-body border-top border-info border-4">
                    <h1 className="fw-bolder text-info">{user}</h1>
                    <p>Tickets Raised By Me</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard

