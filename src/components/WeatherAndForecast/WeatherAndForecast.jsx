import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Forecast from '../Forecast/Forecast';
import './WeatherAndForecast.css';

function WeatherAndForecast({ weatherInfo, location }) {
  const [data, setData] = useState({});
  const [dateselected, setDateselected] = useState('');
  // eslint-disable-next-line no-use-before-define
  const date = dateBuilder(new Date());
  function dateBuilder(d) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    // eslint-disable-next-line no-shadow
    const date = [];

    // eslint-disable-next-line no-plusplus
    for (let count = 0; count < 8; count++) {
      if (d.getDay() + count < 7) date[count] = d.getDay() + count;
      else if (d.getDay() + count === 7) date[count] = 0;
      else if (d.getDay() + count === 8) date[count] = 1;
      else if (d.getDay() + count === 9) date[count] = 2;
      else if (d.getDay() + count === 10) date[count] = 3;
      else if (d.getDay() + count === 11) date[count] = 4;
      else if (d.getDay() + count === 12) date[count] = 5;
      // eslint-disable-next-line no-dupe-else-if
      else if (d.getDay() + count === 13) date[count] = 6;
    }

    return [
      days[date[0]],
      days[date[1]],
      days[date[2]],
      days[date[3]],
      days[date[4]],
      days[date[5]],
      days[date[6]],
    ];
  }

  return (
    <>
      <div className="WeatherAndForecast">
        <div className="WeatherAndForecast__container">
          <Forecast
            weatherInfo={weatherInfo.daily[0]}
            date={date[0]}
          />
          <Forecast
            weatherInfo={weatherInfo.daily[1]}
            date={date[1]}
          />

          <Forecast
            weatherInfo={weatherInfo.daily[2]}
            date={date[2]}
          />

          <Forecast
            weatherInfo={weatherInfo.daily[3]}
            date={date[3]}
          />

          <Forecast
            weatherInfo={weatherInfo.daily[4]}
            date={date[4]}
          />

          <Forecast
            weatherInfo={weatherInfo.daily[5]}
            date={date[5]}
          />

          <Forecast
            weatherInfo={weatherInfo.daily[6]}
            date={date[6]}
          />
        </div>
      </div>
    </>
  );
}
WeatherAndForecast.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weatherInfo: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};
export default WeatherAndForecast;
