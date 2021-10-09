import axios from "axios";

const getWeatherData = async (apiData, city) => {
  const URL = "http://localhost:3001/weather";
  const lat = +apiData.data[0].lat;
  const lon = +apiData.data[0].lon;
  const fullUrl = `${URL}?lat=${lat}&lon=${lon}&searchQuery=${city}`;
  const weatherData = await axios.get(fullUrl);
  return weatherData;
};

export default getWeatherData;
