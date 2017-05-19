import React,{Component} from 'react';
import {fetchTaxiLocation} from '../actions/index';
import {fetchDirecions} from '../actions/index';
import {connect} from 'react-redux';

class SelectBar extends Component{
  constructor(props){
    super(props);
    // console.log("this:",this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event){
    // console.log(event.target.value);
    this.props.fetchTaxiLocation(event.target.value);

    var olat,olng;
    switch (event.target.value) {
     case "ntut":
        olat=25.042171;
        olng=121.535507;
        break;
      case "station":
         olat=25.048080;
         olng=121.517054;
         break;
      case "taipei101":
         olat=25.034234;
         olng=121.564510;
         break;
       default:

     }

     const DirectionsService = new google.maps.DirectionsService();


     DirectionsService.route({
       origin: new google.maps.LatLng(this.props.lat,this.props.lng,),
       destination: new google.maps.LatLng(olat, olng),
       travelMode: google.maps.TravelMode.DRIVING,
     }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
        //  console.log("result:",result);
         this.props.fetchDirecions(result);
       } else {
         console.error(`error fetching directions.`);
       }
     });
  }

  render(){
    return (
      <select onChange={this.onSelectChange} >
        <option value="ntut">NTUT</option>
        <option value="station">台北車站</option>
        <option value="taipei101">台北101</option>
      </select>
    )
  }
}

export default connect(null,{fetchTaxiLocation,fetchDirecions})(SelectBar);
