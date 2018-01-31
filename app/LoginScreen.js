import React from 'react';
import { Text, View, TextInput, Image, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  content: {
    alignItems: 'center',
  },
  logo: {},
  inputContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  input: {
    height: 40,
    width: 300,
  },
  button: {
  },
  error: {
    color: 'red',
  },
});

const logoSource = require('./logo.png');

export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
    error: null
  }
  
  onSubmit = () => {
    this.setState({ error: null })

    if (!this.state.username) {
      this.setState({ error: 'username is required' })
    } else if (!this.state.password) {
      this.setState({ error: 'password is required' })
    } else {
      this.props.navigate('repos', { username: this.state.username })
    }
  }

  onInputChange = fieldName => value => this.setState({ [fieldName]: value })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image source={logoSource} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="username"
              onChangeText={this.onInputChange('username')}
              value={this.state.username}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="password"
              onChangeText={this.onInputChange('password')}
              value={this.state.password}
            />
          </View>
          { this.state.error && <Text style={styles.error}>{this.state.error}</Text> }
          <View style={styles.button}>
            <Button title="login" onPress={this.onSubmit} />
          </View>
        </View>
      </View>
    );
  }
}