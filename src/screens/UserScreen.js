import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput } from 'react-native';
import { inputUserNameAsync } from '../redux/actions/UserActions';
import {
  View,
  Text,
} from 'react-native';

class UserScreen extends Component {
  static navigationOptions = {
    title: 'User',
  };

  render() {
    const { UserReducer: { name }, inputUserName } = this.props;
    return (
      <View>
        <Text style={styles.text}>I am {name}.</Text>
        <TextInput 
          style={{
            padding: 10,
            paddingTop: 50,
          }} 
          onChangeText={text => inputUserName(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const mapSateToProps = (state) => {
  const { UserReducer } = state;
  return {
    UserReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputUserName: (name) => dispatch(inputUserNameAsync(name)),
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(UserScreen);