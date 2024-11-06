import React, { useState } from 'react';
import './GetStarted.css';

function GetStarted({ onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [authData, setAuthData] = useState({ username: '', email: '', password: '' });

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    console.log(authData); // Log auth data for debugging
    if (isSignUp) {
      // Handle sign-up logic here
      setIsSignUp(false); // Reset to Sign In after successful sign-up
    }
    onAuthSuccess(); // Call onAuthSuccess after submission
  };

  return (
    <div className="get-started-container">
      <header className="get-started-header">
        <div className="get-started-logo">Staff Trakerr</div>
        <h1 className="get-started-title">Employee Management Website</h1>
        <div className="get-started-header-buttons">
          <button className="get-started-header-button">About Us</button>
          <button className="get-started-header-button">Contact Us</button>
        </div>
      </header>

      <div className="get-started-auth-container">
        <div className="get-started-auth-content">
          <ul className="get-started-nav">
            <li className="get-started-nav-item" onClick={() => setIsSignUp(false)}>
              <a className={`get-started-nav-link ${!isSignUp ? 'active' : ''}`}>Sign In</a>
            </li>
            <li className="get-started-nav-item" onClick={() => setIsSignUp(true)}>
              <a className={`get-started-nav-link ${isSignUp ? 'active' : ''}`}>Sign Up</a>
            </li>
          </ul>

          <form onSubmit={handleAuthSubmit} className="get-started-auth-form">
            {isSignUp && (
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={handleAuthChange}
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleAuthChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleAuthChange}
            />
            <button type="submit" className="get-started-auth-button">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          </form>
        </div>

        <div className="get-started-image-container">
          <img src="https://miro.medium.com/v2/resize:fit:1024/1*yKBiFzE622mMCTs7b1c8Lw.png" alt="Employee Management" className="get-started-right-image" />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
