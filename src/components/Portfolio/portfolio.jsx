/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Profile_Photo.jpeg';
import IMG6 from '../../assets/img6.png';

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
        
          <h3>Portfolio-title </h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://Leetcode.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='image' />
          </div>

          <h3>Portfolio-title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://Leetcode.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='image' />
          </div>

          <h3>Portfolio-title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://Leetcode.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='image' />
          </div>
          
          <h3>Portfolio-title</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://Leetcode.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='image' />
          </div>
           <h3>Portfolio-title</h3>
           <div className='portfolio__item-cta'>
          <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://Leetcode.com' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='image' />
          </div>
      
          <h3>Weather Web Application using HTML, CSS and JS with Fetch API</h3>
          <br></br>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/StillAbeginnerr/WeatherWeb' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://weather-web-omega.vercel.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
         
        </article>
      </div>
    </section>
  )
}

export default Portfolio