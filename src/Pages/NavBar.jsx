import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import PozoLogo from '../Images/PozoLogo1.svg';
<<<<<<< HEAD
import PozoLogoDark from '../Images/PozoLogo.svg';
import { RiStore2Line } from "react-icons/ri";

const NavBar = ({ theme, setTheme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [theme]);

=======
import { RiStore2Line } from "react-icons/ri";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

<<<<<<< HEAD
  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

=======
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
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
<<<<<<< HEAD
    <div className="navbar-island" style={{ 
      background: theme === 'light' ? '#fff' : 'rgba(0,0,0,0.7)',
      color: theme === 'light' ? '#111' : '#fff',
      backdropFilter: theme === 'dark' ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: theme === 'dark' ? 'blur(16px)' : 'none',
    }}>
      <div className="island-content" style={{ color: theme === 'light' ? '#111' : '#fff' }}>
        {/* Logo */}
        <img src={theme === 'light' ? PozoLogo : PozoLogoDark} alt="Pozo Logo" className="pozo-logo" />
=======
    <div className="navbar-island">
      <div className="island-content">
        {/* Logo */}
        <img src={PozoLogo} alt="Pozo Logo" className="pozo-logo" />
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c

        {/* Navigation Links */}
        <div className="nav-links">
          <div className="dropdown" ref={dropdownRef}>
<<<<<<< HEAD
            <span onClick={toggleDropdown} className={isDropdownOpen ? 'active' : ''} style={{ color: theme === 'light' ? '#111' : '#fff' }}>Industries <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i></span>
         
          </div>
          <span style={{ color: theme === 'light' ? '#111' : '#fff' }}>Offerings</span>
          <span style={{ color: theme === 'light' ? '#111' : '#fff' }}>Testimonials</span>
        </div>

        {/* Right-aligned items */}
        <div className="right-items" style={{ color: theme === 'light' ? '#111' : '#fff' }}>
          <span style={{ color: theme === 'light' ? '#111' : '#fff' }}> <RiStore2Line/>  Pozo Store</span>
          <span onClick={() => window.location.href = '/signin'} style={{ cursor: 'pointer', color: theme === 'light' ? '#111' : '#fff' }}>Sign In</span>
          <span style={{ marginLeft: '20px', cursor: 'pointer', color: theme === 'light' ? '#111' : '#fff' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500, color: theme === 'light' ? '#111' : '#fff' }}>
              <input type="checkbox" checked={theme === 'dark'} onChange={handleThemeToggle} style={{ accentColor: '#007bff' }} />
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </label>
          </span>
=======
            <span onClick={toggleDropdown} className={isDropdownOpen ? 'active' : ''}>Industries <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i></span>
         
          </div>
          <span>Offerings</span>
          <span>Testimonials</span>
        </div>

        {/* Right-aligned items */}
        <div className="right-items">
          <span> <RiStore2Line/>  Pozo Store</span>
          <span onClick={() => window.location.href = '/signin'} style={{ cursor: 'pointer' }}>Sign In</span>
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
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