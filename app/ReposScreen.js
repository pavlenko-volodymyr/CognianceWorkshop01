import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

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
  }
});

export default class ReposScreen extends React.Component {
  state = {
    repos: [
      {
        name: 'test repo 1',
        stars: 10,
        owner: {
          username: 'test owner 1'
        },
        created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        language: 'javascript',
      },
      {
        name: 'test repo 2',
        stars: 10,
        owner: {
          username: 'test owner 1'
        },
        created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        language: 'javascript',
      },
      {
        name: 'test repo 3',
        stars: 10,
        owner: {
          username: 'test owner 2'
        },
        created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        language: 'javascript',
      },
      {
        name: 'test repo 4',
        stars: 10,
        owner: {
          username: 'test owner 2'
        },
        created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        language: 'javascript',
      },
      {
        name: 'test repo 5',
        stars: 10,
        owner: {
          username: 'test owner 5'
        },
        created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        language: 'javascript',
      },
      {
        name: 'test repo 6',
        stars: 10,
        owner: {
          username: 'test owner 2'
        },
        created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        language: 'javascript',
      },
      {
        name: 'test repo 7',
        stars: 10,
        owner: {
          username: 'test owner 5'
        },
        created: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        updated: 'Wed Jan 31 2018 23:48:32 GMT+0200 (EET)',
        language: 'javascript',
      },
    ],
  }

  navigateDetails = repo => () => this.props.navigate('repo', { repo })

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.owner}>
          <View style={styles.avatar}></View>
          <Text style={styles.ownerName}>{item.owner.username}</Text>
        </View>
        <View style={styles.repoInfo}>
          <Text style={styles.repoName}>{item.name}</Text>
          <Text style={styles.starsCount}>stars {item.stars}</Text>
        </View>
        <Button title="details" style={styles.details} onPress={this.navigateDetails(item)} />
      </View>
    );
  }

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
          <FlatList
            data={repos}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
    );
  }
}