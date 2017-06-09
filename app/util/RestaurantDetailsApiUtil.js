export const fetchRestaurantDetails = (restaurantId) => (
  fetch('__RestaurantDetailsURL__', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
);

export const fetchRestaurantPhoto = (restaurantId) => (
  $.ajax({
    method: 'GET',
    url: `api/restaurants/${restaurantId}/photos`,
    contentType: false,
    processData: false,
    restaurantId
  })
);

export const fetchMap = (restaurantId) => (

);
