import React from 'react'
import CV from '../../assets/CV2.pdf'

const CTA = () => {
  return (
   <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="https://www.linkedin.com/in/shivamagarwalkiit/" className='btn btn-primary'>Let's Talk</a>
   </div>
  )
}

export default CTA
