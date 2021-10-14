import React from "react";
import InputBox from "./components/InputBox";
import MapDisplay from "./components/MapDisplay";
import Weather from "./components/Weather";
import getWeatherData from "./helpers/getWeatherData";
import getMovieData from "./helpers/getMovieData";
import getLocation from "./helpers/getLocation";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ErrorAlert from "./components/ErrorAlert";
import MovieDisplay from "./components/MovieDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
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
    console.log("app state", this.state);
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
        <Container>
          <Row>
            <Col size='sm' className='col-5' flex>
              <Container className='movies'>
                {this.state.movies && <MovieDisplay movies={this.state.movies} />}
              </Container>
            </Col>
            <Col className='col-5'>{this.state.apiData.lat && <MapDisplay apiData={this.state.apiData} />}</Col>
            <Col className='col-2' flex>
              {this.state.weatherData.length > 1 && <Weather weatherData={this.state.weatherData} />}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
