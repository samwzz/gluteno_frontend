import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, fetchRestaurant } from '../actions/RestaurantActions';
import { selectRestaurants } from '../reducers/selectors';
import { View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import colors from '../config/colors';
import { List, ListItem } from 'react-native-elements';

class RestaurantList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRestaurants();
      // console.log(this.props.currentUser);
  }

  componentDidUpdate() {

  }

  onLearnMore(restaurant) {
   this.props.navigation.navigate('Detail', restaurant);
  }

  render() {
    // console.log(this.props.restaurants);
    const { restaurants } = this.props;
    return (
      <ScrollView>
        <List>
          {restaurants && restaurants.map((restaurant) => (
            <ListItem
              key={restaurant.id}
              title={restaurant.name}
              onPress={() => this.onLearnMore.bind(this)(restaurant)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

// <View>
//   <Text>Restaurant list!</Text>
//   <FlatList
//     style={{backgroundColor: colors.background }}
//     data={this.props.restaurants}
//     renderItem={({item}) =>
//       <View>
//         <ListItem restaurant={item} onPress={() => this.handleRowPress(item)} />
//       </View>
//     }
//     keyExtractor={(item) => item.id}
//   />
// </View>

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
  restaurants: selectRestaurants(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantList);
