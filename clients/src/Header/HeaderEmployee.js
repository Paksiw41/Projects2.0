import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import './HeaderEmployee.css'; // Scoped CSS for header
import logo from '../assets/images/MMMLCropped.png';
import SignOut from '../Sign in/SignOut'; // Import SignOut component
=======
import './HeaderEmployee.css';
import logo from '../assets/images/logo4.png';
import SignOut from '../Sign in/SignOut';

const HeaderEmployee = ({ userId, auth }) => {
  // Define the sign-out logic
  const handleSignOut = () => {
    console.log('Clearing session and redirecting...');
    // Redirect and notify app state if necessary
  };
>>>>>>> 155dc14851925bc056708db6513d9eab8e4be60c

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
        <SignOut onSignOut={handleSignOut} />
      </div>
    </header>
  );
};

export default HeaderEmployee;
