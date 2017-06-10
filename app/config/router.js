import { TabNavigator } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export const MainNavigator = TabNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  AuthScreen: {
    screen: AuthScreen
  }
});
