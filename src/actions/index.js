import {driversLocation} from '../data/sample_drivers_location';
import {DirectionsRenderer} from "react-google-maps";

export const FEATCH_TAXI_LOCATION = 'featch_taxi_location';
export const FEATCH_DIRECTIONS = 'featch_directions';

export function fetchTaxiLocation(locationName){
  var taxiInfo;
  switch (locationName) {
    case "ntut":
      taxiInfo = driversLocation.ntut;
      break;
    case "station":
      taxiInfo = driversLocation.station;
      break;
    case "taipei101":
      taxiInfo = driversLocation.taipei101;
      break;
    default:
      taxiInfo = driversLocation.error;
  }
  return {
    type:FEATCH_TAXI_LOCATION,
    payload:taxiInfo
  };
}

export function fetchDirecions(dlat,dlng,olat,olng){
  // console.log("action directions:",result);

  const DirectionsService = new google.maps.DirectionsService();

  return new Promise((resolve,reject)=> {
    DirectionsService.route({
       origin: new google.maps.LatLng(dlat,dlng),
       destination: new google.maps.LatLng(olat, olng),
       travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
        resolve(result);
       } else {
         console.error(`error fetching directions.`);
         reject();
       }
     });
  })
    .then(result => {
      return{
        type:FEATCH_DIRECTIONS,
        payload:result
      };
    })
    .catch(()=>{
      console.log("Error Fetch");
    });
 }

