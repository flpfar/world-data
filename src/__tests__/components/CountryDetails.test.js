import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import CountryDetails from '../../components/CountryDetails';

describe('CountryDetails', () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const country = {
    name: 'Brazil',
    population: 206135893,
    area: 8515767,
    region: 'Americas',
    subregion: 'South America',
    flag: 'https://restcountries.eu/data/bra.svg',
    capital: 'Brasília',
  };

  beforeEach(() => {
    render(<BrowserRouter><CountryDetails country={country} /></BrowserRouter>);
  });

  afterAll(cleanup);

  test('has a country flag image', () => {
    expect(screen.getByAltText(/flag/i)).toBeInTheDocument();
  });

  test('has the country population', () => {
    expect(screen.getByText('Population:')).toBeInTheDocument();
    expect(screen.getByText(numberWithCommas(country.population))).toBeInTheDocument();
  });

  test('has the country area', () => {
    expect(screen.getByText('Area(km²):')).toBeInTheDocument();
    expect(screen.getByText(numberWithCommas(country.area))).toBeInTheDocument();
  });

  test('has region, subregion and capital of the country', () => {
    expect(screen.getByText('Region:')).toBeInTheDocument();
    expect(screen.getByText(country.region)).toBeInTheDocument();
    expect(screen.getByText('Subregion:')).toBeInTheDocument();
    expect(screen.getByText(country.subregion)).toBeInTheDocument();
    expect(screen.getByText('Capital:')).toBeInTheDocument();
    expect(screen.getByText(country.capital)).toBeInTheDocument();
  });

  test('has the population density calculated with population and area', () => {
    const populationDensity = (Math.round((country.population / country.area) * 100) / 100)
      .toString();

    expect(screen.getByText('Population Density(pop/km²):')).toBeInTheDocument();
    expect(screen.getByText(populationDensity)).toBeInTheDocument();
  });

  test('doesnt show population density if population or area are not available', () => {
    cleanup();
    const newCountry = {
      name: 'Brazil',
      area: 8515767,
      region: 'Americas',
      subregion: 'South America',
      flag: 'https://restcountries.eu/data/bra.svg',
      capital: 'Brasília',
    };
    render(<BrowserRouter><CountryDetails country={newCountry} /></BrowserRouter>);

    expect(screen.getByText('N/A')).toBeInTheDocument();
    expect(screen.queryByText('Population Density(pop/km²):')).not.toBeInTheDocument();
  });
});
