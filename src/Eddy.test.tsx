import React from 'react';
import { render, screen } from '@testing-library/react';
import Eddy from './Eddy';

test('renders learn react link', () => {
  render(<Eddy />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
