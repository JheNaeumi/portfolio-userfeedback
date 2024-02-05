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
            Welcome to my digital space, where I’m excited to share a bit about who I am.
            I'm on a journey of self-discovery and growth as a Software Developer/Engineer.
            As I navigate the exciting landscape of new technologies,
            I find myself embracing the opportunity to learn, create, and evolve. 
            With a background in Computer Science, graduating from University of Cordillera. 
            I have been learning programming since senior high. During that time i was super interested and motivated as i learn 
            to create/build apps, but at the same time it was difficult at that time nevertheless i continued on and found it super fun and challenging.
            When I'm not immersed in the digital world, you'll find me doing interesting stuff. 
            These activities provide balance and inspiration, influencing the creative energy I pour into my projects.
       </p>
      </div>
    </div>
    </section>
  )
}

export default MainPage
