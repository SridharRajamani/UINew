import React from 'react';
import GSAPHorizontalScroll from '../components/GSAPHorizontalScroll.jsx';
import Navbar from "../Pages/NavBar.jsx"
import HeroSection from "../Pages/HeroSection.jsx"
import Offerings from "../Pages/Offerings.jsx"
import InfoTabs from '../components/InfoTabs.jsx';
import Footer from "../PagesFooter.jsx"
import { Routes, Route } from "react-router-dom" 

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Offerings />
      <GSAPHorizontalScroll /> 
      <Footer/>      
    </>
  );
}

export default Homepage; 