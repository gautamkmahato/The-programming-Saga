import React from 'react';
import '../App.css';
import logo from '../image/logo/logo1.png'

function Navbar() {
      
  return (
    <div>
      <nav>
        <div className="left-item-section">
        <a href="/" className="item"><img src={logo} alt="Logo" className="logo" /></a>
        </div>  
        <div className="middle-item-section">
          <a href="/" className="item">Home</a>
          <a href="/problems" className="item">Problems</a>
          <a href="/" className="item">Explore</a>
          <a href="/tabs" className="item">tabs</a>
          <a href="/" className="item">About</a>
        </div>
        <div className="right-item-section">
        <a href="/" className="item">Item 2</a>
          <a href="/" className="item">Item 2</a>
          <a href="/" className="item">Item 2</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar