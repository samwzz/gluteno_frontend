import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { fetchRestaurantDetails,
         receiveRestaurantDetails,
         receiveRestaurantMap } from '../actions/RestaurantDetailsActions';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../components/common';
import { Icon, Badge, Rating } from 'react-native-elements';
import Swipeable from 'react-native-swipeable';
import MapView from 'react-native-maps';
import colors from '../config/colors';

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

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
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
          <Text style={styles.text}>{ address }</Text>
        </CardSection>
        <CardSection>
          <Text style={styles.text}>{ phone_number }</Text>
        </CardSection>
        <CardSection>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Icon raised reverse name="thumb-down" color={colors.brown} size={24} />
              <Badge value={1} textStyle={{ color: 'orange' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon raised reverse name="thumb-up" color={colors.orange} size={24} />
              <Badge value={8} textStyle={{ color: 'orange' }} />
            </TouchableOpacity>
            <Rating
              showRating
              type="star"
              fractions={1}
              startingValue={3.6}
              readonly
              imageSize={30}
              onFinishRating={this.ratingCompleted}
              style={{ paddingVertical: 10 }}
            />
          </View>
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
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    textAlign: 'auto'
  },
  // leftSwipeItem: {
  //   flex: 1,
  //   alignItems: 'flex-end',
  //   justifyContent: 'center',
  //   paddingRight: 20
  // },
  // rightSwipeItem: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingLeft: 20
  // },
  button: {
    height: 50,
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center'
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
