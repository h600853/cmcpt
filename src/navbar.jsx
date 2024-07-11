// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="path-to-logo" alt="Logo" className="logo"/>
            </div>
            <ul className="navbar-links">
                <li><a href="/">HOME</a></li>
                <li><a href="/library">LIBRARY</a></li>
                <li><a href="/about">ABOUT US</a></li>
                <li><a href="/search">SEARCH</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
