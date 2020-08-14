import axios from 'axios';

export const getCountries = () => async dispatch => {
  dispatch({
    type: 'LOADING_COUNTRIES',
  });
  const countries = await axios.get('https://restcountries.eu/rest/v2/all');
  console.log(countries);
};

export default getCountries;
