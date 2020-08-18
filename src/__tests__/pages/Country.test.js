import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render, screen, waitForElement, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Country from '../../pages/Country';

jest.mock('axios');
axios.get.mockResolvedValueOnce({
  data: [{
    name: 'Brazil',
    population: 206135893,
    area: 8515767,
    region: 'Americas',
    subregion: 'South America',
    flag: 'https://restcountries.eu/data/bra.svg',
    capital: 'Brasília',
  }],
});

describe('Page Country', () => {
  afterAll(cleanup);

  test('retrieves data from API according to route params', async () => {
    render(
      <MemoryRouter initialEntries={['/Brazil']}>
        <Country />
      </MemoryRouter>,
    );

    const countryNameElement = await waitForElement(() => screen.getByText('Brazil'));
    const countryCapitalElement = screen.getByText('Brasília');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(countryNameElement).toBeInTheDocument();
    expect(countryCapitalElement).toBeInTheDocument();
  });
});
