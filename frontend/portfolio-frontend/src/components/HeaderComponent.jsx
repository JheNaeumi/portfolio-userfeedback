// HeaderComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css'; // Import your header component styles
import jhenauemi from '../assets/jhe-naeumi-high-resolution-logo-white-transparent.png'

const HeaderComponent = () => {
  return (
    <header className="modern-header">
    <div className="container">
        <div className="logo">
            <Link to="/">
                <img src={jhenauemi} alt="Logo" />
            </Link>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <nav className="nav-links">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/contact">Contact</Link></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    </div>
</header>

  );
};

export default HeaderComponent;
