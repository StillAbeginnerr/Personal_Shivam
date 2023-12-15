import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/about'
import Experience from './components/Experience/experience'
import Services from './components/Services/services'
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'


function App() {
  return (
    <>
    
<Header/>
<Nav></Nav>
<About></About>
<Experience></Experience>
<Services></Services>
<Portfolio></Portfolio>
{/* <Testimonials></Testimonials> */}
<Contact></Contact>
<Footer></Footer>

    </>
  )
}

export default App