import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, fetchRestaurant } from '../actions/RestaurantActions';
import { selectRestaurants } from '../reducers/selectors';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from 'react-native-elements';
import colors from '../config/colors';

const { height, width } = Dimensions.get('window');

class Map extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 37.78424,
        longitude: -122.4179,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: []
    };
  }

  componentDidMount() {

  }

  onRegionChange(region) {
    this.setState({ region });
  }

  onButtonPress() {
    console.log(this.state.region);
    const currentRegion = {
      latitude: 37.78424,
      longitude: -122.4179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    this.props.fetchRestaurants()
    .then(() => {
      this.setState({ markers: this.props.restaurants });
      this.setState({ region: currentRegion });
      }
    );
  }

  getDirection() {
    console.log("hi");
  }

  render() {
    const { markers } = this.state;
    // console.log(markers);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
          >
          {markers.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={{
                latitude: marker.lat,
                longitude: marker.lng
              }}
              title={marker.name}
              description={marker.address}
              />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            backgroundColor='#009688'
            icon={{name: 'search'}}
            onPress={this.onButtonPress.bind(this)}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    // height: height,
    // width: width
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
});

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
