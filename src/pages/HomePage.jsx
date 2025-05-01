import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Search from '../components/Search';
import Filter from '../components/Filter';
import CountryCard from '../components/CountryCard';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (regionFilter && regionFilter !== 'All') {
      filtered = filtered.filter(country => country.region === regionFilter);
    }

    setFilteredCountries(filtered);
  }, [searchTerm, regionFilter, countries]);

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const handleFilter = region => {
    setRegionFilter(region);
  };

  if (loading) {
    return <div className={`loading ${theme}`}>Loading countries...</div>;
  }

  return (
    <div className={`home-page ${theme}`}>
      <Header />
      <main className="container">
        <div className="controls">
          <Search onSearch={handleSearch} />
          <Filter onFilter={handleFilter} />
        </div>
        <div className="countries-grid">
          {filteredCountries.length > 0 ? (
            filteredCountries.map(country => (
              <CountryCard key={country.cca3} country={country} />
            ))
          ) : (
            <div className="no-results">
              <p>No countries found matching your search criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;