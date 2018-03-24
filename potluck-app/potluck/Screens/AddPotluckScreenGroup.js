import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddPotluckGroup from '../Components/Potluck/AddPotluck/AddPotluckGroup';

export default class PotluckDetailScreen extends Component<Props> {

  static navigationOptions = {
    title: 'Add Group Potluck',
  };

  render(){
    return(
      <View>
        <AddPotluckGroup loggedInUser={this.props.navigation.state.params.loggedInUser}/>
      </View>
    )
  }
}
