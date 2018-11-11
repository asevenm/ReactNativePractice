import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

export default createSwitchNavigator({
  Main: MainTabNavigator,
});