import React from 'react';
import PropTypes from 'prop-types';

const CountriesItem = ({ country }) => {
  const { name, population } = country;
  return (
    <div className="CountryItem">
      {name}
      {population}
    </div>
  );
};

CountriesItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.number,
  }).isRequired,
};

export default CountriesItem;
