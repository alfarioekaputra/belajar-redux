import React, { Component } from 'react';
import { Text } from 'react-native';

import Home from '../components/home';

class FirstTabScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Home navigator={this.props.navigator} />;
  }
}

export default FirstTabScreen;
