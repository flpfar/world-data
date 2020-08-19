import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  data: countriesReducer,
  filter: filterReducer,
});

export default rootReducer;
