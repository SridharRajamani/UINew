import React, { useState, useEffect } from 'react';
import { Sun, Star, ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import styles from './SignIn.module.css';
import PozoLogo from '../Images/PozoLogo1.svg';
import { BsArrowRight } from 'react-icons/bs';

const GoogleIcon = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.591,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);

const slides = [
  {
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "We move 10x faster than our peers and stay consistent. While they're bogged down with design debt, we're releasing new features.",
    author: "Sophie Hall",
    title: "Founder, Catalog",
    subtitle: "Web Design Agency",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Pozo helped us scale our business with ease. The design system is a game changer!",
    author: "Alex Kim",
    title: "CTO, FintechX",
    subtitle: "Finance Platform",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "The best UI toolkit we've ever used. Our team is so much more productive.",
    author: "Maria Lopez",
    title: "Lead Designer, Creatify",
    subtitle: "Creative Studio",
    stars: 5,
  },
];

export default function SignInPage() {
  const [email, setEmail] = useState('pozo@gmail.com');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [slide, setSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ label: '', color: '' });

  const nextSlide = () => setSlide((s) => (s + 1) % slides.length);
  const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length);

  // Password strength checker
  function getPasswordStrength(pw) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (score <= 1) return { label: 'Weak', color: '#e74c3c' };
    if (score === 2 || score === 3) return { label: 'Medium', color: '#f1c40f' };
    if (score === 4) return { label: 'Strong', color: '#27ae60' };
    return { label: '', color: '' };
  }

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(password));
  }, [password]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <div className={styles.brand}>
            <a href="/homepage" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src={PozoLogo}
                alt="Pozo Logo"
                style={{ height: 28, width: 'auto', marginRight: 8, filter: 'grayscale(100%)', cursor: 'pointer' }}
              />
            </a>
           </div>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Welcome back, Pozo</h1>
            <p className={styles.subtitle}>Welcome back! Please enter your details.</p>
          </div>

          <div className={styles.formFields}>
            <Button
              type="button"
              variant="outline"
              size="lg"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75em",
                fontWeight: 400,
                fontSize: "1.08em",
                border: "1.5px solid #e0e0e0",
                background: "#fff",
                color: "#222",
                boxShadow: "0 2px 8px rgba(60,60,60,0.04)",
                marginBottom: "0.5em",
                marginTop: "0.2em",
                transition: "box-shadow 0.18s, border 0.18s",
              }} 
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7em",
                  fontWeight: 400,
                  fontSize: "1em",
                  letterSpacing: "-0.51px",
                }}
                className={styles.googleButtonContent}
              >
                <GoogleIcon style={{ width: 22, height: 22, marginRight: 2, flexShrink: 0 }} />
                Log in with Google
              </div>
            </Button>

            <div className={styles.divider}>
              <span className={styles.dividerText}>
                or
              </span>
            </div>

            <form className={styles.form}>
              <div className={styles.field}>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="text"
                  inputMode="tel"
                  placeholder="e.g. +1 555 123 4567"
                  required
                  value={phone}
                  onChange={e => {
                    // Only allow numbers, spaces, +, and -
                    let val = e.target.value;
                    // Remove any character that is not digit, space, +, or -
                    val = val.replace(/[^\d+\s-]/g, '');
                    // Only allow up to 10 digits
                    const digits = val.replace(/\D/g, '');
                    if (digits.length > 10) {
                      // Truncate to 10 digits, but keep formatting
                      let count = 0;
                      val = val.split('').filter(c => {
                        if (/\d/.test(c)) {
                          if (count < 10) {
                            count++;
                            return true;
                          } else {
                            return false;
                          }
                        }
                        return true;
                      }).join('');
                    }
                    setPhone(val);
                  }}
                  pattern="^\+?\d{1,4}?[\d\s-]{7,}$"
                  autoComplete="tel"
                />
              </div>

              <div className={styles.field} style={{ position: 'relative' }}>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ paddingRight: 40 }}
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(v => !v)}
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: '#888',
                    height: 32,
                    width: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  tabIndex={0}
                >
                  {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
                {/* Password strength indicator */}
                {password && (
                  <div style={{ marginTop: 6 }}>
                    <div style={{ height: 6, borderRadius: 4, background: '#eee', width: '100%' }}>
                      <div style={{ height: 6, borderRadius: 4, width: passwordStrength.label === 'Weak' ? '33%' : passwordStrength.label === 'Medium' ? '66%' : '100%', background: passwordStrength.color, transition: 'width 0.3s, background 0.3s' }} />
                    </div>
                    <div style={{ fontSize: 12, color: passwordStrength.color, fontWeight: 500, marginTop: 2 }}>
                      {passwordStrength.label} password
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.options}>
                <div className={styles.rememberMe}>
                  <Checkbox id="remember" checked={remember} onCheckedChange={setRemember} />
                  <Label htmlFor="remember" className={styles.rememberMeLabel}>Remember for 30 days</Label>
                </div>
                <a href="#" className={styles.forgotPasswordLink}>
                  Forgot password
                </a>
              </div>
              
              <div className={styles.submitButton}>
                <button type="submit" className={styles['login-animated-btn']} style={{ width: '22rem', justifyContent: 'center' }}>
                  <span>Log in</span>
                  <div className="svg-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                    <BsArrowRight size={24} />
                  </div>
                </button>
              </div>
            </form>
          </div>
          
          <p className={styles.signup}>
            Don&apos;t have an account?{' '}
            <a href="#" className={styles.signupLink}>
              Sign up for free
            </a>
          </p>
        </div>
      </div>
      
      <div
        className={styles.imageSection}
        style={{
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          height: '100%',
          flex: '1 1 0%',
          padding: 0,
          margin: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
            transform: `translateX(-${slide * 100}%)`,
          }}
        >
          {slides.map((s, idx) => (
            <div
              key={idx}
              style={{
                minWidth: '100%',
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                padding: 0,
                margin: 0,
              }}
            >
              <img
                src={s.image}
                alt={s.author}
                className={styles.imageBackground}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', left: 0, top: 0 }}
              />
              <div className={styles.overlay} />
              <div className={styles.quoteWrapper} style={{ zIndex: 10, position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div className={styles.quoteContent}>
                  <p className={styles.quoteText} style={{ fontSize: '2rem', fontWeight: 500, color: '#fff', lineHeight: 1.2, marginBottom: 24 }}>
                    &quot;{s.quote}&quot;
                  </p>
                  <div className={styles.authorInfo}>
                    <div>
                      <p className={styles.authorName} style={{ color: '#fff', fontWeight: 400, fontSize: '1.1rem' }}>{s.author}</p>
                      <p className={styles.authorTitle} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{s.title}</p>
                      <p className={styles.authorTitle} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{s.subtitle}</p>
                    </div>
                    <div className={styles.stars}>
                      {[...Array(s.stars)].map((_, i) => (
                        <Star key={i} style={{ width: 22, height: 22, color: '#fff', fill: '#fff' }} />
                      ))}
                    </div>
                  </div>
                  <div className={styles.carouselButtons} style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, marginTop: 2 }}>
                    <button
                      type="button"
                      style={{
                        background: 'transparent',
                        border: '1.5px solid #fff',
                        borderRadius: '50%',
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: 22,
                        cursor: 'pointer',
                        transition: 'background 0.2s, border 0.2s',
                        marginLeft: 0,
                      }}
                      onClick={prevSlide}
                      onMouseOver={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.borderColor = '#fff';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = '#fff';
                      }}
                    >
                      <ArrowLeft style={{ width: 22, height: 22, color: '#fff' }} />
                    </button>
                    <button
                      type="button"
                      style={{
                        background: 'transparent',
                        border: '1.5px solid #fff',
                        borderRadius: '50%',
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: 22,
                        cursor: 'pointer',
                        transition: 'background 0.2s, border 0.2s',
                        marginLeft: 0,
                      }}
                      onClick={nextSlide}
                      onMouseOver={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.borderColor = '#fff';
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = '#fff';
                      }}
                    >
                      <ArrowRight style={{ width: 22, height: 22, color: '#fff' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
