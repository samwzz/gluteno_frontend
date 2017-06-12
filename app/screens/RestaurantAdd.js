import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRestaurant } from '../actions/RestaurantActions';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Button from 'react-native-button';

class RestaurantAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      place_id: "",
      lat: "",
      lng: "",
      address: "",
      phone_number: ""
    };
  }

  _handlePress() {
    const { phone_number, name, place_id, lat, lng, address } = this.state;
    // console.log(phone_number);
    this.props.createRestaurant({ name, place_id, lat, lng, address, phone_number });
    // console.log(this.state);
    // console.log(this.props.restaurants);
  }

  render() {
    return (
      <View style={styles.addcontainer}>
        <View style={styles.autocompletecontainer}>
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed='auto'
            fetchDetails={true}
            renderDescription={(row) => row.description}
            onPress={(data, details = null) => {
              this.setState({name: details.name,
                             place_id: data.place_id,
                             lat: details.geometry.location.lat,
                             lng: details.geometry.location.lng,
                             address: details.formatted_address,
                             phone_number: details.formatted_phone_number});
            }}
            getDefaultValue={() => {
              return ''; // text input default value
            }}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyBDwGj9-ZQ1ID90JRABgmbmQl0AJCnrU70',
              language: 'en', // language of the results
              types: 'establishment', // default: 'geocode'
            }}
            styles={{
              description: {
                fontWeight: 'bold',
              },
              // predefinedPlacesDescription: {
              //   color: '#1faadb',
              // },
              // textInputContainer: {
              //   backgroundColor: 'black',
              // },
              listView: {
                backgroundColor: 'white'
              },
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
              types: 'food',
            }}
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
            debounce={200}
          />
        </View>

        <View style={styles.addinfo}>
          <Text>{ this.state.name }</Text>
          <Text>{ this.state.address }</Text>
          <Text>{ this.state.phone_number }</Text>
        </View>
        <View style={styles.addbuttoncontainer}>
          <Button
            style = {styles.addbutton}
            styleDisabled={{color: 'grey'}}
            onPress={() => this._handlePress()}>
            Add
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  autocompletecontainer: {
    flex: 3,
  },
  addinfo: {
    flex: 1,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addbuttoncontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  addbutton: {
    padding: 7,
    width: 120,
    borderRadius: 20,
    backgroundColor: '#B3DE81',
    fontSize: 20,
    color: 'white',
  }
});
const mapStateToProps = (state) => ({
  restaurants: state.restaurants
});

const mapDispatchToProps = (dispatch) => ({
  createRestaurant: (data) => dispatch(createRestaurant(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantAdd);
