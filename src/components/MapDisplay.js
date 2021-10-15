import React from "react";
import Container from "react-bootstrap/Container";

class MapDisplay extends React.Component {
  render() {
    const URL = "https://maps.locationiq.com/v3/staticmap";
    const KEY = process.env.REACT_APP_LOCATION_API_KEY;
    const zoom = 15;
    const lat = this.props.apiData.lat;
    const lon = this.props.apiData.lon;

    const fullURL = `${URL}?key=${KEY}&center=${lat},${lon}&zoom=${zoom}`;

    return (
      <>
        <Container>
          {this.props.apiData.lat && <img className='map-image' alt='map loading' src={fullURL}></img>}
        </Container>
      </>
    );
  }
}

export default MapDisplay;
