import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class RestaurantAddScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      place_id: "",
      lat: "",
      lng: ""
    };
  }

  onRestaurantAddPress() {

  }

  render() {
    return (
      <View>
        <Text> Hi </Text>
      </View>
    );
  }

}

export default RestaurantAddScreen;
