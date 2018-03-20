import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ViewPotluck from '../Components/Potluck/ViewPotluck/ViewPotluck';

export default class PotluckDetailScreen extends Component<Props> {

  render(){
    return(
      <View>
        <Text>Add Potluck</Text>
      </View>
    )
  }
}
