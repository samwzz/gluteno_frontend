import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class AuthScreen extends Component {
  componentWillMount() {
    AsyncStorage.getItem("access_token")
    .then(token => {
      if (token) {
        this.props.navigation.navigate('map');
      }
    });
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Login />
      </View>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

export default connect(
  mapStateToProps,
  null
)(AuthScreen);
