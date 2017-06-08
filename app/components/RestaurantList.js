import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, fetchRestaurant } from '../actions/RestaurantActions';
import { selectRestaurants } from '../reducers/selectors';
import { View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

class RestaurantList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Restaurant list!</Text>
        <FlatList
          data={this.props.restaurants}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
