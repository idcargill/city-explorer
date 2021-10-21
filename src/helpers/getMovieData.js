import axios from "axios";
require("dotenv").config();

const getMovieData = async (apiData, city) => {
  // const URL = "http://localhost:3001";
  const URL = process.env.REACT_APP_SERVER;
  const lat = +apiData.data[0].lat;
  const lon = +apiData.data[0].lon;
  const movieApi = `${URL}/movie?lat=${lat}&lon=${lon}&searchQuery=${city}`;
  const movieData = await axios.get(movieApi);
  return movieData.data;
};

export default getMovieData;
