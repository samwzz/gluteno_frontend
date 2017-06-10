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
  fetch('https://glutenbackend.herokuapp.com/api/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
      username: user.email,
      password: user.password,
    })
  })
  // .then((response) => response.json())
  // .then((responseJson) => {
  //   console.log(responseJson);
  // })
//     if (responseJson.status >= 200 && responseJson.status < 300) {
//       //Handle success
//       let accessToken = responseJson;
//       console.log(accessToken);
//       //On success we will store the access_token in the AsyncStorage
//       this.storeToken(accessToken);
//      //  this.redirect('home');
//     } else {
//       //Handle error
//       let error = responseJson;
//       throw error;
//     }
//   })
//   .catch((error) => {
//       this.setState({error: error});
//       console.log("error " + error);
//       // this.setState({showProgress: false});
//   }
// ));
);

export const logout = () => (
  fetch('https://test.com', {
    method: 'DELETE'
  })
);
