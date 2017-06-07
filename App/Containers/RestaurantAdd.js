import React, { Component } from 'react';
import { View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

class RestaurantAdd extends Component {
  constructor() {
    super();
    this.state = {
      name = "",
      place_id = ""
    }
  }

  onRestaurantAdd() {

  }

  render() {
    <View>
      <Text style={styles.heading}>
        SignUp for See-n-Me
      </Text>

      <TextInput
        onChangeText={ (text)=> this.setState({fname: text}) }
        style={styles.input} placeholder="Restaurant">
      </TextInput>

      <TouchableHighlight onPress={this.onRestaurantAdd.bind(this)} style={styles.button}>
        <Text style={styles.buttonText}>
          Add Restaurant
        </Text>
      </TouchableHighlight>

    </View>
  }
}
