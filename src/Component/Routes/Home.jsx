import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Destination from '../Destination'
import Trip from '../Trip'
import Footer from '../Footer'

const Home = () => {
  
  return (
    <>
  
<Navbar/>
<Hero cName='hero'
      heroimg='https://images.unsplash.com/photo-1418387128862-717f3c032c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      title='Your Journey Your Story'
      text='choose you destination'
      btntext='travel plam'
      url='/'
      btnClass='show'
/>
    <Destination/>
  <Trip/>
  <div>

  <Footer/>
  </div>
    </>
  )
}

export default Home