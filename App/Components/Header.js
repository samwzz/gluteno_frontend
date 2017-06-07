import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  headerText: {
    fontSize: 20
  }
});

export default Header;
