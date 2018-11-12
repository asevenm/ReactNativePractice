import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  AsyncStorage,
} from 'react-native';
import { inputUserNameAsync } from '../redux/actions/UserActions';


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
    header: null,
  };

  componentDidMount() {
    this.retrieveUserInfo();
  }

  handleInput = (label, value) => {
    this.setState({
      [label]: value,
    });
  }

  retrieveUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('USERINFO');
      if (value) {
        console.log(value);
      } else {
        console.log('no user info.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { name, navigation } = this.props;
    return (
      <View>
        <Text style={styles.text}>{`I am ${name}`}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.handleInput('userName', text)}
        />
        <View>
          <Button
            onPress={() => navigation.navigate('Register')}
            title="Register"
            style={{
              marginBotton: 50,
            }}
          />
          <Button
            title="SignIn"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
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
  navigation: propTypes.instanceOf(Object),
};

UserScreen.defaultProps = {
  name: '',
  navigation: {},
};

export default connect(mapSateToProps, mapDispatchToProps)(UserScreen);
