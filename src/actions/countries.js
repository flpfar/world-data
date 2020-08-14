import axios from 'axios';
import { LOADING_COUNTRIES, COUNTRIES_LOADED } from '../constants/actions';

const getCountries = () => async dispatch => {
  dispatch({
    type: LOADING_COUNTRIES,
  });

  const response = await axios.get('https://restcountries.eu/rest/v2/all');

  dispatch({
    type: COUNTRIES_LOADED,
    payload: response.data,
  });
};

export default getCountries;
