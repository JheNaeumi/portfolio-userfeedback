// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import './BackToTopbutton.css'
import arrow from '../assets/arrow.png'
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showButtonThreshold = 400; // Adjust this threshold as needed

      setIsVisible(scrollPosition > showButtonThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    
    <button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`}
    >
        <img src={arrow}/>
    </button>
  );
};

export default BackToTopButton;
