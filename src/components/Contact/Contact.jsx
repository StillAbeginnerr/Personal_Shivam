import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>shivamagarwaloff@gmail.com</h5>
              <a href="mailto:shivamagarwaloff@gmail.com">Send a message</a>
          
          </article>
        </div>

      <form action="">
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

      </div>
    </section>
  )
}

export default Contact