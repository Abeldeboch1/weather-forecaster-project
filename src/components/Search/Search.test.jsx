// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Search from "./Search";

// test("renders correctly", () => {
//     const { requestByTestId, requestByPlaceholderText } = render(<Search />)

//     expect(requestByTestId("search-button")).toBeTruthy();
//     expect(requestByPlaceholderText('Search Location')).toBeTruthy();
// })

// describe("Input value", () => {
//     test("updates on change", () => {
//         const { requestByPlaceholderText } = render(<Search />);

//         const searchInput = requestByPlaceholderText('Search Location');

//         fireEvent.change(searchInput, { target: {value: "currentCity" }})

//         expect (searchInput.value).toBe("currentCity")

//     })
// })

// describe("search button", () => {
//     describe("with empty query", () => {
//         test("does not trigger requestSearch function", () => {

//             const requestSearch = jest.fn();
//             const { queryByTestId } = render(<Search requestSearch={requestSearch} />)
//             fireEvent.click(queryByTestId('search-button'))
//             expect(requestSearch).not.toHaveBeenCalled()
//     })
//     })

//     describe("with data inside query", () => {
//         test("triggers requestSearch function", () => {
//             const requestSearch = jest.fn();

//             const searchInput = queryByPlaceholderText('Search Location');
//             fireEvent.change(searchInput, { target: { value: "test" } })
//             fireEvent.click(queryByTestId('search-button'))
//             expect(requestSearch).toHaveBeenCalled();
//         })
//     })
// })

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
/// / import userEvent from '@testing-library/user-event';
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
// describe('components/button', () => {
//   test('should call handleButtonClick when clicked', () => {
//     const handleButtonClick = jest.fn();
//    //***** */
//     fireEvent.click(screen.getByTestId('search-button'));
//     expect(handleButtonClick).toHaveBeenCalledTimes(1);
//   });
// });
// ***********************
// describe("search button", () => {
//   describe("with empty query", () => {
//     test("does not trigger handleButtonClick function", () => {

//       const handleButtonClick = jest.fn();
//       // const {queryByTestId}  = render(<Search handleButtonClick={handleButtonClick} />)
//       fireEvent.click(screen.queryByTestId('search-button'))
//       expect(handleButtonClick).not.toHaveBeenCalled()
//     })
//   })
//     })
// ************************
//         describe("with data inside query", () => {
//        test("triggers handleButtonClick function", () => {
//             const handleButtonClick= jest.fn();

//           const searchInput = queryByPlaceholderText('Search Location');
//             fireEvent.change(searchInput, { target: { value: "test" } })
//              fireEvent.click(queryByTestId('search-button'))
//             expect(handleButtonClick).toHaveBeenCalled();

//     })
//  });
