import React, { Component } from 'react';
import { View,
  Text,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

const ACCESS_TOKEN = "access_token";

class Settings extends Component {
  onLogoutPressed() {
    AsyncStorage.removeItem("access_token")
    .then(result => this.setState({ result: "" }))
    .then(() => this.props.navigation.navigate('Auth'));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onLogoutPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center'
  },
});

export default Settings;
