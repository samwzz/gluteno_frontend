import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fetchRestaurantDetails,
         receiveRestaurantDetails,
         receiveRestaurantMap } from '../actions/RestaurantDetailsActions';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../components/common';

class RestaurantShowScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Test Restaraunt',
      address: '123 Test',
      phone: '123-456-789',
      lat: '',
      lng: ''
    };
  }

  componentDidMount() {
    // this.props.fetchRestaurantDetails(this.props.match.params.id);
    // this.props.fetchRestaurantMap(this.props.match.params.id);
  }

  render() {
    const { name, address, phone } = this.state;
    return(
      <Card>
        <CardSection>
          <Text>{ name }</Text>
        </CardSection>

        <CardSection>
          <Text> Likes/Dislikes Container Here </Text>
        </CardSection>

        <CardSection>
          <Text>{ address }</Text>
          <Text>{ phone }</Text>
        </CardSection>

        <CardSection>
          <Text> Map goes here </Text>
        </CardSection>

      </Card>
    );
  }

}


const mapStateToProps = (state) => ({
  restaurant: state.restaurant
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurantDetails: (id) => dispatch(receiveRestaurantDetails(id)),
  fetchRestaurantMap: (id) => dispatch(receiveRestaurantMap(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantShowScreen);
