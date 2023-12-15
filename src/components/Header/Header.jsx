import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/Profile_Photo.jpeg'
import Headersocials from './Headersocials'

const Header = () => {
  return (
     <header>
        <div className="container header_container">
<h5>Hello I'm</h5>
<h1>Shivam Agarwal</h1>
<h5 className='text-light'>FullStack Developer</h5>
<CTA/>
<Headersocials></Headersocials>

<div className='me'>
  <img src={me} alt="me" />
</div>

<a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
     </header>
  )
}

export default Header