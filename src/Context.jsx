import { createContext } from 'react';

const Context = createContext({
  weatherInfo: {},
  setWeatherInfo: () => {},
});
export default Context;
