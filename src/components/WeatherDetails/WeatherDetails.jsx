import React, { useState, useEffect } from 'react';

import getAddressOfCoordinates from '../../api/reverseGeocoding';
import getCoordinatesOfAddress from '../../api/forwardGeocoding';
import getWeatherAndForecast from '../../api/weatherAndForecast';

function WeatherDetails({ weatherInfo }) {
  const [address, setAddress] = useState(' ');
  const [coordinates, setCoordinates] = useState({});
  const [weatherAndForecastInfo, setWeatherAndForecastInfo] =
    useState({});
  const [locationInfo, setLocationInfo] = useState({});
  const [contentState, setContentState] = useState('blank');

  const searchCity = (target) => {
    setAddress(target);
  };

  const showWarning = () => {
    setContentState('warning');
    setTimeout(() => setContentState('blank'), 3000);
  };

  useEffect(() => {
    const makeRequest = (position) => {
      setContentState('loading');
      getAddressOfCoordinates(
        position.coords.latitude,
        position.coords.longitude
      )
        .then((res) => {
          setLocationInfo({
            city: res.data.results.components.city_district,
            town: res.data.results.components.town,
            state: res.data.results.components.state_code,
            country: res.data.results.components.country_code,
          });
        })
        .then(() =>
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }))
        // error
        .catch((error) => showWarning());
    };

    const catchError = (err) => {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      alert(`ERROR(${err.code}): ${err.message}`);
    };

    // eslint-disable-next-line no-undef
    if (navigator.geolocation) {
      // eslint-disable-next-line no-undef
      navigator.geolocation.getCurrentPosition(
        makeRequest,
        // eslint-disable-next-line no-undef
        catchError
      );
    } else {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (address === ' ') return;

    setContentState('loading');
    getCoordinatesOfAddress(address)
      .then((res) => {
        if (
          res.data.results.length === 0 ||
          (res.data.results.components.city === undefined &&
            res.data.results.components.town === undefined)
        ) {
          showWarning();
          return;
        }

        setCoordinates(res.data.results.geometry);
        setLocationInfo({
          city: res.data.results.components.city,
          town: res.data.results.components.town,
          state: res.data.results.components.state_code,
          country: res.data.results.components.country_code,
        });
      })
      // error
      .catch((error) => showWarning());
  }, [address]);

  useEffect(() => {
    if (Object.keys(coordinates).length === 0) return;

    getWeatherAndForecast(coordinates)
      .then((res) => {
        setWeatherAndForecastInfo(res.data);
        setContentState('weatherAndForecast');
      })
      // error
      .catch(() => showWarning());
  }, [coordinates]);
  useEffect(() => {
    if (Object.keys(weatherInfo).length !== 0) {
      console.log(weatherInfo);
    }
  });
  return (
    <>
      <img
        className="Forecast__weather-icon"
        src={
          'https://openweathermap.org/img/wn/' +
          weatherInfo.weather[0].icon +
          '.png'
        }
        alt={weatherInfo.weather[0].main}
      />
      <div className="list__temperature">
        {Math.round(weatherInfo.temp)}
        <sup className="list__temperature-symbol">°C</sup>
      </div>
      <div> Humidity: {weatherInfo.humidity}% </div>
      <div>
        Wind: {Math.round(weatherInfo.wind_speed * 3.6)}
        kph
      </div>
      <div>Pressure:{weatherInfo.pressure}</div>
    </>
  );
}

export default WeatherDetails;
