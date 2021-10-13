import axios from "axios";

const getMovieData = async (apiData, city) => {
  const URL = "http://localhost:3001/movie";
  const lat = +apiData.data[0].lat;
  const lon = +apiData.data[0].lon;
  const movieApi = `${URL}?lat=${lat}&lon=${lon}&searchQuery=${city}`;
  const movieData = await axios.get(movieApi);
  return movieData;
};

export default getMovieData;
