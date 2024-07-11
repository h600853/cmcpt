import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="path-to-logo" alt="Logo" className="logo"/>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/library">LIBRARY</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/search">SEARCH</Link></li>
            </ul>
        </nav>
    );
}

export default navbar;
