import React from 'react'
// import '../css/Dashboard.css'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Dashboard = () => {
	return (
		<>

			{/* <Header/> */}
			<div className="container-fluid" style={{ backgroundColor: 'white' }}>
				<div className="row flex-nowrap">
					<Sidebar />
					<div className="col py-3">
						{/* <!-- Content area... --> */}
						<div className="row">
							<h1>Dashboard</h1>
							<p className=" one fs-4 text-secondary">Ticket Info</p>
							<div className="col-md-4">
								<div className="card">
									<div className="card-body border-top border-info border-4">
										<h1 className="fw-bolder text-info">41521</h1>
										<p>Total Tickets Raised</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<div className="card-body border-top border-info border-4">
										<h1 className="fw-bolder text-info">1</h1>
										<p>Total Responded Tickets</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card">
									<div className="card-body border-top border-info border-4">
										<h1 className="fw-bolder text-info">0</h1>
										<p>Total Closed Tickets</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Sidebar End --> */}
			{/* <Footer/> */}

		</>
	)
}

export default Dashboard