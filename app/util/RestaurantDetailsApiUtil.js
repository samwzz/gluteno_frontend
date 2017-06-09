export const fetchRestaurantDetails = (restaurantId) => (
  fetch('__RestaurantLikes__', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
);

export const fetchRestaurantMap = () => (
  fetch('__RestaurantMap__', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
);
