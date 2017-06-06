import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/HeaderStyles';

const Header = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
