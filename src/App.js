import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputBox from "./components/InputBox";
import MapDisplay from "./components/MapDisplay";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      apiData: {},
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
    // console.log(fullSearchURL);
    const apiData = await axios.get(fullSearchURL);
    console.log(apiData);
    this.setState({ apiData: apiData.data[0] });
  };

  // UpdateMap = async () => {
  //   const URL = "https://maps.locationiq.com/v3/staticmap";
  //   const KEY = process.env.REACT_APP_LOCATION_API_KEY;
  //   const zoom = 10;
  //   const lat = this.state.apiData.lat;
  //   const lon = this.state.apiData.lon;

  //   const fullURL = `${URL}?key=${KEY}&center=${lat},${lon}&zoom=${zoom}`;
  //   const mapData = await axios.get(fullURL);
  //   console.log(mapData);
  //   this.setState({ mapData: mapData });
  // };

  render() {
    console.log("app state", this.state);
    return (
      <div className='container text-center p-4 m-4'>
        <InputBox
          updateApiData={this.updateApiData}
          updateCity={this.updateCity}
          HandleExplore={this.HandleExplore}
          apiData={this.state.apiData}
        />

        <MapDisplay apiData={this.state.apiData} />
      </div>
    );
  }
}

export default App;
