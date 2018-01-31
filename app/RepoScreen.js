import React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'lightgray',
  },
  backButton: {
    width: 100,
  },
  repoName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  key: {
    width: 100,
    fontSize: 18
  },
  value: {
    flex: 1,
    textAlign: 'right'
  },
});

export default class RepoScreen extends React.Component {
  state = { repo: {} }

  componentDidMount() {
    this.props.api.fetchRepo(this.props.routeParams.repoName).then(
      repo => this.setState({ repo })
    )
  }

  navigateList = () => this.props.navigate('repos')

  render() {
    const { repo } = this.state;

    return (
      <View>
        <View style={styles.header}>
          <Button title="back" style={styles.backButton} onPress={this.navigateList} />
          <Text style={styles.repoName}>{repo.name}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.row}>
            <Text style={styles.key}>Owner</Text>
            <Text style={styles.value}>{repo.username}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Stars</Text>
            <Text style={styles.value}>{repo.stars}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Created at</Text>
            <Text style={styles.value}>{repo.created}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Updated at</Text>
            <Text style={styles.value}>{repo.updated}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Language</Text>
            <Text style={styles.value}>{repo.language}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}