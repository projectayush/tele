import React, { useEffect, useState } from 'react'
import '../css/Addticket.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import StoreUser from '../Store/localStorage';
import Sidebar from '../components/Sidebar'
// import { param } from 'jquery';
import {useParams} from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";



const Addticket = () => {

  


  let navigate = useNavigate();
  // let {id} = useParams();
  const pathChange=()=>{
		let path = `/allticket`
		navigate(path);
	}

  // For form validation
  const [formErrors , setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);

  const [category, setCategory] = useState([  ]);
  const [department, setDepartment] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [title, setTitle] = useState([]);
  const [categoryid, setCategoryid] = useState("");
  const [subcatid, setSubcatid] = useState("");   
  // const[catid , setCatid] = useState([]);
  const [catid, setCatid] = useState();
  const [subcategoryid, setSubcategoryid] = useState();
  const [titleid, setTitleid] = useState();
  const [deptid, setDeptid] = useState();
  const [user, setUser] = useState([]);
  // const [id, setId] = useState([]);

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/sub");
      const getcat = await res.json();
      console.log('getcat', getcat);

      setCategory(getcat.getcategory);

    }
    getcategory();
  }, [])



  useEffect(() => {
    const getdepartment = async () => {
      const redep = await fetch("http://localhost:5000/api/v1/departments");
      const getdep = await redep.json();
      console.log('getdep', getdep);
      setDepartment(getdep.department)
    }
    getdepartment();
  }, [])
  // const getcategoryid ;

  const handleDept = (event) => {
    const getdeptid = event.target.value;
    setDeptid(getdeptid);
    console.log('getdeptid', getdeptid)
    console.log('deptid', deptid)
  }

  const handleCategory = (event) => {

    const getcategoryid = event.target.value;
    setCatid(getcategoryid);
    console.log('catid', catid)

    console.log('getcategoryid', getcategoryid)

    setCategoryid(getcategoryid);
    console.log('getcategoryid:', getcategoryid);
    getsubcategory(getcategoryid);
    
  }

  const getsubcategory = async (categoryid1) => {
    const ressub = await fetch(`http://localhost:5000/api/v1/categories/subcategory/${categoryid1}`);
    const getsub = await ressub.json();
    console.log('categoryid1', categoryid1)
    console.log('getsub', getsub.getsubcategory);
    console.log('getsub1', getsub)
    setSubcategory(getsub.getsubcategory)
    setCatid(categoryid1);
    console.log('catid', catid)
    console.log(' getsub.getsubcategory', getsub.getsubcategory)


  }

  const handleSubCat = (event) => {
    // event.preventDefault();
    const getsubcatid = event.target.value;
    setSubcategoryid(getsubcatid)
    setSubcatid('getsubcatid', getsubcatid);

    console.log('subcategoryid', subcategoryid)
    console.log('getsubcatid:', getsubcatid);
    gettitle(getsubcatid);
    // setSubcategoryid(getsubcatid);
    // console.log('subcatid' , subcategoryid)
  }

  const gettitle = async (subcatid1) => {
    const restit = await fetch(`http://localhost:5000/api/v1/categories/title/${subcatid1}`);
    const gettit = await restit.json();

    console.log('gettit', gettit);
    setTitle(gettit.gettitle)
    console.log('gettit.newtitle', gettit.gettitle)
  }

  const handleTitle = (event) => {
    const gettitleid = event.target.value;
    setTitleid(gettitleid);
    console.log('gettitleid', gettitleid)
    console.log('titleid', titleid)
  }

  const params = useParams();


  const [ticketid, setTicketid] = useState([]);
  const [description, setDescription] = useState([]);

  let data = {
    ticket_id: ticketid,
    category_id: catid,
    subcategory_id: subcategoryid,
    title_id: titleid,
    department_id: deptid,
    user_id: localStorage.getItem('id'),
    description: description,
    created_by: 'Admin',
    status: 'Active'
  };

  
  let message1 = 'has created ticket succesfully';
  
  let data1 ={
    ticket_id:ticketid,
    user_id: localStorage.getItem('id'),
    username: localStorage.getItem('full_name')
  };
  

  let handleSubmit1 = async (e) => {
    
    console.log('data', data);
    console.log('data1' , data1);
    // const user ={id};
    try {
      let res = await fetch('http://localhost:5000/api/v1/ticket/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        ,
      })

      let resJson = await res.json();
      console.log('resjson ', resJson);
    
      let response = await fetch('http://localhost:5000/api/v1/history' , {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data1),
      })      

      let responseJson = await response.json();
      console.log('responseJson' , responseJson);

      if(response.status && res.status ===200){
        toast("Ticket Created Succesfully")
        console.log("Data added Successfully");
      }else {
        toast("Some error occured")
        console.log("Some error occured");
      } 

      console.log('fullname' , localStorage.getItem('full_name'))
      
      setFormErrors(validate(data));
      setIsSubmit(true);

      // navigate('/allticket')
   
    } catch (err) {    
      console.log('ErroR:', err);
    }      
  }

    useEffect(()=>{
      console.log('formErrors' ,formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log('data11' , data);
      }
    } ,[formErrors])

    const validate =(values)=>{
      const errors ={};
      // const regex = ^[0-9]*$;
      const re = /^[0-9\b]+$/;


      if(!values.ticket_id){
        errors.ticketid ="**Ticket Number is required"
      } else if (!re.test(values.ticket_id)){
        errors.ticketid ="**Only Numeric Values allowed"
      }


      if(!values.category_id){
        errors.catid = "**Please select a category"
      }

      if(!values.subcategory_id){
        errors.subcategoryid = "**Please select a subcategory"
      }
      if(!values.title_id){
        errors.titleid = "**Please select a title"
      }
      if(!values.department_id){
        errors.deptid = "**Please select a department"
      }
      if(!values.description){
        errors.description = "**Description is required"
      }

      return errors
    }


  return (
    <>
      {/* <div className="container-fluid "> */}

        {/* <!-- Side bar Start --> */}
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <Sidebar/>
            <div className="col py-3">
              {/* <!-- Content area... --> */}
              
              <div className="card">
                <div className="card-header">
                  <div className="row ">
                    <div className="col-md-6">
                      <h3>Add Ticket</h3>
                    </div>
                    <div className="col-md-6">
                      <i className="fa-solid fa-xmark fs-3 d-flex align-items-end justify-content-end "
                      onClick={pathChange}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div className="card-body">

                  <form  >
                    <div className="row mt-3 mx-3 ">
                      <div className=" col-md-4">
                        <label>Ticket No.<span style={{ color: "red" }}>*</span> </label><br />
                        <input  type="text" placeholder='Enter Ticket id'
                          className="form-control-lg  fs-5"
                          onChange={(e) => setTicketid(e.target.value)} />
                          {/* <p>{errors.ticket_id?.message}</p> */}
                          <p><span style={{color:'red'}}>{formErrors.ticketid}</span></p>
                      </div>
                      

                      <div className=" col-md-4">
                        <label>Category <span style={{ color: "red" }}>*</span></label><br />
                        <select className="p-3"
                          style={{ width: "75%" }}
                          onChange={(e) => handleCategory(e)}
                        >
                          <option >Select Category</option>
                          {
                            category.map((categoryget, index) => (
                              <option key={index} value={categoryget.id} id={categoryget.id}>{categoryget.categoryname}</option>
                            ))
                          }
                        </select>
                        <p><span style={{color:'red'}}>{formErrors.catid}</span></p>
                      </div>
                      
                      <div className=" col-md-4">
                        <label>Sub Category <span style={{ color: "red" }}>*</span></label><br />
                        <select id="cars" name="cars"
                          className="p-3" style={{ width: "75%" }}
                          onChange={(e) => handleSubCat(e)}
                        >
                          <option value="volvo">Select Subcategory</option>
                          {
                            subcategory.map((subcategoryget, index) => (
                              <option value={subcategoryget.subcategory_id} id={subcategoryget.subcategory_id}>{subcategoryget.subcategory_name}</option>
                            ))
                          }
                        </select>
                        <p><span style={{color:'red'}}>{formErrors.subcategoryid}</span></p>
                      </div>
                      
                    
                    {/* required row */}
                    {/* <div className="row mt-3 mx-3 "> */}
                      <div className="col-md-4 py-3">
                        <label>Title <span style={{ color: "red" }}>*</span></label><br />
                        <select id="cars" name="cars" className="p-3"
                          style={{ width: "75%" }}
                          onChange={(e) => handleTitle(e)}
                        >
                          <option value="volvo">Select Title</option>
                          {
                            title.map((titleget) => (
                              <option value={titleget.title_id} id={titleget.title_id}>{titleget.title_name}</option>
                            ))
                          }
                        </select>
                        <p><span style={{color:'red'}}>{formErrors.titleid}</span></p>
                      </div>
                    {/* </div> */}
                    
                    {/* <div className="row mt-3 mx-4 "> */}
                    <div className='col-md-12 py-3 '>
                      <label htmlFor="exampleFormControlTextarea1">Description <span style={{ color: "red" }}>*</span></label><br/>
                      <textarea placeholder='Enter Description'
                        className="form-control-lg  fs-5"
                        style={{height:'70%'}, {width:'100%'}}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      

                      <p><span style={{color:'red'}}>{formErrors.description}</span></p>
                    
                    </div>
                      <div className="col-md-4 py-3">
                        <label>Department <span style={{ color: "red" }}>*</span></label><br />
                        <select id="cars" name="cars" className="p-3"
                          style={{ width: "75%" }}
                          onChange={(e) => handleDept(e)}>
                          <option value="volvo">Select Department</option>
                          {
                            department.map((depget) => (
                              <option value={depget.id}>{depget.name}</option>
                            ))
                          }
                        </select>
                        <p><span style={{color:'red'}}>{formErrors.deptid}</span></p>
                      </div>
                    {/* </div> */}

                    </div>
                    
                    <div className="d-flex align-items-center justify-content-center mt-3 ">


                      <button type="button"
                        className="button text-white mx-3"
                        style={{ backgroundColor: 'orangered' }}
                        onClick={handleSubmit1}

                      >Submit</button>
                      <button type="button" className="btn btn-warning text-white " style={{ backgroundColor: 'purple' }}
                      onClick={pathChange}
                      >Cancel</button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* {/* <!-- Siddebar end --> */}


      {/* </div> */}
    </>
  )
}

export default Addticket