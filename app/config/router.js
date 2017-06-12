import React from 'react';
import { Button } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Auth from '../screens/Auth';
import Welcome from '../screens/Welcome';
import Map from '../screens/Map';
import RestaurantList from '../screens/RestaurantList';
import RestaurantDetail from '../screens/RestaurantDetail';
import RestaurantAdd from '../screens/RestaurantAdd';
import Settings from '../screens/Settings';
import DrawerButton from '../components/common/DrawerButton';

// export const MainNavigator = TabNavigator({
//   Welcome: {
//     screen: Welcome
//   },
//   Auth: {
//     screen: Auth
//   },
//   Main: {
//     screen: TabNavigator({
//       map: {
//         screen: Map
//       },
//       deck: {
//         screen: Restaurants
//       },
//       restaurant: {
//         screen: StackNavigator({
//           details: {
//             screen: TabNavigator({
//               detail: {
//                 screen: RestaurantDetail
//               }
//             })
//           }
//         })
//       },
//       add: {
//         screen: RestaurantAdd
//       }
//     })
//   }
// }, {
//   navigationOptions: {
//     // tabBarVisible: false
//   },
//   lazy: true
// });

const LeftDrawerButton = (navigate) => (
  <DrawerButton title="Open" onPress={() => navigate('DrawerOpen')} />
);

export const RestaurantsStack = StackNavigator({
  Restaurants: {
    screen: RestaurantList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Restaurants',
      headerLeft: LeftDrawerButton(navigation.navigate)
    })
  },
  Detail: {
    screen: RestaurantDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
      headerLeft: LeftDrawerButton(navigation.navigate)
    })
  }
});

export const RestaurantAddStack = StackNavigator({
  RestaurantAdd: {
    screen: RestaurantAdd,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Add Restaurant',
      headerLeft: LeftDrawerButton(navigation.navigate)
    })
  },
});

export const MapStack = StackNavigator({
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Map',
      headerLeft: LeftDrawerButton(navigation.navigate)
    })
  }
});

export const Tabs = TabNavigator({
  Restaurants: {
    screen: RestaurantsStack,
    navigationOptions: {
      tabBarLabel: 'Restaurants',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    }
  },
  Map: {
    screen: MapStack,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor} />,
    }
  },
  RestaurantAdd: {
    screen: RestaurantAddStack,
    navigationOptions: {
      tabBarLabel: 'Add location',
      tabBarIcon: ({ tintColor }) => <Icon name="add-location" size={35} color={tintColor} />,
    }
  }

});

// export const SettingsStack = StackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings'
//     }
//   }
// });

export const SettingsDrawer = DrawerNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
    }
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsDrawer
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});
