import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootContainer from './RootContainer';

class App extends Component {
  render() {
    return(
      <RootContainer />
    );
  }
}


export default App;
