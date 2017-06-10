import * as APIUtil from '../util/SessionApiUtil';
import { AsyncStorage } from 'react-native';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const ACCESS_TOKEN = "access_token";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const storeToken = (responseData) => {
  AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
    if (err){
      console.log("an error");
      throw err;
    }
    console.log("success");
  }).catch((err)=> {
      console.log("error is: " + err);
  });
};

const retrieveToken = () => {
  AsyncStorage.getItem(ACCESS_TOKEN)
    .then(result => console.log(result));
  //   err => {
  //   if (err){
  //     console.log("an error");
  //     throw err;
  //   }
  //   console.log("success");
  // }.catch((err)=> {
  //     console.log("error is: " + err);
  // });
};

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(formUser => dispatch(receiveCurrentUser(formUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    // .then(formUser => dispatch(receiveCurrentUser(formUser))
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status >= 200 && responseJson.status < 300) {
        //Handle success
        let accessToken = responseJson.token;
        // console.log(accessToken);
        //On success we will store the access_token in the AsyncStorage
        storeToken(accessToken);

       //  this.redirect('home');
      } else {
        //Handle error
        let error = responseJson;
        throw error;
      }
    })
    .then(() => retrieveToken())
    .catch((error) => {
        dispatch(receiveErrors(error.responseJSON));
        console.log("error " + error);
        // this.setState({showProgress: false});
    }
));

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);
