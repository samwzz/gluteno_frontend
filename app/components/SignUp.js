import React, { Component } from 'react';
import { View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

const ACCESS_TOKEN = "access_token";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      errors: {}
    };
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

  onSignupPressed() {
      fetch('https://glutenbackend.herokuapp.com/api/signup/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status >= 200 && responseJson.status < 300) {
          // Handle signin
          let accessToken = responseJson.token;
          // console.log(accessToken);
          console.log("hi");
          // On success we will store the access_token in the AsyncStorage
          this.storeToken(accessToken);
          //  this.redirect('home');
        } else {
          // Handle error
          let error = responseJson;
          throw error;
        }
      })
      .catch((errors) => {
        this.setState({ errors });
        console.log(this.state.errors);
      });
  }

  onLogoutPressed() {
    const { email, password } = this.state;
    AsyncStorage.removeItem("access_token")
    .then(result => this.setState({ result: "" }));
  }

  componentDidUpdate() {
    AsyncStorage.getItem("access_token")
    .then(token => this.setState({ token }));
  }

  render() {
    const { errors } = this.state;
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>
          SignUp for See-n-Me
        </Text>

        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} placeholder="Email">
        </TextInput>

        <Text style={styles.error}> { errors.email } </Text>

        <TextInput
          onChangeText={ (text)=> this.setState({username: text}) }
          style={styles.input} placeholder="Username">
        </TextInput>

        <Text style={styles.error}> { errors.username } </Text>

        <TextInput
          onChangeText={ (text)=> this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>

        <Text style={styles.error}> { errors.password } </Text>

        <TouchableHighlight onPress={this.onSignupPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Sign up
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

// Pass in props and dispatches here

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
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


export default SignUp;
