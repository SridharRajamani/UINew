import React from 'react';
import GSAPHorizontalScroll from '../components/GSAPHorizontalScroll.jsx';
import Navbar from "../Pages/NavBar.jsx"
import HeroSection from "../Pages/HeroSection.jsx"
import Offerings from "../Pages/Offerings.jsx"
import InfoTabs from '../components/InfoTabs.jsx';
import Footer from "../PagesFooter.jsx"
<<<<<<< HEAD

function Homepage({ theme, setTheme }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection theme={theme}  />
      <Offerings theme={theme} />
      <GSAPHorizontalScroll theme={theme} /> 
      <Footer theme={theme}/>      
=======
import { Routes, Route } from "react-router-dom" 

function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Offerings />
      <GSAPHorizontalScroll /> 
      <Footer/>      
>>>>>>> 6994d4e01f8d26285482fac6ffff0c7abc45979c
    </>
  );
}

export default Homepage; 