import React from "react";
import Container from "react-bootstrap/Container";
import InputBox from "./InputBox";
import ErrorAlert from "./ErrorAlert";
import getLocation from "../helpers/getLocation";
import getWeatherData from "../helpers/getWeatherData";
import getMovieData from "../helpers/getMovieData";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      apiData: {},
      weatherData: [],
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
    try {
      const apiData = await getLocation(this.state.city);
      const weatherData = await getWeatherData(apiData, this.state.city);
      const movieData = await getMovieData(apiData, this.state.city);

      this.setState({
        apiData: apiData.data[0],
        weatherData: weatherData,
        movies: movieData,
      });
      this.setState({ error: "" });
    } catch (e) {
      console.error(e);
      this.setState({ error: e });
    }
  };

  render() {
    return (
      <>
        <Container className='text-center main-container'>
          {this.state.error && <ErrorAlert error={this.state.error} />}
          <InputBox
            updateApiData={this.updateApiData}
            updateCity={this.updateCity}
            HandleExplore={this.HandleExplore}
            apiData={this.state.apiData}
          />
        </Container>
      </>
    );
  }
}

export default Main;
