import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getCountries from './actions/countries';
import Routes from './routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <Routes />
  );
}

export default App;
