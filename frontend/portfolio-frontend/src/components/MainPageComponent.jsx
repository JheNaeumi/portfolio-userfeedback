// MainPage.jsx

import React, { useState, useEffect } from 'react';
import './MainPageComponent.css';
import jprofile from '../assets/jprofile.png'


const MainPage = () => {
  const [titles, setTitles] = useState([
    "Hi, I’m Jeremiah Pasion",
    'A Passionate Developer',
    'And Tech Enthusiast ',
    // Add more titles as needed
  ]);


  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate through titles
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, [titles]);

  const updateView = () =>{
    updateViewCount()
  }

  return (
    <section id ="home">
    <div className="main-page" >
      <div className='imgprofile'>
        <img
        className="center-imag1e"
        src={jprofile}
        alt="Central Image"
        />
        <div className="title-animation">
          <h1>{titles[currentTitleIndex]}</h1>
      </div>
      </div>
    

     
      <div className='about-me'>
        <h1 >About me</h1>
        <p> 
        Welcome to my digital space! I'm a Software Developer/Engineer on a journey of self-discovery and growth.
         Graduating from the University of Cordillera with a background in Computer Science, I've been learning programming since senior high. 
         Despite initial challenges, I found the process both fun and challenging.
          Beyond the digital realm, engaging in various activities provides balance and inspiration, influencing the creative energy I invest in my projects.
       </p>
      </div>
    </div>
    
    </section>
  )
}

export default MainPage
