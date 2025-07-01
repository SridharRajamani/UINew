import React from "react";
import PozoLogo from './Images/PozoLogo.svg';
import PozoLogoLight from './Images/PozoLogo1.svg';
import { Weight } from "lucide-react";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Technology", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Releases", href: "#" },
      { name: "Status", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Docs", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "System Guide", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Team", href: "#" },
      { name: "Culture", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Imprint", href: "#" },
      { name: "Data Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Terms of Use", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "YouTube", icon: <FaYoutube />, href: "#" },
  { name: "Twitter", icon: <FaTwitter />, href: "#" },
  { name: "Instagram", icon: <FaInstagram />, href: "#" },
  { name: "Facebook", icon: <FaFacebook />, href: "#" },
];

function Footer({ theme }) {
  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .footer-hero-headline { font-size: 2rem !important; }
          .footer-hero-logo { height: 36px !important; width: 36px !important; }
          .footer-hero-tech { font-size: 11px !important; }
          .footer-hero-btn { font-size: 1rem !important; padding: 10px 22px !important; }
          .footer-hero-blur { width: 140px !important; height: 140px !important; }
        }
        @media (max-width: 600px) {
          .footer-hero-headline { font-size: 1.3rem !important; }
          .footer-hero-logo { height: 28px !important; width: 28px !important; }
          .footer-hero-tech { font-size: 9px !important; }
          .footer-hero-btn { font-size: 0.95rem !important; padding: 8px 12px !important; }
          .footer-hero-blur { width: 90px !important; height: 90px !important; }
          .footer-hero-section { padding: 18px 4vw 0 4vw !important; }
        }
        .footer-social-link { color: #fff; opacity: 0.95; font-size: 22px; transition: color 0.2s, opacity 0.2s; display: flex; align-items: center; text-decoration: none; gap: 12px; }
        .footer-social-link:hover, .footer-social-link:focus { color: #3b82f6 !important; opacity: 1; cursor: pointer; }
        .footer-social-label { font-weight: 500; font-size: 18px; transition: color 0.2s; }
        .footer-social-arrow { margin-left: auto; font-size: 22px; opacity: 0.7; font-weight: 300; display: flex; align-items: center; transition: color 0.2s; }
        @media (max-width: 700px) {
          .footer-social-row { flex-direction: column !important; max-width: 98vw !important; }
          .footer-social-row > a { border-right: none !important; border-bottom: 1px solid #222 !important; padding: 12px 10px !important; min-width: 0 !important; }
          .footer-social-row > a:last-child { border-bottom: none !important; }
        }
      `}</style>
      <div
        className="footer-hero-section"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 320,
          background: theme === 'light' ? '#fff' : '#000',
          color: theme === 'light' ? '#111' : '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          gap:'1rem',
          padding: '132px 0 50px 0',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        <h1
          className="footer-hero-headline"
          style={{
            fontSize: '72px', 
            fontWeight:'400',
            color: theme === 'light' ? '#111' : '#fff',
            margin: 0,
            marginTop: 16,
            letterSpacing: '-3px',
            textAlign: 'center',
            textShadow: theme === 'light' ? 'none' : '0 2px 24px rgba(0,0,0,0.18)',
            pointerEvents: 'auto',
            userSelect: 'text',
            lineHeight: 0.8,
          }}
        >
          Built for What
          Comes Next.
        </h1>
       
         
        <p
          style={{
            fontSize: '15px',
            color: theme === 'light' ? '#111' : '#e0e0e0',
            margin: '10px 0 0 0', 
            textAlign: 'center',
            letterSpacing:'-0px',
            maxWidth: 420, 
            pointerEvents: 'auto',
            userSelect: 'text',
          }}
        >
          Future-ready  tools for teams moving the speed of AI .
        </p>
        <button
          className="footer-hero-btn"
          style={{
            marginTop: 10,
            background: theme === 'light' ? '#f5f5f5' : 'rgba(20,20,20,0.92)',
            color: theme === 'light' ? '#111' : '#f5f5f5',
            fontWeight: 500,
            fontSize: '1.08rem',
            border: '1.5px solid #222',
            borderRadius: '999px',
            padding: '11px 32px 11px 22px',
            boxShadow: 'none',
            cursor: 'pointer',
            transition: 'background 0.18s, box-shadow 0.18s, border 0.18s',
            pointerEvents: 'auto',
            userSelect: 'none',
            letterSpacing: '-0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minWidth: 0,
          }}
          onClick={() => window.location.href = '#'}
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 4,
            fontSize: 0,
          }}>
             
          </span>
          <span style={{
            fontSize: '1.08rem',
            fontWeight: 500,
            color: theme === 'light' ? '#111' : '#f5f5f5',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
          }}>
            Get Started
          </span>
        </button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '50px 0 10px 0',
            pointerEvents: 'auto',
            userSelect: 'none',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <img
            src={theme === 'light' ? PozoLogoLight : PozoLogo}
            alt="Pozo Logo"
            className="footer-hero-logo"
            style={{
              height: 64,
              width: 'auto',
              filter: 'brightness(1.2)',
              marginBottom: 2,
              marginTop: 10,
              display: 'block',
              transition: 'height 0.2s, width 0.2s',
            }}
          />
           
        </div>
        {/* Blurred logo background */}
        <img
          src={PozoLogo}
          alt="Pozo Logo Blurred"
          className="footer-hero-blur"
          style={{
            width: 220,
            height: 220,
            objectFit: 'contain',
            filter: 'blur(24px) brightness(2)',
            opacity: 0.85,
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            zIndex: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            transition: 'width 0.2s, height 0.2s',
          }}
        />
      </div>
      <footer className="footer-root" style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'DM Sans, sans-serif', width: '100%', marginTop: 0, borderTop: '1px solid #222', position: 'relative', zIndex: 2 }}>
        {/* Center light effect */}
        <div className="footer-light" style={{ position: 'absolute', left: '50%', top: 0, width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.0) 70%)', transform: 'translate(-50%, 0)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          {/* Social row */}
          <div
            className="footer-social-row"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
              width: '100%',
              maxWidth: 900,
              margin: '32px auto 0 auto',
              borderTop: '1px solid #222',
              borderBottom: '1px solid #222',
              background: 'transparent',
            }}
          >
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  borderRight: idx < socialLinks.length - 1 ? '1px solid #222' : 'none',
                  padding: '18px 24px',
                  minWidth: 120,
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                }}
              >
                {social.icon}
                <span className="footer-social-label">{social.name}</span>
                <span className="footer-social-arrow">&#8594;</span>
              </a>
            ))}
          </div>
          {/* Links row */}
          <div style={{ display: 'flex', borderBottom: '1px solid #222', padding: '32px 0', gap: 0 }}>
            {footerLinks.map((section, idx) => (
              <div key={section.title} style={{ flex: 1, minWidth: 160, borderRight: idx < footerLinks.length - 1 ? '1px solid #222' : 'none', padding: '0 24px' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#888', letterSpacing: 1, marginBottom: 18, textTransform: 'uppercase' }}>{section.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {section.links.map((link) => (
                    <li key={link.name} style={{ marginBottom: 10 }}>
                      <a href={link.href} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, opacity: 0.85, transition: 'opacity 0.2s' }}
                        onMouseOver={e => e.currentTarget.style.opacity = 1}
                        onMouseOut={e => e.currentTarget.style.opacity = 0.85}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Bottom row: logo, description, subscribe */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '40px 0 32px 0', gap: 32, flexWrap: 'wrap' }}>
            {/* Logo and description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 400 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <img src={PozoLogo} alt="Pozo Logo" style={{ height: 33, width: 'auto', filter: 'brightness(1.2)' }} />
              </div>
              <div style={{ color: '#bbb', fontSize: 15, lineHeight: 1.7, marginTop: 4, textAlign: 'left' }}>
                In the new era of technology we look a in the future with certainty and pride to for our company and business.
              </div>
            </div>
            {/* Subscribe form */}
            <form
              style={{
                display: 'flex',
                alignItems: 'center',
                maxWidth: 380,
                width: '100%',
                background: 'none',
                boxShadow: 'none',
                borderRadius: 0,
                padding: 0,
                margin: 0,
                gap: 0,
              }}
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="name@email.com"
                style={{
                  background: '#fff',
                  border: '1.5px solid #222',
                  color: '#222',
                  fontSize: 16,
                  padding: '12px 18px',
                  borderRadius: 3,
                  outline: 'none',
                  width: '100%',
                  letterSpacing: 0,
                  fontFamily: 'inherit',
                  marginRight: -1.5,
                  fontWeight: 500, 
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                  transition: 'border 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => {
                  e.currentTarget.style.border = '1.5px solid #444';
                  e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.12)';
                }}
                onBlur={e => {
                  e.currentTarget.style.border = '1.5px solid #222';
                  e.currentTarget.style.boxShadow = '0 2px 8px 0 rgba(0,0,0,0.08)';
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#111',
                  color: '#fff',
                  border: '1.5px solid #222',
                  borderRadius: 3,
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '12px 24px',
                  cursor: 'pointer',
                  letterSpacing: 0,
                  fontFamily: 'inherit', 
                  textAlign:'center',
                  marginLeft: 0,
                  transition: 'background 0.2s, border 0.2s',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                  textTransform: 'uppercase',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#181818';
                  e.currentTarget.style.border = '1.5px solid #444';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = '#111';
                  e.currentTarget.style.border = '1.5px solid #222';
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

