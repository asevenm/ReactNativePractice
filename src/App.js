import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
