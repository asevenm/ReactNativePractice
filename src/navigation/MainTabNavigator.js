import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import MessageScreen from '../screens/MessageScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: <Icon name="home" size={30} />
};

const UserStack = createStackNavigator({
  User: UserScreen,
});

UserStack.navigationOptions = {
  tabBarLabel: 'User',
  tabBarIcon: <Icon name="user" size={30} />
};

const MessageStack = createStackNavigator({
  Message: MessageScreen,
});

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: <Icon name="message" size={30} />
}

export default createBottomTabNavigator({
  HomeStack,
  MessageStack,
  UserStack,
});