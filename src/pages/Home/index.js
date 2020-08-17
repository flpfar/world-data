import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCountries from '../../actions/countries';
import setContinentFilter from '../../actions/filter';
import CountriesList from '../../components/CountriesList';
import Navbar from '../../components/Navbar';
import styles from './styles.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.data);
  const selectedFilter = useSelector(state => state.filter);
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setContinents(['All', ...new Set(state.countries.map(item => item.region))]);
  }, [state]);

  function handleSelectedFilter(e) {
    dispatch(setContinentFilter(e.target.value));
  }

  return (
    <div className={styles.Home}>
      <Navbar />
      <div className={styles.FiltersContainer}>
        <span>Region:</span>
        <select value={selectedFilter} onChange={handleSelectedFilter}>
          {continents.map(continent => (
            <option value={continent} key={continent}>
              {continent === '' ? 'No continent' : continent}
            </option>
          ))}
        </select>
      </div>
      {state.loading
        ? <span className={styles.Loading}>Loading...</span>
        : <CountriesList countries={state.countries} selectedFilter={selectedFilter} />}
    </div>
  );
};

export default Home;
