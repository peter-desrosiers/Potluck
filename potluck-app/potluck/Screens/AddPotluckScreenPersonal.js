import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddPotluckPersonal from '../Components/Potluck/AddPotluck/AddPotluckPersonal';
import { NavigationActions } from 'react-navigation';

export default class PotluckDetailScreen extends Component<Props> {

  goBackToHome(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });
    this.props.navigation.dispatch(resetAction);

  }

  render(){
    return(
      <View>
      <AddPotluckPersonal goBackToHome={this.goBackToHome.bind(this)} loggedInUser={this.props.navigation.state.params.loggedInUser}/>
      </View>
    )
  }
}
