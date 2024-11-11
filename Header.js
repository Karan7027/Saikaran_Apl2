// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const headerStyles = {
  container: {
    backgroundColor: '#ff5722',
    color: '#fff',
    padding: '20px 0',
    borderBottom: '5px solid #ff8a65',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#fff',
    margin: '10px 0 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#ff8a65',
  },
};

const Header = () => {
  return (
    <header style={headerStyles.container}>
      <h1 style={headerStyles.title}>Racing Registration</h1>
      <p style={headerStyles.subtitle}>Join the Fast Lane</p>
      <nav style={headerStyles.nav}>
        <Link to="/" style={headerStyles.navLink} activeStyle={headerStyles.navLinkHover}>Home</Link>
        <Link to="/about" style={headerStyles.navLink} activeStyle={headerStyles.navLinkHover}>About</Link>
        <Link to="/contact" style={headerStyles.navLink} activeStyle={headerStyles.navLinkHover}>Contact</Link>
        <Link to="/services" style={headerStyles.navLink} activeStyle={headerStyles.navLinkHover}>Services</Link>
      </nav>
    </header>
  );
};

export default Header;
