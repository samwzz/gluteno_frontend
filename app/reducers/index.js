import { combineReducers } from 'redux';
import SessionReducer from './SessionReducer';
import RestaurantReducer from './RestaurantReducer';
import RestaurantDetailsReducer from './RestaurantDetailsReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  restaurant: RestaurantDetailsReducer
});

export default RootReducer;
