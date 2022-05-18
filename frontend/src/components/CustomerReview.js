import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import { FaStar } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'

const CustomerReview = () => {

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const getfeedback = async () => {
      const res = await fetch('http://localhost:5000/api/feedback/mark');
      const getfb = await res.json();
      setFeedback(getfb.feedbackbymark);
    }
    getfeedback();
  })

  return (
    <>
      <section className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-white text-center">
              <h2 className="section-title fs-4" > CUSTOMER REVIEW </h2>
              <p className="section-sub-title fs-4" >
                Have a look at what our Customers say about us!

              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-primary t-bordered">
        <div className="container">

          <div className="row testimonial-three testimonial-three--col-three">
            {
              feedback.map((getfeedbacks) => (

                <div className="col-md-4 testimonial-three-col">

                  <div className="testimonial-inner">
                    <div className="testimonial-image" itemprop="image">
                      <img width="180" height="180" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                    </div>
                    <div className="testimonial-meta">
                      <strong className="testimonial-name" itemprop="name" >{getfeedbacks.name}</strong>
                      {/* <span className="testimonial-job-title" itemprop="jobTitle">{getfeedbacks.created_at}</span>  */}
                    </div>
                    <div className="testimonial-content">
                      <p >{getfeedbacks.feedback}</p>
                      <p><b>Rating:</b><Rating

                        ratingValue={getfeedbacks.rating}
                        size={20}
                        label
                        transition
                        fillColor='#0cb4ce'
                        emptyColor='gray'
                        className='mb-2'
                        style={{ marginLeft: '12%' }}
                      /></p>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomerReview