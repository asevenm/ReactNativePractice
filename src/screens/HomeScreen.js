import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ListView,
  Button,
  Picker,
} from 'react-native';
import { fetchLanguageList } from '../redux/actions/HomeActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {

  }

  state = {
    page: 1,
    pageSize: 10,
    language: 'js',
  };

  componentDidMount() {
    const { page, pageSize } = this.state;
    this.props.fetchLanguageList({ page, pageSize });
  }

  render() {
    console.log(this.props);
    const { time, languageList, navigation } = this.props;
    const { language } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>Hello, Aseven.</Text>
          <Text>{time}</Text>
          {/* <ListView
            dataSource={languageList}
            renderRow={item => <Text>{item.name}</Text>}
          /> */}
          <Button
            onPress={() => navigation.navigate('Profile')}
            title="Go to profile screen"
          />
          <Picker
            selectedValue={language}
            style={{ height: 50, width: 100 }}
            onValueChange={itemValue => this.setState({ language: itemValue })}
          >
            {
              languageList.map(item => (
                <Picker.Item
                  label={item.name}
                  value={item.name}
                  key={item.id}
                />
              ))
            }
          </Picker>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { HomeReducer } = state;
  const { languageList, time } = HomeReducer;
  return {
    languageList,
    time,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLanguageList: params => dispatch(fetchLanguageList(params)),
});

HomeScreen.propTypes = {
  time: propTypes.string,
  languageList: propTypes.instanceOf(Array),
  fetchLanguageList: propTypes.func,
  navigation: propTypes.instanceOf(Object).isRequired,
};

HomeScreen.defaultProps = {
  time: '',
  languageList: [],
  fetchLanguageList: h => h,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
