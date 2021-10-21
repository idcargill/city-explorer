import axios from "axios";
require("dotenv").config();

const getWeatherData = async (apiData, city) => {
  // const URL = "http://localhost:3001";
  const URL = process.env.REACT_APP_SERVER;
  const lat = +apiData.data[0].lat;
  const lon = +apiData.data[0].lon;
  const fullUrl = `${URL}/weather?lat=${lat}&lon=${lon}&searchQuery=${city}`;
  const weatherData = await axios.get(fullUrl);
  return weatherData.data;
};

export default getWeatherData;
