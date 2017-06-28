import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../actions/SessionActions';
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

  onSignupPressed() {
    const { email, username, password } = this.state;
    this.props.signup({ email, username, password });
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
    const { errors } = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.heading}>
          Sign up for Gluteno
        </Text>

        <TextInput
          autoCapitalize='none'
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} placeholder="Email">
        </TextInput>

        <Text style={styles.error}> { errors.email } </Text>

        <TextInput
          autoCapitalize='none'
          onChangeText={ (text)=> this.setState({username: text}) }
          style={styles.input} placeholder="Username">
        </TextInput>

        <Text style={styles.error}> { errors.username } </Text>

        <TextInput
          autoCapitalize='none'
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
      </View>
    );
  }
}

// Styles
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
    borderColor: '#C9A66B'
  },
  button: {
    height: 50,
    backgroundColor: '#AF4425',
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

// Map state and dispatch to props
const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
