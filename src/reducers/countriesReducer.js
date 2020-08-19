import { LOADING_COUNTRIES, COUNTRIES_LOADED, COUNTRIES_ERROR } from '../constants/actions';

const initialState = {
  countries: [],
  loading: false,
  error: '',
};

const countriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING_COUNTRIES:
      return { ...state, loading: true };
    case COUNTRIES_LOADED:
      return { ...state, countries: payload, loading: false };
    case COUNTRIES_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default countriesReducer;
