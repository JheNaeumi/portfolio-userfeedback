import React from 'react'
import './FooterComponent.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook-logo.png'


const FooterComponent = () => {
  return (
    <footer id="footer">
      
      <div className="social-links">
        <a href="https://github.com/JheNaeumi" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/jeremiah-pasion-b2086327b/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/JheNaeumi" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>   
      </div>
      <span>
         All rights reserved
        </span>
    </footer>
  )
}

export default FooterComponent