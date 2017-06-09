import * as APIUtil from '../util/RestaurantDetailsApiUtil';

export const RECEIVE_RESTAURANT_DETAILS = 'RECEIVE_RESTAURANT_DETAILS';
export const RECEIVE_RESTAURANT_MAP = 'RECEIVE_RESTAURANT_MAP';

export const fetchRestaurantDetails = () => dispatch => (
  APIUtil.fetchRestaurantsDetails()
  .then((response) => response.json())
  .then((responseJson) => {
    dispatch(receiveRestaurantDetails(responseJson));
  })
);


export const fetchRestaurantMap = () => dispatch => (
  APIUtil.fetchRestaurantMap().then(map => (
    dispatch(receiveRestaurantMap(map))
  ))
);

export const receiveRestaurantDetails = restaurantDetails => ({
  type: RECEIVE_RESTAURANT_DETAILS,
  restaurantDetails
});

export const receiveRestaurantMap = map => ({
  type: RECEIVE_RESTAURANT_MAP,
  map
});
