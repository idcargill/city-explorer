import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorAlert from "./components/ErrorAlert";
import InputBox from "./components/InputBox";
import MapDisplay from "./components/MapDisplay";
import axios from "axios";
import Container from "react-bootstrap/Container";
import getWeatherData from "./helpers/getWeatherData";
import Weather from "./components/Weather";
import getMovieData from "./helpers/getMovieData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      apiData: {},
      weatherData: {},
      movies: [],
      error: "",
    };
  }

  updateApiData = (data) => {
    this.setState({ apiData: data });
  };

  updateCity = (newCity) => {
    this.setState({ city: newCity });
  };

  HandleExplore = async () => {
    const URL = "https://us1.locationiq.com/v1/search.php";
    const KEY = process.env.REACT_APP_LOCATION_API_KEY;
    const FORMAT = "json";
    const fullSearchURL = `${URL}?key=${KEY}&q=${this.state.city}&format=${FORMAT}`;
    try {
      const apiData = await axios.get(fullSearchURL);
      const weatherData = await getWeatherData(apiData, this.state.city);
      const movieData = await getMovieData(apiData, this.state.city);

      this.setState({
        apiData: apiData.data[0],
        weatherData: weatherData.data,
        movieData: movieData,
      });
      this.setState({ error: "" });
    } catch (e) {
      console.error(e.message);
      this.setState({ error: e });
    }
  };

  render() {
    console.log("app state", this.state);
    return (
      <Container className='text-center main-container'>
        {this.state.error && <ErrorAlert error={this.state.error} />}
        <InputBox
          updateApiData={this.updateApiData}
          updateCity={this.updateCity}
          HandleExplore={this.HandleExplore}
          apiData={this.state.apiData}
        />
        {this.state.weatherData[0] && <Weather weatherData={this.state.weatherData} />}
        {this.state.apiData.lat && <MapDisplay apiData={this.state.apiData} />}
      </Container>
    );
  }
}

export default App;
