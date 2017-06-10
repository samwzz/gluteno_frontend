import React, { Component } from 'react';
import { View, Text } from 'react-native';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome Screen</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
