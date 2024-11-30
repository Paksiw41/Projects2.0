import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderEmployee.css';
import logo from '../assets/images/logo4.png';
import SignOut from '../Sign in/SignOut';

const HeaderEmployee = ({ userId, auth }) => {
  const handleSignOut = () => {
    // Optional: Add any additional logic here if needed
    console.log('User signed out!');
  };

  return (
    <header className="header-employee-navbar">
      <img src={logo} alt="Logo" className="header-employee-logo" />
      <nav className="header-employee-nav">
        <ul>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#vision">VISION</a></li>
          <li><a href="#mission">MISSION</a></li>
          <li><Link to="/view-job">View Job Posting</Link></li>
          <li><Link to={`/employee/${userId}/applied-jobs`}>View Applied Jobs</Link></li>
          {auth && userId && (
            <li><Link to={`/profile/${userId}/employee`}>Profile</Link></li>
          )}
        </ul>
      </nav>
      <div className="header-employee-button">
        {/* Use the SignOut component */}
        <SignOut onSignOut={handleSignOut} />
      </div>
    </header>
  );
};

export default HeaderEmployee;