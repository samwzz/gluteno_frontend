import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';
import Login from '../Components/Login';

class RootContainer extends Component {
  render() {
    return(
      <View>
        <Header headerText={"See-n-Me"} />
        <Login />
      </View>
    );
  }
}

export default RootContainer;
