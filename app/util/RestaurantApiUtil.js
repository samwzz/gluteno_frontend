export const fetchRestaurants = () => (
  fetch('https://glutenbackend.herokuapp.com/restaurants', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
);

export const fetchRestaurant = id => (
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
);

export const createPhoto = data => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data
  })
);

export const updatePhoto = (photo, id) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/photos/${id}`,
      contentType: photo.id ? 'application/x-www-form-urlencoded; charset=UTF-8' : false,
      processData: photo.id ? true : false,
      data: photo.id ? { photo } : photo
    })
  );
};

export const deletePhoto = photo => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${photo.id}`,
  })
);
