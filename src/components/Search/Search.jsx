/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState('');

  const handleInputChange = (event) => {
    setCurrentCity(event.target.value);
  };
  const handleButtonClick = () => {
    if (currentCity.trim() === '');
    // return;
    searchCity(currentCity);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleButtonClick();
  };

  return (
    <div className="Search">
      {/*  //{eslint-disable-next-line jsx-a11y/label-has-associated-control} */}
      <label className="Search__label">
        <input
          type="text"
          className="Search__input"
          value={currentCity}
          placeholder="Search Location"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button
        type="button"
        className="Search__button"
        onClick={handleButtonClick}
        data-testid="search"
      >
        Search
      </button>
    </div>
  );
}
Search.propTypes = {
  searchCity: PropTypes.func.isRequired,
};
export default Search;
