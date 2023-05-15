import { render, screen } from '@testing-library/react';
import { Loader } from '../components/Loader.js';

test('Check loader rendering', () => {
  render(<Loader />);
  const middleElement = screen.getByText(/middle/i);
  expect(middleElement).toBeInTheDocument();
});
