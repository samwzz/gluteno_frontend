import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/common/Header';
import AuthForm from './components/AuthForm';
import Login from './components/Login';
import RestaurantList from './components/RestaurantList';
import MapScreen from './screens/MapScreen';
import { MainNavigator } from './config/router';
import RestaurantAddScreen from './screens/RestaurantAddScreen';

class RootContainer extends Component {
  render() {
    return(
      <View style={styles.container}>
        <RestaurantAddScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RootContainer;
