import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Footer from '../Footer'
import Trip from '../Trip'

const Service = () => {
  return (
  <>
  <Navbar/>
    <Hero cName='hero-mid'
      heroimg='https://images.unsplash.com/photo-1490109875367-0dbd3c96fa1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      title='Service'
      btntext='travel plam'
      url='/'
      btnClass='hide'
/>
<Trip/>
<Footer/>
  </>    

  )
}

export default Service