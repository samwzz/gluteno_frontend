import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from '../components/Login';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to See N Me', color: '#03A9F4' },
  { text: 'Use this app to find a gluten free restaurant', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  onSlidesComplete() {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)} />
      </View>
    );
  }
}

export default WelcomeScreen;
