import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

import AuthForm from '../Components/AuthForm';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';

class RootContainer extends Component {
  render() {
    return(
      <View>

        <Header />
        <AuthForm />

        <Header headerText={"See-n-Me"} />
        <SignUp />

      </View>
    );
  }
}

export default RootContainer;
