import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginNavigation from './LoginNavigation';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
export default createAppContainer(
  createSwitchNavigator({
    /*
      Below are the different stacks that the user goes through in order to reach the content of the application
      1. Auth -- Validate if user is logged in
      2. Login -- Have user either register or sign in
      3. Main -- Contains main functionality to add events

    */
    Main: MainTabNavigator,
    Login: LoginNavigation,
    Auth: AuthLoadingScreen

  },
    {
      initialRouteName: 'Auth'
    })
);
