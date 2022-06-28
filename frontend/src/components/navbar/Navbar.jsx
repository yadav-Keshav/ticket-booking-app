import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
            <button className="navButton">SignIn</button>
            <button className="navButton">SignUp</button>
        </div>
        </div>
       

    </div>
  )
}
