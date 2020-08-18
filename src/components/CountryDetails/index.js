import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import styles from './styles.module.css';

const CountryDetails = ({ country }) => {
  const {
    name, population, region, subregion, flag, capital, area,
  } = country;

  return (
    <div className={styles.CountryDetails}>
      <h1>{name}</h1>
      <div className={styles.DetailsContent}>
        <img src={flag} alt={`${name} Flag`} />
        <ul>
          <li>
            <strong>Population:</strong>
            { population
              ? <NumberFormat value={population} displayType="text" thousandSeparator />
              : <span>N/A</span>}
          </li>
          <li>
            <strong>Area(km²):</strong>
            { area
              ? <NumberFormat value={area} displayType="text" thousandSeparator />
              : <span>N/A</span>}
          </li>
          <li>
            { (population && area)
              ? (
                <>
                  <strong>Population Density(pop/km²):</strong>
                  <NumberFormat value={population / area} decimalScale={2} displayType="text" thousandSeparator />
                </>
              )
              : null}
          </li>
          <li>
            <strong>Capital:</strong>
            <span>{capital || 'N/A'}</span>
          </li>
          <li>
            <strong>Region:</strong>
            <span>{region || 'N/A'}</span>
          </li>
          <li>
            <strong>Subregion:</strong>
            <span>{subregion || 'N/A'}</span>
          </li>
        </ul>
      </div>
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
