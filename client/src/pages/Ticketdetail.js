import React, { useState, useEffect } from 'react'
import '../css/Ticketdetail.css'
import Sidebar from '../components/Sidebar'
import History from '../components/History'
import Comments from '../components/Comments'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Ticketdetail = () => {
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
      const res = await fetch(`http://localhost:5000/api/v1/ticket/${id}`);
      const gettic = await res.json();
      setTickets(gettic.ticketid[0]);
    }
    getTicket();
  }, [])



  useEffect(() => {
    const getdepart = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/ticket/dept/${id}`);
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
        let res = await fetch('http://localhost:5000/api/v1/comments/', {
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
    }
      else {
      toast("comment is empty")
      console.log("Some error occured");
    }
    setFormErrors(validate(data4));
    setIsSubmit(true);
    setModal(false);
    console.log('data', data4);
  }
  let data4 = {
    message: name
    
  };
  const validate = (values) => {
    const errors = {};
   
    if (!values.message) {
      errors.name = "**Please write a comment"
    }
       return errors
  }


  let routeChange = async (e) => {
    try {

      setActive(2);
      data1.status = active;
      var statusName;
      if(data1.status === 1){
        statusName = 'close';
      }else if(data1.status === 2){
        statusName = 'reopen'
      }else{
        statusName = 'close'
      }
      console.log("data1", data1);
      let res = await fetch(`http://localhost:5000/api/v1/ticket/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
      })
      let resJson = await res.json();
      console.log('resjson ', resJson);

      let response = await fetch('http://localhost:5000/api/v1/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket_id : id,
          user_id:localStorage.getItem('id'),
          message: localStorage.getItem('full_name')+' has changed the status to '+statusName
        }),
      })

      let responseJson = await response.json();
      console.log('responseJson', responseJson);

      if (res.status && response.status === 200 ) {
        // alert("Status changed successfully!");
        var check = window.confirm('Are you sure you want to close this ticket?')
        if (check) {
          navigate('/Allticket');
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
      if(data1.status === 1){
        statusName = 'close';
      }else if(data1.status === 2){
        statusName = 'reopen'
      }else{
        statusName = 'close'
      }
      console.log("data1", data1);
      let res = await fetch(`http://localhost:5000/api/v1/ticket/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data1),
      })
      let resJson = await res.json();
      console.log('resjson ', resJson);
      // console.log('status' , JSON.stringify(data1.status))

      let response = await fetch('http://localhost:5000/api/v1/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket_id : id,
          user_id:localStorage.getItem('id'),          
          message: localStorage.getItem('full_name')+' has changed the status to '+statusName
        }),
      })

      let responseJson = await response.json();
      console.log('responseJson', responseJson);

      if (res.status && response.status === 200) {

        // alert("Status changed successfully!");
        var check = window.confirm('Are you sure you want to close this ticket?')
        if (check) {
          navigate('/Allticket');
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
    }else{
      return "Open";
    }
  }

  const modelBodyBlock = (
    <ModalBody>
      <form  >
        <div className="row   ">
          <div className='text-center'>
            <input className='text-left fs-5 ' type='text' className='form-control-lg' name='text' placeholder='Enter Comments'
              onChange={(e) => setName(e.target.value)} required style={{ width: '35%' }, { height: '100%' }}
            
            />
              <p><span style={{ color: 'red' }}>{formErrors.name}</span></p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5 ">
          <button type="button" className="button btn text-white mx-3 "
            style={{ backgroundColor: 'orangered' }}
            onClick={(e) => handleSubmit(e)}

          >Save</button>
        </div>
      </form>

    </ModalBody>
  )

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
          Comment
        </ModalHeader>
        {modelBodyBlock}
        {/* <ModalBody>
          <form  >
            <div className="row   ">
              <div className='text-center'>
                <input className='text-left fs-5 ' type='text' name='text' placeholder='Enter Comments'
                  onChange={(e) => setName(e.target.value)} required style={{ width: '35%' }, { height: '130%' }}


                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5 ">
              <button type="button" className="button btn text-white mx-3 "
                style={{ backgroundColor: 'orangered' }}
                onClick={(e) => handleSubmit(e)}

              >Save</button>
            </div>
          </form>

        </ModalBody> */}
      </Modal>
      {/* <div className="container-fluid "> */}
        {/* <!-- Sidebar start --> */}
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <Sidebar />
            <div className="col py-3">
              {/* <!-- content start --> */}

              <div className="row mx-2 mt-2">
                <div className="col-md-6">
                  <h4 className="text-secondary"><b>Ticket Detail</b></h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-end ">
                  {show.status == 1 ?
                    <button type="button" className="text-center  border-0 p-2 buttonclass text-white" onClick={(e) => routeChange(e)}>Mark this as Reopend</button>
                    : <button type="button" className="text-center  border-0 p-2 buttonclass text-white" onClick={(e) => routeChange2(e)}>Mark this as closed</button>}
                  {/* <button type="button" className="text-center  border-0 p-2 buttonclass text-white" onClick={(e) => routeChange(e)}>Mark this as closed</button> */}
                </div>

                {/* Ticketdetail component start */}

                <div className='row'>
                  <div className="col-md-6 ">
                    <div className="card mt-3 border-0 shadow-lg">
                      <p className="mt-3 px-2"><b>Ticket ID : </b>{show.ticket_id}</p>
                      <p className="px-2"><b>Title of Ticket : </b>{show.title_name}</p>
                      <p className="px-2"><b>Category : </b>{show.category_name}</p>
                      <p className="px-2"><b>Subcategory : </b>{show.subcategory_name}</p>
                      <p className="px-2"><b>From : </b>{show.username}</p>
                      <p className="px-2"><b>Created By <br /> Department : </b>{show.created_by}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mt-3 border-0 shadow-lg">
                      <p className="mt-3 px-2"><b>Department : </b>{show.department_name}</p>
                      <p className="px-2"><b>Record Date : </b>{show.updated_at}</p>
                      <p className="px-2"><b>Last activity date : </b>{show.created_at}</p>

                      <p className="px-2"><b>Status : </b>{setStatus(show.status)}</p>
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="card  mt-5 border-0 p-3 mx-1 shadow-lg">
                      <p className="p-3"><b>Description :</b>{show.description}</p>
                    </div>

                  </div>
                </div>

                <div className='d-inline'>
                  <div className="col-md-12 mt-3 ">
                    <div className="card mt-3 border-0 shadow-lg">
                      <div className="col-md-6 px-3 mt-3">
                        <button type="button" className="btn text-white btn-dark mx-2" onClick={() => setCurrentTab('comments')} >Comments</button>
                        <button type="button" className="btn text-white btn-dark mx-2" onClick={() => setModal(true)} >Add Comments</button>
                        <button type="button" className="btn text-white btn-dark mx-2" onClick={() => setCurrentTab('history')} >History</button>
                      </div>
                      {currentTab == 'comments' ? <Comments /> : null}
                      {currentTab == 'history' ? <History /> : null}

                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Content end -->  */}
            </div>
          </div>
        </div>
        {/* <!-- Sidebar end --> */}
      {/* </div> */}
    </>
  )
}

export default Ticketdetail