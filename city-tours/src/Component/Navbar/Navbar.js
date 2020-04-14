import React from 'react';
import logo from '../../logo.svg'
import './Navbar.scss'


const navbar=()=>{
     return(
         <nav className="navbar">
            <img src={logo} alt="city tours company" />
            <ul className="navLinks">
               <li><a href="/" className="nav-link">Home</a></li>
               <li><a href="/" className="nav-link">About</a></li>
               <li><a href="/" className="nav-link active">Tours</a></li>
            </ul>
        </nav>
     );
}

export default navbar;