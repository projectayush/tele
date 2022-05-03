import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'


toast.configure()

const Allticket = () => {

  const [ticket, setTicket] = useState([]);
  const [query , setQuery] = useState([]);
  const [category , setCategory] = useState([]);

  

  
  useEffect(() => {
    const getticket = async () => {
      const res = await fetch("http://localhost:5000/api/v1/ticket/dept");
      const gettick = await res.json();
      console.log('gettick', gettick);

      setTicket(gettick.dept);
      console.log('gettick.tickets', gettick.dept)

    }
    getticket();

  }, [])

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/addticket`;
    navigate(path);
  }

  const pathChange = ()=>{
    let path1 = `/ticketdetail`;
    navigate(path1);
  }

  

  // to delete Category
  // var result = window.confirm("Are you sure you want to delete this ticket?")
  // if(result){
  //   DeleteTicket();
  // }
  const DeleteTicket = async(id)=>{
    var check = window.confirm("Are you sure you want to delete this ticket?");
    if(check){
      let result = await fetch(`http://localhost:5000/api/v1/ticket/dept/${id}`,{
      
        method:"Delete",
        
      });
      result = await result.json;
      if(result){
        toast("data deleted")
      }
    }; 
    }
    

  

  return (
    <>
      {/* <Header /> */}
      {/* <!-- Sidebar Start --> */}
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />
          <div className="col py-3">
            {/* <!-- Content area... --> */}
            <div className="row mx-0 shadow-lg">
              <div className="card">
                <div className="card-header">
                  <div className="col-md-12">
                    <h4 className="mt-2">Search</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <input type="text" placeholder="Search by Ticket Number" className="mt-4 py-3 px-2" />

                  </div>
                  <div className="col-md-3">

                    <input type="text" placeholder="Search by Ticket Number" className="mt-4 py-3 px-2" />
                  </div>
                  <div className="col-md-3">
                    <select  className="p-3 mt-4" style={{ width: "96%" }}>
                      <option >Search by Category</option>
                      
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select id="cars" name="cars" className="p-3 mt-4" style={{ width: "96%" }}>
                      <option value="volvo">Select Export Type</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <select id="cars" name="cars" className="p-3 mt-3 " style={{ width: "96%" }} >
                      <option value="volvo">Select Export Type</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select id="cars" name="cars" className="p-3 mt-3" style={{ width: "96%" }}>
                      <option value="volvo">Select Export Type</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select id="cars" name="cars" className="p-3 mt-3" style={{ width: "96%" }}>
                      <option value="volvo">Select Export Type</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select id="cars" name="cars" className="p-3 mt-3" style={{ width: "96%" }}>
                      <option value="volvo">Select Export Type</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">

                    <input type="text" placeholder="Search by Ticket Number" className="mt-4 py-3 px-2" />
                  </div>
                  <div className="col-md-3">

                    <input type="text" placeholder="Search by Ticket Number" className="mt-4 py-3 px-2" />
                  </div>
                  <div className="col-md-3">
                    <select id="cars" name="cars" className="p-3 mt-4" style={{ width: "96%" }} >
                      <option value="volvo">Select Export Type</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select id="cars" name="cars" className="p-3 mt-4" style={{ width: "96%" }}>
                      <option value="volvo">Select Export Type</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="button" className="btn mt-4" style={{ backgroundColor: "orangered" }}>Reset</button>
                </div>

              </div>
            </div>
            <div className="card shadow-lg border-0 mt-3">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <h5>All Tickets</h5>
                  </div>
                  <div className="col-md-6 d-flex align-items-end justify-content-end  mt-1">

                    <button type="button"
                      className=" btn  text-white "
                      onClick={routeChange}
                      style={{ width: "30%" }, { backgroundColor: 'orangered' }}>Add Ticket</button>
                  </div>
                </div>
                <hr />
                <div className="row d-flex align-items-start justify-content-start">
                  <div className="col-md-6">
                    <label className="mx-3">Show</label>
                    <select id="cars" name="cars">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                    <label className="mx-3">Show</label>
                  </div>
                </div>

                <div className="" >

                  <table className="table  mt-4">
                    <thead>
                      <tr className="table-dark">
                        <th>Ticket No</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>Description</th>
                        <th>From</th>
                        <th>Last Change</th>
                        {/* <th>View</th> */}
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        ticket.map((tickget) => (
                          <tr>
                            <td>{tickget.ticket_id}</td>
                            <td>{tickget.category_name}</td>
                            <td>{tickget.subcategory_name}</td>
                            <td>{tickget.title_name}</td>
                            <td>{tickget.department_name}</td>
                            <td>{tickget.description}</td>
                            <td>{tickget.username}</td>
                            <td>{tickget.last_changed}</td>
                            <td >
                              <button type='button' className='button1 border-0 text-white' >
                                <Link to ={"editticket/"+tickget.id}>
                                <i className='fa-solid fa-edit  text-white mx-2 '
                                ></i>
                                </Link>
                                <Link to ={"/ticketdetail/"+tickget.id}>
                                  <i className='fa-solid fa-eye text-white mx-2'
                                  ></i>
                                </Link>
                                <i 
                                className='fa-solid fa-trash-can text-white mx-2'
                                onClick={()=>DeleteTicket(tickget.id)}
                                > 
                                </i>
                              </button>
                            </td>
                          </tr>

                        ))
                      }
                    </tbody>

                  </table>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>Showing 0 to 0 of 0 entries</p>
                  </div>
                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination d-flex align-items-end justify-content-end">
                    <li className="page-item"><a className="page-link text-black" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link text-black " style={{ backgroundColor: "rgb(78, 3, 112)" }} href="#">1</a></li>
                    <li className="page-item"><a className="page-link text-black" href="#">2</a></li>
                    <li className="page-item"><a className="page-link text-black" href="#">3</a></li>
                    <li className="page-item"><a className="page-link text-black" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>

            </div>
            {/* <!-- content end --> */}

          </div>
        </div>
      </div>

      {/* <!-- Sidebar End --> */}
      {/* <Footer/> */}

    </>
  )
}

export default Allticket