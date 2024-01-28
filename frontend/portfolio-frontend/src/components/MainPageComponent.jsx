// MainPage.jsx

import React, { useState, useEffect } from 'react';
import './MainPageComponent.css';
import jprofile from '../assets/jprofile.png'

const MainPage = () => {
  const [titles, setTitles] = useState([
    'I am a Web Developer',
    'I am a Mobile Developer',
    'I am an App Designer',
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
    <div className="main-page">
      <img
        className="center-image"
        src={jprofile}
        alt="Central Image"
      />

      <div className="title-animation">
        <h1>{titles[currentTitleIndex]}</h1>
      </div>
    </div>
  );
};

export default MainPage;
