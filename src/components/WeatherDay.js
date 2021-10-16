import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <ListGroup.Item className='forecast-box' key={this.props.day.idx} action={true} variant='info'>
          {this.props.day.date} : {this.props.day.description}
        </ListGroup.Item>
      </>
    );
  }
}

export default WeatherDay;
