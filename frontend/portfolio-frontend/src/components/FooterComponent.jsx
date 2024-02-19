import React from 'react'
import './FooterComponent.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook-logo.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import springlogo from '../assets/spring-svgrepo-com.svg'

const FooterComponent = () => {
  return (
    
    <footer id="footer" >
      <h1 className='text-gray-900'>Powered By:</h1>
      <div id="logoo" className="flex flex-row">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://spring.io" target="_blank">
          <img src={springlogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="social-links">
        <div className="onlysocial-link">
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
        <span className="allrights">
         All rights reserved
      </span>   
      </div>
      
      
      
        
    </footer>
  )
}

export default FooterComponent