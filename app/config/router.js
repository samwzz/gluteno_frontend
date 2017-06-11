import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantAddScreen from '../screens/RestaurantAddScreen';

export const MainNavigator = TabNavigator({
  welcome: {
    screen: WelcomeScreen
  },
  auth: {
    screen: AuthScreen
  },
  main: {
    screen: TabNavigator({
      map: {
        screen: MapScreen
      },
      deck: {
        screen: DeckScreen
      },
      restaurant: {
        screen: StackNavigator({
          details: {
            screen: TabNavigator({
              detail: {
                screen: RestaurantScreen
              }
            })
          }
        })
      },
      add: {
        screen: RestaurantAddScreen
      }
    })
  }
});
