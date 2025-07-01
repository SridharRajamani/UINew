// import './HeroSection.css';

// function HeroSection() {
//   return (
//     <div className="LandigMaster">
//       <div className="noise-overlay"></div>

//       <div className="title-section">
//         {/* <h1>Pozo</h1> */}
//         <div className='head'>simplifies, automates, and scales — with GenAI at its core.</div>
//       </div>

//       <div className="subtitle">
//         <p>Here is where your presentation begins</p>
//       </div>

//       <button className="blurry-button">Create with Pozo</button>
//       <div className="gradient-blur"></div>

//       <div className="floral-shape">
//         <div className="floral-petal"></div>
//         <div className="floral-petal"></div>
//         <div className="floral-petal"></div>
//         <div className="floral-petal"></div>
//         <div className="floral-petal"></div>
//         <div className="floral-petal"></div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
import React, { useEffect } from 'react';
import './HeroSection.css';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  useEffect(() => {
    const scriptId = 'spline-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.13/build/spline-viewer.js';
      script.type = 'module';
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="LandigMaster">
      <div className="title-section">
        <div className="head">
          <span className="letters">Core-crafted intelligence</span>
        </div>
        <p>Lightweight interface. Heavyweight intelligence</p>
        
        <button
          className="explore-button"
          onClick={() => window.location.href = '/signin'}
        >
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
              ></path>
            </svg>
          </div>
          <span style={{ cursor: 'pointer' }}>
            Explore
          </span>
        </button>
      </div>

      <div style={{ width: '100%', height: '100vh', position: 'absolute', left: '0' }}>
      <spline-viewer url="https://prod.spline.design/hlzbpWnemLgYuOCg/scene.splinecode">
     </spline-viewer> 
      </div>
    </div>
  );
}

export default HeroSection;
 






