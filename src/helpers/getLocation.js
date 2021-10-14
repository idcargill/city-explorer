import axios from "axios";
require("dotenv").config();

const getLocation = async (city) => {
  const URL = "https://us1.locationiq.com/v1/search.php";
  const KEY = process.env.REACT_APP_LOCATION_API_KEY;
  const FORMAT = "json";
  const fullSearchURL = `${URL}?key=${KEY}&q=${city}&format=${FORMAT}`;
  const apiData = await axios.get(fullSearchURL);
  return apiData;
};

export default getLocation;
