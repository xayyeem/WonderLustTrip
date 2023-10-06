import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Footer from '../Footer'
import Aboutus from '../Aboutus'
// import AboutImage from '../../src/assets/night.jpg'
const About = () => {
  
  return (
    <>
    
    <Navbar/>
    <Hero cName='hero-mid'
      heroimg='https://images.unsplash.com/photo-1490109875367-0dbd3c96fa1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      title='About'
      btntext='travel plam'
      url='/'
      btnClass='hide'
/>
    <Aboutus/>
    <Footer/>
    </>

  )
}

export default About