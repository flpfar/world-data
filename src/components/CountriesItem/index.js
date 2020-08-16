import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import styles from './styles.module.css';

const CountriesItem = ({ country }) => {
  const {
    name, population, area, flag,
  } = country;
  return (
    <Link to={`/${name}`} className={styles.CountriesItem} title={name}>
      <img src={flag} alt={name} />
      <div className={styles.ItemContent}>
        <h4>{name}</h4>
        <p>
          <span>Population: </span>
          <NumberFormat value={population} displayType="text" thousandSeparator />
        </p>
        <p>
          <span>Area(km²): </span>
          { area ? <NumberFormat value={area} displayType="text" thousandSeparator /> : <span>Not available</span> }
        </p>
      </div>
    </Link>
  );
};

CountriesItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    population: PropTypes.number,
    area: PropTypes.number,
  }).isRequired,
};

export default CountriesItem;
