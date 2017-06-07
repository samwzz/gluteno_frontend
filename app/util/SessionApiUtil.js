export const signup = user => (
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
      session: {
        email: user.email,
        password: user.password,
      }
    })
  })
);

export const login =  user => (
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
      session: {
        email: user.email,
        password: user.password,
      }
    })
  })
);

export const logout = () => (
  fetch('https://test.com', {
    method: 'DELETE'
  })
);
