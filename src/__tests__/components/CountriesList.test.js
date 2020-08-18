import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CountriesList from '../../components/CountriesList';

describe('CountriesList', () => {
  beforeEach(() => {
    const countries = [{
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
    }];
    render(<BrowserRouter><CountriesList countries={countries} selectedFilter="Americas" /></BrowserRouter>);
  });

  afterAll(cleanup);

  test('shows the selectedFilter', () => {
    expect(screen.getByText('Americas')).toBeInTheDocument();
  });

  test('shows the countries in the selectedFilter region', () => {
    expect(screen.getByText('Brazil')).toBeInTheDocument();
    expect(screen.getByText('Argentina')).toBeInTheDocument();
  });

  test('shows the total number of countries in the selected region', () => {
    const totalFilteredCountriesElement = screen.getByTestId('TotalFilteredCountries');

    expect(screen.getByText('Total countries:')).toBeInTheDocument();
    expect(totalFilteredCountriesElement).toHaveTextContent(2);
  });

  test('doesnt show countries that are not in the selectedFilter', () => {
    expect(screen.queryByText('Japan')).not.toBeInTheDocument();
  });
});
