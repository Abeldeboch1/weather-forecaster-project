import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   // Link,
// } from 'react-router-dom';
// import WeatherDetails from './components/WeatherDetails/WeatherDetails';
// import Weather from './components/Weather/Weather';

import Home from './Home';

function App() {
  return (
    <>
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      <Home />

      {/* <Route path="Weather/:id" element={<Weather />} />  */}
      {/* <WeatherDetails /> */}
      {/* </Routes> */}
    </>
  );
}
export default App;
