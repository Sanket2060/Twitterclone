import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar=()=>{
  const Navigate=useNavigate();
  const  Home=()=>{
    Navigate("/");

 }
 const About=()=>{
     Navigate("/about");

  }
  
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={Home}>Home</a>
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
          <a href="#" className="nav-link" onClick={About}>About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
