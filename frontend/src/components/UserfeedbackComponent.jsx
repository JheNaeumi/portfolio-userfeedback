
import React, { useState } from 'react';
import './UserfeedbackComponent.css';
import { postUserFeedback} from '../service/UserfeedbackService';


const UserFeedbackComponent = () => {
  const [rating, setRating] = useState(0);
  const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setFeedback] = useState('');
 
  const [showAlert, setShowAlert] = useState(false);

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  const submitFeedback = () => {
    // Handle feedback submission (you can send it to a server, etc.)
    if (!name || !email || !validateEmail(email) || rating === 0 || !comments) {
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

 
  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

 
   
  
    const handleStarClick = (value) => {
      setRating(value);
      // You can add your logic here to handle the rating, such as sending it to a server or updating the UI.
    }
  return (
  <>
    <div className="max-w-md py-1 px-3 sm:mx-auto" id="feedback">
      <div className="flex flex-col rounded-xl bg-slate-200 shadow-lg">
        <div className="px-12 py-5">
          <h2 className=" text-center font-semibold text-gray-800 sm:text-xl">Your opinion matters to us!</h2>
        </div>
        <div className="flex w-full flex-col items-center bg-[#fdfeff]">
          <div className="flex flex-col items-center space-y-3 py-1">
            <div className="flex w-3/4 flex-col">
              <div className='items-center'>
                <label htmlFor="name" className='text-gray-700 font-medium py-1'>Name:</label>
                <input className='resize-none rounded-xl bg-gray-100 p-4 text-gray-500 outline-none focus:ring'
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
                <label htmlFor="email" className='text-gray-700 font-medium py-1'>Email:</label>
                <input className='resize-none rounded-xl bg-gray-100 p-4 text-gray-500 outline-none focus:ring'
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <span className="text-lg font-medium text-gray-700">How was your experience?</span>
              <div className="flex space-x-3">
                {[1, 2, 3, 4, 5].map((value) => (
                  <svg
                    key={value}
                    className={`h-8 w-8 cursor-pointer ${
                      value <= rating ? 'text-amber-300/70' : 'text-gray-300'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => handleStarClick(value)}
                  >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
              </div>
          </div>
          <div className="flex w-3/4 flex-col pt-3">
            <textarea rows="3" className="resize-none rounded-xl bg-gray-100 p-4 text-gray-500 outline-none focus:ring" value={comments}
             onChange={(e) => setFeedback(e.target.value)} placeholder="Leave a message, if you want"></textarea>
            <button className="my-8 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 py-3 text-base text-white" onClick={submitFeedback}>Submit</button>
            {showAlert && (
              <div className="alert">
                Please fill out all fields and provide a valid email.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default UserFeedbackComponent
