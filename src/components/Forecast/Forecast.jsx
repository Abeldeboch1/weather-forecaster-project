import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Forecast.css';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

function Forecast({ weatherInfo, date }) {
  const [dateSelected, setDateSelected] = useState('');
  const [data, setData] = useState({});
  // set data when user clicks on day card
  const selectDay = (id, currentData) => {
    setDateSelected(id);
    setData(currentData);
    console.log(currentData);
  };
  //* this is an empty onkeypress function for container onKeyPress
  const doNothing = () => {};

  return (
    <div className="out">
      <div>
        <div
          className="container"
          onClick={() => selectDay(weatherInfo.dt, weatherInfo)}
          onKeyPress={doNothing()}
        >
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

      </div>
      <div>

        <WeatherDetails data={data} />

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
