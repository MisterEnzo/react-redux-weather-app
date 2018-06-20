import axios from 'axios';

const API_KEY = '75cebc1b66ad69d8e6bc9c715339b666';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// We are creating an FETCH_WEATHER constant so that there is only
// once source for its value. This minimizes the risk of someone breaking the
// code when we have many places where 'FETCH_WEATHER' string is used.

export function fetchWeather = () => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
