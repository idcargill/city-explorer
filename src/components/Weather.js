import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    const forecastArr = this.props.weatherData.map((i, idx) => <WeatherDay day={i} />);

    return (
      <>
        <Container className='forecast-items bg-info p-3'>
          <h6>Weather Forecast</h6>
          <ListGroup variant='flush'>{forecastArr}</ListGroup>
        </Container>
      </>
    );
  }
}

export default Weather;
