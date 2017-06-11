import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/common/Header';
import AuthForm from './components/AuthForm';
import Login from './components/Login';
import RestaurantList from './screens/RestaurantList';
import Map from './screens/Map';
import { MainNavigator, Root } from './config/router';
import RestaurantAdd from './screens/RestaurantAdd';
import SomeComponent from './screens/Swipe';

class RootContainer extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Root />
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
