import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Footer from '../Footer'
import Contactus from '../Contactus'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero cName='hero-mid'
      heroimg='https://images.unsplash.com/photo-1627241129356-137242cf14f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80'
      title='Contact'
      btntext='travel plam'
      url='/'
      btnClass='hide'
/>
<Contactus/>
<Footer/>
    </>

  )
}

export default Contact