import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => (
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

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  map: {
    height: height,
    width: width
  }
});

export default MapScreen;
