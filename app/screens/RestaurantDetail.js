import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { fetchRestaurantDetails,
         receiveRestaurantDetails,
         receiveRestaurantMap } from '../actions/RestaurantDetailsActions';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../components/common';
import Swipeable from 'react-native-swipeable';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props.navigation.state.params;
    this.state = {
      currentlyOpenSwipeable: null,
      region: {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: []
    };
  }


  componentDidMount() {
    // this.props.fetchRestaurantDetails(this.props.match.params.id);
    // this.props.fetchRestaurantMap(this.props.match.params.id);
    console.log(this.props.currentUser);
  }

  handleScroll() {
    const {currentlyOpenSwipeable} = this.state;

    if (currentlyOpenSwipeable) {
      currentlyOpenSwipeable.recenter();
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    console.log('hi');
    console.log(this.props.session);
    // console.log(this.props.navigation.state.params);
    const { id, name, address, phone_number, lat, lng } = this.props.navigation.state.params;

    const {currentlyOpenSwipeable} = this.state;

    return(
      <Card>
        <CardSection>
          <Text>{ name }</Text>
        </CardSection>

        <Swipeable
          leftContent={(
            <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
              <Text>Pull action</Text>
            </View>
          )}
          rightButtons={[
            <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
              <Text>1</Text>
            </TouchableOpacity>,
            <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
              <Text>2</Text>
            </TouchableOpacity>
          ]}
        >
          <View style={[styles.listItem, {backgroundColor: 'salmon'}]}>
            <Text>Swipe Right to Like</Text>
          </View>
        </Swipeable>

        <CardSection>
          <Text>{ address }</Text>
        </CardSection>
        <CardSection>
          <Text>{ phone_number }</Text>
        </CardSection>

        <CardSection style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange.bind(this)}
            >
            <MapView.Marker
              key={id}
              coordinate={{
                latitude: lat,
                longitude: lng
              }}
              title={name}
              description={address}
              />
          </MapView>
        </CardSection>
      </Card>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  listItem: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  // mapContainer: {
  //   flex: 1
  // },
  map: {
    // ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    flex: 1,
  },
});


const mapStateToProps = (state) => ({
  restaurant: state.restaurant,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurantDetails: (id) => dispatch(receiveRestaurantDetails(id)),
  fetchRestaurantMap: (id) => dispatch(receiveRestaurantMap(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
