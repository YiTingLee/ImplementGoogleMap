import {FETCH_TAXI_LOCATION} from '../actions/index';
import {FETCH_DIRECTIONS} from '../actions/index';
import {FETCH_USERS_DATA} from '../actions/index';

export default function(state=[],action){
  switch(action.type){
    case FETCH_TAXI_LOCATION:
      return {...state,taxiInfo:action.payload};
    case FETCH_DIRECTIONS:
      return {...state,directions:action.payload};
    case FETCH_USERS_DATA:
      return {...state, usersdata:action.payload};
    default:
      return state;
  }
}
