import React, { Component } from 'react';
import { View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: ""
    };
  }

  onSignupPressed() {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({
          session: {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
          }
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        // if (responseJson.status >= 200 && responseJson.status < 300) {
        //   //Handle signin
        //   let accessToken = responseJson;
        //   console.log(accessToken);
        //   //On success we will store the access_token in the AsyncStorage
        //   this.storeToken(accessToken);
        //  //  this.redirect('home');
        // } else {
        //   //Handle error
        //   let error = responseJson;
        //   throw error;
        // }
      })
      .catch((error) => {
          this.setState({error: error});
          console.log("error " + error);
          // this.setState({showProgress: false});
      });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>
          SignUp for See-n-Me
        </Text>

        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} placeholder="Email">
        </TextInput>

        <TextInput
          onChangeText={ (text)=> this.setState({username: text}) }
          style={styles.input} placeholder="Username">
        </TextInput>

        <TextInput
          onChangeText={ (text)=> this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>

        <TouchableHighlight onPress={this.onSignupPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>

        <Text style={styles.error}>
          {this.state.error}
        </Text>
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
