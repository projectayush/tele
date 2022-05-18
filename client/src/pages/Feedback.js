import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/Sidebar';

toast.configure();

const Feedback = () => {

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const getfeedback = async () => {
      const res = await fetch("http://localhost:5000/api/v1/feedbacks");
      const getfback = await res.json();
      // console.log('feedback', getfback);
      setFeedback(getfback.feedback);
      // console.log('ticketid',getfback.feedback[0].ticket_id);
    }
    getfeedback();
  })

  // To mark review as feature
  let routeChange = async (id) => {
    var check = window.confirm('Are you sure you want to mark this review to feature?');
    if (check) {
      try {
        let res = await fetch(`http://localhost:5000/api/v1/feedbacks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ticket_id: id,
            mark: 1
          }),
        })
        let resJson = await res.json();
        console.log('feedback response', resJson);

        if (res.status === 200) {
          toast('Review has been featured to mark')
          console.log('mark is changed to 1')
        }
        else {
          toast.error('Please try again')
        }
      } catch (error) {
        console.log('error', error)
      }
    }

  }

  // to remove featured review

  let pathChange = async (id) => {
    var check = window.confirm('Are you sure you want to remove this feedback from feature?')
    if (check) {
      try {
        let res = await fetch(`http://localhost:5000/api/v1/feedbacks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ticket_id: id,
            mark: 0
          }),
        })
        let resJson = await res.json();
        console.log('feedback response', resJson);

        if (res.status === 200) {
          toast('Review has been removed from featured to mark')
          console.log('mark is changed to 0')
        }
        else {
          toast.error('Please try again')
        }
      } catch (error) {
        console.log('error', error)
      }
    }

  }

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar/>
          <div className="col py-3">
            {/* <!-- content start --> */}

            <div className="row mx-2 mt-2">
              <div className="col-md-6">
                <h4 className="text-secondary"><b>FEEDBACK</b></h4>
              </div>

              {/* Ticketdetail component start */}

              <div className='row'>
                {
                  feedback.map((getfeedbacks) => (

                    <div className="col-md-12 ">
                      <div className="card mt-3 border-0 shadow-lg">
                        <p className="mt-3 px-2"><b>Name : </b>{getfeedbacks.name}</p>
                        <p className="px-2"><b>Ticket_id : </b>{getfeedbacks.ticket_id}</p>
                        <p className="px-2"><b>Rating: </b>{getfeedbacks.rating}</p>
                        <p className="px-2"><b>Mark : </b>{getfeedbacks.mark}</p>
                        <p className="px-2"><b>Record Date:  </b>{format(new Date(getfeedbacks.created_at), 'dd-MM-yyyy HH:mm')}</p>
                        {
                          getfeedbacks.mark == 0 ?
                            <button type='button' className='btn text-white mb-3 '
                              onClick={() => routeChange(getfeedbacks.ticket_id)}
                              style={{ backgroundColor: 'purple', width: '14%', marginLeft: '85%' }}>
                              Mark this review to feature
                            </button> :
                            <button type='button' className='btn text-white mb-3 '
                              onClick={() => pathChange(getfeedbacks.ticket_id)}
                              style={{ backgroundColor: 'purple', width: '14%', marginLeft: '85%' }}>
                              This review is featured
                            </button>
                        }

                      </div>
                    </div>
                  ))
                }



              </div>


            </div>
            {/* <!-- Content end -->  */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback