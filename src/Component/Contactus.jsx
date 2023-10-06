import React from 'react'
import './Contactusstyle.css'
const Contactus = () => {
  return (
    <>
    <div className="form-container">
        <h1>Send us Message</h1>
        <form >
            <input type="text" placeholder='enter your name' />
            <input type="text" placeholder='enter your phonenumber' />
            <input type="text" placeholder='enter your email' />
            <textarea placeholder='message'  rows="4"></textarea>
            <button>Send Message</button>

        </form>
    </div>
    </>
  )
}

export default Contactus