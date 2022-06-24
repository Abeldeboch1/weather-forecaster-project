import React from 'react';
import PropTypes from 'prop-types';
import './WeatherDetails.css';

function WeatherDetails({ data }) {
  // pass the data
  return (
    <div className="wrapper">
      {Object.keys(data).length !== 0 && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt={data.weather[0].main}
          />
          <div>
            {Math.floor(data.temp.day)}
            <sup>°C</sup>
          </div>
          <div> Humidity: {data.humidity}% </div>
          <div>
            Wind: {Math.round(data.wind_speed)}
            mph
          </div>
          <div>Pressure:{data.pressure}</div>ms
        </>
      )}
    </div>
  );
}

export default WeatherDetails;
