import { merge } from 'lodash';
import { RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT,
  REMOVE_RESTAURANT,
  RECEIVE_RESTAURANT_ERRORS
} from '../actions/RestaurantActions';

const defaultRestaurant = Object.freeze({
  0: {
    name: "",
    address: "",
    phone_number: "",
    lat: "",
    lng: "",
    image_url: "",
    place_id: ""
  }
});

const RestaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      const newRestaurant = {[action.restaurant.id]: action.restaurant};
      return merge({}, state, newRestaurant);
    case RECEIVE_RESTAURANT_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    case REMOVE_RESTAURANT:
      nextState = merge({}, state);
      delete nextState[action.restaurant.id];
      return nextState;
    default:
      return state;
  }
};

export default RestaurantReducer;
