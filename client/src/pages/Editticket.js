import React, { useEffect, useState } from 'react'
import '../css/Addticket.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import StoreUser from '../Store/localStorage';
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

toast.configure()

const Editticket = () => {

	// For prefilled Form
	const [cat , setCat]=useState([]);
	const [subcat , setSubcat] = useState([]);
	const [tit , setTit] = useState([])
	const [ticket_id , setTicket_id] = useState([]);
	const [desc , setDesc] = useState([]);
	const [dept , setDept] = useState([]); 
	const params = useParams();

	const pathChange=()=>{
		let path = `/allticket`
		navigate(path);
	}

  
  let navigate = useNavigate();
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
  const [id, setId] = useState([]);

  // To get All the cateories in the dropdown
  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost:5000/api/v1/categories/sub");
      const getcat = await res.json();
      console.log('getcat', getcat);

      setCategory(getcat.getcategory);

    }
    getcategory();
  }, [])


  // to get the prefilled details in the ticket
	const getTicketDetails = async () => {
    console.warn('params', params);
    console.log('params',params)
    let result = await fetch(`http://localhost:5000/api/v1/ticket/dept/${params.id}`);
    result = await result.json();
    console.warn('result', result)
    console.log('result', result)
    setTicket_id(result.dept[0].ticket_id)
    setCat(result.dept[0].category_id)
    getsubcategory(result.dept[0].category_id);
    setDesc(result.dept[0].description)
    setSubcat(result.dept[0].subcategory_id)
    gettitle(result.dept[0].subcategory_id);
    setTit(result.dept[0].title_id)
    setDept(result.dept[0].department_name)
  }
  // for prefilled data
  useEffect(() => {
		getTicketDetails();
	}, [])

  // to get departments in dropdown
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

  let data = {
    ticket_id: ticket_id,
    category_id: catid,
    subcategory_id: subcategoryid,
    title_id: titleid,
    department_id: deptid,
    user_id: localStorage.getItem('id'),
    description: desc,
    created_by: 'Admin',
    status: 'Active'
  };

 	let data1 ={
    ticket_id:ticket_id,
    user_id: localStorage.getItem('id'),
    username: localStorage.getItem('full_name')
  };

	let data2 = {
		ticket_id:params.id,
    user_id: localStorage.getItem('id'),
    username: localStorage.getItem('full_name')
	}
  

  let handleSubmit = async () => {
    console.log('data', data);
    console.log('data1' , data1);
    
    try {
      let res = await fetch(`http://localhost:5000/api/v1/ticket/${params.id}`, {
				
        method: 'PUT',
        headers: {
					accept:"application/json" ,
          'Content-Type': 'application/json',
					
        },
        body: JSON.stringify(data)
        ,
      })
			console.log('params.id:' ,params.id)
      let resJson = await res.json();
      console.log('resjson ', resJson);

      let response = await fetch(`http://localhost:5000/api/v1/history/` , {
        method:'POST',
        headers:{
					accept:"application/json",
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data2),
      })

      let responseJson = await response.json();
      console.log('responseJson' , responseJson);
      if(response.status && res.status ===200){
        toast("Data Updated Succesfully")
        console.log("Data updated Successfully");
      }else {
        toast("Some error occured")
        console.log("Some error occured");
      } 

      console.log('fullname' , localStorage.getItem('full_name'))
      
      navigate('/allticket')

    } catch (err) {
      console.log('ErroR:', err);
    }
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
                      <h3>Edit Ticket</h3>
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
                  <form >
                    <div className="row mt-3 mx-3 ">
                      <div className=" col-md-4">
                        <label>Ticket No.<span style={{ color: "red" }}>*</span> </label><br />
                        <input type="text" placeholder='Enter Ticket id'
                          className="form-control-lg  fs-5" value={ticket_id}
                          onChange={(e) => setTicket_id(e.target.value)} />
                      </div>
                      <div className=" col-md-4">
                        <label>Category <span style={{ color: "red" }}>*</span></label><br />
                        <select className="p-3"
                          style={{ width: "75%" }}
                          value={cat}
                          data-value={cat}
                          onChange={(e) => handleCategory(e)}
                        >
                          {/* <option>{cat}</option> */}
                          <option>Select Category</option>
                          {
                            category.map((categoryget, index) => (
                            
                              <option key={index} value={categoryget.id}  id={categoryget.id}>{categoryget.categoryname}</option>
                            ))
                          }
                          
                        </select>
                      </div>
                      <div className=" col-md-4">
                        <label>Sub Category <span style={{ color: "red" }}>*</span></label><br />
                        <select id="cars" name="cars"
                          className="p-3" style={{ width: "75%" }}
                          onChange={(e) => handleSubCat(e)}
                          value={subcat}
                        >
                          {/* <option>{subcat}</option> */}
                          {
                            subcategory.map((subcategoryget, index) => (
                              <option value={subcategoryget.subcategory_id} id={subcategoryget.subcategory_id}>{subcategoryget.subcategory_name}</option>
                            ))
                          }
                        </select>

                      </div>

                    
                    {/* required row div */}
                    {/* <div className="row mt-3 mx-3"> */}
                      <div className="col-md-4 py-3">
                        <label>Title <span style={{ color: "red" }}>*</span></label><br />
                        <select id="cars" name="cars" className="p-3"
                          style={{ width: "75%" }}
                          onChange={(e) => handleTitle(e)}
                          value={tit}
                        >
                          
                          {
                            title.map((titleget) => (
                              <option value={titleget.title_id} id={titleget.title_id}>{titleget.title_name}</option>
                            ))
                          }
                        </select>
                      </div>
                    {/* </div> */}
                    {/* <div className="row mt-3 mx-4"> */}
                    <div className='col-md-12 py-3'>
                      <label htmlFor="exampleFormControlTextarea1">Description <span style={{ color: "red" }}>*</span></label><br/>
                      <textarea type="textarea" placeholder='Enter Description'
                        className="form-control-lg  fs-5"
                        style={{height:'70%'} , {width:'100%'}} value ={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                      </div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                      <div className="col-md-4 py-3">
                        <label>Department <span style={{ color: "red" }}>*</span></label><br />
                        <select id="cars" name="cars" className="p-3"
                          style={{ width: "75%" }}
                          onChange={(e) => handleDept(e)}>
                            <option>{dept}</option>
                          {
                            department.map((depget) => (
                              <option value={depget.id}>{depget.name}</option>
                            ))
                          }
                        </select>
                      </div>
                    {/* </div> */}
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3 ">


                      <button type="button"
                        className="button text-white mx-3"
                        style={{ backgroundColor: 'orangered' }}
                        onClick={()=>handleSubmit()}

                      >Update</button>
                      <button type="button" 
											className="btn btn-warning text-white " 
											style={{ backgroundColor: 'purple' }}
											onClick={pathChange}>Cancel</button>

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

export default Editticket


