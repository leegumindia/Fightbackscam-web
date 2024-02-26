import React, { useState } from 'react';

const PhoneVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [formUrl, setFormUrl] = useState('https://docs.google.com/forms/d/e/1FAIpQLSfocMo2W97mMBqsAj3qY_fQkFwHaQqW1nPIqrzXllJDWbY_Ug/viewform?usp=sf_link'); // Replace with your Google Form URL

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setPhoneNumber('');
    setOtp('');
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  // Simulate OTP validation (replace with your actual validation logic)
  const handleValidateOtp = () => {
    if (otp === '123456') { // Replace with your actual validation code
      setFormUrl('https://docs.google.com/forms/d/e/1FAIpQLSfocMo2W97mMBqsAj3qY_fQkFwHaQqW1nPIqrzXllJDWbY_Ug/viewform?usp=sf_link'); // Replace with your actual form URL
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
      <button onClick={handleOpen}>Click Me</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Phone Number Verification</h3>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
            />
            <button onClick={handleValidateOtp}>Validate OTP</button>
            {formUrl && (
              <iframe
                src={formUrl}
                frameBorder="0"
                width="100%"
                height="500px"
                title="Google Form"
                allow="fullscreen"
              ></iframe>
            )}
          </div>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
      <div className={`background-blur ${isOpen ? 'active' : ''}`}></div>
    </div>
  );
};

export default PhoneVerification;
