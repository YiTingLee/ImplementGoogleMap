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
    {props.usermarkers}
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
    try{
      return this.props.taxiInfo.taxiInfo.data.map((data)=>{
        return(
          <TaxiMarker
            key = {data.id}
            name = {data.name}
            car_id = {data.car_id}
            lat = {data.lat}
            lng = {data.lng}
            flag = {1}
          />
        );
      });
    }catch(err){
      // console.log("err:", err);
    }

    // return _.map(this.props.taxiInfo,(driver) => {
    //   // console.log("DriverMapping:",driver);
    //   return(
    //     <TaxiMarker
    //       key = {driver.DriverId}
    //       name = {driver.DriverName}
    //       lat = {driver.latitude}
    //       lng = {driver.longitude}
    //       flag = {1}
    //     />
    //   );
    // });
  }

  renderUserMarkers(){
    try{
      return this.props.users.usersdata.data.map((data)=>{
        return(
          <TaxiMarker
            key = {data.id}
            name = {data.name}
            lat = {data.lat}
            lng = {data.lng}
            flag = {2}
          />
        );
      });
    }catch(err){
      // console.log("err:", err);
    }
  }

  render() {
    // console.log("TaxiInfo:",this.props.taxiInfo);
    console.log("Connect Route:",this.props.route);

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
        usermarkers = {this.renderUserMarkers()}
        directions={!this.props.route?null:this.props.route}
      />
    );
  }
}

function mapStateToProps(state){
  return {taxiInfo : state.taxiInfo,route : state.directions.directions, users : state.usersdata};
}

export default connect(mapStateToProps)(SimpleMapExample);
