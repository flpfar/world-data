import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  test('has a logo image', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);

    expect(screen.getByAltText('World Data Logo')).toBeInTheDocument();
  });

  test('has a back link if back props is true', () => {
    render(<BrowserRouter><Navbar back /></BrowserRouter>);

    expect(screen.getByText(/back/i)).toBeInTheDocument();
  });

  test('has no back link if it has no props', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);

    expect(screen.queryByText(/back/i)).not.toBeInTheDocument();
  });
});
