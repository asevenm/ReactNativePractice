import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  Text, View, TextInput, Button, StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { register } from '../../redux/actions/UserActions';

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

class RegisterScreen extends PureComponent {
  state = {

  }

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
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>userName</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.handleInput('userName', text)}
          />
        </View>
        <View>
          <Text style={styles.text}>email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.handleInput('email', text)}
          />
        </View>
        <View>
          <Text style={styles.text}>password</Text>
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

const mapStateToProps = (state) => {
  const { UserReducer } = state;
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  onRegister: params => dispatch(register(params)),
});

RegisterScreen.propTypes = {
  onRegister: propTypes.func,
};

RegisterScreen.defaultProps = {
  onRegister: h => h,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(RegisterScreen));
