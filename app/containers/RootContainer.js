import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import Login from '../components/Login';
import RestaurantList from '../containers/RestaurantList';

class RootContainer extends Component {
  render() {
    return(
      <View>
        <Header headerText={"restarants nearby"} />
        <RestaurantList />

      </View>
    );
  }
}

export default RootContainer;
