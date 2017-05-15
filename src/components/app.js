import React, { Component } from 'react';
import SimpleMapExample from '../containers/google_map';
import SelectBar from '../containers/select_bar';



export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {lat:0.0,lon:0.0};

    navigator.geolocation.getCurrentPosition((success) =>{
      this.setState({lat:success.coords.latitude,lon:success.coords.longitude});
      // console.log(this.state);
    }, (error) =>{
      console.log("Your browser doesn't support geolocation.",error);
    });


  }


  render() {
    return (
      <div>
        <div>lat={this.state.lat}</div>
        <div>lng={this.state.lon}</div>
        <div>
          <SelectBar lat={this.state.lat} lng={this.state.lon} />
        </div>
        <div className="map">
          <SimpleMapExample lat={this.state.lat} lng={this.state.lon} />
        </div>
        END
      </div>
    );
  }
}
