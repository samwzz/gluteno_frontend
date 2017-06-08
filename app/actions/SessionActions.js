import * as APIUtil from '../util/SessionApiUtil';
import { AsyncStorage } from 'react-native';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(formUser => dispatch(receiveCurrentUser(formUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(formUser => dispatch(receiveCurrentUser(formUser))
    .then((responseJson) => {
      console.log(responseJson);
    })
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
));

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);
