import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  drawerLabel: 'profile',
};

export default createDrawerNavigator({
  ProfileStack,
});