import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import AuthForm from '../Components/AuthForm';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: ""
    };
  }

  update = (field) => text => {
    this.setState({ [field]: text })
  }

  render() {
    return (
      <View>

        <Text>
          Logo Here
        </Text>

        <View>
          <AuthForm
            placeholder='First Name'
            onChangeText={this.update('fname')}
            value={this.state.fname}
            />
          <AuthForm
            placeholder='Last Name'
            onChangeText={this.update('lname')}
            value={this.state.lname}
            />
          <AuthForm
            placeholder='Email'
            onChangeText={this.update('email')}
            value={this.state.email}
            />
          <AuthForm
            placeholder='Username'
            onChangeText={this.update('username')}
            value={this.state.username}
            />
          <AuthForm
            placeholder='Password'
            onChangeText={this.update('password')}
            value={this.state.password}
            />
          <Button
            title='SIGN UP'
            onPress={this.handleSignUp}
            />
        </View>
      </View>
    );
  }
}

// Pass in props and dispatches here


export default SignUp;
