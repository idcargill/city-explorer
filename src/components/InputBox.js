import React from "react";
import Container from "react-bootstrap/Container";
import InputField from "./InputField";
import LocationDisplay from "../components/LocationDisplay";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class InputBox extends React.Component {
  render() {
    return (
      <>
        <Container className='mp-5 text-white search-box' fluid={"md"}>
          <Row>
            <h1>City Explorer</h1>
          </Row>
          <Row>
            <Col>
              <InputField
                onChange={(e) => this.props.updateCity(e.target.value)}
                updateCity={this.props.updateCity}
                HandleExplore={this.props.HandleExplore}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {this.props.apiData["display_name"] && (
                <>
                  <LocationDisplay apiData={this.props.apiData} />
                </>
              )}
            </Col>
          </Row>
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
