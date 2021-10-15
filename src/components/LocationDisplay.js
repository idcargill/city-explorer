import React from "react";
import Container from "react-bootstrap/Container";

class LocationDisplay extends React.Component {
  render() {
    return (
      <>
        <Container className='mb-2 text-display'>
          <p>{this.props.apiData["display_name"]}</p>
          <p>Lat: {this.props.apiData.lat}</p>
          <p>Lat: {this.props.apiData.lon}</p>
        </Container>
      </>
    );
  }
}

export default LocationDisplay;
