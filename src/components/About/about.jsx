import React from 'react'
import './about.css'
import ME from '../../assets/Profile_Photo.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from './../../../node_modules/react-icons/fi/index.esm';
import { VscFolderLibrary } from './../../../node_modules/react-icons/vsc/index.esm';

const About = () => {
  return (
<section id='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>

  <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image"/>
      </div>
    </div>

<div className="about__content">
  <div className="about__cards">
    <article className='about__card'>
     <FaAward ClassName='about__icon' />
      <h5>Experience</h5>
      <small>1.5+ Years Working</small>
    </article>

    <article className='about__card'>
     <FiUsers ClassName='about__icon' />
      <h5>Clients</h5>
      <small>5+ Worldwide</small>
    </article>

    <article className='about__card'>
     <VscFolderLibrary ClassName='about__icon' />
      <h5>Projects</h5>
      <small>10+ Completed</small>
    </article>

  </div>
<p>Hello! I'm a Web Developer skilled in React and Node.js, <br></br>specializing in crafting efficient RESTful APIs and optimizing databases. <br></br>As the ex-founder of Medilift, I bring an entrepreneurial spirit.<br></br> <br></br>Achievements include 1st place in MLH OpenSource Hackfest and 11th in Xiaomi Ode2Code 2.0. Currently mentoring for GSSoC'23, I'm committed to excellence and innovation.<br></br> <br></br>With 10+ freelance projects, I blend technical expertise with creative flair in illustration using Adobe Illustrator and Figma. Let's create impactful solutions!</p>
<a href='#contact' className=' btn btn-primary' >Let's Talk</a>
</div>

 

  </div>
</section>
  )
}

export default About