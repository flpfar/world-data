import { SET_CONTINENT_FILTER } from '../constants/actions';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CONTINENT_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default filterReducer;
