import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <AppNavigator />
    </View>
  </Provider>
);
