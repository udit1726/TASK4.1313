import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">DEV@Deakin</div>
      <div className="navbar-center">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <button className="post-button">POST</button>
        <button className="login-button">LOGIN</button>
      </div>
    </nav>
  );
}

export default Navbar;

