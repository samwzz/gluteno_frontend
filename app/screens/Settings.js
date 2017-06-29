import React, { Component } from 'react';
import { View,
  Text,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import colors from '../config/colors';

const ACCESS_TOKEN = "access_token";

class Settings extends Component {
  onLogoutPressed() {
    AsyncStorage.removeItem("access_token")
    .then(result => this.setState({ result: "" }))
    .then(() => this.props.navigation.navigate('Login'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          See you soon!
        </Text>
        <TouchableHighlight
          onPress={this.onLogoutPressed.bind(this)}
          style={styles.button}
          underlayColor={colors.brown}>
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
  headerText: {
    fontSize: 24
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: colors.orange,

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
