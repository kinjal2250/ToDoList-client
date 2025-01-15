import { useState } from 'react';
import { AiOutlineLogin, AiOutlineSearch } from 'react-icons/ai';
import { MdPersonAdd } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLogin = () => setShowLoginForm(true);
  const handleCloseForm = () => setShowLoginForm(false);
  const handleSignup = () => setShowSignupForm(true);
  const handleCloseSignup = () => setShowSignupForm(false);

  const handleLoginSubmit = () => {
    alert('Log in successful!');
    handleCloseForm();
  };

  const handleSignupSubmit = () => {
    alert('Sign up successful!');
    handleCloseSignup();
  };

  return (
    <>
      <nav className="navbar custom-navbar">
        
        <div className="brand-container">
          <span className="brand-text">TaskEase</span>
        </div>
        <div className="nav-left">
          <div className="nav-buttons">
            <button className="nav-btn" onClick={handleLogin}>
              <AiOutlineLogin /> Log In
            </button>
            <button className="nav-btn" onClick={handleSignup}>
              <MdPersonAdd /> Sign Up
            </button>
          </div>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search tasks..." />
            <button className="search-btn"><AiOutlineSearch /></button>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      {showLoginForm && (
        <div className="form-overlay">
          <form className="login-form">
            <button type="button" className="close-btn" onClick={handleCloseForm}>
              <IoClose />
            </button>
            <h3>Login</h3>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="button" className="form-btn" onClick={handleLoginSubmit}>Log In</button>
          </form>
        </div>
      )}

      {/* Signup Form */}
      {showSignupForm && (
        <div className="form-overlay">
          <form className="signup-form">
            <button type="button" className="close-btn" onClick={handleCloseSignup}>
              <IoClose />
            </button>
            <h3>Sign Up</h3>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="button" className="form-btn" onClick={handleSignupSubmit}>Sign Up</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
