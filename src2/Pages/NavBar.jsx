import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import PozoLogo from '../Images/PozoLogo1.svg';
import { RiStore2Line } from "react-icons/ri";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
    <div className="navbar-island">
      <div className="island-content">
        {/* Logo */}
        <img src={PozoLogo} alt="Pozo Logo" className="pozo-logo" />

        {/* Navigation Links */}
        <div className="nav-links">
          <div className="dropdown" ref={dropdownRef}>
            <span onClick={toggleDropdown} className={isDropdownOpen ? 'active' : ''}>Industries <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i></span>
         
          </div>
          <span>Offerings</span>
          <span>Testimonials</span>
        </div>

        {/* Right-aligned items */}
        <div className="right-items">
          <span> <RiStore2Line/>  Pozo Store</span>
          <span onClick={() => window.location.href = '/signin'} style={{ cursor: 'pointer' }}>Sign In</span>
        </div>
         
      </div>
      
    </div>

            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <div className="dropdown-inner-content">
                <div className="dropdown-section explore-mac">
                  <h3>Explore Mac</h3>
                  <a href="#">Explore All Mac</a>
                  <a href="#">MacBook Air</a>
                  <a href="#">MacBook Pro</a>
                  <a href="#">iMac</a>
                  <a href="#">Mac mini</a>
                  <a href="#">Mac Studio</a>
                  <a href="#">Mac Pro</a>
                  <a href="#">Displays</a>
                  <a href="#" className="small-link">Compare Mac</a>
                  <a href="#" className="small-link">Switch from PC to Mac</a>
                </div>
                <div className="dropdown-section shop-mac">
                  <h3>Shop Mac</h3>
                  <a href="#">Shop Mac</a>
                  <a href="#">Mac Accessories</a>
                  <a href="#">Ways to Buy</a>
                  <a href="#">College Student Offer</a>
                </div>
                <div className="dropdown-section more-from-mac">
                  <h3>More from Mac</h3>
                  <a href="#">Mac Support</a>
                  <a href="#">AppleCare+ for Mac</a>
                  <a href="#">macOS Sequoia</a>
                  <a href="#">Apple Intelligence</a>
                  <a href="#">Apps by Apple</a>
                  <a href="#">Continuity</a>
                  <a href="#">iCloud+</a>
                  <a href="#">Mac for Business</a>
                  <a href="#">Education</a>
                </div>
              </div>
            </div>

            </>
  );
};

export default NavBar;