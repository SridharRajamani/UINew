import React from 'react';
import GSAPHorizontalScroll from '../components/GSAPHorizontalScroll.jsx';
import Navbar from "../Pages/NavBar.jsx"
import HeroSection from "../Pages/HeroSection.jsx"
import Offerings from "../Pages/Offerings.jsx"
import InfoTabs from '../components/InfoTabs.jsx';
import Footer from "../PagesFooter.jsx"

function Homepage({ theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection theme={theme}  />
      <Offerings theme={theme} />
      <GSAPHorizontalScroll theme={theme} /> 
      <Footer theme={theme}/>      
    </>
  );
}

export default Homepage; 