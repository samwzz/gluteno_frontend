import React from 'react';
import { View } from 'react-native';
import colors from '../../config/colors';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
