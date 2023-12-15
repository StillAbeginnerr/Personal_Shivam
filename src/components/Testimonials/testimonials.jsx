import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Profile_Photo.jpeg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </small>
          </div>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials