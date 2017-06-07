import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';
import AuthForm from '../Components/AuthForm';
import Login from '../Components/Login';
import RestaurantList from '../Containers/RestaurantList';

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
