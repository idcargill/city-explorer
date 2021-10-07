import React from "react";
import Container from "react-bootstrap/Container";

class MapDisplay extends React.Component {
  render() {
    console.log("Map props:", this.props);

    const URL = "https://maps.locationiq.com/v3/staticmap";
    const KEY = process.env.REACT_APP_LOCATION_API_KEY;
    const zoom = 10;
    const lat = this.props.apiData.lat;
    const lon = this.props.apiData.lon;

    const fullURL = `${URL}?key=${KEY}&center=${lat},${lon}&zoom=${zoom}`;

    return (
      <>
        <Container>
          {this.props.apiData.lat && (
            <img
              alt='map loading'
              width='300px'
              height='400px'
              src={fullURL}
            ></img>
          )}
        </Container>
      </>
    );
  }
}

export default MapDisplay;
