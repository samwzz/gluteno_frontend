import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout, receiveErrors } from '../actions/SessionActions';
import { View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

const ACCESS_TOKEN = "access_token";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      token: "",
      error: ""
    };
  }

  componentDidUpdate() {
    AsyncStorage.getItem("access_token")
    .then(token => this.setState({ token }));
  }

  storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if (err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

  onLoginPressed() {
    fetch('https://glutenbackend.herokuapp.com/api/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
      })
    })
      // .then(formUser => dispatch(receiveCurrentUser(formUser))
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status >= 200 && responseJson.status < 300) {
          // Handle success
          let accessToken = responseJson.token;
          // console.log(accessToken);
          // On success we will store the access_token in the AsyncStorage
          this.storeToken(accessToken);

         //  this.redirect('home');
        } else {
          // Handle error
          let error = responseJson;
          throw error;
        }
      })
      .then(() => this.retrieveToken())
      .catch((error) => {
          this.setState({error: error});
          console.log("error " + error);
          // this.setState({showProgress: false});
      }
    );
  }

  onLogoutPressed() {
    const { email, password } = this.state;
    AsyncStorage.removeItem("access_token")
    .then(result => this.setState({ result: "" }));
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>
          Login to See-n-Me
        </Text>
        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>
        <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>


        <Text>{this.state.token}</Text>
        <TouchableHighlight onPress={this.onLogoutPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  }
});

export default Login;
