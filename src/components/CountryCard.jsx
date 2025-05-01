import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CountryCard = ({ country }) => {
  const { theme } = useTheme();
  const { name, population, region, capital, flags } = country;

  return (
    <Link to={`/country/${name.common}`} className={`country-card ${theme}`}>
      <div className="flag-container">
        <img src={flags.png} alt={`Flag of ${name.common}`} />
      </div>
      <div className="country-info">
        <h2>{name.common}</h2>
        <p><strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital?.[0] || 'N/A'}</p>
      </div>
    </Link>
  );
};

export default CountryCard;