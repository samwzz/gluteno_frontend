import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/Slides';
import colors from '../config/colors';

const SLIDE_DATA = [
  { text: 'Welcome to Gluteno', color: colors.orange },
  { text: 'Use this app to find a gluten free restaurant', color: colors.brown },
  { text: 'Set your location, then swipe away', color: colors.tan }
];

class Welcome extends Component {
  componentWillMount() {
    AsyncStorage.getItem("access_token")
    .then(token => {
      console.log(token);
      if (token) {
        this.props.navigation.navigate('Map');
      }
    });
  }

  onSlidesComplete() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)} />
      </View>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

export default connect(
  mapStateToProps,
  null
)(Welcome);
