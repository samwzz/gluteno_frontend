import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createTransition, FlipX } from 'react-native-transition';

const Transition = createTransition(FlipX);

class Splash extends Component {
  this.switch = () => {
    Transition.show(
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>This is another view</Text>
      </View>
    );
  }

  render() {
    return (
      <Transition>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>This the initial View</Text>
          <Button title="Press to Switch" onPress={this.switch} />
        </View>
      </Transition>
    );
  }
}
