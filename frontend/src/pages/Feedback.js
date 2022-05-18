import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom'

toast.configure()


const Feedback = () => {

  const [rating, setRating] = useState(0);
  const [name, setName] = useState([]);
  const [contact, setContact] = useState([]);
  const [feedback, setFeedback] = useState([]);

  let { id } = useParams();
  let navigate = useNavigate();
  // console.log('params.id ' ,id)

  const handleRating = (rate) => {
    setRating(rate);
    // setRates(rate.target.value);
  }



  let data = {
    user_id: localStorage.getItem('id'),

    name: name,
    contact: contact,
    ticket_id: id,
    feedback: feedback,
    mark: 0,
    rating: rating
  }

  let handleSubmit = async (e) => {
    const regex =  /^[0-9\b]+$/;

    if (name.length === 0) {
      toast.error('Please Enter your name');
    }
    
    else if(contact.length === 0 ){
      toast.error('Please Enter your Contact Number');
    }
    
    else if(contact.length>10){
      toast.error('Enter a valid contact number!')
    }
    
    else if(feedback.length === 0){
      toast.error('Feedback Cannot be Empty');
    }
    
    else if(!rating){
      toast.error('Please Rate our Application!');
    }
    else {
      console.log('feedback data:', data);
      try {
        let res = await fetch('http://localhost:5000/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        })

        let resJson = await res.json();
        console.log('feedabck response', resJson);

        if (res.status === 200) {
          toast('Your Feedback has been recorded!')
          navigate(`/alltickets`)
        } else {
          toast.error('Oops!Something went wrong! Please try again')
        }

      } catch (error) {

      }
    }

  }


  return (
    <>
      <div className="row" id="loginform">
        <div className="col-md-4">
          <img src={require('../../src/assets/images/feedback.jpg')} alt="Image" className="img-fluid " style={{ height: '100%', opacity: '60%' }} />
        </div>
        <div className='col-md-8' style={{ backgroundColor: '#0cb4ce' }}>

          <div className="row flex-nowrap">

            <div className="col py-3">
              {/* <!-- Content area... --> */}
              <div className="card border-0" style={{ backgroundColor: '#0cb4ce' }} >
                <div className="card-header ">
                  <div className="row ">
                    <div style={{ marginLeft: '90%' }} className=' mt-2'>
                      <h3 style={{ color: 'white', textAlign: 'center' }}>
                        <b><i className="fa-solid fa-diamond text-white fs-4"></i> FEEDBACK FORM </b>
                        <i className="fa-solid fa-diamond text-white fs-4"></i></h3>
                    </div>

                  </div>
                </div>
              </div>
              <div className="card border-0" style={{ backgroundColor: '#0cb4ce' }}>
                <div className="card-body">
                  <form  >
                    <div className="row mt-3 mx-3 ">
                      <div className=" col-md-12 mt-3 ">
                        {/* <label style={{ color: '#0cb4ce' }}> <b>Ticket No.</b>  </label><br /> */}

                        <input
                          onChange={(e) => setName(e.target.value)}
                          style={{ width: '70%', height: '130%', marginLeft: '16%' }}
                          id="iconified"
                          type="text " id="exampleFormControlInput1" placeholder=" Your Name"></input>

                      </div>

                      <div className=" col-md-12 mt-5">
                        {/* <label className='mt-3' style={{ color: '#0cb4ce' }}> <b>Ticket No.</b>  </label><br /> */}

                        <input
                          style={{ width: '70%', height: '130%', marginLeft: '16%', fontFamily: 'Font Awesome 5 Free' }}
                          onChange={(e) => setContact(e.target.value)}
                          type="text " id="iconified" placeholder=" Your Contact Number"></input>
                      </div>

                      <div className=" col-md-12 mt-5">
                        {/* <label className='mt-4' style={{ color: '#0cb4ce' }}> <b>Ticket No.</b>  </label><br /> */}
                        {/* <input
													style={{width:'70%' , height:'130%' , marginLeft:'12%'}}

													type="text " id="exampleFormControlInput1" placeholder="Your Feedback"></input> */}
                        <textarea style={{ width: '70%', marginLeft: '16%' }}
                          placeholder="Your Feedback"
                          onChange={(e) => setFeedback(e.target.value)}
                          id="exampleFormControlTextarea1" rows="4"></textarea>
                      </div>

                      <div className=" col-md-12 mt-4">
                        <label className='text-white fs-5' style={{ marginLeft: '16%' }} htmlFor='rating'>
                          <b>  How would you like to  Rate our Application?</b> </label>
                        <Rating
                          onClick={handleRating}
                          ratingValue={rating}
                          size={20}
                          label
                          transition
                          fillColor='yellow'
                          emptyColor='white'
                          className='mb-2'
                          style={{ marginLeft: '12%' }}
                        />

                      </div>

                    </div>

                    <div className="d-flex align-items-center justify-content-center mt-5 ">


                      <button type="button"
                        className="btn mx-3"
                        style={{ backgroundColor: 'white', color: '#0cb4ce' }}

                        onClick={handleSubmit}
                      ><b>  SUBMIT </b></button>

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

export default Feedback