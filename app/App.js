import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LoginScreen from './LoginScreen';
import ReposScreen from './ReposScreen';
import RepoScreen from './RepoScreen';
import Router from './Router';
import Api from './Api';

const routes = {
  login: LoginScreen,
  repos: ReposScreen,
  repo: RepoScreen,
};


export default class App extends React.Component {
  api = new Api();

  render() {
    return (
      <View style={styles.container}>
        <Router routes={routes} initRoute="login" api={this.api} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    margin: 15,
  },
});
