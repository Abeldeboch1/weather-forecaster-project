import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search/Search';
import './Header.css';

function Header({ searchCity }) {
  return (
    <header className="Header">
      <h1 className="Header__title">
        Weather <span className="blue">Forecast</span>
      </h1>
      <Search searchCity={searchCity} />
    </header>
  );
}
Header.propTypes = {
  searchCity: PropTypes.func.isRequired,
};
export default Header;
