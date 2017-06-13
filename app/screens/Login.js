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
      username: "",
      password: "",
      token: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.currentUser);
    if (nextProps.currentUser) {
      this.checkAuth();
    }
  }

  checkAuth() {
    AsyncStorage.getItem('access_token')
    .then(token => {
      if (token) {
        this.props.navigation.navigate('Map');
      }
    });
  }

  componentDidUpdate() {
    AsyncStorage.getItem("access_token")
    .then(token => this.setState({ token }));
  }

  onLoginPressed() {
    const { username, password } = this.state;
    this.props.login({ username, password });
  }

  onLogoutPressed() {
    const { email, password } = this.state;
    AsyncStorage.removeItem("access_token")
    .then(result => this.setState({ result: "" }));
  }

  render() {
    const { errors } = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>
          Login to GluteNo
        </Text>
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
        <Text style={styles.error}> { errors.non_field_errors } </Text>

        <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Login
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

// Map state and dispatch to props
const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
