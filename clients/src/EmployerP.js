// src/EmployerP.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';
import Profile from './profile/Profile';
import SignOut from './Sign in/SignOut';
import EmployerJobDetailView from './job posting/EmployerJobDetailView';
import HeaderEmployer from './Header/HeaderEmployer';

const EmployerP = ({ onSignOut, auth }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id: userId } = useParams(); // Get userId from route parameters

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Make sure the API call includes userType to differentiate between employee and employer
        const userType = 'employer';  // This can be dynamic based on user role
        const response = await fetch(`http://localhost:8081/api/users/${userId}?userType=${userType}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Authentication token
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch profile: ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Expected JSON, but received a non-JSON response");
        }

        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load profile information.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  console.log("Auth:", auth, "User ID:", userId);

  return (
    <div className="employer-page-container">
      {/* Custom header for the employer page */}
      <HeaderEmployer 
        userId={userId} 
        auth={auth} 
        onSignOut={onSignOut} 
        />

      {/* Main content for the employer page */}
      <main className="content-App">
        <div className="text-section-App">
          <h1 className="company-name-App">MMML</h1>
          <h2 className="tagline-App">Recruitment Services Corporated</h2>
          <p className="description-App">
            Maddy, Minette, Miles, Lollie "MMML" was founded in 1999 in Manila with its mission to assist Filipinos in finding jobs abroad.
            Its initial focus is domestic helpers in Kuwait and Bahrain. Its current reach is multiple countries and diverse jobs,
            having recognition from the POEA, OWWA, and DOLE. The corporation specializes in marketing and HR training with a goal of
            employer and client satisfaction, aiming for improved local employment rate and awards for exceptional services.
          </p>
        </div>

        <div className="image-section-App">
          <img src="woman-smiling.png" alt="Smiling Woman" className="main-image-App" />
        </div>

        {/* Loading state */}
        {loading && <p>Loading profile...</p>}

        {/* Error state */}
        {error && <p className="error-message">{error}</p>}

        {/* Display profile information if available */}
        {profileData && <Profile profileData={profileData} />}
      </main>
    </div>
  );
};

export default EmployerP;
