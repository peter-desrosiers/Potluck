/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';



export default class PotluckProgressItemYN extends Component<Props> {

  static defaultProps = {
  };

  render() {
      return (
          <View style={styles.container}>
            <Text>Each Item for Potluck Progress: {this.props.member.name}</Text>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

PotluckProgressItemYN.propTypes = {
  isGroupPotluck: PropTypes.bool,
  potluck: PropTypes.object
};
