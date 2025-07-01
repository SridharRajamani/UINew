import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import SigninPage from "./Pages/SigninPage.jsx"
import Homepage from "./Pages/Homepage.jsx"

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Routes>
      <Route path='/' element={<Homepage theme={theme} setTheme={setTheme} />} />
      <Route path='/homepage' element={<Homepage theme={theme} setTheme={setTheme} />} />
      <Route path="/signin" element={<SigninPage theme={theme} setTheme={setTheme} />} />
    </Routes>
  );
}

export default App; 