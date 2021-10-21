import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {
  render() {
    const forecastArr = this.props.weatherData.data.map((i, idx) => <WeatherDay id={idx + 100} day={i} />);
    const time = new Date(this.props.weatherData.timestamp);
    const month = time.getMonth();
    const day = time.getDay();
    const hour = time.getHours();
    const min = time.getMinutes();
    const lastUpdated = `Weather updated on ${month}/${day} at ${hour}:${min} `;
    return (
      <>
        <Container className='forecast-items bg-info p-3'>
          <h6>Weather Forecast</h6>
          <p>{lastUpdated}</p>
          <p>{this.props.timestamp}</p>
          <ListGroup variant='flush'>{forecastArr}</ListGroup>
        </Container>
      </>
    );
  }
}

export default Weather;
