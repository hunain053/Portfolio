import React from 'react';

function Header({ name, role }) {
  return (
    <div className="header-section">
      <div className="info">
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
      <div className="profile-pic">
        <img src="/assets/profile2.jpg" alt="Profile" /> {/* Use absolute path */}
      </div>
    </div>
  );
}
export default Header;
