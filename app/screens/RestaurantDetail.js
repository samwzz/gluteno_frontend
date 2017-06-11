import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fetchRestaurantDetails,
         receiveRestaurantDetails,
         receiveRestaurantMap } from '../actions/RestaurantDetailsActions';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../components/common';

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchRestaurantDetails(this.props.match.params.id);
    // this.props.fetchRestaurantMap(this.props.match.params.id);
  }

  render() {
    console.log(this.props.navigation.state.params);
    const { name, address, phone_number, lat, lng } = this.props.navigation.state.params;

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
        </CardSection>
        <CardSection>
          <Text>{ phone_number }</Text>
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
)(RestaurantDetail);
