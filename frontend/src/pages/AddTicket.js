import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


const AddTicket = () => {
	return (
		<>
			<Header />
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
									<form >
										<div className="row mt-3 mx-3 ">
											<div className=" col-md-6">
												<label style={{ color: '#0cb4ce' }}> <b>Ticket No.</b>  </label><br />
												{/* <input type="text" placeholder='Enter Ticket id'
													style={{ width: '74%', height: '52%' }}

												/> */}

												{/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> */}
												<input 
												style={{width:'99%' , height:'49%'}}
												type="text "  id="exampleFormControlInput1" placeholder="Enter Ticket Number"></input>
												

											</div>


											<div className=" col-md-6">
												<label style={{ color: '#0cb4ce'}}><b>Category</b> </label><br />
												
												<select className="form-select form-select-md mb-3" aria-label=".form-select-md example">
													<option selected>Select Category</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>

											</div>

											<div className=" col-md-6 mt-4">
												<label style={{ color: '#0cb4ce' }}><b>Subcategory</b> </label><br />
												{/* <select id="cars" name="cars"
													className="p-3" style={{ width: "75%", backgroundColor: 'white' }}

												>
													<option value="volvo">Select Subcategory</option>

												</select> */}
												<select class="form-select form-select-md mb-3" aria-label=".form-select-md example">
													<option selected>Select SubCategory</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>

											</div>

											<div className="col-md-6  mt-4">
												<label style={{ color: '#0cb4ce' }}><b>Title</b></label><br />
												{/* <select id="cars" name="cars" className="p-3"
													style={{ width: "75%", backgroundColor: 'white', marginLeft: '14%' }}

												>
													<option value="volvo">Select Title</option>

												</select> */}
												<select class="form-select form-select-md mb-3" aria-label=".form-select-md example">
													<option selected>Select Title</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>

											</div>

											<div className='col-md-12 mt-4 '>
												<label style={{ color: '#0cb4ce' }} htmlFor="exampleFormControlTextarea1"><b>Description</b> </label><br />
												{/* <textarea placeholder='Enter Description'
													className="  "
													style={{ height: '80%', width: '95%', backgroundColor: 'white' }}

												/> */}
												<textarea style={{width:'100%'}} id="exampleFormControlTextarea1" rows="4"></textarea>



											</div>
											<div className="col-md-6 mt-4">
												<label style={{ color: '#0cb4ce' }}><b>Department</b> </label><br />
												{/* <select id="cars" name="cars" className="p-3"
													style={{ width: "75%", backgroundColor: 'white' }}
												>
													<option value="volvo">Select Department</option>

												</select> */}
												<select class="form-select form-select-md mb-3" aria-label=".form-select-md example">
													<option selected>Select Department</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>

											</div>

										</div>

										<div className="d-flex align-items-center justify-content-center mt-3 ">


											<button type="button"
												className="btn text-white mx-3"
												style={{ backgroundColor: '#0cb4ce' }}


											>Add Ticket</button>
											<button type="button" className="btn btn-warning text-white " style={{ backgroundColor: '#0cb4ce' }}

											>Cancel</button>

										</div>
									</form>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
			<Footer />
		</>
	)
}

export default AddTicket
