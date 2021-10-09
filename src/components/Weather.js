import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

class Weather extends React.Component {
  render() {
    const forecastArr = this.props.weatherData.map((i, idx) => {
      return (
        <>
          <ListGroup.Item className='forecast-box' key={idx} action={true} variant='info'>
            {i.date} : {i.description}
          </ListGroup.Item>
        </>
      );
    });

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
