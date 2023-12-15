import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from './../../../node_modules/react-icons/bs/index.esm';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
         <h3>Frontend Development</h3>
         <div className='experience__content'>

         <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div>
            <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          
          </article> 
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article> <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article> <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>React Js</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article> <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>Next Js</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article> <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article> <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>Tailwind</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article> 
         
         </div>
         
      
        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
        <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>Express Js</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article> 
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>Nest Js</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article> <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>Go</h4>
          <small className='text-light'>Basic</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>MongoDB</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon'></BsPatchCheckFill>
          <div><h4>AWS/Firebase/Heroku</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>
     
      
      </div>
      </div>
      
    </section>
  )
}

export default Experience