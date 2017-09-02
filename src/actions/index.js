import {driversLocation} from '../data/sample_drivers_location';
import {DirectionsRenderer} from "react-google-maps";
import axios from 'axios';

export const FETCH_TAXI_LOCATION = 'fetch_taxi_location';
export const FETCH_DIRECTIONS = 'fetch_directions';
export const FETCH_USERS_DATA = 'fetch_users_data';

export function fetchTaxiLocation(){
  const url = `http://localhost:3000/taxiRESTfulAPI/public/main/taxis/api/getdata`;
  const taxiInfo = axios.get(url);
  console.log('axios:', taxiInfo);

  return {
    type:FETCH_TAXI_LOCATION,
    payload:taxiInfo
  }

  // var taxiInfo;
  // switch (locationName) {
  //   case "ntut":
  //     taxiInfo = driversLocation.ntut;
  //     break;
  //   case "station":
  //     taxiInfo = driversLocation.station;
  //     break;
  //   case "taipei101":
  //     taxiInfo = driversLocation.taipei101;
  //     break;
  //   default:
  //     taxiInfo = driversLocation.error;
  // }
  // return {
  //   type:FETCH_TAXI_LOCATION,
  //   payload:taxiInfo
  // };
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
        type:FETCH_DIRECTIONS,
        payload:result
      };
    })
    .catch(()=>{
      console.log("Error Fetch");
    });
 }

export function fetchUsersData(){
  // const url = `http://taxiapi.dev:3000/main/users/api/getdata`;
  const url = `http://localhost:3000/taxiRESTfulAPI/public/main/users/api/getdata`;
  const users_data = axios.get(url);
  console.log('axios:', users_data);

  return {
    type:FETCH_USERS_DATA,
    payload:users_data
  }
  // return new Promise((resolve, reject)=>{
  //   const url = `http://taxiapi.dev:3000/main/users/api/getdata`;
  //   const users_data = axios.get(url);
  //   resolve(users_data);
  // })
}
