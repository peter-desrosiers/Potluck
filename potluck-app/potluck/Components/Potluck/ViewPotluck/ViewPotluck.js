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
import PropTypes from 'prop-types'



export default class ViewPotluck extends Component<Props> {

  static defaultProps = {
    isGroupPotluck: false
  }

  render() {
    let isGroupPotluck = this.props.isGroupPotluck;

    if(isGroupPotluck===true){
      return (
          <View style={styles.container}>
            <Text>BYE</Text>

          </View>
        );
    }
    return (
        <View style={styles.container}>
          <Text>YOOOO</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});

ViewPotluck.propTypes = {
  isGroupPotluck: PropTypes.bool
};
