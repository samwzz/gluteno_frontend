export const fetchRestaurantDetails = (id) => (
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
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
