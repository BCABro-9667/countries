import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CountryDetail = ({ country }) => {
  const { theme } = useTheme();
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags
  } = country;

  return (
    <div className={`country-detail ${theme}`}>
      <div className="flag-container">
        <img src={flags.png} alt={`Flag of ${name.common}`} />
      </div>
      <div className="detail-info">
        <h2>{name.common}</h2>
        <div className="info-grid">
          <div>
            <p><strong>Native Name:</strong> {name.official}</p>
            <p><strong>Population:</strong> {population.toLocaleString()}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Sub Region:</strong> {subregion}</p>
            <p><strong>Capital:</strong> {capital?.[0] || 'N/A'}</p>
          </div>
          <div>
            <p><strong>Top Level Domain:</strong> {tld?.[0] || 'N/A'}</p>
            <p><strong>Currencies:</strong> {currencies ? Object.values(currencies).map(c => c.name).join(', ') : 'N/A'}</p>
            <p><strong>Languages:</strong> {languages ? Object.values(languages).join(', ') : 'N/A'}</p>
          </div>
        </div>
        {borders && borders.length > 0 && (
          <div className="border-countries">
            <strong>Border Countries:</strong>
            <div className="border-buttons">
              {borders.map(border => (
                <Link key={border} to={`/country/${border}`} className={`border-button ${theme}`}>
                  {border}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;