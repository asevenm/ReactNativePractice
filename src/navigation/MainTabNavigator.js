import React from 'react';
import { createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/userScreens/Login';
import RegisterScreen from '../screens/userScreens/Register';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: <Icon name="home" size={30} />,
};

const UserStack = createStackNavigator({
  User: UserScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
}, {
  initialRouteName: 'User',
});

UserStack.navigationOptions = {
  tabBarLabel: 'User',
  tabBarIcon: <Icon name="user" size={30} />,
};

const MessageStack = createStackNavigator({
  Message: MessageScreen,
});

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: <Icon name="medium" size={30} />,
};

const bottomStack = createBottomTabNavigator({
  HomeStack,
  MessageStack,
  UserStack,
});

const profileStack = createStackNavigator({
  Profile: ProfileScreen,
});

profileStack.navigationOptions = {
  drawerLabel: 'profile',
};

export default createDrawerNavigator({
  main: bottomStack,
  profile: profileStack,
});
