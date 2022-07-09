import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Booking App</span>
            <div className="navItems">
                <button className="navButton">Rejestracja</button>
                <button className="navButton">Zaloguj</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar