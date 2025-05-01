import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CountryDetail from '../components/CountryDetail';
import { useTheme } from '../context/ThemeContext';


const DetailPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        const data = await response.json();
        
        if (data.status === 404) {
          setError('Country not found');
        } else {

          // border country 
          const countryData = data[0];
          if (countryData.borders) {
            const bordersResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(',')}`);
            const bordersData = await bordersResponse.json();
            countryData.borders = bordersData.map(b => b.name.common);
          }
          setCountry(countryData);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch country data');
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className={`loading ${theme}`}>Loading country details...</div>;
  }

  if (error) {
    return <div className={`error ${theme}`}>{error}</div>;
  }

  return (
    <div className={`detail-page ${theme}`}>
      <Header />
      <main className="container">
        <button onClick={handleBack} className={`back-button ${theme}`}>
          ← Back
        </button>
        {country && <CountryDetail country={country} />}
      </main>
    </div>
  );
};

export default DetailPage;