import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

// for form validation




// -------------------------------------------------------------------------------------------------
const AddTicket = () => {

	// form validation

	// const validationSchema = yup.object().shape({
	// 	ticketid: yup.number().required("Ticket Number is required"),
	// 	category: yup.string().ensure().required("Category is required"),
	// 	subcategory: yup.string().required(),
	// 	title: yup.string().required(),
	// 	description: yup.string().required(),
	// 	department: yup.string().required(),
	// })

	// const formOptions = { resolver: yupResolver(validationSchema) };
	// const {
	// 	register,
	// 	setValue,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm(formOptions)

	// const [formErrors , setFormErrors] = useState({});

	let navigate = useNavigate();
	const pathChange = () => {
		let path = `/alltickets`
		navigate(path);
	}

	// For form validation
	// const [formErrors, setFormErrors] = useState({});
	// const [isSubmit, setIsSubmit] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const [category, setCategory] = useState([]);
	const [department, setDepartment] = useState([]);
	const [subcategory, setSubcategory] = useState([]);
	const [title, setTitle] = useState([]);
	const [categoryid, setCategoryid] = useState("");
	const [subcatid, setSubcatid] = useState("");
	const [catid, setCatid] = useState();
	const [subcategoryid, setSubcategoryid] = useState();
	const [titleid, setTitleid] = useState();
	const [deptid, setDeptid] = useState();



	useEffect(() => {
		const getcategory = async () => {
			const res = await fetch("http://localhost:5000/api/category/sub");
			const getcat = await res.json();
			setCategory(getcat.getcategory);
		}
		getcategory();
	}, [])


	useEffect(() => {
		const getdepartment = async () => {
			const redep = await fetch("http://localhost:5000/api/department");
			const getdep = await redep.json();
			setDepartment(getdep.department)
		}
		getdepartment();
	}, [])


	const handleDept = (event) => {
		const getdeptid = event.target.value;
		setDeptid(getdeptid);
	}

	const handleCategory = (event) => {

		const getcategoryid = event.target.value;
		setCatid(getcategoryid);
		setCategoryid(getcategoryid);
		getsubcategory(getcategoryid);

	}

	const getsubcategory = async (categoryid1) => {
		const ressub = await fetch(`http://localhost:5000/api/category/subcategory/${categoryid1}`);
		const getsub = await ressub.json();
		setSubcategory(getsub.getsubcategory)
		setCatid(categoryid1);
	}

	const handleSubCat = (event) => {
		const getsubcatid = event.target.value;
		setSubcategoryid(getsubcatid)
		setSubcatid('getsubcatid', getsubcatid);
		gettitle(getsubcatid);
	}

	const gettitle = async (subcatid1) => {
		const restit = await fetch(`http://localhost:5000/api/category/title/${subcatid1}`);
		const gettit = await restit.json();
		setTitle(gettit.gettitle)

	}

	const handleTitle = (event) => {
		const gettitleid = event.target.value;
		setTitleid(gettitleid);

	}

	// const params = useParams();
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
		created_by: 'User',
		status: 0
	};

	// let message1 = 'has created ticket succesfully';



	let handleSubmit1 = async (e) => {

		if (ticketid.length === 0) {
			toast.error('Ticket Number is required')
		} else if (!catid) {
			toast.error('Please Select Category')
		} else if (!subcategoryid) {
			toast.error('Please Select Subcategory')
		}
		else if (!titleid) {
			toast.error('Please Select Title')
		}
		else if (description.length === 0) {
			toast.error('Description is a required Field')
		}
		else if (!deptid) {
			toast.error('Please Select Department')
		}
		else {
			console.log('data', data);
			// console.log('data1', data1);
			try {
				let res = await fetch('http://localhost:5000/api/ticket/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data)
					,
				})

				let resJson = await res.json();
				console.log('resjson ', resJson);

				let response = await fetch('http://localhost:5000/api/history', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						ticket_id: resJson.ticketsData.insertId,
						user_id: localStorage.getItem('id'),
						message: localStorage.getItem('full_name') + ' has added ticket successfully'

					}),
				})



				let responseJson = await response.json();
				console.log('responseJson', responseJson);

				if (res.status === 200 && response.status === 200) {
					toast("Ticket Created Succesfully")
					console.log("Data added Successfully");

					navigate(`/alltickets`);
				} else {
					toast.error("Some error occured")
					console.log("Some error occured");
				}



				// setFormErrors(validate(data));
				// setIsSubmit(true);

			} catch (err) {
				console.log('ErroR:', err);
			}
		}


	}

	// useEffect(() => {

	// 	if (Object.keys(formErrors).length === 0 && isSubmit) {
	// 		console.log('data from  validation', data)
	// 	}

	// }, [formErrors])

	// const validate = (values) => {
	// 	const errors = {};

	// 	if (!values.ticketid) {
	// 		errors.ticketid = "Ticket Number is required";
	// 	}

	// 	if (!values.catid) {
	// 		errors.catid = "Ticket Number is required";
	// 	}

	// 	if (!values.subcategoryid) {
	// 		errors.subcategoryid = "Ticket Number is required";
	// 	}

	// 	if (!values.titleid) {
	// 		errors.titleid = "Ticket Number is required";
	// 	}

	// 	if (!values.deptid) {
	// 		errors.deptid = "Ticket Number is required";
	// 	}

	// 	if (!values.description) {
	// 		errors.description = "Ticket Number is required";
	// 	}
	// }

	return (
		<>

			<div className="row" id="loginform">
				<div className="col-md-5">
					<img src={require('../../src/assets/images/wo7.jpg')} alt="Image" className="img-fluid " style={{ height: '100%' }} />
				</div>
				<div className='col-md-7'>

					<div className="row flex-nowrap">

						<div className="col py-3">
							{/* <!-- Content area... --> */}
							<div className="card ">
								<div className="card-header ">
									<div className="row ">
										<div className='text-center'>
											<h3 style={{ color: '#0cb4ce' }}><b>Add Ticket</b></h3>
										</div>

									</div>
								</div>
							</div>
							<div className="card ">
								<div className="card-body">
									<form  >
										<div className="row mt-3 mx-3 ">
											<div className=" col-md-6">
												<label style={{ color: '#0cb4ce' }}> <b>Ticket No.</b>  </label><br />
												<input
													style={{ width: '99%', height: '49%' }} name='ticketid'
													// {...register('ticketid')}
													onChange={(e) => setTicketid(e.target.value)}

													type="text " id="exampleFormControlInput1" placeholder="Enter Ticket Number"></input>

												{/* <p>{errors.ticketid?.message}</p> */}

											</div>



											<div className=" col-md-6">
												<label style={{ color: '#0cb4ce' }}><b>Category</b> </label><br />

												<select className="form-select form-select-md mb-3" name='category'
													onChange={(e) => handleCategory(e)}
													// {...register('category')}
													aria-label=".form-select-md example">
													<option selected>Select Category</option>
													{
														category.map((categoryget) => (
															<option value={categoryget.id}>{categoryget.categoryname}</option>
														))
													}
												</select>
												{/* <p>{errors.category?.message}</p> */}

											</div>

											<div className=" col-md-6 mt-4">
												<label style={{ color: '#0cb4ce' }}><b>Subcategory</b> </label><br />

												<select className="form-select form-select-md mb-3" name='subcategory'
													onChange={(e) => handleSubCat(e)}
													// {...register('subcategory')}
													aria-label=".form-select-md example">
													<option selected>Select SubCategory</option>
													{
														subcategory.map((subcategoryget) => (
															<option value={subcategoryget.subcategory_id} id={subcategoryget.subcategory_id}>{subcategoryget.subcategory_name}</option>
														))
													}
												</select>

											</div>

											<div className="col-md-6  mt-4">
												<label style={{ color: '#0cb4ce' }}><b>Title</b></label><br />

												<select className="form-select form-select-md mb-3" name='title'
													onChange={(e) => handleTitle(e)}
													// {...register('title')}
													aria-label=".form-select-md example">
													<option selected>Select Title</option>
													{
														title.map((titleget) => (
															<option value={titleget.title_id} id={titleget.title_id}>{titleget.title_name}</option>
														))
													}
												</select>
												{/* {errors.title && <p>{errors.title?.message}</p>} */}
											</div>



											<div className='col-md-12 mt-4 '>
												<label style={{ color: '#0cb4ce' }} htmlFor="exampleFormControlTextarea1"><b>Description</b> </label><br />
												<textarea style={{ width: '100%' }} name='description'
													onChange={(e) => setDescription(e.target.value)}
													//  {...register('description')}
													id="exampleFormControlTextarea1" rows="4"></textarea>
												{/* <p>{errors.description?.message}</p> */}
											</div>

											<div className="col-md-6 mt-4">
												<label style={{ color: '#0cb4ce' }}><b>Department</b> </label><br />

												<select className="form-select form-select-md mb-3" name='department'
													onChange={(e) => handleDept(e)}
													// {...register('department')}
													aria-label=".form-select-md example">
													<option selected>Select Department</option>
													{
														department.map((depget) => (
															<option value={depget.id}>{depget.name}</option>
														))
													}
												</select>

											</div>

										</div>

										<div className="d-flex align-items-center justify-content-center mt-3 ">


											<button type="button"
												className="btn text-white mx-3"
												style={{ backgroundColor: '#0cb4ce' }}
												// onChange={handleSubmit1}
												onClick={handleSubmit1}


											>Add Ticket</button>
											<button type="button" className="btn btn-warning text-white "
												onClick={pathChange}
												style={{ backgroundColor: '#0cb4ce' }}

											>Cancel</button>

										</div>
									</form>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>

		</>
	)
}

export default AddTicket
