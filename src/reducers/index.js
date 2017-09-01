import { combineReducers } from 'redux';
import TaxiInfoReducer from './reducer_taxi_info';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  taxiInfo : TaxiInfoReducer,
  directions : TaxiInfoReducer,
  usersdata : TaxiInfoReducer
});

export default rootReducer;
