// HeaderComponent.jsx
import React from 'react'
import './HeaderComponent.css' // Import your header component styles
import jhenauemi from '../assets/jhe-naeumi-high-resolution-logo-white-transparent.png'
import { Link } from 'react-scroll'

const HeaderComponent= () => {
  return (
   
    <header className="modern-header">
    <div className="container">
        <div className="logo1">
                <img src={jhenauemi} alt="Logo" />
         
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <nav className="nav-linkscustom">
            <ul className="nav-listcustom">
                <li className="nav-itemcustom">
                    <Link to="home" spy={true} smooth={true} offset={-10} duration={200}>Home</Link>
                </li>
                <li className="nav-itemcustom">
                    <Link to="project" spy={true} smooth={true} offset={-10} duration={200}>Project</Link>
                </li>
                <li className="nav-itemcustom">
                    <Link to="feedback" spy={true} smooth={true} offset={-10} duration={200}>Feedback</Link>
                 </li>
                 <li className="nav-itemcustom">
                    <Link to="stat" spy={true} smooth={true} offset={-10} duration={200}>Stats</Link>
                 </li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
 
     
    </div>

    </header>
 

  )
}

export default HeaderComponent
