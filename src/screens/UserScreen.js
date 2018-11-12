import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import { inputUserNameAsync, register } from '../redux/actions/UserActions';
import userActionTypes from '../redux/actionTypes/userActionTypes';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 50,
  },
});

class UserScreen extends Component {
  static navigationOptions = {
    title: 'User',
  };

  handleInput = (label, value) => {
    this.setState({
      [label]: value,
    });
  }

  handleRegister = () => {
    const { onRegister } = this.props;
    const { userName, password, email } = this.state;
    onRegister({ userName, password, email });
  }

  render() {
    const { name, inputUserName } = this.props;
    return (
      <View>
        <Text style={styles.text}>{`I am ${name}`}</Text>
        <View>
          <Text>userName</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.handleInput('userName', text)}
          />
        </View>
        <View>
          <Text>email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.handleInput('email', text)}
          />
        </View>
        <View>
          <Text>password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.handleInput('password', text)}
          />
        </View>

        <Button title="register" onPress={this.handleRegister} />
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
  onRegister: params => dispatch(register(params)),
});

UserScreen.propTypes = {
  name: propTypes.string,
  inputUserName: propTypes.func,
  onRegister: propTypes.func,
};

UserScreen.defaultProps = {
  name: '',
  inputUserName: h => h,
  onRegister: h => h,
};

export default connect(mapSateToProps, mapDispatchToProps)(UserScreen);
