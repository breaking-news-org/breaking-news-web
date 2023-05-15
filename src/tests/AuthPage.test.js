import { render, screen } from '@testing-library/react';
import { AuthPage } from '../pages/AuthPage.js';

test('renders learn react link', () => {
  render(<AuthPage />);
  const linkElement = screen.getByText(/Breaking News/i);
  expect(linkElement).toBeInTheDocument();
});
