import { SET_CONTINENT_FILTER } from '../constants/actions';

const setContinentFilter = filter => (
  {
    type: SET_CONTINENT_FILTER,
    payload: { filter },
  }
);

export default setContinentFilter;
