import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import WeatherAndForecast from './components/WeatherAndForecast/WeatherAndForecast';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import NotFoundError from './components/NotFoundError/NotFoundError';

import getAddressOfCoordinates from './api/reverseGeocoding';
import getCoordinatesOfAddress from './api/forwardGeocoding';
import getWeatherAndForecast from './api/weatherAndForecast';

import './Home.css';
// import WeatherDetail from './components/WeatherDetails/WeatherDetails';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function Home() {
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
            city: res.data.results[0].components.city_district,
            town: res.data.results[0].components.town,
            state: res.data.results[0].components.state_code,
            country: res.data.results[0].components.country_code,
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
          (res.data.results[0].components.city === undefined &&
            res.data.results[0].components.town === undefined)
        ) {
          showWarning();
          return;
        }

        setCoordinates(res.data.results[0].geometry);
        setLocationInfo({
          city: res.data.results[0].components.city,
          town: res.data.results[0].components.town,
          state: res.data.results[0].components.state_code,
          country: res.data.results[0].components.country_code,
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
        console.log(res.data);
        setContentState('weatherAndForecast');
        console.log(weatherAndForecastInfo.daily[0]);
      })
      // error
      .catch(() => showWarning());
  }, [coordinates]);

  const Main = {
    blank: () => null,
    // eslint-disable-next-line react/no-unstable-nested-components
    loading: () => <Loader />,
    // eslint-disable-next-line react/no-unstable-nested-components
    warning: () => <NotFoundError />,
    // eslint-disable-next-line react/no-unstable-nested-components
    weatherAndForecast: () => (
      <WeatherAndForecast
        weatherInfo={weatherAndForecastInfo}
        location={locationInfo}
      />
    ),
  };

  return (
    <div className="App">
      <div className="App__container">
        <Header searchCity={searchCity} />
        {/* weatherAndForecastInfo.daily.length && */}
        {Main[contentState]()}
        <Footer />
      </div>
    </div>
  );
}
export default Home;
