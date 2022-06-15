import React from 'react';
import PropTypes from 'prop-types';
import './Forecast.css';

function Forecast({ weatherInfo, date }) {
  return (
    <div className="container">
      <h1 className="Forecast__title">
        {[
          date[0],
          date[1],
          date[2],
          date[3],
          date[4],
          date[5],
          date[6],
        ]}
      </h1>

      <img
        className="Forecast__weather-icon"
        src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`}
        alt={weatherInfo.weather[0].main}
      />
      <div className="Forecast__temperature">
        <span className="temperature__max">
          {Math.round(weatherInfo.temp.max)}
          <sup className="temperature__symbol">°</sup>
        </span>
        <span className="temperature__min">
          {Math.round(weatherInfo.temp.min)}
          <sup className="temperature__symbol">°</sup>
        </span>
      </div>
    </div>
  );
}
Forecast.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherInfo: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
};
export default Forecast;
