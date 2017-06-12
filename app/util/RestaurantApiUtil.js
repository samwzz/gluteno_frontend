import { AsyncStorage } from 'react-native';
const ACCESS_TOKEN = "access_token";

export const fetchRestaurants = () => (
  AsyncStorage.getItem(ACCESS_TOKEN)
  .then(token =>
    fetch('https://glutenbackend.herokuapp.com/api/restaurants/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      }
    })
  )
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

export const createRestaurant = data => (
  fetch('https://glutenbackend.herokuapp.com/api/restaurants/', {
  method: 'POST',
  headers: {
    // Remove later and update with current user's token
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + 'f11e63874755454f3e4b09743f08359f49612df8'
  },
    body: JSON.stringify({
      name: data.name,
      place_id: data.place_id,
      lat: data.lat,
      lng:  data.lng,
      address: data.address,
      phone_number: data.phone_number,
    })
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
