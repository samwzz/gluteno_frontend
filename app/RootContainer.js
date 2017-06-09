import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/common/Header';
import AuthForm from './components/AuthForm';
import Login from './components/Login';
import RestaurantList from './components/RestaurantList';
import MapScreen from './screens/MapScreen';

class RootContainer extends Component {
  render() {
    return(
      <View>
        <RestaurantList />
      </View>
    );
  }
}

export default RootContainer;
