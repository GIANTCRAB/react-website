import { render, screen } from '@testing-library/react';
import BookListing from './BookListing';

test('renders Currently Reading h3', () => {
  render(<BookListing />);
  const headerThreeElement = screen.getByText(/Currently Reading/i);
  expect(headerThreeElement).toBeInTheDocument();
});
