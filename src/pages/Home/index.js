import React from 'react';
import { useDispatch } from 'react-redux';
import getCountries from '../../actions/countries';

const Home = () => {
  const dispatch = useDispatch();

  function list() {
    dispatch(getCountries());
  }

  return (
    <div className="Home">
      <button type="button" onClick={list}>ClickME</button>
    </div>
  );
};

export default Home;
