import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { inputUserNameAsync } from '../redux/actions/UserActions';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class UserScreen extends Component {
  static navigationOptions = {
    title: 'User',
  };

  render() {
    const { name, inputUserName } = this.props;
    return (
      <View>
        <Text style={styles.text}>{`I am ${name}`}</Text>
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


const mapSateToProps = (state) => {
  const { UserReducer } = state;
  const { name } = UserReducer;
  return {
    name,
  };
};

const mapDispatchToProps = dispatch => ({
  inputUserName: name => dispatch(inputUserNameAsync(name)),
});

UserScreen.propTypes = {
  name: propTypes.string,
  inputUserName: propTypes.func,
};

UserScreen.defaultProps = {
  name: '',
  inputUserName: h => h,
};

export default connect(mapSateToProps, mapDispatchToProps)(UserScreen);
