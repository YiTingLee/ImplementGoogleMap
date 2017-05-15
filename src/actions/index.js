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

export function fetchDirecions(dlat,dlng,locationName){
  var directions;
  var olat,olng;

  switch (locationName) {
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
     origin: new google.maps.LatLng(dlat, dlng),
     destination: new google.maps.LatLng(olat, olng),
     travelMode: google.maps.TravelMode.DRIVING,
   }, (result, status) => {
     if (status === google.maps.DirectionsStatus.OK) {
       console.log("result:",result);
       directions = result;
     } else {
       console.error(`error fetching directions.`);
     }
   });
 
   console.log("direcions:",directions);

   return {
     type:FEATCH_DIRECTIONS,
     payload:directions
  };
 }
