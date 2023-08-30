import React from 'react';
import './Email.css';

function EmailSub() {
  return (
    <div className="email-subscription">
      <div className="email-subscription-text">
        SIGN UP FOR OUR DAILY INSIDER
      </div>
      <div className="email-subscription-input">
        <input type="email" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default EmailSub;
