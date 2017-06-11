import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRestaurant } from '../actions/RestaurantActions';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Button from 'react-native-button';

class RestaurantAddScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      place_id: "",
      lat: "",
      lng: "",
      address: "",
      phone: ""
    };
  }

  _handlePress() {
    console.log('Pressed!');
    console.log(this.state);

    const { name, place_id, lat, lng, address } = this.state;
    this.props.createRestaurant( { name, place_id, lat, lng, address } );
  }

  render() {

    const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
    const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

    return (
      <View style={{ flex: 1 }}>
        <View style={{
            paddingTop: 20
          }}>
          <Text> Add Restaurant </Text>
        </View>

        <View style={{ flex: 1, height: 200 }}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed='auto'    // true/false/undefined
          fetchDetails={true}
          renderDescription={(row) => row.description} // custom description render
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            this.setState({name: details.name,
                           place_id: data.place_id,
                           lat: details.geometry.location.lat,
                           lng: details.geometry.location.lng,
                           address: details.formatted_address,
                           phone: details.formatted_phone_number});
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
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
            textInputContainer: {
              backgroundColor: 'black',
            },
            listView: {
              height: 200,
              width: 200,
              backgroundColor: 'red',
              /*position: 'absolute',*/
            },
          }}

          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food',
          }}


          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

          predefinedPlaces={[homePlace, workPlace]}

          debounce={200}
        />
      </View>

      <View style={{
          flex: 1,
          backgroundColor: 'lightblue',
          alignItems: 'center',
        }}>
        <Text>{ this.state.name }</Text>
        <Text>{ this.state.address }</Text>
        <Text>{ this.state.phone }</Text>
      </View>

      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Press Me!
      </Button>

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createRestaurant: (data) => dispatch(createRestaurant(data))
});

export default connect(
  null,
  mapDispatchToProps
)(RestaurantAddScreen);
