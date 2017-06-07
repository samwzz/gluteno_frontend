import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootContainer from './RootContainer';
import Reducers from '../Reducers';

class App extends Component {
  render() {
    return(
      <Provider store={createStore(Reducers)}>
        <RootContainer />
      </Provider>
    );
  }
}


export default App;
