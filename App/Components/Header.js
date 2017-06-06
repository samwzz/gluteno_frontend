import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles/HeaderStyles';

const Header = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
