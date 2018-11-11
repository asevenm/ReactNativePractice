import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
// import DrawNavigator from './DrawerNavigator';

export default createSwitchNavigator({
  Main: MainTabNavigator,
  // Draw: DrawNavigator,
});