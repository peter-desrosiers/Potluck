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
import { StackNavigator, TabNavigator} from 'react-navigation';


import HomeScreen from './Screens/HomeScreen'
import PotluckDetailScreen from './Screens/PotluckDetailScreen'
import AddPotluckScreen from './Screens/AddPotluckScreen'
import AddPotluckGroup from './Screens/AddPotluckScreenGroup'
import AddPotluckPersonal from './Screens/AddPotluckScreenPersonal'

import AccountInfoScreen from './Screens/AccountInfoScreen'

export const HomeStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    PotluckDetailScreen: {
      screen: PotluckDetailScreen,
    },
    AddPotluckScreen:{
      screen: AddPotluckScreen
    },
    AddPotluckGroup: {
      screen: AddPotluckGroup,
    },
    AddPotluckPersonal:{
      screen: AddPotluckPersonal
    }
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export const Tabs = TabNavigator({
  Home: { screen: HomeStack },
  Account: { screen: AccountInfoScreen}
});

export const AddPotluckStack = StackNavigator({
  AddPotluckScreen: {
    screen: AddPotluckScreen,
  },
  AddPotluckGroup: {
    screen: AddPotluckGroup,
  },
  AddPotluckPersonal:{
    screen: AddPotluckPersonal
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  PotluckDetailScreen: {
    screen: PotluckDetailScreen,
  }
},
{
  initialRouteName: 'AddPotluckScreen',
})

export const Root = StackNavigator({
  Tabs:{
    screen: Tabs
  },
  AddPotluckScreen: {
    screen:AddPotluckStack
  },
},
  {
    model: 'modal',
    headerMode: 'none'



})

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
