import { values } from 'lodash';

export const selectRestaurants = ({ restaurants }) => (
  values(restaurants)
);

export const selectRestaurant = ({ restaurants }, id) => {
  const restaurant = restaurants[id] || {};
  return restaurant;
};
