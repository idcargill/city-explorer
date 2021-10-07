import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorAlert from "./components/ErrorAlert";
import InputBox from "./components/InputBox";
import MapDisplay from "./components/MapDisplay";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      apiData: {},
      error: "",
    };
  }

  updateApiData = (data) => {
    this.setState({ apiData: data });
  };

  updateCity = (newCity) => {
    this.setState({ city: newCity });
  };

  HandleExplore = async () => {
    const URL = "https://us1.locationiq.com/v1/search.php";
    const KEY = process.env.REACT_APP_LOCATION_API_KEY;
    const FORMAT = "json";
    const fullSearchURL = `${URL}?key=${KEY}&q=${this.state.city}&format=${FORMAT}`;
    try {
      const apiData = await axios.get(fullSearchURL);
      if (apiData.status !== 200) {
        throw new Error(apiData);
      }
      console.log("api data: ", apiData);
      this.setState({ apiData: apiData.data[0] });
      this.setState({ error: "" });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e });
    }
  };

  render() {
    console.log("app state", this.state);
    return (
      <div className='container text-center p-4 m-4'>
        {this.state.error && <ErrorAlert error={this.state.error} />}
        <InputBox
          updateApiData={this.updateApiData}
          updateCity={this.updateCity}
          HandleExplore={this.HandleExplore}
          apiData={this.state.apiData}
        />
        {this.state.apiData.lat && <MapDisplay apiData={this.state.apiData} />}
      </div>
    );
  }
}

export default App;
