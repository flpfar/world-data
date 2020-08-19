import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CountriesItem from '../../components/CountriesItem';

describe('CountriesItem', () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const country = {
    name: 'Brazil',
    population: 206135893,
    area: 8515767,
    region: 'Americas',
    flag: 'https://restcountries.eu/data/bra.svg',
  };

  beforeEach(() => {
    render(<BrowserRouter><CountriesItem country={country} /></BrowserRouter>);
  });

  afterAll(cleanup);

  test('has a country flag image', () => {
    expect(screen.getByAltText(/flag/i)).toBeInTheDocument();
  });

  test('shows the country population and area', () => {
    expect(screen.getByText('Population:')).toBeInTheDocument();
    expect(screen.getByText(numberWithCommas(country.population))).toBeInTheDocument();
    expect(screen.getByText('Area(km²):')).toBeInTheDocument();
    expect(screen.getByText(numberWithCommas(country.area))).toBeInTheDocument();
  });

  test('shows Area: Not available if no area', () => {
    cleanup();
    const newCountry = { ...country, area: null };
    render(<BrowserRouter><CountriesItem country={newCountry} /></BrowserRouter>);

    expect(screen.getByText('Not available')).toBeInTheDocument();
  });

  test('doesnt show the country region', () => {
    expect(screen.queryByText('Region:')).not.toBeInTheDocument();
    expect(screen.queryByText(country.region)).not.toBeInTheDocument();
  });
});
