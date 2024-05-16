import React from 'react'
import '../CSS/Navbar.css'
function Navbar() {
  return (
    <>
    <div className='navbar'>
        <p className='logo'>LOGO</p>
        <button className='login'>Login</button>
        <button className='signup'>Signup</button>
    </div>
    <div className='nav-links'>
      <a>Overview</a>
      <a>Curriculum</a>
      <a>Refund</a>
      <a>Testimonials</a>
    </div>
    </>
  )
}

export default Navbar