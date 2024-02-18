// src/components/UserFeedbackComponent.jsx

import React, { useState } from 'react';
import './UserFeedbackComponent.css';
import { postUserFeedback} from '../service/UserfeedbackService';


const UserFeedbackComponent = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  const submitFeedback = () => {
    // Handle feedback submission (you can send it to a server, etc.)
    if (!name || !email || !validateEmail(email) || rating === 0 || !comments) {
      // Display an error message or handle validation failure appropriately
      //alert('Please fill out all fields and provide a valid email.');
      setShowAlert(true);
      // Hide the alert after a short delay (adjust the duration as needed)
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    const user = {name, email, comments ,rating}
    
    postUserFeedback(user).then((response)=>{
      console.log(response.data);
    }).catch(console.error())
    console.log('Feedback submitted:', { name, email, comments, rating });
    setShowFeedbackForm(false);
    setName('');
    setEmail('');
    setFeedback('');
    setRating(0);
 
  };

  // Function to handle star rating
  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  // Function to render star icons for rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'selected' : ''}`}
          onClick={() => handleRating(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
  <div id="container-feedback">
    <div className={`user-feedback ${showFeedbackForm ? 'active': ''}`} id = "feedback">
      <button onClick={toggleFeedbackForm}className="button1">Give Feedback</button>
      {showFeedbackForm && (
        <div className="feedback-form" id ="space">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />

          <label htmlFor="rating">Rating:</label>
          <div className="rating-stars">{renderStars()}</div>

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={comments}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type your feedback here"
          ></textarea>

          <button onClick={submitFeedback}className='button1'>Submit Feedback</button>
          {showAlert && (
          <div className="alert">
            Please fill out all fields and provide a valid email.
          </div>
          )}
        </div>
      )}
    </div>
    
  </div>
  )
}

export default UserFeedbackComponent
