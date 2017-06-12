import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const DrawerButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{marginLeft: 15}}
    >
      <Icon
        name="menu"
        size={22}
      />
    </TouchableOpacity>
  );
};

export default DrawerButton;
