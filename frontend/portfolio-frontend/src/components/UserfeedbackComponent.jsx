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

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  const submitFeedback = () => {
    // Handle feedback submission (you can send it to a server, etc.)
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
        </div>
      )}
    </div>
  </div>
  )
}

export default UserFeedbackComponent
