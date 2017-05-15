import  React,{Component} from "react";
import {connect} from 'react-redux';
import _ from 'lodash';
import {withGoogleMap,GoogleMap} from "react-google-maps";
import TaxiMarker from '../components/marker';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.lat, lng: props.lng}}
  >
    {props.markers}
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class SimpleMapExample extends Component {

  renderMarkers(){
    return _.map(this.props.taxiInfo,(driver) => {
      // console.log("DriverMapping:",driver);
      return(
        <TaxiMarker
          key = {driver.DriverId}
          lat = {driver.latitude}
          lng = {driver.longitude}
        />
      );
    });
  }

  // renderMarkers(){
  //   return (
  //       <TaxiMarker
  //         lat = {25.0429295}
  //         lng = {121.53574649999999}
  //       />
  //   );
  // }

  render() {
    console.log("TaxiInfo:",this.props.taxiInfo);
    if(!this.props.lat)
      return<div>Loading..</div>
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
           <div style={{height: '100%', width: '100%'}} />
        }
        mapElement={
           <div style={{height: '100%', width: '100%'}} />
        }
        lat = {this.props.lat}
        lng = {this.props.lng}
        markers = {this.renderMarkers()}
      />
    );
  }
}

function mapStateToProps(state){
  return {taxiInfo : state.taxiInfo.taxiInfo};
}

export default connect(mapStateToProps)(SimpleMapExample);
