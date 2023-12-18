/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/SafeNav.png';
import IMG2 from '../../assets/crypto-dashboard.png'
import IMG3 from '../../assets/img6.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='image' />
          </div>
        
          <h3>Safe-Nav : Providing Safe Routes For Women & Solo Travellers Safety</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/StillAbeginnerr/SafeNav' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://www.youtube.com/watch?v=JMakJampLWQ' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
      
     
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='image' />
          </div>
           <h3>Crypto-Dashboard: Admin Dashboard for buying/Selling of Crypto Currency </h3>
           <div className='portfolio__item-cta'>
          <a href='https://github.com/StillAbeginnerr/Crypto-dashboard' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='#' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='image' />
          </div>
      
          <h3>WalkingBookFairs.com: A Famous Bookstore Client Website Appeared on various News Articles.</h3>
          <br></br>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/StillAbeginnerr/WalkingBookfair' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://WalkingBookFairs.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
      </div>
    </section>
  )
}

export default Portfolio