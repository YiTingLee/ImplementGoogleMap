import {FEATCH_TAXI_LOCATION} from '../actions/index';
import {FEATCH_DIRECTIONS} from '../actions/index';

export default function(state=[],action){
  switch(action.type){
    case FEATCH_TAXI_LOCATION:
      return {...state,taxiInfo:action.payload};
    case FEATCH_DIRECTIONS:
      return {...state,directions:action.payload};
    default:
      return state;
  }
}
