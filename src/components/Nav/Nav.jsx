import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import './Nav.css'
import {useState} from 'react';


const Nav = () => {
  const [activeNav, setActivNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActivNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActivNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActivNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBook/></a>
      <a href='#services' onClick={() => setActivNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActivNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav