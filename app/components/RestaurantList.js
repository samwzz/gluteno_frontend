import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, fetchRestaurant } from '../actions/RestaurantActions';
import { selectRestaurants } from '../reducers/selectors';
import { View,
  Text,
  FlatList,
  ListItem,
  StyleSheet
} from 'react-native';

class RestaurantList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    console.log(this.props.restaurants);
    return (
      <View>
        <Text>Restaurant list!</Text>
        <FlatList
          data={this.props.restaurants}
          renderItem={({item}) =>
            <Text key={item.id}>{item.name}</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
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
)(RestaurantList);
