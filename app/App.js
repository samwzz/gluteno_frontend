import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RootContainer from './RootContainer';
import { View } from 'react-native';

class App extends Component {
  render() {
    const store = configureStore();

    return(
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RootContainer />
        </View>
      </Provider>
    );
  }
}


export default App;
