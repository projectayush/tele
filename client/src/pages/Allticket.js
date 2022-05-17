import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'


toast.configure()

const Allticket = () => {

  const [ticket, setTicket] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [title, setTitle] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const getsubcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/newsub");
      const getcat = await res.json();
      setCategory(getcat.newsub);
    }
    getsubcategory();
  }, [])

  useEffect(() => {
    const getsubcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/sub");
      const getcat = await res.json();
      setSubcategory(getcat.getcategory);
    }
    getsubcategory();
  }, [])

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/title");
      const getcat = await res.json();
      setTitle(getcat.getsubtitle);
    }
    getcategory();
  }, [])
  // let { id } = useParams();

  // -------------------
  useEffect(() => {
    const getticket = async () => {
      const res = await fetch("http://localhost:5000/api/v1/ticket/dept");
      const gettick = await res.json();
      setTicket(gettick.dept);
    }
    getticket();

  }, [])



  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/addticket`;
    navigate(path);
  }

  const pathChange = () => {
    let path1 = `/ticketdetail`;
    navigate(path1);
  }

  const DeleteTicket = async (id) => {
    var check = window.confirm("Are you sure you want to delete this ticket?");
    if (check) {
      let result = await fetch(`http://localhost:5000/api/v1/ticket/dept/${id}`, {

        method: "Delete",

      });
      result = await result.json;
      if (result) {
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
            <div className="card-header  border-0 ">
              <div className="row">
                <div className="card mt-3 border-0">
                  <div className="card-header ">
                    <div className="row ">
                      <div className="col-md-6 ">
                        <h3><i className="fa-solid fa-magnifying-glass "></i>Search</h3>
                      </div>
                      <div className="col-md-6">
                        <i className="fa-solid fa-dash fs-3 d-flex align-items-end justify-content-end "></i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 mt-3 fs-5 ">
                        <input type="text" placeholder="Search by Ticket Number" className='form-control-lg' onChange={e => setQuery(e.target.value)} style={{ width: "100%" }} />
                      </div>
                      <div className="col-md-3 mt-3 fs-5 ">
                        <select  style={{ height: '100%', width: '100%' }}>
                          <option>Search by Category</option>
                        </select>
                      </div>
                      <div className="col-md-3 mt-3 fs-5 ">
                        <select  style={{ height: '100%', width: '100%' }}>
                          <option>Search by Subcategory</option>
                        </select>
                      </div>
                      <div className="col-md-3 mt-3 fs-5 ">
                        <select  style={{ height: '100%', width: '100%' }}>
                          <option>Search by Title</option>
                        </select>
                      </div>
                    </div>
                  </div>
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
                      style={{ width: "30%" }, { backgroundColor: 'orangered' }}><b>Add Ticket</b></button>
                  </div>
                </div>
                <hr />
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
                                <Link to={"editticket/" + tickget.id}>
                                  <i className='fa-solid fa-edit  text-white mx-2 '
                                  ></i>
                                </Link>
                                <Link to={"/ticketdetail/" + tickget.id}>
                                  <i className='fa-solid fa-eye text-white mx-2'
                                  // onClick={() => routeChange1(tickget.id)}
                                  ></i>
                                </Link>
                                <i
                                  className='fa-solid fa-trash-can text-white mx-2'
                                  onClick={() => DeleteTicket(tickget.id)}
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