import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./Logo.png" alt="Logo" className="logo"/>
            </div>
            <ul className="navbar-links">
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
               
            </ul>
        </nav>
    );
}

export default Navbar;
