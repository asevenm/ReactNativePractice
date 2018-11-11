import React from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  ScrollView,
  Text,
  View,
  StyleSheet,
  ListView
}  from 'react-native';
import { fetchLanguageList } from '../redux/actions/HomeActions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    page: 1,
    pageSize: 10,
  };

  componentDidMount() {
    const { page, pageSize } = this.state;
    this.props.fetchLanguageList({ page, pageSize });
  }

  render() {
    const { time, languageList } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>Hello, Aseven.</Text>
          <Text>{time}</Text>
          {/* <ListView
            dataSource={languageList} 
            renderRow={item => <Text>{item.name}</Text>}
          /> */}
          {
            languageList.map(item => (
              <Text key={item.id}>{item.name}</Text>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

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

const mapStateToProps = (state) => {
  const { HomeReducer } = state;
  const { languageList, time } = HomeReducer;
  return {
    languageList,
    time,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLanguageList: (params) => dispatch(fetchLanguageList(params))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);