import React, { Component } from 'react';
import { View } from 'react-native';
import SignUp from '../Containers/SignUp';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <SignUp />
      </View>
    );
  }
}

export default AuthForm;
