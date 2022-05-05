import React, { useState, useEffect } from 'react'
import '../css/Title.css'
import Sidebar from '../components/Sidebar'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { format } from 'date-fns'
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

const Title = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [categoryid, setCategoryid] = useState("");
  const [cat, setCat] = useState([]);
  const [query, setQuery] = useState("");


  // for category
  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/sub");
      const getcat = await res.json();
      setCategory(getcat.getcategory);

    }
    getcategory();
  }, [])


  useEffect(() => {
    const gettitle = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/categories/title`);
      const gettit = await res.json();
      setCat(gettit.getsubtitle);

    }
    gettitle();
  },[])

  useEffect(() => {
    console.log('formErrors', formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('data11', data4);
    }
  }, [formErrors])


  

  const handleCategory = (event) => {
    const getcategoryid = event.target.value;
    setCategoryid('getcategoryid', getcategoryid);
    getsubcategory(getcategoryid);

  }

  const getsubcategory = async (categoryid1) => {
    const ressub = await fetch(`http://localhost:5000/api/v1/categories/subcategory/${categoryid1}`);
    const getsub = await ressub.json();
    setSubcategory(getsub.getsubcategory)
  }

  const [name, setName] = useState("");
  const [parentid, setParentid] = useState(0);

  const data = { name, parent_id: parseInt(parentid), is_subcategory: false }

  let data4 = {
    name: name,
  };
  const validate = (values) => {
    const errors = {};
   
    if (!values.name) {
      errors.categoryName = "**Please select a Category"
    }

    if (!values.subCategory) {
      errors.subcategoryname = "**Please select a subcategory"
    }
    if (!values.title) {
      errors.titlename = "**Please write a title"
    }
       return errors
  }

  let handleSubmit = async (e) => {
    if (name.length !== 0) {
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

  // To Delete
  const DeleteTitle = async (id) => {
    var check = window.confirm('Are you sure you want to delete this?')
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
          Title
        </ModalHeader>
        <ModalBody>
          <form  >
            <div className="row">
              <div className=" col-md-4 ">
                <select name='category'  style={{ height: '70%' }}
                  onChange={(e) => handleCategory(e)}>
                  <option >----Select Category----</option>
                  {
                    category.map((categoryget, index) => (
                      <option key={index} value={categoryget.id} id={categoryget.id}>{categoryget.categoryname}</option>
                    ))
                  }
                </select>
                <p><span style={{ color: 'red' }}>{formErrors.categoryName}</span></p>
              </div>
              <div className=" col-md-4 ">
                <select name='subcategory'  style={{ height: '70%' }}
                  onChange={(e) => setParentid(e.target.value)}

                >
                  <option >---Select Subcategory---</option>
                  {
                    subcategory.map((subcategoryget, index) => (
                      <option value={subcategoryget.subcategory_id} id={subcategoryget.subcategory_id}>{subcategoryget.subcategory_name}</option>
                    ))
                  }
                </select>
                <p><span style={{ color: 'red' }}>{formErrors.subcategoryname}</span></p>
              </div>
              <div className=" col-md-3">
                <input type='text' name='text' placeholder='Enter Title' className='form-control-lg'   required style={{ width: '130%',height: '70%' }}
                  onChange={(e) => setName(e.target.value)}

                />
                <p><span style={{ color: 'red' }}>{formErrors.titlename}</span></p>
                 
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
                        <input type="text" placeholder="Search by Title" className='form-control-lg' onChange={e => setQuery(e.target.value)} style={{ width: "100%" }} />
                      </div>
                      {/* <div className="col-md-6 mt-2 form-control-lg  fs-5  ">
                        <button type="button" className="btn text-white border-0 d-flex align-items-start justify-content-start "
                          style={{ backgroundColor: "orangered" }}><b>RESET</b></button>
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
                    <h5>Title Management</h5>
                  </div>
                  <div className="col-md-6 d-flex align-items-end justify-content-end ">
                    <button type="button"
                      className=" btn  text-white p-2 mx-3"
                      onClick={() => setModal(true)}
                      style={{ width: "30%" }, { backgroundColor: 'orangered' }}><b>Add Title</b></button>
                  </div>
                </div>
                <hr />
                <div className="mt-3">

                  <table className="table ">
                    <thead>
                      <tr className='table-dark'>
                        <th>SubCategory Name</th>

                        <th>Title</th>
                        <th>Modified</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody className='border-1'>
                      {
                        cat.filter(titleget => titleget.title_name.toLowerCase().includes(query)).map((titleget) => (
                          <tr>
                            <td>{titleget.subcategory_name}</td>
                            <td>{titleget.title_name}</td>
                            {/* <td>{titleget.updated_at}</td> */}
                            <td key={category.id}>{format ( new Date(titleget.created_at), 'dd-MM-yyyy HH:mm')}</td>
                            <td key={category.id}>
                              <button type='button' className='button1 border-0'>
                                <i
                                  className='fa-solid fa-trash-can text-white mx-2 my-2 p-1 fs-6'

                                  onClick={() => DeleteTitle(titleget.id)}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Title
