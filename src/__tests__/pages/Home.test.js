import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen, cleanup, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/Home';
import setContinentFilter from '../../actions/filter';

const mockStore = configureStore([]);

const initialState = {
  data: {
    countries: [{
      name: 'Brazil',
      population: 206135893,
      area: 8515767,
      region: 'Americas',
      flag: 'https://restcountries.eu/data/bra.svg',
    },
    {
      name: 'Argentina',
      population: 43590400,
      area: 2780400,
      region: 'Americas',
      flag: 'https://restcountries.eu/data/arg.svg',
    },
    {
      name: 'Japan',
      population: 126960000,
      area: 377930,
      region: 'Asia',
      flag: 'https://restcountries.eu/data/jpn.svg',
    }],
    loading: false,
  },
  filter: 'All',
};

describe('Page Home', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  afterAll(cleanup);

  test('loads all countries from store', () => {
    render(
      <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('Brazil')).toBeInTheDocument();
    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.getByText('Japan')).toBeInTheDocument();
    expect(screen.getByTestId('TotalFilteredCountries')).toHaveTextContent(3);
  });

  test('loads only countries from selected filter', () => {
    store = mockStore({ ...initialState, filter: 'Americas' });

    render(
      <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('Brazil')).toBeInTheDocument();
    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.queryByText('Japan')).not.toBeInTheDocument();
    expect(screen.getByTestId('TotalFilteredCountries')).toHaveTextContent(2);
  });

  test('dispatches setContinentFilter action when different filter is selected', async () => {
    render(
      <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>,
    );

    const selectElement = screen.getByLabelText(/Region/i);
    act(() => {
      userEvent.selectOptions(selectElement, 'Americas');
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      setContinentFilter('Americas'),
    );
  });
});
