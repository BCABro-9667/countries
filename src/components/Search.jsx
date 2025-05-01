import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Search = ({ onSearch }) => {
  const { theme } = useTheme();

  return (
    <div className={`search-container ${theme}`}>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => onSearch(e.target.value)}
        className={`search-input ${theme}`}
      />
    </div>
  );
};

export default Search;