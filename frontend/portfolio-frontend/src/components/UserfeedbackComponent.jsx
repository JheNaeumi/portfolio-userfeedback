// src/components/UserFeedbackComponent.jsx

import React, { useState } from 'react';
import './UserFeedbackComponent.css';

const UserFeedbackComponent = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  const submitFeedback = () => {
    // Handle feedback submission (you can send it to a server, etc.)
    console.log('Feedback submitted:', { name, email, feedback, rating });
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
    <div className={`user-feedback ${showFeedbackForm ? 'active': ''}`}>
      <button onClick={toggleFeedbackForm}>Give Feedback</button>
      {showFeedbackForm && (
        <div className="feedback-form">
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
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type your feedback here"
          ></textarea>

          <button onClick={submitFeedback}>Submit Feedback</button>
        </div>
      )}
    </div>
  );
};

export default UserFeedbackComponent;
