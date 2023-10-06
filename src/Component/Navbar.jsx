import React from 'react'
import {Link} from 'react-router-dom'
import { MenuItem } from './MenuItem'
import './NavbarStyle.css'

const Navbar = () => {
  return (
   <>
   <nav className="NavbarItems">
    <h1 className='navbar-logo'>WonderLustTrip</h1>
    <ul className="nav-menu">

    {
      MenuItem.map((item,index)=>{
        return(
          <li className={item.cName} key={index}><Link to={item.url}><i className={item.icon}></i>{item.title}</Link></li>
        )
      })
    }
    <button>Signup</button>
    </ul>
   </nav>
   </>
  )
}

export default Navbar