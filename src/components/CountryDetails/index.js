import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const CountryDetails = ({ country }) => {
  const {
    name, population, region, subregion, flag, capital, area,
  } = country;

  return (
    <div className="CountryDetails">
      {name}
      <NumberFormat value={population} displayType="text" thousandSeparator />
      <NumberFormat value={area} displayType="text" thousandSeparator />
      {capital}
      {region}
      {subregion}
      <img src={flag} alt={name} />
    </div>
  );
};

CountryDetails.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.number,
    area: PropTypes.number,
    region: PropTypes.string,
    subregion: PropTypes.string,
    flag: PropTypes.string,
    capital: PropTypes.string,
  }).isRequired,
};

export default CountryDetails;
