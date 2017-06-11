import * as APIUtil from '../util/RestaurantDetailsApiUtil';

export const RECEIVE_RESTAURANT_DETAILS = 'RECEIVE_RESTAURANT_DETAILS';
export const RECEIVE_RESTAURANT_MAP = 'RECEIVE_RESTAURANT_MAP';

export const fetchRestaurantDetails = (id) => dispatch => (
  APIUtil.fetchRestaurantsDetails(id)
  .then((response) => response.json())
  .then((responseJson) => {
    dispatch(receiveRestaurantDetails(responseJson));
  })
);

export const receiveRestaurantDetails = restaurantDetails => ({
  type: RECEIVE_RESTAURANT_DETAILS,
  restaurantDetails
});
