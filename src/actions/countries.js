import axios from 'axios';
import { LOADING_COUNTRIES, COUNTRIES_LOADED, COUNTRIES_ERROR } from '../constants/actions';

const getCountries = () => async dispatch => {
  try {
    dispatch({
      type: LOADING_COUNTRIES,
    });

    const response = await axios.get('https://restcountries.eu/rest/v2/all');

    dispatch({
      type: COUNTRIES_LOADED,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: COUNTRIES_ERROR,
      payload: error.message,
    });
  }
};

export default getCountries;
