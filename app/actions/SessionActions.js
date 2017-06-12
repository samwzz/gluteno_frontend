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

const storeToken = responseData => {
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

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status >= 200 && responseJson.status < 300) {
        // Handle signin
        let accessToken = responseJson.token;
        // console.log(accessToken);
        // On success we will store the access_token in the AsyncStorage
        storeToken(accessToken);
        dispatch(receiveCurrentUser(responseJson.user));
        //  this.redirect('home');
      } else {
        // Handle error
        let error = responseJson;
        throw error;
      }
    })
    .catch((errors) => {
      dispatch(receiveErrors(errors));
    })
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.status >= 200 && responseJson.status < 300) {
        //Handle success
        const { token, user_id, username } = responseJson;
        // console.log(accessToken);
        //On success we will store the access_token in the AsyncStorage
        storeToken(token);
        // console.log(responseJson);
        dispatch(receiveCurrentUser({ user_id, username }));
       //  this.redirect('home');
      } else {
        //Handle error
        let error = responseJson;
        console.log(error);
        throw error;
      }
    })
    .catch((errors) => {
      dispatch(receiveErrors(errors));
    })
);
