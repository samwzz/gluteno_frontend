export const signup = user => (
  fetch('https://glutenbackend.herokuapp.com/api/signup/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
      email: user.email,
      username: user.username,
      password: user.password
    })
  })
);

export const login =  user => (
  fetch('https://glutenbackend.herokuapp.com/api/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  })
);
