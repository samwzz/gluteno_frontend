import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/common/Header';
import AuthForm from './components/AuthForm';
import Login from './components/Login';
import RestaurantList from './components/RestaurantList';
import Map from './screens/Map';
import { MainNavigator } from './config/router';
import RestaurantAdd from './screens/RestaurantAdd';
import SomeComponent from './screens/Swipe';

class RootContainer extends Component {
  render() {
    return(
      <View style={styles.container}>
        <MainNavigator />
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
