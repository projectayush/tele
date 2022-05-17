import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import '../css/page.css'

toast.configure();



const AllTickets = () => {

	let navigate = useNavigate();
	const pathChange = ()=>{
		navigate(`/addticket`);
	}

	const name = localStorage.getItem('full_name');
	console.log('name', name);
	let count = 0;
	const [ticket, setTicket] = useState([]);
	useEffect(() => {

		const getticket = async () => {
			const res = await fetch("http://localhost:5000/api/ticket/dept");
			const gettick = await res.json();

			const length = gettick.dept.length;
			const depart =  gettick.dept;

			console.log('depart' , depart);
			console.log('length' , length)
			
			for(let i =0 ; i< length ; i++){
				if(depart[i].username === name){
					setTicket(gettick.dept);
					count = count+1;
				}
				
			}
			
			console.log('ticketdetails', gettick);
			// setTicket(count);
			
			
		}
		getticket();

	}, [])


	return (
		<>
			<Header />
			<div className="container">
				<div className="row">
					<h2 className='mt-3 text-center' style={{ color: '#0cb4ce' }}>ALL TICKETS</h2>
					<p className='mt-3 text-center fs-4' style={{ color: '#0cb4ce' }}><i>View All Your Tickets Here!</i></p>
					<div className='col-md-4'>
					<button type='button' className='btn  mt-2 text-white' 
					onClick={pathChange}
					style={{backgroundColor:'#0cb4ce' , marginLeft:'276%' , width:'35%'}}>
						Add Ticket
					</button>
					</div>
					
					<div className="col-md-12 mt-3" style={{ display: 'inline-block' }}>

						{
							ticket.map((tickget) => (

								<div className="card card-margin">

									<div className="card-header no-border">
										<h5 className="card-title"></h5>
									</div>
									<div className="card-body pt-0">
										<div className="widget-49">
											<div className="widget-49-title-wrapper">

												<div className="widget-49-date-primary cart-card-container">
													<span className="widget-49-date-day">{tickget.ticket_id}</span>

												</div>

												<div className="widget-49-meeting-info">
													<span className="widget-49-pro-title">From:{tickget.username}</span>

												</div>
											</div>
											<ol key={tickget.id} className="widget-49-meeting-points">
												<li className="widget-49-meeting-item"><span>Category: {tickget.category_name}</span></li>
												<li className="widget-49-meeting-item"><span>Subcategory: {tickget.subcategory_name}</span></li>
												<li className="widget-49-meeting-item"><span>Title: {tickget.title_name}</span></li>
												<li className="widget-49-meeting-item"><span>Description: {tickget.description}</span></li>
												<li className="widget-49-meeting-item"><span>Department: {tickget.department_name}</span></li>
												<li className="widget-49-meeting-item"><span>Last Changed: {tickget.updated_at}</span></li>
											</ol>

											<div className="widget-49-meeting-action">
												<Link to={"/ticketdetail/" + tickget.id}>
													<a href="#"
														className="btn btn-sm btn-flash-border-primary"
														style={{ backgroundColor: '#0cb4ce' }}>View Ticket</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))
						}

					</div>


				</div>
			</div>
			<Footer />
		</>
	)
}

export default AllTickets