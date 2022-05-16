import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import History from '../components/History';
import Comments from '../components/Comments';

toast.configure()


const TicketDetail = () => {


  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [modal, setModal] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [show, setShow] = useState([]);
  const [currentTab, setCurrentTab] = useState('comments');
  const [name, setName] = useState("");
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(1);
  // setActive(1);
  let { id } = useParams();

  // console.log('active', active);
  let navigate = useNavigate();


  useEffect(() => {
    const getTicket = async () => {
      const res = await fetch(`http://localhost:5000/api/ticket/${id}`);
      const gettic = await res.json();
      setTickets(gettic.ticketid[0]);
    }
    getTicket();
  }, [])



  useEffect(() => {
    const getdepart = async () => {
      const res = await fetch(`http://localhost:5000/api/ticket/dept/${id}`);
      const gettic1 = await res.json();
      setShow(gettic1.dept[0]);
    }
    getdepart();
  }, [])
  let data = {
    ticket_id: id,
    user_id: localStorage.getItem('id'),
    message: name

  };
  let data1 = {
    ticket_id: id,
    status: 1
  }

  useEffect(() => {
    console.log('formErrors', formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('data11', data4);
    }
  }, [formErrors])


  console.log('data1', data1)
  let handleSubmit = async (e) => {
    if (name.length !== 0) {
      try {
        let res = await fetch('http://localhost:5000/api/comment/', {
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
        console.log('Error:', err);
      }
      setModal(false);
    }
    
    else {
      toast.error("Please add Comment")
      console.log("Some error occured");
    }
    
    
    console.log('data', data4);
  }
  let data4 = {
    message: name

  };
  

  let routeChange = async (e) => {
    try {

      setActive(2);
      data1.status = active;
      var statusName;
      if (data1.status === 1) {
        statusName = 'close';
      } else if (data1.status === 2) {
        statusName = 'reopen'
      } else {
        statusName = 'close'
      }
      console.log("data1", data1);
      let res = await fetch(`http://localhost:5000/api/ticket/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
      })
      let resJson = await res.json();
      console.log('resjson ', resJson);

      let response = await fetch('http://localhost:5000/api/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket_id: id,
          user_id: localStorage.getItem('id'),
          message: localStorage.getItem('full_name') + ' has changed the status to ' + statusName
        }),
      })

      let responseJson = await response.json();
      console.log('responseJson', responseJson);

      if (res.status && response.status === 200) {
        // alert("Status changed successfully!");
        var check = window.confirm('Are you sure you want to close this ticket?')
        if (check) {
          navigate('/alltickets');
        }
      } else {
        toast("Some error occured")
        console.log("Some error occured");
      }





    } catch (err) {
      console.log('Error:', err);
    }
  }


  let routeChange2 = async (e) => {
    try {

      setOpen(1);
      data1.status = open;
      var statusName;
      if (data1.status === 1) {
        statusName = 'close';
      } else if (data1.status === 2) {
        statusName = 'reopen'
      } else {
        statusName = 'close'
      }
      // console.log("data1", data1);
      let res = await fetch(`http://localhost:5000/api/ticket/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
      })
      let resJson = await res.json();
      console.log('resjson ', resJson);
      // console.log('status' , JSON.stringify(data1.status))

      let response = await fetch('http://localhost:5000/api/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket_id: id,
          user_id: localStorage.getItem('id'),
          message: localStorage.getItem('full_name') + ' has changed the status to ' + statusName
        }),
      })

      let responseJson = await response.json();
      console.log('responseJson', responseJson);

      if (res.status && response.status === 200) {

        // alert("Status changed successfully!");
        var check = window.confirm('Are you sure you want to close this ticket?')
        if (check) {
          navigate('/alltickets');
        }
      } else {
        toast("Some error occured")
        console.log("Some error occured");
      }




    } catch (err) {
      console.log('Error:', err);
    }
  }

  function setStatus(status) {
    if (status == 1) {
      return "Close"
    } else if (status == 2) {
      return "Reopened";
    } else {
      return "Open";
    }
  }


  const modelBodyBlock = (
    <ModalBody>
      <form  >
        <div className="row   ">
          <div className='text-center'>
            {/* <input className='text-left fs-5 ' type='text' className='form-control-lg' name='text' placeholder='Enter Comments'
              onChange={(e) => setName(e.target.value)} required style={{ width: '35%' }, { height: '100%' }}
            
            /> */}
            <input
              style={{ width: '79%', height: '85%' }}
              onChange={(e) => setName(e.target.value)}
              type="text " id="exampleFormControlInput1" placeholder="Add Comment Here"></input>
            <p><span style={{ color: 'red' }}>{formErrors.name}</span></p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5 ">
          <button type="button" className="button btn text-white mx-3 "
            style={{ backgroundColor: '#0cb4ce' }}
            onClick={(e) => handleSubmit(e)}

          >Add Comment</button>
        </div>
      </form>

    </ModalBody>
  )

  return (
    <>
      <Header />
      <Modal
        size='lg'
        isOpen={modal}
        toggle={() => setModal(!modal)}
      >
        <ModalHeader
          toggle={() => setModal(!modal)} style={{ color: '#0cb4ce' }}
        >
          <b> ADD COMMENT </b>
        </ModalHeader>
        {modelBodyBlock}

      </Modal>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container-fluid py-4">
          <div className="row ">
            <div className="col-md-6 ">
              <div className="card text-black">

                <div className="card-body">
                  <div className="text-center">


                    <h3 className=" mb-4 fs-3" style={{ color: '#0cb4ce' }} ><b>Ticket Details</b></h3>
                    {/* <div className='col-md-12'> */}

                    {/* <button className='btn text-white ' style={{ backgroundColor: '#0cb4ce' , marginLeft:'70%' }}>
                          <b>Mark this ticket as closed</b>
                        </button> */}
                    {/* {show.status === 1 ?
                      <button type="button" className='btn text-white ' style={{ backgroundColor: '#0cb4ce', marginLeft: '70%' }} onClick={(e) => routeChange(e)}>Mark this as Reopend</button>
                      : <button type="button" className='btn text-white ' style={{ backgroundColor: '#0cb4ce', marginLeft: '70%' }} onClick={(e) => routeChange2(e)}>Mark this as closed</button>} */}
                    {show.status == 1 ?
                    <button type="button" className=" btn text-center  border-0 p-2 buttonclass text-white" style={{backgroundColor:'#0cb4ce', marginLeft:'70%'}} onClick={(e) => routeChange(e)}>Mark this as Reopend</button>
                    : <button type="button" className="btn text-center  border-0 p-2 buttonclass text-white" style={{backgroundColor:'#0cb4ce' , marginLeft:'70%'}} onClick={(e) => routeChange2(e)}>Mark this as closed</button>}
                  {/* <button type="button" className="text-center  border-0 p-2 buttonclass text-white" onClick={(e) => routeChange(e)}>Mark this as closed</button> */}
                  </div>
                  

                  <p> <b style={{ color: '#0cb4ce' }}>Ticket No. :</b> {show.ticket_id} </p>
                  <p> <b style={{ color: '#0cb4ce' }}>Category :</b> {show.category_name}</p>
                  <p> <b style={{ color: '#0cb4ce' }}>Subcategory :</b> {show.subcategory_name}</p>
                  <p> <b style={{ color: '#0cb4ce' }}>Title :</b> {show.title_name} </p>
                  <p> <b style={{ color: '#0cb4ce' }}>Department :</b> {show.department_name}</p>
                  <p> <b style={{ color: '#0cb4ce' }}>Description :</b> {show.description}</p>
                  <p> <b style={{ color: '#0cb4ce' }}>From:</b> {show.username}</p>
                  <p> <b style={{ color: '#0cb4ce' }}>Created By :</b>  {show.created_by} </p>
                  <p> <b style={{ color: '#0cb4ce' }}>Last Changed Date :</b> {show.updated_at}</p>
                  <p> <b style={{ color: '#0cb4ce' }}>Record Date :</b> {show.created_at}</p>
                  <p> <b style={{ color: '#0cb4ce' }}>Status:</b> {setStatus(show.status)}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="card text-black">

                <div className="card-body">
                  <div className="text-center">

                    {/* <button className='btn text-white mx-2' style={{ backgroundColor: '#0cb4ce' }}>Comments</button>
                    <button className='btn btn-secondary text-white mx-3'>Add Comment</button>
                    <button className='btn text-white' style={{ backgroundColor: '#0cb4ce' }}>History</button> */}
                    <button type="button" className='btn text-white mx-2' style={{ backgroundColor: '#0cb4ce' }} onClick={() => setCurrentTab('comments')} >Comments</button>
                    <button type="button" className='btn text-white mx-2' style={{ backgroundColor: '#0cb4ce' }} onClick={() => setModal(true)} >Add Comments</button>
                    <button type="button" className='btn text-white mx-2' style={{ backgroundColor: '#0cb4ce' }} onClick={() => setCurrentTab('history')} >History</button>

                  </div>
                  {currentTab === 'comments' ? <Comments /> : null}
                  {currentTab === 'history' ? <History /> : null}
                  {/* <div className="col-md-12">

                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{ color: '#0cb4ce' }}>Dhwani Sanghvi  Created ticket successfully</p>
                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{ color: '#0cb4ce' }}>Dhwani Sanghvi  Edited ticket successfully</p>
                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{ color: '#0cb4ce' }}>Dhwani Sanghvi  Updated ticket successfully</p>
                    <p className="bg-secondary text-white  mt-3 py-2 px-3">Dhwani Sanghvi</p>
                    <p className="px-3" style={{ color: '#0cb4ce' }}>Dhwani Sanghvi  Changed status to open</p>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TicketDetail