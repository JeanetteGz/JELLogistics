import { useState } from 'react';
import './header.css';
import logo from '../assets/logo.png';

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap nav">
        <a className="brand" href="#home" aria-label="JEL Logistics Home">
          <img src={logo} className="brand__logo" alt="JEL Logistics" />
        </a>
        <nav className={`nav__links ${menuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#shippers" onClick={() => setMenuOpen(false)}>For Shippers</a>
          <a href="#carriers" onClick={() => setMenuOpen(false)}>For Carriers</a>
          <a href="#contact" className="btn btn-navy" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button 
          className="mobile-toggle" 
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}