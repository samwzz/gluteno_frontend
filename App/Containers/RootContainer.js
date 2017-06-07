import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';
import AuthForm from '../Components/AuthForm';

class RootContainer extends Component {
  render () {
    return(
      <View>
        <Header />
        <AuthForm />
      </View>
    );
  }
}

export default RootContainer;
