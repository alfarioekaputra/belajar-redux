import React, { Component } from 'react';
import { Text } from 'react-native';

import NewQuote from '../components/NewQuote';

class PushedScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <NewQuote navigator={this.props.navigator} {...this.props} />;
  }
}

export default PushedScreen;
