import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LoginScreen from './LoginScreen';
import ReposScreen from './ReposScreen';
import RepoScreen from './RepoScreen';
import Router from './Router';

const routes = {
  login: LoginScreen,
  repos: ReposScreen,
  repo: RepoScreen,
};


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router routes={routes} initRoute="login" />
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
