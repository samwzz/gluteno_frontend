import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class AuthScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SignUp />
      </View>
    );
  }
}

export default AuthScreen;
