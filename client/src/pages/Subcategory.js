import React, { useState, useEffect } from 'react'
import '../css/Title.css'
import Sidebar from '../components/Sidebar'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { format } from 'date-fns'
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

const Subcategory = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/newsub");
      const getcat = await res.json();
      setCategory(await getcat.newsub);
    }
    getcategory();
  },[])

  // to select category from Dropdown
  useEffect(() => {
    const getsubcategory = async () => {
      const ressubcat = await fetch("http://localhost:5000/api/v1/categories/sub")
      const getsubcat = await ressubcat.json();
      setTitle(await getsubcat.getcategory)
    }
    getsubcategory();
  },[])

  useEffect(() => {
    console.log('formErrors', formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('data11', data4);
    }
  }, [formErrors])

  const [name, setName] = useState("");
  const [parentid, setParentid] = useState(0);
  const data = { name, parent_id: parseInt(parentid), is_subcategory: true };

  let data4 = {
    name: name,
  };
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.categoryName = "**Please select a CategoryName"
    }

    if (!values.subCategory) {
      errors.category = "**Please write a subcategory"
    }
    return errors
  }


  let handleSubmit = async (e) => {
    if (name.length != 0) {
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
          setModal(false);
        } else {
          toast("Some error occured")
          console.log("Some error occured");
        }
      } catch (err) {
        console.log('ErroR:', err);
      }
    } else {
      toast("data is empty")
      console.log("Some error occured");
    }
    setFormErrors(validate(data4));
    setIsSubmit(true);
    // setModal(false);
    console.log('data', data);
  }

  const DeleteCategory = async (id) => {
    var check = window.confirm('Are you sure you want to delete this ?')
    if (check) {
      let result = await fetch(`http://localhost:5000/api/v1/categories/${id}`, {

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
            <div className="row  mx-4 ">
              <div className=" col-md-6 ">
                <select name='category' style={{ width: '70%', height: '50px' }}
                  onChange={(e) => setParentid(e.target.value)}

                >
                  <option>---Select Category---</option>
                  {
                    title.map((titleget) => (
                      <option value={titleget.id}>{titleget.categoryname}</option>
                    ))
                  }
                </select>
                <p><span style={{ color: 'red' }}>{formErrors.categoryName}</span></p>
              </div>
              <div className=" col-md-6">
                <input className='px-3 form-control-lg' type='text' name='text' placeholder='Enter Subcategory' required style={{ width: '70%', height: '50px' }}
                  onChange={(e) => setName(e.target.value)}

                />
                <p><span style={{ color: 'red' }}>{formErrors.category}</span></p>
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
                        <input type="text" placeholder="Search by SubCategory" className='form-control-lg' onChange={e => setQuery(e.target.value)} style={{ width: "70%" }} />
                      </div>
                      {/* <div className="col-md-4 mt-2 form-control-lg  fs-5 border-0 ">
                      <button type="button" className="btn border-0 text-white d-flex align-items-start justify-content-start "
                          style={{ backgroundColor: "orangered" }}>RESET</button>

                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  border-0 mt-4">
              <div className="card-header">

                <div className="row">
                  <div className="col-md-6 mt-3">
                    <h5>Subcategory Management</h5>
                  </div>
                  <div className="col-md-6 d-flex align-items-end justify-content-end  mt-1">
                    <button type="button"
                      className=" btn  text-white "
                      onClick={() => setModal(true)}
                      style={{ width: "30%" }, { backgroundColor: 'orangered' }}><b>Add Subcategory</b></button>
                  </div>
                </div>
                <hr />
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
                        category.filter(categoryget => categoryget.subcategory_name.toLowerCase().includes(query)).map((categoryget) => (
                          <tr>
                            <td>{categoryget.category_name}</td>
                            <td>{categoryget.subcategory_name}</td>
                            {/* <td>{categoryget.created_at}</td> */}
                            <td key={category.id}>{format ( new Date(categoryget.created_at), 'dd-MM-yyyy HH:mm')}</td>
                            <td>
                              <button type='button' className='button1 border-0'>
                                <i className='fa-solid fa-trash-can text-white mx-2 my-2 p-1 fs-6'
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subcategory

