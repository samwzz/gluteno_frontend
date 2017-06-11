import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from '../components/Login';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Login />
      </View>
    );
  }
}

export default WelcomeScreen;
