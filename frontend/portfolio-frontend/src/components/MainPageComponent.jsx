// MainPage.jsx

import React, { useState, useEffect } from 'react';
import './MainPageComponent.css';
import jprofile from '../assets/jprofile.png'

const MainPage = () => {
  const [titles, setTitles] = useState([
    'Web Development',
    'Mobile Development',
    'and Game Development',
    // Add more titles as needed
  ]);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate through titles
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <div className="main-page" id="home">
      <div className='img'>
        <img
        className="center-image"
        src={jprofile}
        alt="Central Image"
        />
        <div className="title-animation">
          <h1>{titles[currentTitleIndex]}</h1>
      </div>
      </div>
    

     
      <div className='about-me'>
        <h1 >About me</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </div>
  )
}

export default MainPage
