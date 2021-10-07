import React from "react";
import Alert from "react-bootstrap/Alert";

class ErrorAlert extends React.Component {
  render() {
    return (
      <>
        <Alert variant='danger'>
          <Alert.Heading>
            Data Request Failure:{"\n"}
            {this.props.error.message}
          </Alert.Heading>
        </Alert>
      </>
    );
  }
}

export default ErrorAlert;
