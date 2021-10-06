import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      apiData: {},
    };
  }

  HandleExplore = async () => {
    const URL = "https://us1.locationiq.com/v1/search.php";
    const KEY = process.env.REACT_APP_LOCATION_API_KEY;
    const FORMAT = "json";
    const fullSearchURL = `${URL}?key=${KEY}&q=${this.state.city}&format=${FORMAT}`;
    // console.log(fullSearchURL);
    const apiData = await axios.get(fullSearchURL);
    console.log(apiData);
    this.setState({ apiData: apiData.data[0] });
  };

  CheckClear = (e) => {
    !e.target.value ? this.setState({ apiData: {} }) : console.log("");
  };

  render() {
    return (
      <>
        <Container className='bg-success mp-5 text-white'>
          <h1>City Search</h1>
          <input
            type='text'
            placeholder='Enter a city name...'
            onChange={(e) => this.setState({ city: e.target.value })}
            onKeyUp={this.CheckClear}
          ></input>
          <Button
            type='button'
            className='m-2'
            variant='warning'
            onClick={this.HandleExplore}
          >
            Explore!
          </Button>
          {this.state.apiData["display_name"] && (
            <>
              <Container className='mb-2 bg-dark text-white'>
                <h3>{this.state.apiData["display_name"]}</h3>
                <h4>Lat: {this.state.apiData.lat}</h4>
                <h4>Lat: {this.state.apiData.lon}</h4>
              </Container>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default InputBox;
