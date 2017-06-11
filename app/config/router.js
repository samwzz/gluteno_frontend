import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Auth from '../screens/Auth';
import Welcome from '../screens/Welcome';
import Map from '../screens/Map';
import Deck from '../screens/Deck';
import RestaurantDetail from '../screens/RestaurantDetail';
import RestaurantAdd from '../screens/RestaurantAdd';

export const MainNavigator = TabNavigator({
  welcome: {
    screen: Welcome
  },
  auth: {
    screen: Auth
  },
  main: {
    screen: TabNavigator({
      map: {
        screen: Map
      },
      deck: {
        screen: Deck
      },
      restaurant: {
        screen: StackNavigator({
          details: {
            screen: TabNavigator({
              detail: {
                screen: RestaurantDetail
              }
            })
          }
        })
      },
      add: {
        screen: RestaurantAdd
      }
    })
  }
}, {
  navigationOptions: {
    // tabBarVisible: false
  },
  lazy: true
});

export const Tabs = TabNavigator({
  deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: "Deck",
      tabBarIcon: ({ tintColor }) =>
        <Icon name="list" size={35} color={tintColor} />,
    }
  },
  map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: "Map",
      tabBarIcon: ({ tintColor }) =>
        <Icon name="map" size={35} color={tintColor} />,
    }
  }
});
