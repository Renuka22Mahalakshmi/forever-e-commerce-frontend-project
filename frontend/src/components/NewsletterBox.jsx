import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    console.log('Email subscribed:', email);

    
    setShowPopup(true);

    
    setEmail('');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now and get 25% off</p>
      <p className="text-gray-400 mt-3">Mail us now</p>
      <p>
        <form
          onSubmit={onSubmitHandler}
          className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        >
          <input
            className="w-full sm:flex-1 outline-none"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </p>
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border rounded-md shadow-md">
          <p className="text-lg font-semibold mb-4">Subscription Successful!</p>
          <button
            onClick={closePopup}
            className="bg-gray-200 px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterBox;