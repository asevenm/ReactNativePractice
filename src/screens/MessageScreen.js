import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class MessageScreen extends Component {
  static navigationOptions = {
    title: 'Message',
  };

  render() {
    return (
      <View>
        <Text>It is Message screen.</Text>
      </View>
    );
  }
}