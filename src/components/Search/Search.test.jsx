import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';
//  ************
// eslint-disable-next-line no-undef
describe('Search component', () => {
  // eslint-disable-next-line no-undef
  test('renders "Search" as a text', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Search />);
    const searchElement = screen.getByText('Search');
    // eslint-disable-next-line no-undef
    expect(searchElement).toBeInTheDocument();
  });
  //  ************

  // eslint-disable-next-line no-undef
  test('should render search component', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    render(<Search />);
    const buttonElement = screen.getByTestId('search');
    // eslint-disable-next-line no-undef
    expect(buttonElement).toBeInTheDocument();
  });
});
//* *********************
// eslint-disable-next-line no-undef
test('should the input has a place holder Search Location', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  render(<Search />);
  const placeHolder =
     screen.getByPlaceholderText(/Search Location/i);
  // eslint-disable-next-line no-undef
  expect(placeHolder).toBeInTheDocument();
});
//*

//*
