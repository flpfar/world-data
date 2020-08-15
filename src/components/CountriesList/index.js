import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import CountriesItem from '../CountriesItem';

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
    <div className="CountriesList">
      <h1>{selectedFilter === 'All' ? 'World' : selectedFilter }</h1>
      <p>
        Population:
        <NumberFormat
          value={totalPopulation(filteredCountries())}
          displayType="text"
          thousandSeparator
        />
      </p>
      {filteredCountries().map(country => (
        <Link to={`/${country.name}`} key={country.name}>
          <CountriesItem country={country} />
        </Link>
      ))}
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
