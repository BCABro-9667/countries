import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}  BCABro. All rights reserved.</p>
          <p>|</p>
          <p>Made with ❤️ by Avdhesh Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;