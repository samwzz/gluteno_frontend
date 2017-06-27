import React from 'react';
// import { Button } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';

import Auth from '../screens/Auth';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';
import Map from '../screens/Map';
import RestaurantList from '../screens/RestaurantList';
import RestaurantDetail from '../screens/RestaurantDetail';
import RestaurantAdd from '../screens/RestaurantAdd';
import Settings from '../screens/Settings';
import MenuButton from '../components/common/MenuButton';
import colors from './colors';

const LeftMenuButton = (navigate) => (
  <MenuButton title="Open" onPress={() => navigate('DrawerOpen')} />
);

export const RestaurantsStack = StackNavigator({
  Restaurants: {
    screen: RestaurantList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Restaurants',
      headerLeft: LeftMenuButton(navigation.navigate)
    })
  },
  Detail: {
    screen: RestaurantDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    })
  }
});

export const RestaurantAddStack = StackNavigator({
  RestaurantAdd: {
    screen: RestaurantAdd,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Add Restaurant',
      headerLeft: LeftMenuButton(navigation.navigate)
    })
  },
});

export const MapStack = StackNavigator({
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Map',
      headerLeft: LeftMenuButton(navigation.navigate)
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
},{
  navigationOptions: {
    // tabBarVisible: false
  },
  lazy: true
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

export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      headerRight: <Button backgroundColor={colors.tan} title="Sign up" onPress={() => navigation.navigate('SignUp')} />
    })
  },
});

export const SignUpStack = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      headerRight: <Button backgroundColor={colors.tan} title="Login" onPress={() => navigation.navigate('Login')} />
    })
  },
});

export const MainNavigator = TabNavigator({
  Welcome: {
    screen: Welcome
  },
  Login: {
    screen: LoginStack
  },
  SignUp: {
    screen: SignUpStack
  },
  Main: {
    screen: Root,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({ tintColor }) => <Icon name="directions-run" size={35} color={tintColor} />,
    }
  }
}, {
  navigationOptions: {
    tabBarVisible: false
  },
  lazy: true
});
