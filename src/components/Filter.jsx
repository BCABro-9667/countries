import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Filter = ({ onFilter }) => {
  const { theme } = useTheme();
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className={`filter-container ${theme}`}>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className={`filter-select ${theme}`}
      >
        {regions.map(region => (
          <option key={region} value={region}>
            {region === 'All' ? 'Filter by Region' : region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;