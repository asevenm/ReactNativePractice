import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {
  Text, TextInput, View, StyleSheet, Button,
} from 'react-native';
import { signUp } from '../../redux/actions/UserActions';

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

class LoginScreen extends PureComponent {
  hanldeInput = (label, value) => {
    this.setState({
      [label]: value,
    });
  }

  handleLogin = () => {
    const { userName, password } = this.state;
    const { onLogin } = this.props;
    onLogin({ userName, password });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>userName</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.hanldeInput('userName', text)}
          />
        </View>
        <View>
          <Text style={styles.text}>password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.hanldeInput('password', text)}
          />
        </View>
        <Button
          title="Login"
          onPress={this.handleLogin}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { UserReducer } = state;
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  onLogin: params => dispatch(signUp(params)),
});

LoginScreen.propTypes = {
  onLogin: propTypes.func,
};

LoginScreen.defaultProps = {
  onLogin: h => h,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(LoginScreen));
