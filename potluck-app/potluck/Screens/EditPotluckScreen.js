import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation';

import EditPotluckGroupStep2 from '../Components/Potluck/EditPotluck/EditPotluckGroupStep2';
import EditPotluckPersonalStep2 from '../Components/Potluck/EditPotluck/EditPotluckPersonalStep2';
import EditPotluckStep1 from '../Components/Potluck/EditPotluck/EditPotluckStep1';

export default class EditPotluckScreen extends Component<Props> {

  static navigationOptions = {
    header: null,
  };


  updatePotluck(value){
    console.log(this.props.navigation.state.params)
    this.props.navigation.navigate('EditPotluckScreenStep2',{
      value: value,
      oldPotluck: this.props.navigation.state.params.potluck,
      loggedInUser: this.props.navigation.state.params.loggedInUser,
      potluckID: this.props.navigation.state.params.potluckID,
    })
  }

  cancelUpdatePotluck(){
    this.props.navigation.goBack()


  }

  render(){
    let platform = Platform.OS;
    let platformSpecificStyle = {}
    return(
      <View style={styles.container}>
      <EditPotluckStep1 potluck = {this.props.navigation.state.params.potluck} cancelUpdatePotluck = {this.cancelUpdatePotluck.bind(this)} updatePotluck = {this.updatePotluck.bind(this)} />
      </View>
    )
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
