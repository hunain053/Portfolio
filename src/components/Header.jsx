import React from 'react';
import ProfileImage from '../assets/profile.jpg';

function Header({ name, role }) {
  const timestamp = new Date().getTime();
  return (
    <div className="header-section">
      <div className="info">
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
      <div className="profile-pic">
        <img
          src={`${ProfileImage}?v=${timestamp}`}
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Header;
