import  React,{Component} from "react";
import {connect} from 'react-redux';

import {withGoogleMap,GoogleMap} from "react-google-maps";

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.lat, lng: props.lng}}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class SimpleMapExample extends Component {

  render() {
    console.log(this.props.lat);
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
      />
    );
  }
}

// function mapStateToProps(state){
//   return {latlng : state.lat};
// }
//
// export default connect (mapStateToProps)(SimpleMapExample);
export default SimpleMapExample;
