import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      {theme === 'light' ? (
        <span>🌙 Dark Mode</span>
      ) : (
        <span>☀️ Light Mode</span>
      )}
    </button>
  );
};

export default ThemeToggle;