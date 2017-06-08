import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';
import RestaurantReducer from './RestaurantReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer
});

export default RootReducer;
