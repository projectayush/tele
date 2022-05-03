import React, { useState, useEffect, Component } from 'react'
import '../css/Title.css'
import Sidebar from '../components/Sidebar'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Department = () => {

  // for filter
  const [query,setQuery] = useState("");



  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState([]);
  
 
  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/departments");
      const getcat = await res.json();
      console.log('getdata1', getcat);

      setCategory(await getcat.department);
    }
    getcategory();
  } ,[])

 

  const [name, setName] = useState("");
  const [parentid, setParentid] = useState(0);
  const data = { name:name, parent_id: parseInt(parentid), is_subcategory: false };



  let handleSubmit = async (e) => {

      if(name.length!==0){
        try {
          let res = await fetch('http://localhost:5000/api/v1/departments/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
    
          let resJson = await res.json();
          console.log('resjson ', resJson);
          
          if (res.status === 200) {
            toast("Data added Successfully")
            console.log("Data added Successfully");
          } else {
            toast("Some error occured")
            console.log("Some error occured");
          }
    
         
          
        } catch (err) {
          console.log('ErroR:', err);
        }
      }else{
        alert("Department cannot be empty")
      }
      setModal(false);
      console.log('data', data);
      
    
  
    }

    
    // e.preventDefault();
    
 


  const DeleteCategory = async (id) => {
    var check = window.confirm("Are you sure you want to delete this department?")
    if(check){
    let result = await fetch(`http://localhost:5000/api/v1/departments/${id}`, {

      method: "Delete",

    });
    result = await result.json;
    if (result) {
      toast("Data Deleted ")
    }
    else {
      toast("Something went wrong")
    }

  };
  }


  return (
    <>
      <Modal
        size='lg'
        isOpen={modal}
        toggle={() => setModal(!modal)}
      >
        <ModalHeader
          toggle={() => setModal(!modal)}
        >
          Department
        </ModalHeader>
        <ModalBody>
          <form  >

            <div className="row   ">

              <div >
                <input className='text-left fs-5 ' type='text' name='text' placeholder='Enter Department' required style={{ width: '40%' }, { height: '170%' }}
                  onChange={(e) => setName(e.target.value)}


                />
                
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5 ">
              <button type="button" className="button btn text-white mx-3 "
                style={{ backgroundColor: 'orangered' }}
                onClick={(e) => handleSubmit(e)}

              >Submit</button>

            </div>
          </form>

        </ModalBody>
      </Modal>

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
                      <div className="col-md-6 mt-3 fs-5 ">
                        <input type="text" placeholder="Search by Category"
                        onChange={(e)=>setQuery(e.target.value)}
                        style={{ width: "100%" }} />
                      </div>
                      <div className="col-md-6 mt-2 form-control-lg  fs-5 ">
                        <button type="button" className="btn text-white d-flex align-items-start justify-content-start "
                          style={{ backgroundColor: "orangered" }}>RESET</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  border-0 mt-4">
              <div className="card-header">

                <div className="row">
                  <div className="col-md-6 mt-3">
                    <h5>Title Management</h5>
                  </div>
                  <div className="col-md-6 d-flex align-items-end justify-content-end  mt-1">
                    <button type="button"
                      className=" btn  text-white mx-3 "
                      style={{ width: "10%" }, { backgroundColor: 'purple' }}>Back</button>
                    <button type="button"
                      className=" btn  text-white "
                      onClick={() => setModal(true)}
                      // onClick={handleClickOpen}
                      style={{ width: "30%" }, { backgroundColor: 'orangered' }}>Add Department</button>
                  </div>
                </div>
                <hr />
                <div className="row d-flex align-items-start justify-content-start">
                  <div className="col-md-6">
                    <label htmlFor="">Show </label>
                    <select id="cars" name="cars">
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                    </select>
                    <label htmlFor=""> Entries</label>
                  </div>
                </div>
                <div className="mt-3">

                  <table className="table ">
                    <thead>
                      <tr className='table-dark'>
                        <th>Department Name</th>
                        <th>Modified</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody className='border-1'>
                      {
                        category.filter(categoryget=>categoryget.name.toLowerCase().includes(query)).map((categoryget) => (
                          <tr >
                            <td key={categoryget.id}>{categoryget.name}</td>
                            <td>{categoryget.created_at}</td>
                            <td key={category.id}>
                              <button type='button' className='button1 border-0'>
                                <i className='fa-solid fa-edit  text-white mx-2'></i>
                                <i
                                  className='fa-solid fa-trash-can text-white mx-2'

                                  onClick={() => DeleteCategory(categoryget.id)}></i>
                              </button>
                            </td>
                          </tr>
                        )
                        )
                      }
                    </tbody>
                  </table>
                </div>
                <p className="text-secondary">Showing 0 to 0 of 0 entries</p>
                <div className="d-flex align-items-end justify-content-end">
                  <button type="button" className="btn text-secondary">Previous</button>
                  <button type="button" className="btn text-secondary">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Department