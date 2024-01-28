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
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
