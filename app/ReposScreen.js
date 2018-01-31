import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'lightgray',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    paddingBottom: 10,
    marginTop: 20,
  },
  owner: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: 'lightgreen',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  ownerName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'gray',
  },
  repoInfo: {
    flex: 1,
    alignItems: 'center'
  },
  details: {
    width: 50,
  },
  repoName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  activity: {
    marginTop: 50,
  }
});

export default class ReposScreen extends React.Component {
  state = { repos: null }

  componentDidMount() {
    this.props.api.fetchRepos().then(repos => this.setState({ repos }))
  }

  navigateDetails = repoName => () => this.props.navigate('repo', { repoName })

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.owner}>
          <View style={styles.avatar}></View>
          <Text style={styles.ownerName}>{item.username}</Text>
        </View>
        <View style={styles.repoInfo}>
          <Text style={styles.repoName}>{item.name}</Text>
          <Text style={styles.starsCount}>stars {item.stars}</Text>
        </View>
        <Button title="details" style={styles.details} onPress={this.navigateDetails(item.name)} />
      </View>
    );
  }

  renderContent = () => !this.state.repos ?
    <ActivityIndicator style={styles.activity} />
    :
    <FlatList
      data={this.state.repos}
      renderItem={this.renderItem}
      keyExtractor={item => item.name}
    />;

  render() {
    const username = this.props.api.getUsername();
    const { repos } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.username}>{username}</Text>
          <Button title="logout" onPress={() => this.props.navigate('login')} />
        </View>
        <View style={styles.content}>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}