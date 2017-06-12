import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { height, width } = Dimensions.get('window');

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView

          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width
  }
});

export default MapScreen;
