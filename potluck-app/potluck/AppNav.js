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
  View,
  Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import PotluckDetailScreen from './Screens/PotluckDetailScreen'
import AccountInfoScreen from './Screens/AccountInfoScreen'
import PotluckStackNav from './PotluckStackNav'


  export default TabNavigator({
    Home: { screen: PotluckStackNav },
    Account: { screen: AccountInfoScreen}
  });

const styles = StyleSheet.create({

});
