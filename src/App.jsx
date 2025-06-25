import React from 'react';
 
import { Routes, Route } from "react-router-dom"
import SigninPage from "./Pages/SigninPage.jsx"
import Homepage from "./Pages/Homepage.jsx"
function App() {
  return (
    <>
 

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/homepage' element={<Homepage/>} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  );
}

export default App; 