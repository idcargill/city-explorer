import React from "react";
import Button from "react-bootstrap/Button";

class InputField extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default InputField;
