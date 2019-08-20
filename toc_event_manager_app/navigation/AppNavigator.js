import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import UserTabNavigator from './UserTabNavigator';
import LoginNavigation from './LoginNavigation';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import AdminTabNavigator from './AdminTabNavigator';
import RoleAuthLoadingScreen from '../components/RoleAuthLoadingScreen';

export default createAppContainer(
  createSwitchNavigator({
    /*
      Below are the different stacks that the user goes through in order to reach the content of the application
      1. Auth -- Validate if user is logged in
      2. Login -- Have user either register or sign in
      3. Main -- Contains main functionality to add events

    */
    User: UserTabNavigator,
    Login: LoginNavigation,
    Admin: AdminTabNavigator,
    Role: RoleAuthLoadingScreen,
    Auth: AuthLoadingScreen

  },
    {
      initialRouteName: 'Auth'
    })
);
