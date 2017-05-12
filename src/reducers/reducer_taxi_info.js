import {FEATCH_TAXI_LOCATION} from '../actions/index';

export default function(state=[],action){
  switch(action.type){
    case FEATCH_TAXI_LOCATION:
      return {...state,taxiInfo:action.payload};
    default:
      return state;
  }
}
