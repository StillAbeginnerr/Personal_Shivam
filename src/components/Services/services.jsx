import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>Design</h3>
        </div>
         
         <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Design Web-responsive Websites</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Design Graphic design's using Adobe Illustrator</p>
          </li>
         
         </ul>

      </article>

      <article className='service'>
        <div className='service__head'>
          <h3>Frontend Development</h3>
        </div>
         
         <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Develop Websites using ReactJs, NextJs and HTML/CSS/JS</p>
          </li>
        
         </ul>

      </article>

      <article className='service'>
        <div className='service__head'>
          <h3>Backend Development</h3>
        </div>
         
         <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Specializes in developing Admin Dashboard, Ecommerce Websites using MERN Stack</p>
          </li>
         
         </ul>

      </article>
    </div>
      
  </section>
  )
}

export default Services