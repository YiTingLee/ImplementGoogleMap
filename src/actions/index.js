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

export function fetchDirecions(result){
  // console.log("action directions:",result);
   return {
     type:FEATCH_DIRECTIONS,
     payload:result
  };
 }
