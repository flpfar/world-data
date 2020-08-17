import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import CountriesItem from '../CountriesItem';
import styles from './styles.module.css';

const CountriesList = ({ countries, selectedFilter }) => {
  function totalPopulation(countries) {
    return countries.reduce((total, country) => total + country.population, 0);
  }

  function filteredCountries() {
    return (
      selectedFilter === 'All'
        ? countries
        : countries.filter(country => country.region === selectedFilter)
    );
  }

  return (
    <div className={styles.CountriesList}>
      <header>
        <h1>{selectedFilter === 'All' ? 'World' : selectedFilter }</h1>
        <p>
          <span>Total population: </span>
          <strong>
            <NumberFormat
              value={totalPopulation(filteredCountries())}
              displayType="text"
              thousandSeparator
            />
          </strong>
        </p>
      </header>
      <div className={styles.ListContainer}>
        {filteredCountries().map(country => (
          <CountriesItem country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      population: PropTypes.number,
      region: PropTypes.string,
    }),
  ).isRequired,
  selectedFilter: PropTypes.string.isRequired,
};

export default CountriesList;
