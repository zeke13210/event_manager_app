import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../components/HomeScreen';
import AddEventScreen from '../components/AddEventScreen';
import SettingsScreen from '../components/SettingsScreen';
import ViewEventsScreen from '../components/ViewEventsScreen';

/*const config = Platform.select({
 web: { headerMode: 'screen' },
 default: {},
}); */
/*
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = ''; */

/*
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = ''; */

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Home'
      })
    },
    AddEvent: {
      screen: AddEventScreen,
      navigationOptions: () => ({
        title: 'Add Event'
      })
    },
    ViewEvent: {
      screen: ViewEventsScreen,
      navigationOptions: ()=> ({
        title: 'View Event'
      })
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ()=> ({
        title: 'Settings'
      })
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'adduser';
        } else if (routeName === 'ViewEvent') {
          iconName = 'ios-person';
        } else if (routeName === 'AddEvent') {
          iconName = 'ios-add'
        } else if (routeName === 'Settings') {
          iconName = 'ios-person'
        }
        return <Ionicons name={iconName} size={20} color={tintColor} />
      }

    }),
    tabBarOptions: {
      activeTintColor: '#FF7200', //orange color
      inactiveTintColor: '#72e086', // green color
      style: {
        backgroundColor: '#0053d8' //navy blue
      }
    },
    
  });

export default tabNavigator;
