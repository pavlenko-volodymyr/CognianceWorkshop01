import React from 'react';
import { View } from 'react-native';

export default class Router extends React.Component {
  state = {
    routeName: null,
    routeParams: {},
  }

  navigate = (routeName, routeParams = {}) => this.setState({ routeName, routeParams })
  
  render() {
    const { routes, initRoute } = this.props;
    const { routeName, routeParams } = this.state;
    const ScreenComponent = routes[routeName || initRoute];

    return (
      <View>
        <ScreenComponent routeParams={routeParams} routeName={routeName} />
      </View>
    );
  }
}