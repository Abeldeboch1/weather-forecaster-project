import React from 'react';
// import { useParams, useNavigate } from 'react-router';
import PropTypes from 'prop-types';

import './Weather.css';

function Weather({ weatherInfo, location, date }) {
//   const onchange = (e) {
// e.target.value
//   };
  // const { id } = useParams();
  // const navigate = useNavigate();
  return (
    <div className="Weather">
      <div className="Weather__info">
        <img
          className="Weather__icon"
          src={`https://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}.png`}
          alt={weatherInfo.current.weather[0].main}
        />
        <ul className="Weather__list">
          <li className="list__temperature">
            {Math.round(weatherInfo.current.temp)}
            <sup className="list__temperature-symbol">°C</sup>
          </li>
          <li> Humidity: {weatherInfo.current.humidity}% </li>
          <li>
            {' '}
            Wind: {Math.round(weatherInfo.current.wind_speed * 3.6)}
            kph{' '}
          </li>
          <li>Pressure:{weatherInfo.current.pressure}</li>
        </ul>
      </div>
      <div className="Weather__other-info">
        <h2 className="other-info__city">
          {location.city || location.town},{' '}
          {location.state || location.country.toUpperCase()}
        </h2>
        <h3 className="other-info__clouds">{date}</h3>
        <h3 className="other-info__clouds">
          {weatherInfo.current.weather[0].description}
        </h3>
      </div>
    </div>
  );
}
Weather.propTypes = {
  date: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  weatherInfo: PropTypes.object.isRequired,
};
export default Weather;
