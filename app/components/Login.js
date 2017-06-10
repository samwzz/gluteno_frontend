import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../actions/SessionActions';
import { View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

// const ACCESS_TOKEN = "access_token";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  // storeToken(responseData){
  //   AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
  //     if (err){
  //       console.log("an error");
  //       throw err;
  //     }
  //     console.log("success");
  //   }).catch((err)=> {
  //       console.log("error is: " + err);
  //   });
  // }

  onLoginPressed() {
    const { email, password } = this.state;
    this.props.login({ email, password });
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

        <Text style={styles.error}>
          {this.state.error}
        </Text>
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

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
