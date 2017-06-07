import React, { Component } from 'react';
import { View, Text } from 'react-native';

class RestaurantList extends Component {
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson));
  }

  render() {
    return (
      <View>
        <Text>Restaurant list!</Text>
      </View>
    );
  }
}

export default RestaurantList;
