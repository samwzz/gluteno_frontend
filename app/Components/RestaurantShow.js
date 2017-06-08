import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View,
  Text,
  FlatList,
  ListItem,
  StyleSheet
} from 'react-native';
import SearchBar from 'react-native-search-bar';

class RestaurantShow extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.refs.searchBar.focus();
  }

  render() {
    return (
      <View>
        <SearchBar
        	ref='searchBar'
        	placeholder='Search'
        	onChangeText={...}
        	onSearchButtonPress={this.refs.searchBar.unFocus}
        	onCancelButtonPress={...}
          />

        {/*
          <View>
          <RestaurantImage />
          <UserGeneratedData />
          </View>
          <RestaurantDetail />
          <Map />
        */}
      </View>
    );
  }

}

export default RestaurantShow;
