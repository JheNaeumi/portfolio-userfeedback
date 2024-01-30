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
      <img
        className="center-image"
        src={jprofile}
        alt="Central Image"
      />

      <div className="title-animation">
        <h1>{titles[currentTitleIndex]}</h1>
      </div>
    </div>
  )
}

export default MainPage
