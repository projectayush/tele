import React, { useState, useEffect, Component } from 'react'
import '../css/Title.css'
import Sidebar from '../components/Sidebar'
// import Footer from '../components/Footer'
// import Header from '../components/Header'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
// import Category from '../../../APIs/src/Category/category.model';
// import { response } from 'express';
import userContext from '../Store/userContext';
import { useContext } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()



const Subcategory = () => {
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState([]);
  const [query,setQuery] = useState("");


  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/newsub");
      const getcat = await res.json();
      console.log('getdata', getcat);
      setCategory(await getcat.newsub);
    }
    getcategory();
  }, [])

  // to select category from Dropdown
  useEffect(() => {
    const getsubcategory = async () => {
      const ressubcat = await fetch("http://localhost:5000/api/v1/categories/sub")
      const getsubcat = await ressubcat.json();
      console.log('getsubcategory', getsubcat);
      setTitle(await getsubcat.getcategory)
    }
    getsubcategory();
  }, [])


  const [name, setName] = useState("");
  const [parentid, setParentid] = useState(0);
  const data = { name, parent_id: parseInt(parentid), is_subcategory: true };


  let handleSubmit = async (e) => {
    if (name.length !== 0) {
      e.preventDefault();
      console.log('data', data);
      try {
        let res = await fetch('http://localhost:5000/api/v1/categories/', {
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
        console.log(err);
      }
    }else{
      alert("subcategory cannot be empty")
    }
    setModal(false);
  }

  const DeleteCategory = async (id) => {
    let result = await fetch(`http://localhost:5000/api/v1/categories/${id}`, {

      method: "Delete",

    });
    result = await result.json;
    if (result) {
      toast("data deleted")
    }
    // handleSubmit()
  };

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
          Subcategory
        </ModalHeader>
        <ModalBody>
          <form  >
            {/* <div className='card-header'> */}
            <div className="row   ">


              <div className=" col-md-6">
                <select name='category' style={{ width: '70%' }}
                  onChange={(e) => setParentid(e.target.value)}

                >
                  <option>---Select Category---</option>
                  {
                    title.map((titleget) => (
                      <option value={titleget.id}>{titleget.categoryname}</option>
                    ))
                  }
                </select>
              </div>
              <div className=" col-md-6">
                <input className='px-3 ' type='text' name='text' placeholder='Enter Subcategory' required style={{ width: '70%' }, { height: '150%' }}
                  onChange={(e) => setName(e.target.value)}

                />
              </div>
            </div>
            {/* </div>  */}
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
      <div className="onClick={()=>DeleteCategory(categoryget.id)}container-fluid">
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
                        <input type="text" placeholder="Search by SubCategory"
                        onChange={(e)=>setQuery(e.target.value)}
                        style={{ width: "100%" }} />
                      </div>
                      <div className="col-md-6 mt-2 form-control-lg  fs-5 ">
                        <button type="button" className="btn border-0 text-white d-flex align-items-start justify-content-start "
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
                      style={{ width: "30%" }, { backgroundColor: 'orangered' }}>Add Subcategory</button>
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
                        <th>Category Name</th>
                        <th>SubCategory Name</th>
                        <th>Modified</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className='border-1'>
                      {
                        category.filter(categoryget=>categoryget.subcategory_name.toLowerCase().includes(query)).map((categoryget) => (
                          <tr>
                            <td>{categoryget.category_name}</td>
                            <td>{categoryget.subcategory_name}</td>
                            <td>{categoryget.created_at}</td>
                            <td>
                              <button type='button' className='button1 border-0'>
                                <i className='fa-solid fa-edit  text-white mx-2'></i>
                                <i className='fa-solid fa-trash-can text-white mx-2'
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

export default Subcategory

