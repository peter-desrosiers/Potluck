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
import moment from 'moment';

import EditPotluckGroupStep2 from '../Components/Potluck/EditPotluck/EditPotluckGroupStep2';
import EditPotluckPersonalStep2 from '../Components/Potluck/EditPotluck/EditPotluckPersonalStep2';
import EditPotluckStep1 from '../Components/Potluck/EditPotluck/EditPotluckStep1';

export default class EditPotluckScreen extends Component<Props> {

  static navigationOptions = {
    header: null,
  };



  cancelUpdatePotluck(){
    this.props.navigation.goBack()

  }

  submitPotluck(potluckInfo){
    var newPotluck = this.props.navigation.state.params.potluck;


		newPotluck.potluckName = potluckInfo.potluckName
		newPotluck.potluckDescription = potluckInfo.potluckDescription
    newPotluck.isGroupPotluck = potluckInfo.isGroupPotluck
    newPotluck.showPercentage = potluckInfo.isGroupPotluck?potluckInfo.showPercentage:false
    newPotluck.pricePerPerson = potluckInfo.pricePerPerson
    newPotluck.numberOfUsers = potluckInfo.isGroupPotluck?potluckInfo.numberOfUsers:1
    newPotluck.dateDue = moment(potluckInfo.dateDue).format("YYYY-MM-DD")
		newPotluck.adminUsername = this.props.navigation.state.params.loggedInUser.username,
    newPotluck.members = potluckInfo.members
    this.updatePotluck(newPotluck)

  }

  goBackToHome(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });
    this.props.navigation.dispatch(resetAction);

  }

  updatePotluck(newPotluck){
    potluckID = this.props.navigation.state.params.potluckID
    console.log(potluckID)
    console.log(newPotluck)
    fetch('http://localhost:5000/potlucks/potluckID/'+this.props.navigation.state.params.potluckID,{
      body: JSON.stringify(newPotluck),
      method: 'PUT',
      headers: {
      'content-type': 'application/json'
      },
    }
  ).then((response) => {
    console.log(response)
      if(response.ok){
        this.goBackToHome()
      }
    })

  }

  render(){
    let platform = Platform.OS;
    let platformSpecificStyle = {}
    return(
      <View style={styles.container}>
      <EditPotluckStep1 loggedInUser = {this.props.navigation.state.params.loggedInUser} potluck = {this.props.navigation.state.params.potluck} cancelUpdatePotluck = {this.cancelUpdatePotluck.bind(this)} updatePotluck = {this.submitPotluck.bind(this)} />
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
