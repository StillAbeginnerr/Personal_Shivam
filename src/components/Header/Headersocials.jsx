import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Headersocials = () => {
  return (
    <div className='Header__socials'>
        <a href="#" target="_blank"><FaLinkedin /></a>
        <a href="#" target="_blank"><FaGithub /></a>
        <a href="#" target="_blank"><FaTwitter /></a>
    </div>
  )
}

export default Headersocials