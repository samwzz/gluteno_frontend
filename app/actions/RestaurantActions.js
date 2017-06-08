import * as APIUtil from '../util/RestaurantApiUtil';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const removeRestaurant = restaurant => ({
  type: REMOVE_RESTAURANT,
  restaurant
});

export const receiveRestaurantErrors = errors => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors
});

export const fetchRestaurants = () => dispatch => (
  APIUtil.fetchRestaurants()
  .then((response) => response.json())
  .then((responseJson) => {
    dispatch(receiveRestaurants(responseJson));
  })
);

export const fetchRestaurant = id => dispatch => (
  APIUtil.fetchRestaurant(id).then(restaurant => (
    dispatch(receiveRestaurant(restaurant))
  ))
);

export const createRestaurant = formRestaurant => dispatch => (
  APIUtil.createRestaurant(formRestaurant)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
    .fail(err => dispatch(receiveRestaurantErrors(err.responseJSON))
  )
);

export const updateRestaurant = (formRestaurant, id) => dispatch => (
  APIUtil.updateRestaurant(formRestaurant, id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
    .fail(err => dispatch(receiveRestaurantErrors(err.responseJSON))
  )
);

export const deleteRestaurant = formRestaurant => dispatch => (
  APIUtil.deleteRestaurant(formRestaurant).then(restaurant => (dispatch(removeRestaurant(restaurant))))
);
