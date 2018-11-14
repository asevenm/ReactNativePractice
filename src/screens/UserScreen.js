import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { inputUserNameAsync } from '../redux/actions/UserActions';
import CustomButton from '../components/button/CustomButton';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
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
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  customButton: {
    backgroundColor: '#0099ff',
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
      <View style={styles.container}>
        <Text style={styles.text}>{`I am ${name}`}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.handleInput('userName', text)}
        />
        <View styles={styles.buttons}>
          <CustomButton
            text="Register"
            style={{
              ...styles.customButton,
              marginBottom: 20,
            }}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Register</Text>
          </CustomButton>
          <CustomButton
            text="SignIn"
            style={{
              ...styles.customButton,
            }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>SignIn</Text>
          </CustomButton>
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
