import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <Link to="/" className="logo">
          <h1>Where in the world? 💝</h1>
        </Link>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
};

export default Header;