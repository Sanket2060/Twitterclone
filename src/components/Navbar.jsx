import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Notifications</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Messages</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Profile</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">More</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
