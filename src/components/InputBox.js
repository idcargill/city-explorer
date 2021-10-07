import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class InputBox extends React.Component {
  render() {
    return (
      <>
        <Container className='bg-success mp-5 text-white search-box'>
          <h1>City Explorer</h1>
          <input
            type='text'
            placeholder='Enter a city name...'
            onChange={(e) => this.props.updateCity(e.target.value)}
          ></input>
          <Button
            type='button'
            className='m-2'
            variant='warning'
            onClick={this.props.HandleExplore}
          >
            Explore!
          </Button>
          {this.props.apiData["display_name"] && (
            <>
              <Container className='mb-2 text-display'>
                <h3>{this.props.apiData["display_name"]}</h3>
                <h4>Lat: {this.props.apiData.lat}</h4>
                <h4>Lat: {this.props.apiData.lon}</h4>
              </Container>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default InputBox;

// Clear input form data on delete/clear
// CheckClear = (e) => {
//   !e.target.value ? this.props.updateApiData({}) : this.props.updateApiData({});
// };
