import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

class ProfileScreen extends PureComponent {
  render() {
    return (
      <View>
        <Text>this is Profile screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go back Home"
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
