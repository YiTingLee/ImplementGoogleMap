import  React,{Component} from "react";
import {connect} from 'react-redux';
import _ from 'lodash';
import {withGoogleMap,GoogleMap,DirectionsRenderer} from "react-google-maps";
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
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class SimpleMapExample extends Component {

  state = {
    origin: new google.maps.LatLng(41.8507300, -87.6512600),
    destination: new google.maps.LatLng(41.8525800, -87.6514100),
    directions: null,
  }


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

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();


    DirectionsService.route({
      origin: new google.maps.LatLng(this.props.lat, this.props.lng),
      destination: new google.maps.LatLng(25.047908, 121.517315),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        // console.error(`error fetching directions ${result}`);
      }
    });
  }

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
        directions={this.state.directions}
      />
    );
  }
}

function mapStateToProps(state){
  return {taxiInfo : state.taxiInfo.taxiInfo};
}

export default connect(mapStateToProps)(SimpleMapExample);
