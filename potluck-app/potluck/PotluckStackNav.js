/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';


import HomeScreen from './Screens/HomeScreen'
import RandomScreen from './Screens/RandomScreen'

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    RandomScreen: {
      screen: RandomScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);


export default class PotluckStackNav extends Component<Props> {


  render(){
    return <RootStack />;

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
