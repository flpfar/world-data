import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getCountries from '../../actions/countries';
import setContinentFilter from '../../actions/filter';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.data);
  const selectedFilter = useSelector(state => state.filter);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setContinents([...new Set(state.countries.map(item => item.region))]);
  }, [state]);

  useEffect(() => {
    setFilteredCountries(
      selectedFilter === 'All'
        ? state.countries
        : state.countries.filter(country => country.region === selectedFilter),
    );
  }, [selectedFilter, state.countries]);

  function handleSelectedFilter(e) {
    dispatch(setContinentFilter(e.target.value));
  }

  return (
    <div className="Home">
      {state.loading ? 'Loading' : ''}
      <select value={selectedFilter} onChange={handleSelectedFilter}>
        <option value="All">All</option>
        {continents.map(continent => (
          <option value={continent} key={continent}>
            {continent === '' ? 'No continent' : continent}
          </option>
        ))}
      </select>
      {filteredCountries.map(country => (
        <div key={country.name}>
          <Link to={`/${country.name}`}>{country.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
