import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <ListGroup.Item className='forecast-box' action={true}>
          {this.props.day.time} : {this.props.day.forecast}
        </ListGroup.Item>
      </>
    );
  }
}

export default WeatherDay;
